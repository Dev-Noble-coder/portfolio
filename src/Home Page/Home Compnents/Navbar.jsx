import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="flex justify-between px-5 sm:px-0 sm:justify-around items-center py-4 bg-black text-white">
        <div>
          <p className="text-xl cursor-pointer txt">Dev.fadebayo</p>
        </div>
        <div className="hidden sm:block text-white">
          <nav className="flex items-center gap-5 font-semibold">
            <a href="#home" className="hover:text-[#FF014F]">Home</a>
            <a href="#services" className="hover:text-[#FF014F]">Services</a>
            <a href="#projects" className="hover:text-[#FF014F]">Projects</a>
            <a href="#testimonials" className="hover:text-[#FF014F]">Testimonials</a>
            <a href="#contact" className="bg-[#FF014F] py-2 px-3 rounded-md">Contact Me</a>
          </nav>
        </div>
        <div className="block sm:hidden menu">
          <i
            className="bx bx-menu text-3xl cursor-pointer"
            onClick={handleToggleMenu}
          ></i>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`z-30 fixed top-0 right-0 h-full bg-black text-white w-3/4 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out sm:hidden`}

      >
        <div className='text-right pt-3 pr-5'>
            <span><i class='bx bx-x-circle text-3xl' onClick={handleCloseMenu} ></i></span>
        </div>
        <nav className="flex flex-col items-start py-5 pl-5 font-semibold gap-5 mt-10">
          <a href="#home" onClick={handleCloseMenu} className="hover:text-[#FF014F]">
            Home
          </a>
          <a href="#services" onClick={handleCloseMenu} className="hover:text-[#FF014F]">
            Services
          </a>
          <a href="#projects" onClick={handleCloseMenu} className="hover:text-[#FF014F]">
            Projects
          </a>
          <a href="#testimonials" onClick={handleCloseMenu} className="hover:text-[#FF014F]">
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={handleCloseMenu}
            className="bg-[#FF014F] py-2 px-3 rounded-md"
          >
            Contact Me
          </a>
        </nav>
      </div>

      {/* Overlay to close menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 sm:hidden"
          onClick={handleCloseMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
