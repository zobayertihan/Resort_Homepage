import React from 'react';
import cottage from '../Assets/cot.jpg'
import swiming from '../Assets/SP.jpg'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Packages = () => {
    return (
        <div className='bg-image2 py-5'>
            <div className='flex flex-col' >
                <div className='flex justify-center items-center p-10 gap-96'>
                    <h1 className='text-[#3a4190] text-2xl font-bold'>FIND OUR POPULAR PACKAGES</h1>
                    <div className='flex gap-10'>
                        <button><AiOutlineArrowLeft className='text-black text-xl' /></button>
                        <button><AiOutlineArrowRight className='text-black text-xl' /></button>
                    </div>
                </div>
                <div className='flex gap-5 justify-center'>
                    <div className='h-60 w-64 border-2 bg-white'>
                        <img src={swiming} alt="" />
                        <p className='text-center font-bold mt-3 text-sm'>SWIMING PACKAGE</p>
                    </div>
                    <div className='h-60 w-64 border-2 bg-white'>
                        <img src={cottage} alt="" />
                        <p className='text-center font-bold mt-3 text-sm'>VILLA PACKAGE: DELUXE ROOM</p>
                    </div>
                    <div className='h-60 w-64 border-2 bg-white'>
                        <img src={cottage} alt="" />
                        <p className='text-center font-bold text-sm mt-3'>VILLA PACKAGE: DELUXE ROOM</p>
                    </div>
                </div>
                <div className='flex items-center justify-center p-20'>
                    <button className='rounded-full bg-[#3a4190] text-white px-8 py-5 text-sm font-bold'>VIEW ALL PACKAGES</button>
                </div>
            </div>
        </div>
    );
};

export default Packages;