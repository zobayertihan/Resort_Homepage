import React from 'react';
import logo from '../Assets/DR-removebg-preview.png'
const Navbar = () => {
    return (
        <div className='bg-[#2a3289] text-white'>
            <div className='flex justify-around items-center px-20 py-2'>
                <img className='rounded-full p-1 h-24 w-24 bg-white' src={logo} alt="" />
                <a className='text-red-600 font-bold' href='/'>HOME</a>
                <a className='font-bold' href='/'>ABOUT US</a>
                <a className='font-bold' href='/'>PACKAGES</a>
                <a className='font-bold' href='/'>ECO PARK</a>
                <a className='font-bold' href='/'>COTTAGE</a>
                <a className='font-bold' href='/'>OUR RESORT</a>
                <a className='font-bold' href='/'>EVENTS</a>
                <a className='font-bold' href='/'>CONTACT</a>
            </div>
        </div>
    );
};

export default Navbar;