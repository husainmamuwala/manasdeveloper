"use client";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Navbar from '../../../Components/Navbar';
import Link from 'next/link';
import Footer from '../../../Components/Footer';
import Bottom from '../../../Components/Bottom';
import Contact from '../../../Components/Contact';
import Subfooter from '../../../Components/Subfooter';

class page extends Component {

    render() {
        const projects = [
            {
                project: "Krishna Dhan Overview",
                loc: "Sanpada",
                src: "/img/malhar24.webp",

                details: [
                    {
                        name: "Project Area",
                        icon: "/icons/projarea.png",
                        area: "0.61 Acres",
                    },
                    {
                        name: "Carpet Area",
                        icon: "/icons/carpet.png",
                        area: "623 sq.ft. - 624 sq.ft.",
                    },
                    {
                        name: "Property Area",
                        icon: "/icons/prarea.png",
                        area: "1 Building - 144 units",
                    },
                    {
                        name: "Launch date",
                        icon: "/icons/launch.png",
                        area: "Jul, 2023",
                    },
                    {
                        name: "Posession",
                        icon: "/icons/posession.png",
                        area: "Jun, 2026",
                    },
                    {
                        name: "Configurations",
                        icon: "/icons/config.png",
                        area: "2 BHK Apt.",
                    },
                    {
                        name: "Rera ID",
                        icon: "/icons/rera.png",
                        area: "P51700049178",
                    },
                ]
            },

        ]

        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <Carousel className=''>
                    <div className='md:h-[35rem]'>
                        <img 
                        className=''
                        src="/img/malhar24.webp" />
                    </div>
                    <div className='md:h-[35rem]'>
                        <img src="/img/lorem.png" />
                        
                    </div>
                    <div className='md:h-[35rem]'>
                        <img src="/img/lorem.png" />
                        
                    </div>
                    
                </Carousel>
                <div className='flex md:flex-row flex-col'>
                    <div className='md:w-1/2 bg-primary md:h-[30rem] h-[15rem] '>
                        <div className=''>
                            <div className='flex flex-col md:min-h-[30rem] min-h-[15rem] justify-center items-center'>
                                <p className=' text-white font-bold text-3xl text-center'>Krishna Dhan Overview</p>
                                <p className='text-white text-xl mt-2 text-center pb-2'>Kamothe</p>
                                <svg width="300" height="4" viewBox="0 0 300 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="2" x2="300" y2="2" stroke="white" stroke-width="2" />
                                </svg>
                                <p className='text-white text-2xl text-center'>1 BHK & 2 BHK</p>
                                <svg width="300" height="4" viewBox="0 0 300 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="2" x2="300" y2="2" stroke="white" stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <div className='px-10 mt-2'>
                            <p className='text-primary text-xl font-semibold'>Overview</p>
                        </div>
                        <div className='mt-10'>
                            {
                                projects.map((p, i) => (

                                    <div key={i}>

                                        <div className='px-8'>
                                            <div>
                                                <div className='grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-x-4 items-center md:my-auto'>
                                                    {
                                                        p.details.map((d, index) => (
                                                            <div className='flex flex-row items-center' key={index}>
                                                                <div className='w-[30%]'>
                                                                    <img
                                                                        src={d.icon}
                                                                        alt=''
                                                                        className='w-8' />
                                                                </div>
                                                                <div className='w-[70%]'>
                                                                <div className='md:ml-4 ml-2'>
                                                                    <p className='opacity-50 font-semibold text-md'>{d.name}</p>
                                                                    <p className='text-sm md:text-md'>{d.area}</p>
                                                                </div>
                                                                    </div>

                                                            </div>
                                                        ))
                                                    }
                                                    <div className='mx-auto'>
                                                    <div className='items-center md:max-w-max w-max my-auto bg-primary/30 md:px-10 px-2 mt-5 py-2 rounded-2xl
                                                            hover:scale-105 duration-300 cursor-pointer'>
                                                        <Link href="https://w.me/+917718824442">
                                                            <span className=''>Contact Us</span>
                                                        </Link>
                                                    </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                
            <Footer/>
            <Subfooter/>
            <Bottom/>
            </div>

        )
    }
}

export default page