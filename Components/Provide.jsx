import React from 'react'

const Provide = () => {
    return (
        <div className='md:mx-28 mx-10 md:my-16 mt-10'>
            <p className='uppercase text-sm text-primary font-bold '>Our Mission</p>
            <p className='text-4xl font-bold mt-2 text-secondary'>We Provide All Kinds Of <span className='md:block'>Constructions</span></p>
            <div className='flex md:flex-row flex-col justify-start mt-5'>
                <div className='md:w-[40%]'>
                    <p className=''>At Manas Builders, our mission is to build a legacy of excellence by delivering superior construction
                        and design solutions that
                        enrich the lives of our clients</p>
                    {/* <div className='flex flex-row'>
                        <div>
                            <img
                                src='/img/jd.png'
                                alt='Manas Developers FOunder'
                                title='Manas Developers Founder'
                                className='h-24 w-24 rounded-full mt-5' />
                        </div>
                        <div className='my-auto ml-5'>
                            <p className='font-bold text-secondary'>John Doe</p>
                            <p className='mt-2'>CEO , Founder</p>
                        </div>
                    </div> */}
                </div>
                <div className='flex md:flex-row flex-col md:w-[60%] md:px-5'>
                    <div className='md:px-5 mt-8 md:mt-0'>
                        <h2 className='uppercase text-sm text-primary font-bold '>Our Mission</h2>
                        <p className='mt-2'>At Manas Builders, our mission is to build a legacy of excellence by delivering superior construction
                            and design solutions that
                            enrich the lives of our clients. We aim to be the preferred choice in the
                            industry by upholding the highest standards of integrity, professionalism, and customer satisfaction.</p>
                    </div>
                    <div className='md:px-5 mt-8 md:mt-0'>
                        <h2 className='uppercase text-sm text-primary font-bold '>Our Vision</h2>
                        <p className='mt-2'>Our vision is to reshape the skyline with iconic structures and set new benchmarks in the construction
                            and design industry. We aspire to be at the forefront of innovation, sustainability, and customer-centric
                            practices, fostering a strong bond of trust with our clients and partners.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Provide