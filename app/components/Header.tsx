import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

export default function Header() {
    return(
        <div>
            <div>
                <Image src={assets.profile_img} alt='Profile image' className='rounded-full w-32'/>
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                    Hi! I'm Alven Chen <Image src={assets.hand_icon} alt='Profile image' className='w-6'/>
            </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[-66px] font-Ovo'>
                Computer Science Student at Boston University
            </h1>
            <p className='max-w-2xl mx-auto font-Ovo'>
                I am an aspiring software developer from Boston studying computer science at Boston University. I am
                eager to contribute my knowledge and drive meaningful change.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>
                <a href="/resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
            </div>
        </div>
    )
}

