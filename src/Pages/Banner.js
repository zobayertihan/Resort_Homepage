import React from 'react';
import '../styles.css';
import logo from '../Assets/DR-removebg-preview.png'


const Banner = () => {
    return (
        <div className='h-screen'>
            <div className='bg-image relative img-rgblayer'>
                <div className='absolute bottom-1/4 right-1/3'>
                    <button className='rounded-full bg-white text-[#2a3289] text-sm font-bold px-7 py-5 border-2 border-blue-800'>VIEW ALL PACKAGES</button>
                </div>
                <div className='absolute bottom-1/4 right-24'>
                    <img className='rounded-full p-1 h-24 w-24 bg-white' src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;