"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
  const currentpath = usePathname()

  const Links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "#about",
    },
    {
      title: "Our Projects",
      href: "#projects",
    },
    {
      title: "Contact Us",
      href: "#contact",
    }
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className='md:px-24 pt-2 px-10'>
      <motion.div
        initial={{
          y: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1
        }}
        className='relative flex md:flex-row justify-between items-center py-2'>
        <div className=''>
          <Link href="/">
            <img
              src='/img/manas_logo.png'
              alt='Manas Developers logo'
              title='Manas Developers Logo png'
              className='md:w-52 w-36' />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer lg:hidden self-center place-content-end ml-auto mr-5"
        >
          {!open ? <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 7.5H5M20 15.8333H5M35 24.1667H5M35 32.5H5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg> : <XMarkIcon className="h-10 w-10" />}

        </div>

        <div>
          <ul
            className={`lg:flex lg:flex-row lg:items-center font-Montserrat lg:pb-0 font-Raleway font-[600] 
            absolute lg:static lg:bg-none lg:z-auto w-full left-0  lg:pl-0 pl-9 lg:w-auto
            transition-all duration-1000 ease-in top-20 pb-5 rounded-b-2xl z-20 bg-white md:bg-transparent
            ${open ? "flex-col" : "hidden"}`}
          >
            {Links.map((link) => (
              <motion.li
              onClick={() => setOpen(false)} key={link.title}
                className='md:ml-10 text-md md:text-[18px] my-7 hover:top-2 hover:text-primary pl-2'>
                <Link href={link.href} className={`${currentpath === link.href ? 'text-primary' : ' '}`}>{link.title}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>

  )
}

export default Navbar