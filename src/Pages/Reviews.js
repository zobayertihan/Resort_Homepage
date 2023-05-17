import React from 'react';
import { RiSingleQuotesL, RiSingleQuotesR } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const Reviews = () => {
    const slider1Class = 'testimonial';

    const testimonials = [
        {
            id: 1,
            quote:
                "The Tours In This Website Are Great. I Had Been Really Enjoy With My Family! The Team Is  Very Professional And Taking Care Of The Customers. Will Surely Recommend To My Friend To Join This Company!",
            author: "Emily Smith",
            title: "CEO of LLC",
            image: "https://i.pravatar.cc/100?img=4",
        },
        {
            id: 2,
            quote:
                "The Tours In This Website Are Great. I Had Been Really Enjoy With My Family! The Team Is  Very Professional And Taking Care Of The Customers. Will Surely Recommend To My Friend To Join This Company!",
            author: "Sophia Chen",
            title: "Manager at RedCart",
            image: "https://i.pravatar.cc/100?img=5",
        },
        {
            id: 3,
            quote:
                "The Tours In This Website Are Great. I Had Been Really Enjoy With My Family! The Team Is  Very Professional And Taking Care Of The Customers. Will Surely Recommend To My Friend To Join This Company!",
            author: "Maggie Brown",
            title: "CEO of React",
            image: "https://i.pravatar.cc/100?img=6",
        },
        {
            id: 2,
            quote:
                "The Tours In This Website Are Great. I Had Been Really Enjoy With My Family! The Team Is  Very Professional And Taking Care Of The Customers. Will Surely Recommend To My Friend To Join This Company!",
            author: "Sophia Chen",
            title: "Manager at RedCart",
            image: "https://i.pravatar.cc/100?img=5",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto">
            <div className="py-20">
                <Swiper
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    slidesPerView={2}
                    centeredSlides={true}
                    spaceBetween={0}
                    navigation={true}
                    loop={true}
                    className={`mySwiper ${slider1Class}`}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="px-5 flex flex-col w-3/4 mx-auto justify-center items-center">
                                <div className="relative bg-white text-lg text-gray-600 leading-7 rounded-md shadow-lg p-12">
                                    <RiSingleQuotesL className="absolute top-0 -left-5 text-gray-600 text-8xl"></RiSingleQuotesL>
                                    <p className="text-center">{testimonial.quote}</p>
                                    <RiSingleQuotesR className="absolute bottom-0 right-0 text-gray-600 text-8xl"></RiSingleQuotesR>
                                </div>
                                <div className="relative flex justify-center items-center max-w-md mx-auto p-10">
                                    <img
                                        className="w-12 h-12 rounded-full mr-4 bordr absolute -top-4 -left-40"
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                    />
                                    <div className='relative'>
                                        <p className="text-[#3a4190] mb-1 absolute -top-10 -left-36 text-xl font-bold w-[200px]">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-gray-600 absolute -top-4 -left-36 w-[200px]">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    );
};


export default Reviews;