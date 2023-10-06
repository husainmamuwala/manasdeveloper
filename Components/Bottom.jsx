"use client"
import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Bottom = () => {
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
    return (
        <div className='bg-[#EBD8DC] py-5 px-10'>
            <div className='flex md:flex-row flex-col md:pt-5 md:mx-20'>
                {/* <div className='w-1/2'>
                    <div className='text-[16px] md:mx-20 flex flex-col pb-5'>
                        <span className='md:block hidden'><span className='font-semibold'>Email:</span> info@manasdevelopers.in</span>
                        <span className='md:block hidden py-2'><span className='font-semibold '>Phone:</span> 7718824442 / 022-27561124 / 022-27561057</span>
                        <span className='md:block hidden'><span className='font-semibold'>Address:</span> Office no 118, Plot no 61, Raheja Arcade, Sector 11, CBD, Belapur, Navi Mumbai 400  614</span>
                    </div>
                </div> */}
                <div className='md:w-1/2'>
                    <span className='font-bold text-[18px]'>Quick Links</span>
                    <ul className='flex md:flex-col flex-col'>
                        {
                            Links.map((l, i) => (
                                <Link href={l.href} className={`${currentpath === l.href ? 'text-primary' : ' '}`} key={l.href}>
                                    <li className='md:mr-10 text-md md:text-[16px] my-2 hover:top-2 font-semibold hover:text-primary pl-2'>{l.title}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div className='mx-auto md:w-1/2'>
                <iframe
                className='w-full' 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.2004716482273!2d73.0372578018457!3d19.01630317192099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3ac5714bc69%3A0xadddfe1dce560728!2sRaheja%20Arcade!5e0!3m2!1sen!2sin!4v1694873978666!5m2!1sen!2sin" width="auto" height="250" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='mx-auto text-center mt-5'>
                <span className='' >&copy; {new Date().getFullYear()} Manas Developers</span>
                {" | "}
                <Link
                    href="https://elightlabs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=' hover:text-primary '>
                    Elightlabs Technologies LLP
                </Link>
            </div>
        </div>
    )
}

export default Bottom