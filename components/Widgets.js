// @ts-nocheck
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React,{ useState } from 'react';
import News from './News';

export default function Widgets({ news,users }) {
    const [ articleNum,setArticleNum ] = useState(3);
    const [ randomUserNum,setRandomUserNum ] = useState(3);
    return (
        <div className='xl:w-[600px]  hidden lg:inline ml-8 space-y-5'>
            <div className='w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5'>
                <div className='flex items-center p-3 rounded-full relative'>
                    <MagnifyingGlassIcon className='h-5 w-5 z-50 text-gray-500' />
                    <input type="text" placeholder='Search Twitter'
                        className='absolute inset-0 rounded-full pl-11 border-gray-500
                             text-gray-700  bg-gray-100  focus:shadow-lg focus:bg-white' />
                </div>
            </div>

            <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]'>
                <h4 className='font-bold text-xl px-4 mb-2'>What is happening</h4>
                {
                    news.slice(0,articleNum).map((article,index) => (
                        <News key={index} article={article} />
                    ))
                }
                <button className='text-blue-400 pl-4 pb-3 hover:text-blue-500'
                    onClick={() => setArticleNum(articleNum + 3)}
                >Show More</button>
            </div>

            <div className='sticky top-16 text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]'>
                <h4 className='font-bold text-xl px-4 mb-2'>Who to follow</h4>
                {
                    users?.slice(0,randomUserNum).map((user) => (
                        <div
                            key={user.login.username}
                            className="flex items-center px-4 py-2  cursor-pointer hover:bg-gray-200 transition duration-500 ease-out"
                        >
                            <img
                                className="rounded-full"
                                width="40"
                                src={user.picture.thumbnail}
                                alt=""
                            />
                            <div className="truncate ml-4 leading-5">
                                <h4 className="font-bold hover:underline text-[14px] truncate">
                                    {user.login.username}
                                </h4>
                                <h5 className="text-[13px] text-gray-500 truncate">
                                    {user.name.first + " " + user.name.last}
                                </h5>
                            </div>
                            <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
                                Follow
                            </button>
                        </div>))
                }

                <button className='text-blue-400 pl-4 pb-3 hover:text-blue-500'
                    onClick={() => setRandomUserNum(articleNum + 3)}
                >Show More</button>
            </div>

        </div>);
};
