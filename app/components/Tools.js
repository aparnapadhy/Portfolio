import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} id="about" className='w-full px-[12%] py-17 md:py-27 min-h-screen leading-7 '>

      <motion.h4 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-center mb-2 text-xl font-Ovo'>My Toolkit</motion.h4>

      <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-center text-3xl md:text-5xl font-Ovo'>Technologies I Use</motion.h2>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} className='flex-1'>
        <p className='my-4  font-Ovo text-center'>I specialize in building full-stack web applications with a strong foundation in both frontend and backend technologies. On the frontend, I work with React.js, Next.js, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Redux, and Bootstrap to create modern, responsive, and user-friendly interfaces, while leveraging Figma for designing clean and intuitive UI/UX. On the backend, I have hands-on experience with Node.js, Express.js, MongoDB, Mongoose along with building and testing RESTful APIs and implementing real-time functionality using Socket.IO. I am also proficient with essential development tools and platforms including Git, GitHub, VS Code, Postman, Vercel, and Render, which help me streamline development, testing, and deployment workflows. Additionally, I have experience managing media with ImageKit and Cloudinary and integrating secure payment solutions using Stripe. This combination of skills allows me to develop end-to-end solutions—from crafting polished, interactive frontends to designing robust backends and deploying production-ready applications—ensuring seamless and efficient user experiences.</p>
<motion.div 
  initial={{ opacity: 0 }} 
  whileInView={{ opacity: 1 }} 
  transition={{ duration: 0.6, delay: 1.5 }} 
  className='overflow-hidden py-4'
>
  <motion.div
    className='flex gap-3 sm:gap-5 w-max'
    animate={{ x: ["20%", "-100%"] }}  
    transition={{
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 80, 
        ease: "linear",
      },
    }}
  >
        <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.5 }} className='flex gap-3 sm:gap-5 w-max'>
        
            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.react_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src ={isDarkMode ? assets.nextjslight_icon : assets.nextjs_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.mongodb_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.nodejs_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {isDarkMode? assets.expresslight_icon : assets.express_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.html_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.css_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.js_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.tailwind_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.redux_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.bootstrap_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.figma_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.mongoose_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.git_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>
            
            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { isDarkMode ? assets.githublight_icon : assets.github_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { assets.socket_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { assets.vscode} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { assets.Postman} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { assets.cloudinary} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { assets.imagekit_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>
            
            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { assets.stripe_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { isDarkMode?assets.Verceldark : assets.Vercel} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { isDarkMode? assets.Renderdark : assets.Render} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.web3form} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.motion} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

        
        </motion.ul>
        <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.5 }} className='flex gap-3 sm:gap-5 w-max'>
        
            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.react_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src ={isDarkMode ? assets.nextjslight_icon : assets.nextjs_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.mongodb_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.nodejs_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {isDarkMode? assets.expresslight_icon : assets.express_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.html_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.css_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.js_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.tailwind_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.redux_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.bootstrap_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.figma_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.mongoose_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.git_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>
            
            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { isDarkMode ? assets.githublight_icon : assets.github_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { assets.socket_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { assets.vscode} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { assets.Postman} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { assets.cloudinary} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { assets.imagekit_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>
            
            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { assets.stripe_icon} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { isDarkMode?assets.Verceldark : assets.Vercel} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= { isDarkMode? assets.Renderdark : assets.Render} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.web3form} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} className='flex-shrink-0 flex items-center justify-center w-12 sm:w-20 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white'>
              <Image src= {assets.motion} alt='Tool' className='w-5 sm:w-10' />
            </motion.li>


        
        </motion.ul>
        </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
