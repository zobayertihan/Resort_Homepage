import React from 'react';
import cottage from '../Assets/cot.jpg'
import fullview from '../Assets/fv.jpg'
import swiming from '../Assets/SP.jpg'
import zoo from '../Assets/zo.jpg'

const Resort = () => {
    return (
        <div>
            <h1 className='text-center text-2xl'>Why Choose Dhaka Resort?</h1>
            <p className='text-center'>Dhaka Resort is a Place Where Modern Amenities</p>
            <p className='text-center'>Maintain Strong Rapport With Nature</p>
            <div className='flex gap-5 p-5 items-center'>
                <div className='w-1/2 flex flex-wrap gap-5'>
                    <img className='h-56 w-56 rounded-lg' src={cottage} alt="" />
                    <img className=' h-64 w-64 rounded-lg' src={zoo} alt="" />
                    <img className='w-48 h-48 rounded-lg' src={swiming} alt="" />
                    <img className='h-72 w-72 rounded-lg' src={fullview} alt="" />
                </div>
                <div className='w-1/2'>
                    <p>We Offer Organic Foods Produced In Our Own Yard. We Also Feel Honored To Host Your Events Like Wedding, Anniversary, Birthday Party And Many More. For Our Corporate Clients We Are Ready To Shoulder The Responsibility Of Arranging AGM, Corporate Day Out, Corporate Picnic And So Many.</p>
                    <ul className='list-disc p-5'>
                        <li>Different Type of Cottages.</li>
                        <li>Family Picnic Zone.</li>
                        <li>Swiming Pool.</li>
                        <li>Shooting Zone.</li>
                        <li>Kids Play Ground.</li>
                        <li>Eco Park.</li>
                    </ul>
                    <button className='rounded-full bg-black text-white p-2'>DISCOVER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Resort;