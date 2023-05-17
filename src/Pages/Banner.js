import React from 'react';
import '../styles.css';
import logo from '../Assets/DR-removebg-preview.png'


const Banner = () => {
    return (
        <div className='h-screen'>
            <div className='bg-image img-rgblayer'>
                <div className='absolute top-[480px] left-[1450px] transform -translate-x-1/2 -translate-y-1/2'>
                    <button className='rounded-full bg-white text-[#2a3289] text-sm font-bold px-10 py-5 border-2 border-blue-800 '>VIEW ALL PACKAGES</button>
                </div>
                <div className='absolute top-[350px] right-[-565px] transform translate-x-1/2 translate-y-1/2'>
                    <img className='rounded-full p-1 h-24 w-24 bg-white' src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;