import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt="Header Background Color" className='w-full'/>
      </div>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href="#top">
            <h1 className='w-28 cursor-pointer mr-14 text-4xl'>
              Alven
            </h1>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap:8 rounded-full px-12 py-3 bg-white shadow-sm'>
            <li><a href="#top" className='font-Ovo'>Home</a></li>
            <li><a href="#about" className='font-Ovo'>About</a></li>
            <li><a href="#project" className='font-Ovo'>Projects</a></li>
            <li><a href="#contacts" className='font-Ovo'>Contacts</a></li>
        </ul>

        <div>
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={assets.arrow_icon} alt="Arrow" className='w-3'/></a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
