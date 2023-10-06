import Link from 'next/link'
import React from 'react'

const Subfooter = () => {
    return (
        <div className='bg-[#0C1221] py-5'>
            <div className='flex md:flex-row flex-col justify-evenly'>
                <div className='flex flex-row items-center text-white font-semibold px-10 py-4 md:py-0 md:w-[33%]'>
                    <img
                        src='/icons/location.png'
                        alt=''
                        className='w-10 mr-4' />
                    <p className='text-sm'>Office no 118, Plot no 61, Raheja Arcade, Sector 11, CBD, Belapur, Navi Mumbai 400-614</p>
                </div>
                <div>
                    <div className='flex flex-row items-center text-white font-semibold px-10 py-4 md:py-0 md:w-[33%]'>
                        <img
                            src='/icons/email.png'
                            alt=''
                            className='w-10 mr-4' />
                        <div className='flex flex-col'>
                            <p>Email us:</p>
                            <Link href="mailto:info@manasdevelopers.in">
                                <p className='text-sm'>info@manasdevelopers.in</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                <div className='flex flex-row items-center text-white font-semibold px-10 py-4 md:py-0'>
                        <img
                            src='/icons/call.png'
                            alt=''
                            className='w-10 mr-4' />
                        <div className='flex flex-col'>
                            <p>Call us:</p>
                            <Link href="tel:+917718824442">
                                <p className='text-sm'>+91-7718824442</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subfooter