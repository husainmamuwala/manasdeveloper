import React from 'react'
import Link from 'next/link'

const ProjKrishnadhan = () => {
    const projects =[

        {
            project: "Manas Krishna Dhan Overview",
            loc: "Kamothe, Navi Mumbai",
            src: "/img/krishnadhan.webp",
    
            details: [
                {
                    name: "Project Area",
                    icon: "/icons/projarea.png",
                    area: "0.45 Acres",
                },
                {
                    name: "Carpet Area",
                    icon: "/icons/carpet.png",
                    area: "313 sq.ft - 637 sq.ft",
                },
                {
                    name: "Property Area",
                    icon: "/icons/prarea.png",
                    area: "1 Building 76-units",
                },
                // {
                //     name: "Launch date",
                //     icon: "/icons/launch.png",
                //     area: "Apr, 2022",
                // },
                {
                    name: "Posession",
                    icon: "/icons/posession.png",
                    area: "Mar 2025",
                },
                {
                    name: "Configurations",
                    icon: "/icons/config.png",
                    area: "1,2 BHK Apts.",
                },
                {
                    name: "Rera ID",
                    icon: "/icons/rera.png",
                    area: "P52000033676",
                },
            ]
        },
    ];
  return (
<div className='md:mx-28 mx-5'>
            <div className=''>
                {
                    projects.map((p, i) => (

                        <div className='w-full border-[0.2rem] border-primary rounded-xl flex md:flex-row flex-col p-4' key={i}>
                            <div className='md:w-[35%]'>
                                <img
                                    src={p.src}
                                    className='w-full rounded-lg h-[18rem] object-cover' />
                            </div>
                            <div className='md:w-[65%] md:pl-10'>
                                <div className='flex md:flex-row flex-col justify-between mt-2 md:mt-0'>
                                    <div className=''>
                                        <p className='text-secondary font-bold text-2xl'>{p.project}</p>
                                    </div>
                                    <div>
                                        <p className='text-secondary/75 font-bold text-xl'>{p.loc}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 py-4 md:my-auto'>
                                        {
                                            p.details.map((d,index) => (
                                                <div>
                                                <div className='flex flex-row items-center' key={index}>
                                                    <div>
                                                        <img
                                                            src={d.icon}
                                                            alt=''
                                                            className='w-7' />
                                                    </div>
                                                    <div className='md:ml-4 ml-2'>
                                                        <p className='opacity-50 font-semibold text-md'>{d.name}</p>
                                                        <p className='text-sm md:text-md'>{d.area}</p>
                                                    </div>

                                                </div>
                                                    </div>
                                            ))
                                        }
                                        <div className='items-center max-w-max my-auto bg-primary/30 md:px-10 px-2 mt-5 py-2 rounded-2xl
                                                            hover:scale-105 duration-300 cursor-pointer'>
                                            <Link href="/krishnadhan">
                                                <span className=''>Know more</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default ProjKrishnadhan