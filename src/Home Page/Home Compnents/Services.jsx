
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, // Duration of the animation
          once: false,
          offset: 100,
          delay : 100
        });
      }, []);
      
    return (
        <div className='bg-black py-16 text-white ' id='services'>
            <div className='pl-3 sm:pl-20 lg:pl-24 pb-5'>
                <p className='text-xl font-semibold pb-2'><span><i class='bx bx-label text-[#FF014F] '></i></span> My Services</p>
                <p className='font-semibold'>What Can I Do</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 px-4 sm:px-20 lg:px-24 gap-5'>
                <div className='bg-zinc-800 py-10 px-12 flex justify-center flex-col items-center' data-aos="fade-up">
                    <span><i class='bx bxs-pencil text-[#FF014F] text-4xl'></i></span>
                    <p className='font-semibold'>Creative Design</p>
              
                </div>
                <div className='bg-zinc-800 py-10 px-12 flex justify-center flex-col items-center' data-aos="fade-down">
                    <span><i class='bx bxs-flag-alt  text-[#FF014F] text-4xl'></i></span>
                    <p className='font-semibold'>Branding</p>
               
                </div>
                <div className='bg-zinc-800 py-10 px-12 flex justify-center flex-col items-center'data-aos="fade-up">
                    <span><i class='bx bx-laptop  text-[#FF014F] text-4xl'></i></span>
                    <p className='font-semibold'>User Interface</p>
                  
                </div>
                <div className='bg-zinc-800 py-10 px-12 flex justify-center flex-col items-center' data-aos="fade-up">
                    <span><i class='bx bxs-briefcase  text-[#FF014F] text-4xl'></i></span>
                    <p className='font-semibold'>User Experience</p>
                
                </div>
                <div className='bg-zinc-800 py-10 px-12 flex justify-center flex-col items-center' data-aos="fade-down">
                    <span><i class='bx bx-code-alt  text-[#FF014F] text-4xl'></i></span>
                    <p className='font-semibold'>Clean Code</p>
                 
                </div>
                <div className='bg-zinc-800 py-10 px-12 flex justify-center flex-col items-center' data-aos="fade-up">
                    <span><i class='bx bx-support  text-[#FF014F] text-4xl'></i></span>
                    <p className='font-semibold'>Fast Support</p>
                 
                </div>
            </div>
        </div>
    )
}

export default Services
