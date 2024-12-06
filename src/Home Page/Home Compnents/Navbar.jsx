import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between  px-5 sm:px-0 sm:justify-around items-center py-4 bg-black text-white'>
        <div>
            <p className='text-xl cursor-pointer txt'>Dev.fadebayo</p>
        </div>
        <div  className='hidden sm:block text-white'>
            <nav className='flex items-center gap-5 font-semibold'>
                <a href="" className='hover:text-[#FF014F]'>Home</a>
                <a href="" className='hover:text-[#FF014F]'>Services</a>
                <a href="" className='hover:text-[#FF014F]'>Projects</a>
                <a href="" className='hover:text-[#FF014F]'>Testimonials</a>
                <a href="" className='bg-[#FF014F] py-2 px-3 rounded-md'>Contact Me</a>
            </nav>
        </div>
        <div className='block sm:hidden'>
        <i class='bx bx-menu text-3xl cursor-pointer' ></i>
        </div>
    </div>
  )
}

export default Navbar
