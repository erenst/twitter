// @ts-nocheck
import { useRecoilState } from "recoil";
import { modalState,postIdState } from "../atom/modalAtom";
import { FaceSmileIcon,PhotoIcon,XCircleIcon } from '@heroicons/react/24/outline';
import Modal from "react-modal";
import { useEffect,useState } from "react";
import { db } from "../firebase";
import { addDoc,collection,doc,onSnapshot,serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Moment from 'react-moment';
import { useRouter } from "next/router";
const CommentModal = () => {
    const [ open,setOpen ] = useRecoilState(modalState);
    const [ postId ] = useRecoilState(postIdState);
    const [ post,setPost ] = useState(null);
    const { data: session } = useSession();
    const [ input,setInput ] = useState("");
    const router = useRouter();
    useEffect(() => {
        onSnapshot(doc(db,"posts",postId),(snapshot) => {
            setPost(snapshot);
        });
    },[ postId,db ]);
    const sendComment = async () => {
        await addDoc(collection(db,"posts",postId,"comments"),{
            comment: input,
            name: session.user.name,
            username: session.user.username,
            userImg: session.user.image,
            timestamp: serverTimestamp()
        });
        setInput("");
        setOpen(false);
        // router.push(`posts/${postId}`);
    };

    return (
        <div>
            {open && (
                <Modal isOpen={open} onRequestClose={() => setOpen(false)}
                    className="border-2 border-gray-300 max-w-lg w-[90%]  absolute top-24 left-[50%] translate-x-[-50%]
                         bg-white  rounded-xl shadow-md ">
                    <div className="p-1">
                        <div className="border-b-2 border-gray-300">
                            <div className="hoverEffect flex items-center justify-center w-9 h-9 p-0">
                                <XCircleIcon className="text-gray-700 h-[26px]" onClick={() => setOpen(false)} />
                            </div>
                        </div>
                        <div className="p-2 flex items-center space-x-1 relative">
                            <span className="w-[2px] h-full -z-10 absolute left-8 top-11 bg-gray-300" />
                            <img src={post?.data()?.userImg} alt="user image" className='h-11 w-11 rounded-full mr-4' referrerPolicy="no-referrer" />
                            <div>
                                <div className="flex items-center justify-center p-4">
                                    <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>
                                        {post?.data()?.name}
                                    </h4>
                                    <span className='text-sm sm:text-[15px]'>@{post?.data()?.username} - </span>
                                    <span className='text-sm sm:text-[15px] hover:underline'>
                                        <Moment fromNow>
                                            {post?.data()?.timestamp?.toDate()}
                                        </Moment>
                                    </span>
                                </div>
                                <span className="text-gray-500 text-left text-sm ml-4">
                                    {post?.data()?.text}
                                </span>
                            </div>
                        </div>
                        {session && (
                            <div className='flex  border-gray-200 p-3 space-x-3 mt-4'>
                                <img src={session?.user?.image}
                                    alt="user image"
                                    className='h-11 w-11 rounded-full cursor-pointer hover:brightness-90' />
                                <div className='w-full '>
                                    <div className="flex items-center jc border-b-2 border-gray-300 w-[90%]">
                                        <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 
                                            tracking-wide min-h-[50px] text-gray-700 placeholder:italic placeholder:text-slate-500
                                            placeholder:text-sm "
                                            value={input} onChange={e => setInput(e.target.value)}
                                            rows="3" placeholder='What do you want to say?'></textarea>
                                    </div>


                                    <div className="flex items-center justify-between pt-4 mr-8">
                                        <div className='flex'>
                                            <div>
                                                <PhotoIcon className='h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' />

                                            </div>
                                            <FaceSmileIcon className='h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' />
                                        </div>
                                        <button className='bg-blue-400 text-white px-4 py-2.5 
                                                        rounded-full font-bold shadow-md hover:brightness-90 disabled:opacity-50'
                                            disabled={!input.trim()}
                                            onClick={sendComment}
                                        >Reply</button>
                                    </div>


                                </div>
                            </div>)
                        }
                    </div>
                </Modal>

            )}
        </div>
    );
};

export default CommentModal;
