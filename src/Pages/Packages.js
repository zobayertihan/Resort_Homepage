import React from 'react';
import cottage from '../Assets/cot.jpg'
import swiming from '../Assets/SP.jpg'

const Packages = () => {
    return (
        <div className='bg-image py-5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-white text-2xl'>FIND OUR POPULAR PACKAGES</h1>
                <div className='flex gap-10'>
                    <h1 className='text-white text-2xl'>{"<-"}</h1>
                    <h1 className='text-white text-2xl'>{"->"}</h1>
                </div>
            </div>
            <div className='flex gap-5 justify-center'>
                <div className='h-60 w-64 border-2'>
                    <img src={swiming} alt="" />
                    <p className='text-center'>SWIMING PACKAGE</p>
                </div>
                <div className='h-60 w-64 border-2'>
                    <img src={cottage} alt="" />
                    <p className='text-center'>VILLA PACKAGE: DELUXE ROOM</p>
                </div>
                <div className='h-60 w-64 border-2'>
                    <img src={cottage} alt="" />
                    <p className='text-center'>VILLA PACKAGE: DELUXE ROOM</p>
                </div>
            </div>
            <div className='flex items-center justify-center p-5'>
                <button className='rounded-full bg-white text-black px-2'>VIEW ALL PACKAGES</button>
            </div>
        </div>
    );
};

export default Packages;