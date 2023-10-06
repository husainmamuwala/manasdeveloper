"use client"
import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="h-screen">
      <img
        src='/img/hero-new.png'
        className='absolute h-screen md:w-full object-cover opacity-75 md:opacity-75 xl:opacity-100'>
      </img>
      <nav>
        <Navbar />
      </nav>
      <div className='md:mt-[10%] mt-32 md:px-20 px-5'>
        <motion.div
        initial={{opacity:0, scale:1}}
        animate={{opacity:1 , scale:1}}
        transition={{duration:1}}
          className='relative text-4xl tracking-wide'>
          <p>Welcome to <span className='text-primary md:inline-block block font-bold'>Manas Developers</span></p>
          <p>Where dreams take shape</p>
          <p>and Spaces come to Life.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero