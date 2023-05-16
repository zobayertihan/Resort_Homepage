import React from 'react';
import '../styles.css'

const Banner = () => {
    return (
        <div className='h-screen'>
            <div className='bg-image'>
                <div className='flex justify-center items-center'>
                    <button className='rounded-full bg-white text-black px-2'>VIEW ALL PACKAGES</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;