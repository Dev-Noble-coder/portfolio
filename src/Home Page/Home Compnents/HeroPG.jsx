import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import myimg from "../../assets/mypic.jpg";

const HeroPG = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation
      once: false,
      offset: 100,
      delay: 300,
    });
  }, []);

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        " I am Front End Developer.",
        " I am Creative Problem Solver.",
        "I am an Innovator.",
        "I am a Tech Enthusiast.",
        "Start Up Founder",
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
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col-reverse sm:flex-col lg:flex-row justify-around items-center min-h-screen relative px-3 gap-5">
        <div id="left" data-aos="fade-right">
          <p className="pb-1">
            <span>
              <i class="bx bx-label text-[#FF014F] "></i>
            </span>{" "}
            SOFTWARE DEVELOPER
          </p>
          <h1 className="text-5xl sm:text-8xl font-semibold">
            I am <span className="txt">Favour</span>
          </h1>
          <h1 className=" font-semibold pb-5">
            <span className="txt text-5xl sm:text-8xl"> Adebayo!</span>
          </h1>
          <span ref={typedRef} className="inline text-xl "></span>{" "}
          {/* Add the typing effect here */}
          <div className="flex flex-col sm:flex-row justify-start sm:items-center gap-5 pt-5">
            <button className="bg-[#FF014F] py-2 px-3 rounded-md flex justify-center items-center gap-2">
              <a
                href="/resume.pdf"
                download="Adebayo_Favour_Ayomide's_Resume.pdf"
                className="flex justify-center gap-2"
              >
                <span>
                  <i className="bx bxs-download"></i>
                </span>
                <p>Download Resume</p>
              </a>
            </button>

            <button className="border border-[#FF014F] py-2 px-3 rounded-md flex justify-center items-center gap-2 hover:bg-[#FF014F] duration-300 ease-in-out">
              <span>
                <i class="bx bxs-contact"></i>
              </span>
              <a href="#contact">
                <p>Contact Me</p>
              </a>
            </button>
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 py-4 sm:py-3">
              <span>
                <a
                  href="https://www.linkedin.com/in/adebayo-favour-36a6aa327/"
                  target="_blank"
                >
                  <i class="bx bxl-linkedin-square text-white  text-3xl"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://wa.me/+2347075688609"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bx bxl-whatsapp-square text-white text-3xl"></i>
                </a>
              </span>

              <span>
                <a
                  href="https://www.instagram.com/fade.bayo637/"
                  target="_blank"
                >
                  <i class="bx bxl-instagram-alt text-white text-3xl"></i>
                </a>
              </span>
              <span>
                <a href="https://x.com/fadebayo637">
                  <i class="bx bxl-twitter text-white text-3xl"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div
          id="right"
          data-aos="fade-left"
          className="max-w-[300px] sm:max-w-[400px]"
        >
          <img
            src={myimg}
            alt=""
            className="rounded-full object-cover w-full h-auto aspect-square  border-[#cf3d69] border-4"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPG;
