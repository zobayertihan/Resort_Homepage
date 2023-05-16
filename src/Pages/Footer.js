import React from 'react';

const Footer = () => {
    return (
        <div className='py-5'>
            <div className='flex gap-5'>
                <div>
                    <h1>LOGO</h1>
                    <h1>Address</h1>
                    <h1>Phone</h1>
                    <h1>Email</h1>
                </div>
                <div>
                    <h1>Explore</h1>
                    <h1>About Us</h1>
                    <h1>Eco Park</h1>
                    <h1>Events</h1>
                    <h1>Packages</h1>
                </div>
                <div>
                    <h1>Resources</h1>
                    <h1>FAQ's</h1>
                    <h1>Terms & Conditions</h1>
                    <h1>Privacy Policy</h1>
                    <h1>Contact Us</h1>
                </div>
                <div>
                    <h1>Don't Miss A Thing</h1>
                    <p>Get update to special deals and exclusive offers. Sign up to our newsletter!</p>
                    <div>
                        <input className='border rounded-lg' type="text" name="" id="" placeholder='Your Email Address' />
                        <button className='rounded-full bg-black text-white px-2'>Subscribe</button>
                    </div>
                </div>
            </div>
            <h1 className='text-center'>Copyright 2022 <span className='font-bold'>Dhaka Resort.</span> All rights reserved.</h1>
        </div>
    );
};

export default Footer;