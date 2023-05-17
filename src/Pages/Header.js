import React from 'react';
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter, AiTwotonePhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaFacebook, FaUserAlt } from "react-icons/fa";
import { CiLock } from "react-icons/ci";


const Header = () => {
    return (
        <div className='bg-[#3a4190] text-white border-b-2 border-black'>
            <div className='flex justify-between px-20 py-2'>
                <div className='flex gap-5'>
                    <div className='flex items-center gap-2'>
                        <AiTwotonePhone className='text-white' />
                        <h1>+8801762554444</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FiMail />
                        <h1>dhakadreamlandpark@gmail.com</h1>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <FaFacebook className='text-lg' />
                    <AiOutlineInstagram className='text-lg' />
                    <AiFillLinkedin className='text-lg' />
                    <AiOutlineTwitter className='text-lg' />
                    <div className='flex gap-3 items-center'>
                        <button className='rounded-full bg-white text-[#3a4190] font-bold flex justify-center items-center gap-2 px-3 py-1'> <CiLock className='text-sm' /><span>  Login</span></button>
                        <button className='rounded-full bg-[#2a3289] text-white font-bold flex justify-center items-center gap-2 px-3 py-1'><FaUserAlt className='text-sm' /><span>  Sign Up</span></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;