import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useRef } from 'react'
import EmojiToggle from './EmojiToggle'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const[isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = "translateX(-16rem)"
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = "translateX(16rem)"
    }
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(scrollY>50){
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
      })
    },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt="" className='w-full'/>
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll?"bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-[#11001F] dark:shadow-white/20":""}`}>
        <a href="#footer" className='hidden md:flex '>
            <Image src={isDarkMode? assets.logo_dark : assets.logo} alt="" className='w-10 cursor-pointer'/>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-12 rounded-full px-10 py-2.5  ${isScroll?"":"bg-white shadow-sm bg-opacity-50 dark:text-white dark:border dark:border-white/50 dark:bg-transparent"} `}>
            <li><a href="#top" className='font-Ovo flex items-center gap-1.25'><Image width={16} src={isDarkMode?assets.homeDark : assets.home} alt="" />Home</a></li>
            <li><a href="#about" className='font-Ovo flex items-center gap-1'><Image width={17} src={isDarkMode?assets.toolDark : assets.tool} alt="" />My ToolKit</a></li>
            <li><a href="#work" className='font-Ovo flex items-center gap-1'><Image width={17} src={isDarkMode?assets.portfolioDark : assets.portfolio} alt="" />My Work</a></li>
            <li><a href="#contact" className='font-Ovo flex items-center gap-1'><Image width={17} src={isDarkMode?assets.mailDark : assets.mail} alt="" />Contact Me</a></li>
        </ul>
        <div className="flex items-center w-full md:w-auto justify-between md:justify-normal gap-4">


            <EmojiToggle enabled={isDarkMode} setEnabled={setIsDarkMode} />

           
            <button className='block md:hidden'>
                <Image onClick={openMenu} src={isDarkMode? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
            </button>
        </div>
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#2a004a] dark:text-white'>
            <div className='absolute right-6 top-6'>
                <Image onClick={closeMenu} src={isDarkMode?assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'/>
            </div>

            <li><a href="#top" onClick={closeMenu} className='font-Ovo'>Home</a></li>
            <li><a href="#about" onClick={closeMenu} className='font-Ovo'>My ToolKit</a></li>
            <li><a href="#work" onClick={closeMenu} className='font-Ovo'>My Work</a></li>
            <li><a href="#contact" onClick={closeMenu} className='font-Ovo'>Contact Me</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
