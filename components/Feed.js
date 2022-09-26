import React from 'react';
import Input from './Input';
import { SparklesIcon } from '@heroicons/react/24/outline';
import Post from './Post';

export default function Feed() {
    const posts = [ {
        id: "1",
        name: "Erenst Lin",
        username: "erenst",
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSmojUgwjIB87c4Q0hLCAyl__oiTySWGWJUZtUNHlHjBALLzTsu_vMHYMaEwLts4QEoo&usqp=CAU",
        img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text: "nice view",
        timestamp: "2 hrs ago"
    },{
        id: "2",
        name: "Erenst Lin",
        username: "erenst",
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSmojUgwjIB87c4Q0hLCAyl__oiTySWGWJUZtUNHlHjBALLzTsu_vMHYMaEwLts4QEoo&usqp=CAU",
        img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
        text: "nice flower",
        timestamp: "1 day ago"
    },
    {
        id: "3",
        name: "Erenst Lin",
        username: "erenst",
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSmojUgwjIB87c4Q0hLCAyl__oiTySWGWJUZtUNHlHjBALLzTsu_vMHYMaEwLts4QEoo&usqp=CAU",
        img: "https://images.unsplash.com/photo-1545060789-8ed7e4744680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text: "nice girl",
        timestamp: "2 day ago"
    } ];
    return (
        <div className='xl:ml-[370px] border-l border-r xl:min-w-[576px] border-gray-200
            sm:ml-[73px] flex-grow max-w-xl'>
            <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 items-center'>
                <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
                <div className='hoverEffect flex items-center justify-center ml-auto px-0 w-9 h-9'>
                    <SparklesIcon className='h-5' />
                </div>
            </div>
            <Input />

            {
                posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))
            }
        </div>
    );
}
