// @ts-nocheck
import { ChartBarIcon,ChatBubbleOvalLeftEllipsisIcon,EllipsisHorizontalIcon,HeartIcon,ShareIcon,TrashIcon } from '@heroicons/react/24/outline';
import { HeartIcon as LikedHeartIcon } from "@heroicons/react/24/solid";
import { collection,deleteDoc,doc,onSnapshot,setDoc } from 'firebase/firestore';
import React,{ useEffect,useState } from 'react';
import Moment from 'react-moment';
import { db,storage } from '../firebase';
import { signIn,useSession } from 'next-auth/react';
import { deleteObject,ref } from 'firebase/storage';
import { useRecoilState } from 'recoil';
import { modalState,postIdState } from '../atom/modalAtom';
import { useRouter } from 'next/router';
export default function Post({ post,id }) {
    const { data: session } = useSession();
    const [ likes,setLikes ] = useState([]);
    const [ hasLiked,setHasLiked ] = useState(false);
    const [ open,setOpen ] = useRecoilState(modalState);
    const [ postId,setPostId ] = useRecoilState(postIdState);
    const [ comments,setComments ] = useState([]);
    const router = useRouter();
    useEffect(() => {
        const unsubsribe = onSnapshot(
            collection(db,"posts",id,"likes"),(snapeShot) => {
                setLikes(snapeShot.docs);
            }
        );
        return unsubsribe;
    },[ db ]);
    useEffect(() => {
        const unsubsribe = onSnapshot(
            collection(db,"posts",id,"comments"),(snapeShot) => {
                setComments(snapeShot.docs);
            }
        );
        return unsubsribe;
    },[ db ]);

    useEffect(() => {
        setHasLiked(likes.findIndex((like) => like.id === session?.user?.uid) !== -1);
    },[ likes ]);

    const likePost = async () => {
        if (session) {
            if (hasLiked) {
                await deleteDoc(doc(db,"posts",id,"likes",session?.user.uid));
            } else {
                await setDoc(doc(db,"posts",id,"likes",session.user.uid),{
                    username: session.user.username,
                });
            }
        } else {
            signIn();
        }
    };
    const deletePost = async () => {
        if (
            window.confirm("Are you sure to delete this post?")
        ) {
            await deleteDoc(doc(db,"posts",post.id));
            if (post.data().image) {
                await deleteObject(ref(storage,`posts/${post.id}/image`));
            }
            router.push("/");
        }
    };
    return (
        <div className='flex p-3 cursor-pointer border-b border-gray-200'>
            {/*user image*/}
            <img src={post?.data()?.userImg} alt="user image" className='h-11 w-11 rounded-full mr-4' referrerPolicy="no-referrer" />
            {/*right side */}
            <div className='flex-1'>
                {/*header*/}
                <div className='flex items-center justify-between'>
                    {/*post user info*/}
                    <div className='flex items-center space-x-1 whitespace-nowrap '>
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
                    {/*dot icon*/}
                    <EllipsisHorizontalIcon className='h-10 w-10 p-2 hoverEffect hover:bg-sky-100 hover:text-sky-500' />
                </div>
                {/*post text*/}
                <p className='text-gray-800 text-[15px] sm:text-[16px] mb-2'>{post?.data()?.text}</p>
                {/*post image*/}
                {
                    post?.data()?.image &&
                    (<img className='rounded-2xl mr-2 w-full object-contain' src={post?.data()?.image} alt="post image" />)
                }
                {/*icons* */}
                <div className='flex justify-between items-center text-gray-500 p-2 mt-2'>
                    <div className='flex items-center justify-center'>
                        <ChatBubbleOvalLeftEllipsisIcon onClick={() => {
                            if (!session) {
                                signIn();
                            } else {
                                setPostId(post.id);
                                setOpen(!open);
                            }
                        }}
                            className='h-9 w-9 hoverEffect hover:bg-sky-100 hover:text-sky-500 p-2 mr-1' />
                        {
                            comments.length > 0 && (
                                <span className="text-sm select-none cursor-none">{comments.length}</span>
                            )
                        }
                    </div>
                    {
                        session?.user.uid === post?.data()?.id &&
                        (<TrashIcon onClick={deletePost}
                            className='h-9 w-9 hoverEffect hover:bg-red-100 hover:text-red-600 p-2' />)
                    }

                    <div className='flex justify-center items-center'>
                        {
                            hasLiked ? (
                                <LikedHeartIcon onClick={likePost} className='h-9 w-9 hoverEffect text-red-300 hover:bg-red-100 hover:text-red-600 p-2 mr-1' />
                            ) :
                                (
                                    <HeartIcon onClick={likePost} className='h-9 w-9 hoverEffect hover:bg-red-100 hover:text-red-600 p-2 mr-1' />
                                )
                        }
                        {
                            likes.length > 0 && (
                                <span className={`${hasLiked && "text-red-300"} text-sm select-none`}>{likes.length}</span>
                            )
                        }
                    </div>
                    <ShareIcon className='h-9 w-9 hoverEffect hover:bg-sky-100 hover:text-sky-500 p-2' />
                    <ChartBarIcon className='h-9 w-9 hoverEffect hover:bg-sky-100 hover:text-sky-500 p-2' />
                </div>
            </div>
        </div>
    );
}
