import React from 'react';
import logo from '../Assets/DR-removebg-preview.png'
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from 'react-icons/md';
import { AiTwotonePhone } from 'react-icons/ai';


const Footer = () => {
    return (
        <div className='py-5 bg-[#3a4190] px-20'>
            <div className='grid grid-cols-4 text-white py-20'>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <img className='rounded p-1 h-24 w-48 bg-gray-50' src={logo} alt="" />
                    <div className='w-3/4 flex gap-2 items-start'>
                        <HiLocationMarker className='text-4xl' />
                        <p>Bandhabari, Kaliakair, Gazipur 1750 Gazipur, Dhaka Division, Bangladesh</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MdEmail />
                        <h1>dhakadreamlandpark@gmail.com</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <AiTwotonePhone className='text-white' />
                        <h1>+8801762-554444</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start gap-5'>
                    <h1 className='text-2xl font-bold'>Explore</h1>
                    <h1>About Us</h1>
                    <h1>Eco Park</h1>
                    <h1>Events</h1>
                    <h1>Packages</h1>
                </div>
                <div className='flex flex-col justify-center items-start gap-5'>
                    <h1 className='text-2xl font-bold'>Resources</h1>
                    <h1>FAQ's</h1>
                    <h1>Terms & Conditions</h1>
                    <h1>Privacy Policy</h1>
                    <h1>Contact Us</h1>
                </div>
                <div className='flex flex-col justify-start items-start gap-5'>
                    <h1 className='text-2xl font-bold pt-5'>Don't Miss A Thing</h1>
                    <p className='w-3/4 pe-5'>Get update to special deals and exclusive offers. Sign up to our newsletter!</p>
                    <div className='relative pt-8'>
                        <input className='border rounded-full py-2 pe-20 ps-3' type="text" name="" id="" placeholder='Your Email Address' />
                        <div className='absolute top-9 right-1'>
                            <button className='rounded-full bg-[#3a4190] text-white text-sm font-bold px-3 py-2'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='px-20 py-2' />
            <h1 className='text-center text-white'>Copyright 2022 <span className='font-bold'>Dhaka Resort.</span> All rights reserved.</h1>
        </div>
    );
};

export default Footer;