import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-black text-white'>
            <div className='flex justify-around p-5'>
                <a href='/'>LoGO</a>
                <a href='/'>HOME</a>
                <a href='/'>ABOUT US</a>
                <a href='/'>PACKAGES</a>
                <a href='/'>ECO PARK</a>
                <a href='/'>COTTAGE</a>
                <a href='/'>OUR RESORT</a>
                <a href='/'>EVENTS</a>
                <a href='/'>CONTACT</a>
            </div>
        </div>
    );
};

export default Navbar;