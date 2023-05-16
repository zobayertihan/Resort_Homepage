import React from 'react';

const Reserve = () => {
    return (
        <div className='bg-black py-5'>
            <h1 className='text-center text-white'>RESERVE YOUR STAY</h1>
            <div className='flex items-center justify-center gap-3'>
                <input type="text" placeholder='Packages' className='border-2' />
                <input type="text" placeholder='Date' className='border' />
                <input type="text" placeholder='Guest' className='border' />
                <button className='bg-white text-black px-2'>BOOK NOW</button>
            </div>
        </div>
    );
};

export default Reserve;