import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';


const HeroPG = () => {

    useEffect(() => {
        AOS.init({
          duration: 2000, // Duration of the animation
          once: false,
          offset: 100,
          delay : 300
        });
      }, []);
      


    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                " I am Full Stack Developer.",
                " I am Creative Problem Solver.",
                "I am an Innovator.",
                "I am a Tech Enthusiast.",
                'I am an Instrumentalist',
                'Start Up Founder'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        };

        const typed = new Typed(typedRef.current, options);

        // Clean up on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='min-h-screen bg-black text-white'>
            <div className='flex flex-col-reverse sm:flex-col lg:flex-row justify-around items-center min-h-screen relative px-3'>
                <div id='left'  data-aos="fade-right">
                    <p className='pb-1'>SOFTWARE DEVELOPER</p>
                    <h1 className='text-5xl sm:text-8xl font-semibold'>
                        I am <span className='txt'>Favour</span>
                    </h1>
                    <h1 className=' font-semibold pb-5'>
                        <span className='txt text-5xl sm:text-8xl'> Adebayo!</span>
                    </h1>
                    <span ref={typedRef} className="inline text-xl "></span> {/* Add the typing effect here */}

                    <div className='flex flex-col sm:flex-row justify-start sm:items-center gap-5 pt-5'>
                        <button className='bg-[#FF014F] py-2 px-3 rounded-md flex justify-center items-center gap-2'>
                            <span><i class='bx bxs-download'></i></span>
                            <p>Dowload Resume</p>
                        </button>
                        <button className='border border-[#FF014F] py-2 px-3 rounded-md flex justify-center items-center gap-2 hover:bg-[#FF014F] duration-300 ease-in-out'>
                            <span><i class='bx bxs-contact'></i></span>
                            <p>Contact Me</p>
                        </button>
                    </div>


                    <div>
                        <div className='flex items-center justify-center sm:justify-start gap-2 py-4 sm:py-3'>
                            <span>
                                <a href=""><i class='bx bxl-linkedin-square text-white sm:text-[#FF014F] text-3xl'></i></a>
                            </span>
                            <span>
                                <a href=""><i class='bx bxl-whatsapp-square text-white sm:text-[#FF014F] text-3xl'></i></a>
                            </span>
                            <span>
                                <a href=""><i class='bx bxl-instagram-alt text-white sm:text-[#FF014F] text-3xl'></i></a>
                            </span>
                            <span>
                                <a href=""><i class='bx bxl-twitter text-white sm:text-[#FF014F] text-3xl'></i></a>
                            </span>
                        </div>
                    </div>
                </div>


                <div id='right'  data-aos="fade-left">
                    dknclksvlihe9igh9idgfi9s
                </div>
            </div>
        </div>
    );
};

export default HeroPG;
