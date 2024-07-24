import React from 'react'
import Image from 'next/image'
// import foot from '../../images/foot.jpg'
import phone from '../../images/onePlus10t.png'
import gplay from '../../images/googleplay.png'
import appstore from '../../images/applestore.png'
const Footer = () => {
    return (
        <div className='... bg-[url("/weffff.jpg")] lg:bg-center  bg-cover opacity-90'>
            <div className='flex items-center text-white lg:pt-24 lg:pl-40'>
                <Image
                    src={phone}
                    width={100}
                    height={100}
                    className='pb-2 lg:w-48 lg'
                    priority
                />
                <div>
                <p className='text-base lg:text-4xl lg:pb-8 lg:pt-8 lg:pl-20'>Your All-In-One App  Dozzy</p>
                    <ul className='text-[10px] flex lg:text-lg z-50 text-white lg:pl-20'>
                        <li className='w-2/4'>
                            
                            <p>Head Office:</p>
                            <p className='w-[70%]'>Dozzy Private pmited 5th Floor, Sigma Tech Park Whitefield, Bangalore</p>
                            <p>9111-9111-62</p>
                        </li>

                        <li className='pt-4 lg:pt-0 lg:pl-36'>
                            <p className='text-blue-700 font-semibold py-1 lg:py-0 lg:'><span className='bg-white p-[2px] lg:p-2 rounded-sm lg:rounded-lg lg:text-2xl'>App Launching Soon</span></p>
                            <p className='flex gap-2 pt-2 lg:pt-8'>
                                <Image
                                    src={gplay}
                                    width={80}
                                    height={80}
                                    className='w-12 h-6 lg:w-28 lg:h-10'
                                />
                                <Image
                                    src={appstore}
                                    width={100}
                                    height={100}
                                    className='w-12 h-6 lg:w-28 lg:h-10'
                                />
                            </p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer