import { ChartBarIcon,ChatBubbleOvalLeftEllipsisIcon,EllipsisHorizontalIcon,HeartIcon,ShareIcon,TrashIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function Post({ post }) {
    return (
        <div className='flex p-3 cursor-pointer border-b border-gray-200'>
            {/*user image*/}
            <img src={post.userImg} alt="user image" className='h-11 w-11 rounded-full mr-4' />
            {/*right side */}
            <div className=''>
                {/*header*/}
                <div className='flex items-center justify-between'>
                    {/*post user info*/}
                    <div className='flex items-center space-x-1 whitespace-nowrap '>
                        <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>
                            {post.name}
                        </h4>
                        <span className='text-sm sm:text-[15px]'>@{post.username} - </span>
                        <span className='text-sm sm:text-[15px] hover:underline'>{post.timestamp}</span>
                    </div>
                    {/*dot icon*/}
                    <EllipsisHorizontalIcon className='h-10 w-10 p-2 hoverEffect hover:bg-sky-100 hover:text-sky-500' />
                </div>
                {/*post text*/}
                <p className='text-gray-800 text-[15px] sm:text-[16px] mb-2'>{post.text}</p>
                {/*post image*/}
                <img className='rounded-2xl mr-2 w-full object-contain' src={post.img} alt="post image" />
                {/*icons* */}
                <div className='flex justify-between items-center text-gray-500 p-2 mt-2'>
                    <ChatBubbleOvalLeftEllipsisIcon className='h-9 w-9 hoverEffect hover:bg-sky-100 hover:text-sky-500 p-2' />
                    <TrashIcon className='h-9 w-9 hoverEffect hover:bg-red-100 hover:text-red-600 p-2' />
                    <HeartIcon className='h-9 w-9 hoverEffect hover:bg-red-100 hover:text-red-600 p-2' />
                    <ShareIcon className='h-9 w-9 hoverEffect hover:bg-sky-100 hover:text-sky-500 p-2' />
                    <ChartBarIcon className='h-9 w-9 hoverEffect hover:bg-sky-100 hover:text-sky-500 p-2' />
                </div>
            </div>
        </div>
    );
}
