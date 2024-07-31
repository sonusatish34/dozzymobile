import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import foot from '../../images/foot.jpg'
import phone from '../../images/onePlus10t.png'
import gplay from '../../images/ggle.webp'
import appstore from '../../images/apple.webp'
const Footer = () => {
    return (
        <div className='... bg-[url("/mld.jpg")] lg:bg-center  bg-cover z-0 opacity-90'>
            <div className='flex items-center text-white lg:pt-24 lg:pl-40'>
                <Image
                    src={phone}
                    alt='phone'
                    width={100}
                    height={100}
                    className='lg:w-56 lg'
                    priority
                />
                <div className='border-[1px] border-gray-50 p-1 rounded-md z-10'>
                    <p className='text-base lg:text-4xl lg:pb-8 lg:pt-8 lg:pl-20'>Your All-In-One App  Dozzy</p>
                    <ul className='text-[10px] flex lg:text-lg z-50 text-white lg:pl-20'>
                        <li className='w-2/4'>

                            <p>Head Office:</p>
                            <p className='w-[80%]'>Dozzy Private limited 5th Floor, Sigma Tech Park Whitefield, Bangalore</p>

                        </li>
                        <li className='flex lg:flex-row flex-col'>
                            <div className='pr-3'>
                                <p>Contact Us</p>
                                {/* <p className='text-sm font-bold lg:text-lg'>9111-9111-62</p> */}
                                <Link className='lg:text-3xl text-white font-bold text-sm' href="tel:9111911162" target='_blank'>9111-9111-62</Link>
                            </div>
                            <div className='pt-2 lg:pt-4 lg:'>
                                <p className='text-blue-700 font-semibold py-1 lg:py-0 lg:'><span className='bg-white p-[2px] lg:p-2 rounded-sm lg:rounded-lg lg:text-2xl'>App Launching Soon</span></p>
                                <p className='flex gap-2 pt-1 justify-center items-center lg:pt-8'>
                                    <Image
                                        src={gplay}
                                        alt='google play'
                                        width={100}
                                        height={100}
                                        className='w-14 h-6 lg:w-28 lg:h-12'
                                    />
                                    <Image
                                        src={appstore}
                                        alt='apple store'
                                        width={100}
                                        height={100}
                                        className='w-12 h-4 lg:w-24 lg:h-8 rounded-sm'
                                    />
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer