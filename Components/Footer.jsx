"use client"
import React from 'react'
import ContactForm from './Contactform'


const Footer = () => {
    return (
        <div className='md:px-28 px-10 mt-10 bg-[#F2F4FA]'>
            <div className='flex md:flex-row flex-col py-14'>
                <div className='flex flex-col md:w-1/2'>
                    <p className='uppercase text-sm text-primary font-bold '>Contact us</p>
                    <p className='text-4xl font-bold mt-2 text-secondary'>Get In Touch with us</p>
                    <div className='flex flex-row'>
                        <div>
                            <img
                                src='/img/jd.png'
                                alt='Manas Developers FOunder'
                                title='Manas Developers Founder'
                                className='h-24 w-24 rounded-full mt-5' />
                        </div>
                        <div className='my-auto ml-5'>
                            <p className='font-bold text-secondary'>Have a question ?</p>
                            <p className='mt-2'>+91-7718824442</p>
                        </div>
                    </div>
                    <div className='py-5 opacity-75'>
                        <p>Monday - Friday</p>
                        <p>8:00am - 7:00pm/ Sunday closed</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <ContactForm />
                </div>
            </div>

        </div>
    )
}

export default Footer