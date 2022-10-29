// @ts-nocheck
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import Moment from "react-moment";

function Comment({ comment }) {
    return (
        <div className='w-[90%] flex p-3 cursor-pointer border-2 border-gray-200 items-center ml-auto my-2 mr-1 rounded-lg shadow-md'>
            {/*user image*/}
            <img src={comment?.userImg} alt="user image" className='h-11 w-11 rounded-full mr-4' referrerPolicy="no-referrer" />
            {/*right side */}
            <div className='flex-1'>
                {/*header*/}
                <div className='flex items-center justify-between'>
                    {/*post user info*/}
                    <div className='flex items-center space-x-1 whitespace-nowrap '>
                        <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>
                            {comment?.name}
                        </h4>
                        <span className='text-sm sm:text-[15px]'>@{comment?.username}</span>
                        <span className="text-sm sm:text-[15px] italic font-light">replayed at </span>
                        <span className='text-sm sm:text-[15px] hover:underline'>
                            <Moment fromNow>
                                {comment?.timestamp?.toDate()}
                            </Moment>
                        </span>
                    </div>
                    {/*dot icon*/}
                    <EllipsisHorizontalIcon className='h-10 w-10 p-2 hoverEffect hover:bg-sky-100 hover:text-sky-500' />
                </div>
                {/*post text*/}
                <p className='text-gray-800 text-[15px] sm:text-[16px] mb-2'>{comment?.comment}</p>

                {/*icons* */}

            </div>

        </div>
    );
}

export default Comment;