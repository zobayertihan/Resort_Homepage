import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Reviews = () => {
    const slider1Class = 'testimonial';

    const testimonials = [
        {
            id: 1,
            quote:
                "I absolutely love the quality and style of the clothes at Luminous! Their pieces are unique and make me feel confident and fashionable.",
            author: "Emily Smith",
            title: "Fashion Blogger",
            image: "https://i.pravatar.cc/100?img=4",
        },
        {
            id: 2,
            quote:
                "I've been a loyal customer of Luxe for years now and they never disappoint! Their clothes are always on trend and the customer service is amazing.",
            author: "Sophia Chen",
            title: "Fashion Enthusiast",
            image: "https://i.pravatar.cc/100?img=5",
        },
        {
            id: 3,
            quote:
                "I can't get enough of the trendy pieces at this store! The quality is amazing and the staff is always so friendly and helpful.",
            author: "Maggie Brown",
            title: "Stylish Mom",
            image: "https://i.pravatar.cc/100?img=6",
        }
    ];

    return (
        <section className="max-w-6xl mx-auto">
            <div className="py-20">
                <Swiper
                    autoplay={{ delay: 2500, disableOnInteractio: false }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        360: {
                            slidesPerView: 1,

                        },
                        768: {
                            slidesPerView: 2,
                        },
                        // 991: {
                        //   slidesPerView: 2,
                        //   spaceBetween: -100,
                        // },
                    }}
                    className={`mySwiper ${slider1Class}`}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="mt-12 px-5 flex flex-col">
                                <div className="relative bg-white text-lg text-gray-600 leading-7 rounded-md shadow-lg p-12">
                                    <FaQuoteLeft className="absolute top-8 left-10 text-purple-500"></FaQuoteLeft>
                                    <p className="text-center">{testimonial.quote}</p>
                                    <FaQuoteRight className="absolute bottom-8 right-10 text-purple-500"></FaQuoteRight>

                                </div>
                                <div className="relative flex justify-center items-center max-w-md mx-auto p-10">
                                    <IoIosArrowDown className="absolute -top-5 w-16 h-16 text-purple-300"></IoIosArrowDown>
                                    <img
                                        className="w-12 h-12 rounded-full mr-4 border-double border-4 border-sky-700"
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                    />
                                    <div>
                                        <p className="text-gray-800 font-semibold mb-1">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-gray-600">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};


export default Reviews;