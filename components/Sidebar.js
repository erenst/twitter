// @ts-nocheck
import Image from 'next/image';
import React from 'react';
import SidebarMenuItem from './SidebarMenuItem';
import { BellIcon,BookmarkIcon,ClipboardIcon,EllipsisHorizontalCircleIcon,HashtagIcon,InboxIcon,UserIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
export default function Sidebar() {
    return (
        <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full'>
            {/* Twitter Logo*/}
            <div className='hoverEffect flex items-center justify-center hover:bg-blue-100'>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png"
                    width="32" height="32"
                ></Image>
            </div>
            {/* Menu*/}
            <div className='mt-4 mb-2.5 xl:items-start'>
                <SidebarMenuItem text="Home" Icon={HomeIcon} active={true} />
                <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
                <SidebarMenuItem text="Notifications" Icon={BellIcon} />
                <SidebarMenuItem text="Messages" Icon={InboxIcon} />
                <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
                <SidebarMenuItem text="Profile" Icon={UserIcon} />
                <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
            </div>

            {/*Button*/}
            <button
                className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold mt-2
                    shadow-md outline-none hover:brightness-90 text-lg hidden xl:inline'>
                Tweet
            </button>

            {/*Mini-Profile*/}
            <div className='hoverEffect text-gray-700 flex items-center justify-start xl:justify-start mt-auto w-56'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSmojUgwjIB87c4Q0hLCAyl__oiTySWGWJUZtUNHlHjBALLzTsu_vMHYMaEwLts4QEoo&usqp=CAU"
                    alt="user image" className='w-12 h-12 rounded-full xl:mr-2' />
                <div className='leading-5 hidden xl:inline'>
                    <h4 className='font-bold'>Erenst Lin</h4>
                    <p className='text-gray-500'>@Erenst</p>
                </div>
                <EllipsisHorizontalIcon className='h-5 xl:ml-8 hidden xl:inline' />
            </div>
        </div>
    );
}
