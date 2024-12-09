import React from "react";

const Footer = () => {
  return (
    <div className="bg-zinc-900 text-gray-300 py-10 px-5 sm:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">My Message To You</h2>
          <p className="text-sm leading-relaxed">
            I am a passionate front-end developer dedicated to building
            user-friendly and accessible web experiences. Let’s connect and
            create something amazing!
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className=" flex flex-col items-center">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#certificates" className="hover:text-white transition-colors">
                Certificates
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Dev-Noble-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <i className="bx bxl-github text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/adebayo-favour-36a6aa327/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <i className="bx bxl-linkedin text-2xl"></i>
            </a>
            <a
              href="https://x.com/fadebayo637"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <i className="bx bxl-twitter text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com/fade.bayo637/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <i className="bx bxl-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-5">
        <p>
          © {new Date().getFullYear()} Favour Adebayo. All rights reserved. 
        </p>
      </div>
    </div>
  );
};

export default Footer;
