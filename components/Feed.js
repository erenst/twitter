import React from 'react';
import Input from './Input';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function Feed() {
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
        </div>
    );
}
