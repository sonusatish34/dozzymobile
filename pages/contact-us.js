import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import apple from './images/apple.webp'
import google from './images/ggle.webp'
import dynamic from 'next/dynamic';
const HomeBanner = dynamic(() => import('./components/HomeBanner.js/HomeBanner'));
import contactr from './images/contactr.webp'
import LinkCall from './components/LinkCall';
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

const ComponentName = (props) => {
    return (
        <div>
            <div className='text-black bg-white pt-7 px-2 py-2'>
                <div className='bg-white text-black lg:text-lg text-sm lg:leading-9 leading-7 lg:pt-2 pt-'>

                    {/* <HomeBanner /> */}
                    <div className='flex lg:flex-row flex-col justify-between items-center lg:px-16 px-2 pt-4'>
                        <div>
                            <h3 className='pt-4 xl:text-2xl lg:text-xl text-lg text-center lg:text-left font-semibold lg:w-2/3'>Download Dozzy App to Check Available Farm Houses & Book</h3>
                            <div className="flex gap-2 py-2 justify-center lg:justify-normal items-center relative ">
                                <Link href={'https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530'}>
                                    <Image
                                        height={500}
                                        width={500}
                                        alt="apple"
                                        className="lg:w-40 lg:h-14 w-28 h-11 lg:hover:scale-105"
                                        src={apple}
                                        priority={true}
                                    />
                                </Link>
                                <Link href="https://play.google.com/store/apps/details?id=com.dozzy_customer">
                                    <Image
                                        height={500}
                                        width={500}
                                        alt="google"
                                        className="lg:w-48 lg:h-20 w-32 h-16 lg:hover:scale-105"
                                        src={google}
                                        priority={true}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Image
                                src={contactr}
                                alt="Dozzy app"
                                height={1000}
                                width={1000}
                                className='xl:w-[450px] lg:scale-150 lg:w-[350px] w-[300px] relative xl:right-36 lg:right-16 top-3'
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:pt-20 lg:pl-20 text-black py-4 px-6'>
                <h3 className='font-bold lg:text-3xl text-xl pb-4'>Contact Details</h3>
                {/* <p className='pt-1 flex flex-col gap-y-2'> <span></span></p> */}
                <div className='flex lg:flex-row flex-col lg:gap-x-4 gap-y-4'>

                    <Link className='xl:text-3xl lg:text-xl font-bold text-base flex items-center gap-1 lg:gap-2 lg:pt-2 border-2 p-2 rounded-md w-fit ' href="tel:9666655973" target='_blank'><span><FiPhoneCall className='size-4 lg:size-6 text-blue-500' /></span>
                        <span>96666-559-73</span></Link>
                    <Link className='xl:text-3xl lg:text-xl font-bold text-base flex items-center gap-1 lg:gap-2 lg:pt-2 border-2 p-2 rounded-md w-fit' href={`https://api.whatsapp.com/send/?phone=919666655973&text=Hi+I+am+looking+for+farmhouse+booking&type=phone_number&app_absent=0`} target='_blank'><span><FaWhatsapp className='size-4 lg:size-8 text-green-600' /></span>
                        <span>96666-559-73</span></Link>
                </div>
            </div>
        </div>
    );
};

export default ComponentName;