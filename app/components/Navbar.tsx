import React, { useRef, useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sideMenuRef = useRef<HTMLUListElement>(null);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }

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

        <div className='flex items-center gap-4'>

            <button>
              <Image src={assets.moon_icon} alt='Moon icon' className='w-6' />
            </button> 
            
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact
             <Image src={assets.arrow_icon} alt="Arrow" className='w-3'/></a>

            <button className='block md:hidden' onClick={toggleMenu}>
              <Image src={assets.menu_black} alt='' className='w-6' />
            </button>
        </div>

        {/* Mobile Menu */}

        <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-all duration-500 
        ${isMenuOpen ? 'right-0' : '-right-64'}`}>

            <div className='absolute right-6 top-6' onClick={toggleMenu}>
              <Image src={assets.close_black} alt='' className='w-5 cursior-pointer' />
            </div>
            <li><a href="#top" className='font-Ovo' onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className='font-Ovo' onClick={toggleMenu}>About</a></li>
            <li><a href="#project" className='font-Ovo' onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contacts" className='font-Ovo' onClick={toggleMenu}>Contacts</a></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar
