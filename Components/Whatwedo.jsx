"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Whatwedo = () => {
    const services = [
        {
            icon: "/icons/building.png",
            title: "Building Constructions",
            desc:"From residential to commercial projects, we ensure top-notch construction services with attention to detail, on time, and within budget.",
        },
        {
            icon: "/icons/architect.png",
            title: "Architecture Design",
            desc:"Our skilled architects bring creativity and functionality to create inspiring spaces, whether contemporary or timeless classics.",
        },
        {
            icon: "/icons/renovate.png",
            title: "Building Renovation",
            desc:" Renew and transform your property into something extraordinary, preserving history or embracing modernity.",
            
        },
        {
            icon: "/icons/flooring.png",
            title: "Flooring & Roofing",
            desc:"Discover stylish and durable solutions to add value and beauty to your space.",
        },
        {
            icon: "/icons/interior.png",
            title: "Interior Design",
            desc: "Unleash the true potential of your interiors with captivating designs that reflect your personality.",
        },
        {
            icon: "/icons/repair.png",
            title: "Repair and Expand",
            desc:"Count on our skilled craftsmen to handle repairs and expansions with structural integrity and seamless integration.",
        },
    ]
    return (
        <div className='md:mx-28 mx-10 md:my-24 mt-10'>
            <p className='uppercase text-sm text-primary font-bold '>What we do</p>
            <p className='text-4xl font-bold mt-2 text-secondary'>Services That We Provide</p>

            <div className='grid md:grid-cols-3 mt-16 gap-5'>
                {
                    services.map((s, i) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            
                            className='border-[1px] border-secondary/20 shadow-lg flex flex-col px-10 py-5 rounded-md hover:scale-105 duration-300'
                            key={i}>
                            <img
                                src={s.icon}
                                alt=''
                                className='md:w-20 w-14 mt-5' />
                            <p className='mt-8 pb-2 font-semibold'>{s.title}</p>
                            <p className='opacity-75 mb-5'>{s.desc}</p>
                            {/* <div className='flex flex-row items-center'>
                                <span className='font-bold opacity-60 mr-2'>view more</span>
                                <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 8H25M25 8L17.5 1.5M25 8L18.5 14.5" stroke="#BE0026" strokeWidth="2" />
                                </svg>
                            </div> */}
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Whatwedo