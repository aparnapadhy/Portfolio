import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { delay } from 'motion'
import Link from 'next/link'

const Work = ({isDarkMode}) => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} id="work" className='w-full px-[12%]  md:py-10 scroll-mt-20'>

      <motion.h4 initial={{y:-20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5,delay:0.3 }} className="text-center mb-2 text-xl font-Ovo">My Portfolio</motion.h4>

      <motion.h2 initial={{y:-20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5,delay:0.5 }} className="text-center text-3xl md:text-5xl font-Ovo">My Latest Works</motion.h2>

      <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5, delay:0.7}} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Here are some of the projects I’ve built using modern web technologies. Each project highlights my skills in frontend and full-stack development, responsive design, and clean code.</motion.p>

      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6, delay:0.9}} className='flex flex-wrap justify-center gap-5 my-10 dark:text-black'>
        {workData.map((project,index)=>(
           <motion.div whileHover={{scale:1.05}} transition={{duration:0.3}}
           key={index} style={{backgroundImage: `url(${project.bgImage})`}} className='w-60 h-60 bg-no-repeat bg-contain rounded-lg relative cursor-pointer group border border-black dark:border-white'>
            <div className='bg-white w-full rounded-md absolute bottom-0 left-1/2 -translate-x-1/2 py-2 px-5 flex items-center justify-between duration-500 group-hover:bottom-2'>
                <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-xs text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-gray-300 transition'>
                    <a target='_blank' href={project.link}><Image src={assets.send_icon} alt='send icon' className='w-5'/></a>
                </div>
            </div>
           </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Work
