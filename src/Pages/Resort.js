import React from 'react';
import cottage from '../Assets/cot.jpg'
import fullview from '../Assets/fv.jpg'
import swiming from '../Assets/SP.jpg'
import zoo from '../Assets/zo.jpg'
import { BsCheckCircleFill } from "react-icons/bs"

const Resort = () => {
    return (
        <div className='py-10 px-20'>
            <h1 className='text-center text-4xl text-[#3a4190] font-bold pb-10'>Why Choose Dhaka Resort?</h1>
            <div className='pb-10'>
                <p className='text-center'>Dhaka Resort is a Place Where Modern Amenities</p>
                <p className='text-center'>Maintain Strong Rapport With Nature</p>
            </div>
            <div className='flex gap-10 p-5 items-center'>
                <div className='w-1/2 flex gap-5 justify-end'>
                    <div className='flex flex-col gap-10'>
                        <img className='h-48 w-48 rounded-lg' src={cottage} alt="" />
                        <img className='w-56 h-56 rounded-lg' src={swiming} alt="" />
                    </div>
                    <div className='flex flex-col gap-10'>
                        <img className=' h-72 w-72 rounded-lg' src={zoo} alt="" />
                        <img className='h-56 w-56 rounded-lg' src={fullview} alt="" />
                    </div>
                </div>
                <div className='w-1/2 flex flex-col justify-start'>
                    <p className='w-96'>We Offer Organic Foods Produced In Our Own Yard. We Also Feel Honored To Host Your Events Like Wedding, Anniversary, Birthday Party And Many More. For Our Corporate Clients We Are Ready To Shoulder The Responsibility Of Arranging AGM, Corporate Day Out, Corporate Picnic And So Many.</p>
                    <ul className='p-5'>
                        <div className='flex gap-2 items-center'>
                            <BsCheckCircleFill className='text-[#3a4190]' />
                            <li>Different Type of Cottages.</li>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <BsCheckCircleFill className='text-[#3a4190]' />
                            <li>Family Picnic Zone.</li>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <BsCheckCircleFill className='text-[#3a4190]' />
                            <li>Swiming Pool.</li>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <BsCheckCircleFill className='text-[#3a4190]' />
                            <li>Shooting Zone.</li>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <BsCheckCircleFill className='text-[#3a4190]' />
                            <li>Kids Play Ground.</li>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <BsCheckCircleFill className='text-[#3a4190]' />
                            <li>Eco Park.</li>
                        </div>
                    </ul>
                    <div className='ps-5'>
                        <button className='rounded-full bg-[#3a4190] text-white py-4 px-8'>DISCOVER NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resort;