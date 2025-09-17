import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiPhoneCall } from "react-icons/fi";
import phone from '../../images/newddss.webp'
import gplay from '../../images/ppp.png'
import appstore from '../../images/ooo.svg'
import LinkCall from '../LinkCall';
import { useRouter } from 'next/router';
const Footer = ({ place, forblog }) => {
    let areas = ['Farmhouse Rentals in and around Ameerpet', 'Farmhouse Rentals in and around Moinabad', 'Farmhouse Rentals in and around Vikarabad', 'Farmhouse Rentals in and around Ecil', 'Farmhouse Rentals in and around Gachibowli', 'Farmhouse Rentals in and around Kukatpally', 'Farmhouse Rentals in and around Lb Nagar', 'Farmhouse Rentals in and around Secunderabad','Farmhouse Rentals in and around Shamshabad', 'Farmhouse Rentals in and around Uppal', 'Farmhouse Rentals in and around Rangareddy', 'Farmhouse Rentals in and around Medchal', 'Farmhouse Rentals in and around Ibrahimpatnam', 'Farmhouse Rentals in and around chevella', 'Farmhouse Rentals in and around Shamirpet', 'Farmhouse Rentals in and around Shankarpally', 'Farmhouse Rentals in and around Ghatkesar', 'Farmhouse Rentals in and around Pedda Amberpet', 'Farmhouse Rentals in and around Keesara', 'Farmhouse Rentals in and around Shadnagar', 'Farmhouse Rentals in and around Choutuppal', 'Farmhouse Rentals in and around Manneguda', 'Farmhouse Rentals in and Around Gandi Maisamma', 'Farmhouse Rentals in and Around Dammaiguda']
    const router = useRouter();


    let areasbng = [
        'Farmhouse Rentals in and around Achalu Forest',
        'Farmhouse Rentals in and around Alakabelalu',
        'Farmhouse Rentals in and around Bande Kodigehalli',
        'Farmhouse Rentals in and around Dasenahalli',
        'Farmhouse Rentals in and around Doddamuddenahalli',
        'Farmhouse Rentals in and around Gejjala Gere',
        'Farmhouse Rentals in and around Kadukothnahally',
        'Farmhouse Rentals in and around Kadusonnapanahalli',
        'Farmhouse Rentals in and around Karahalli Amanikere',
        'Farmhouse Rentals in and around Keeranagere',
        'Farmhouse Rentals in and around Mathikere',
        'Farmhouse Rentals in and around Melahalli',
        'Farmhouse Rentals in and around Mugenahalli',
        'Farmhouse Rentals in and around Nagenahalli',
        'Farmhouse Rentals in and around Nidamakanahalli',
        'Farmhouse Rentals in and around Rajanukunte',
        'Farmhouse Rentals in and around Ramanagara',
        'Farmhouse Rentals in and around Tharalu',
        'Farmhouse Rentals in and around Tumakuru',
        'Farmhouse Rentals in and around Bangalore'
    ];

    // ${router.pathname.includes('bangalore') ? '/bangalore' :''}
    return (
        <>
            <div className={`xl:px-20 lg:px-20 xl:py-20 lg:py-12 px-4 py-4 ${(forblog || router.pathname.includes('bangalore')) ? 'hidden' : ''} `}>
                <div className={` flex py-5 px-2 justify-center text-white bg-[#556ee6] rounded-md items-center`}>
                    <div className=' xl:text-left xl:text-sm lg:text-xs mxs:text-sm  text-xs font-semibold'>
                        <ul className='xl:gap-x-16  lg:gap-x-2 lg:gap-y-5 gap-y-4 grid justify-center pl-2 lg:grid-cols-3 grid-cols-1 py-7 capitalize'>
                            {areas.map((item, index) => (
                                <li key={index} className="relative group">
                                    <Link href={`${item.toLowerCase().replace(/\s+/g, '-')}`}>
                                        <p className=" cursor-pointer inline-block relative">{item}<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`xl:px-20 lg:px-20 xl:py-20 lg:py-12 px-4 py-4 ${(forblog || router.pathname.includes('bangalore')) ? 'block' : 'hidden'} `}>
                <div className={` flex py-5 px-1 justify-center text-white bg-[#556ee6] rounded-md items-center`}>
                    <div className='xl:text-[14px] lg:text-xs mxs:text-sm  text-[10px] font-semibold'>
                        <ul className='xl:gap-x-5 lg:gap-x-5 lg:gap-y-5 gap-y-4 grid justify-center pl-2 lg:grid-cols-3 grid-cols-1 py-7 capitalize'>
                            {areasbng.map((item, index) => (
                                <li key={index} className="relative group  capitalize">
                                    <Link className='' href={`/bangalore/${item.replace(/\s+/g, '-').toLowerCase()}`}>
                                        <p className=" cursor-pointer inline-block relative">{item}<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='... bg-[url("/mld.webp")] lg:bg-center  bg-cover z-0'>
                <div className='flex items-center gap-8 text-white lg:pt-24 lg:pl-32 py-4 px-2'>
                    <Image
                        src={phone}
                        alt='from houses near hyderabad'
                        width={1000}
                        height={1000}
                        className='w-24 h-full scale-75 relative lg:top-8 lg:w-56 lg lg:rounded-[2rem] rounded-2xl'
                    />
                    <div className='relative p-2 rounded-md'>
                        <div className='absolute inset-0 bg-black opacity-60 rounded-md z-0'></div>
                        <div className='relative z-10 p-1'>
                            <p className='text-sm xl:text-4xl lg:text-2xl lg:pb-8 lg:pt-8 xl:pl-20 text-white'>Your All-In-One App Dozzy</p>
                            <ul className='text-[10px] flex flex-col lg:flex-row lg:text-lg text-white lg:pl-20'>
                                <li className='lg:w-2/4'>
                                    {/* <p>Head Office:</p>
                                <p className='lg:w-[80%]'>Dozzy Private limited 5th Floor, Sigma Tech Park Whitefield, Bangalore</p> */}
                                </li>
                            </ul>
                            <ul className='xl:pl-20 flex flex-col-reverse lg:flex-row'>
                                <li>
                                    <p className='flex gap-2 pt-1 items-center lg:pt-6'>
                                        <Link onClick={(e) => LinkCall(e, "https://play.google.com/store/apps/details?id=com.dozzy_customer")} href={'https://play.google.com/store/apps/details?id=com.dozzy_customer'}>
                                            <Image
                                                src={gplay}
                                                alt='google play'
                                                width={1000}
                                                height={1000}
                                                className='w-12 h-4 lg:w-24 lg:h-8 rounded-sm lg:hover:scale-95'
                                            />
                                        </Link>
                                        <Link onClick={(e) => LinkCall(e, "https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530")} href={'https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530'}>
                                            <Image
                                                src={appstore}
                                                alt='apple store'
                                                width={1000}
                                                height={1000}
                                                className='w-12 h-4 lg:w-24 lg:h-8 rounded-sm lg:hover:scale-95'
                                            />
                                        </Link>
                                    </p>
                                </li>
                                <li>
                                    <div className='xl:pl-32 lg:pl-4 lg:pr-1 xl:pr-16 py-2 xl:text-lg lg:text-sm'>
                                        <div className='flex flex-col gap-2 lg:flex-row lg:gap-4'>
                                            <p className='lg:pb-2'><span>Contact Us</span><span><Link className='xl:text-3xl lg:text-xl font-bold text-base flex items-center gap-1 lg:gap-2 lg:pt-2' href="tel:9111911162" target='_blank'><span><FiPhoneCall className='size-3 lg:size-6' /></span>
                                                <span onClick={(e) => LinkCall(e, "tel:9111911162")}>9111-9111-62</span></Link>
                                            </span>
                                            </p>
                                            <div className='flex flex-col gap-1 lg:text-base text-xs lg:pl-4'>
                                                {/* <p className=''><Link target='_blank' className='hover:text-blue-400 hover:underline ' href={'/blog'}>Blog</Link></p> */}
                                                <p className=''><Link className='hover:text-blue-400 hover:underline'
                                                    href={`${router.pathname.includes('bangalore') ? '/bangalore' : ''}/privacy-policy`}>

                                                    Privacy Policy</Link></p>
                                                <p className=''><Link className='hover:text-blue-400 hover:underline'
                                                    href={`${router.pathname.includes('bangalore') ? '/bangalore' : ''}/terms-and-conditions`}>Terms and Conditions
                                                </Link></p>
                                                <p className=''><Link className='hover:text-blue-400 hover:underline'
                                                    href={`${router.pathname.includes('bangalore') ? '/bangalore' : ''}/cancellation-and-refund`}>Cancellation and Refund
                                                </Link></p>
                                                <p className=''><Link className='hover:text-blue-400 hover:underline'
                                                    href={`${router.pathname.includes('bangalore') ? '/bangalore' : ''}/shipping-and-delivery`}>Shipping and Delivery
                                                </Link></p>
                                                {/* <p className=''><Link className='hover:text-blue-400 hover:underline' href={'/privacy-policy'}>Privacy Policy</Link></p> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-black py-1 lg:px-20 text-center text-white lg:text-lg text-[9px]'>
                    <p>Copyright © 2025 Dozzy Services Private Limited | All Rights Reserved.</p>
                </div>
            </div>

        </>
    )
}

export default Footer