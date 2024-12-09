import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import cert1 from '../../assets/cert1.png'

const Certificates = () => {
    const certificates = [
        cert1,
        "https://via.placeholder.com/600x400.png?text=Certificate+2",
        "https://via.placeholder.com/600x400.png?text=Certificate+3",
        "https://via.placeholder.com/600x400.png?text=Certificate+4",
    ];

    return (
        <div
            className="relative py-16 bg-cover bg-center text-white"
            style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/dark-grunge-background-texture_1409-1437.jpg')`,
            }} id="certificates"
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-24">
                <h2 className="text-3xl font-bold mb-8 text-center">My Certificates</h2>

                {/* Swiper Slider */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="w-full"
                >
                    {certificates.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center">
                                <img
                                    src={src}
                                    alt={`Certificate ${index + 1}`}
                                    className="rounded-lg shadow-lg object-contain w-full max-w-md sm:max-w-lg lg:max-w-xl"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <style>
                {`
                .swiper-button-next,
                .swiper-button-prev {
                    color: #FF014F !important; /* Custom color */
                }

                .swiper-pagination-bullet {
                    background-color: #FF014F !important; /* Pagination dot color */
                }

                .swiper-pagination-bullet-active {
                    background-color: #FF014F !important; /* Active pagination dot */
                }
                `}
            </style>
            </div>
        </div>
    );
};

export default Certificates;
