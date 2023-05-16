import React from 'react';


const Header = () => {
    return (
        <div className='bg-black text-white'>
            <div className='flex justify-between px-5 py-2'>
                <div className='flex gap-2'>
                    <h1>Cell</h1>
                    <h1>Email</h1>
                </div>
                <div className='flex gap-2'>
                    <h1>Facebook</h1>
                    <h1>Instagram</h1>
                    <h1>LinkedIn</h1>
                    <h1>Twitter</h1>
                    <button className='rounded-full bg-white text-black px-2'>Login</button>
                    <button className='rounded-full bg-white text-black px-2'>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Header;