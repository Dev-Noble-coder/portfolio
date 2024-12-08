
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import abtimg from '../../assets/abtimg.jpg'

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation
      once: false,
      offset: 100,
      delay : 300
    });
  }, []);
  


  return (
    <div className='flex flex-col-reverse lg:flex-row justify-center items-center bg-zinc-950 text-white py-16 gap-16 px-3'>
    <div className="w-full min-w-[300px] sm:max-w-[500px] border rounded-2xl" data-aos="fade-up">
  <img
    src={abtimg}
    alt=""
    className="object-cover w-full h-auto rounded-2xl"
  />
</div>

      <div className='px-2' data-aos="fade-right">
        <p className='text-xl font-semibold pb-2'><span><i class='bx bx-label text-[#FF014F] '></i></span> About Me</p>
        <h2 className='font-semibold pb-2'>Who Am I ?</h2>
        <div className='max-w-xl text-sm pb-2'>
          <p>I am a front-end web developer. I finished from Ekiti State Government College Ado-Ekiti. I am an intern at the Ministry of Innovation Science and Development Economy(Cybernetiq), working as a front-end developer for the Hon. Commissioner Seun Fakuade. I use technologies such as HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP, TAILWIND CSS, FLOWBITE, REACTJS, NODEJS, PYTHON, FIGMA to create scalable, secure, and user-friendly solutions that meet the needs and expectations of various stakeholders.</p>
        </div>

        <div className='max-w-xl pb-2'>
          <h3 className='font-semibold'>Vision & Goals</h3>
          <p className='text-sm'>My vision is to leverage my skills and network to foster an environment where young Nigerians can thrive through innovation.</p>
        </div>
        <div className='max-w-xl pb-3'>
          <h3 className='font-semibold'>Connect With Me</h3>
          <p className='text-sm'>I invite you to connect if you share a passion for youth empowerment, innovation, or if you’re interested in collaborating on projects that drive positive change. Together, we can make a significant impact!</p>
        </div>
       
        <button className='border border-[#FF014F] hover:bg-[#FF014F] transition-all duration-300 ease-in-out  py-2 px-3 rounded-md flex justify-center items-center gap-2'>
        <span>🚀</span>
          <p>Connect With Me</p>
        </button>
      </div>
    </div>
  )
}

export default About
