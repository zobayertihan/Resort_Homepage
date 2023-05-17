import React from 'react';
import { RiArrowDropDownFill } from "react-icons/ri";
const Reserve = () => {
    return (
        <div className='bg-[#3a4190] py-5 h-[200px] flex flex-col items-center justify-center'>
            <h1 className='text-center text-white text-xl font-bold'>RESERVE YOUR STAY</h1>
            <div className='flex items-center justify-center gap-3 p-5'>
                <div className='relative flex'>
                    <input type="text" placeholder='Packages' className='p-1 border' />
                    <div className='absolute right-2 top-2'>
                        <RiArrowDropDownFill className='text-xl' />
                    </div>
                </div>
                <div className='relative flex'>
                    <input type="text" placeholder='Date' className='p-1 border' />
                    <div className='absolute right-2 top-2'>
                        <RiArrowDropDownFill className='text-xl' />
                    </div>
                </div>
                <div className='relative flex'>
                    <input type="text" placeholder='Guest' className='p-1 border' />
                    <div className='absolute right-2 top-2'>
                        <RiArrowDropDownFill className='text-xl' />
                    </div>
                </div>
                <button className='bg-white text-black px-4 py-2 text-sm'>BOOK NOW</button>
            </div>
        </div>
    );
};

export default Reserve;