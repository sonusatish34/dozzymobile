import React from 'react'
import Image from 'next/image';
import grpfarm from '../../images/secions.webp'
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
import LinkCall from '../LinkCall';
const FarmStarts = () => {
    const handleStoreRedirect = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // Redirect to App Store if iOS
            window.open(
                "https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530",
                "_blank"
            );
        } else if (/android/i.test(userAgent)) {
            // Redirect to Play Store if Android
            window.open(
                "https://play.google.com/store/apps/details?id=com.dozzy_customer",
                "_blank"
            );
        } else {
            // Optional: Provide a message for non-mobile devices
            alert("App is available only on mobile devices.");
        }
    };
    return (
        <div className='py-6 lg:py-16 px-4 md:px-20'>
            <p className='pb-4 font-semibold text-xl lg:text-3xl pt-4 lg:pt-1 md:pb-7 font-opensans'>Luxury Farm Houses under 20,000</p>
            <div className='flex'>
                <div>
                    <Image
                        src={grpfarm}
                        alt='farm house in hyderabad '
                        // className='object-cover '
                        className='lg:w-[666px] w-[333px] h-auto scale-105'
                        height={1000}
                        width={1000}
                        layout='responsive'
                    />
                </div>
                <div className='w-3/5 lg:pl-10'>
                    <p className='text-[10px] font-normal pl-3  md:text-xl lg:text-2xl lg:w-[70%] mont-text'>Dozzy Has 10,000+ Attached Farmhouses From Basic - Luxury It's Just Starting At  5,999/Day </p>
                    <p className='text-[11px] font-semibold pl-3  md:text-xl lg:text-3xl pt-1 lg:pt-8'>To View More</p>
                    <div className='flex gap-1 lg:gap-3 text-white pt-2  md:pt-6 pl-1'>
                        <button className='bg-green-500 rounded-md py-1 px-1 md:px-4 md:py-2'>
                            <Link onClick={(e) => LinkCall(e, "https://api.whatsapp.com/send/?phone=919111911162&text=Hi+I+am+looking+for+farmhouse+booking&type=phone_number&app_absent=0")} href="https://api.whatsapp.com/send/?phone=919111911162&text=Hi+I+am+looking+for+farmhouse+booking&type=phone_number&app_absent=0" target='_blank'>
                                <p className=' flex gap-1 lg:gap-2 items-center text-[8px] lg:text-lg'><span><FaWhatsapp className='lg:size-6' size={10} /></span> <span>Whatsapp</span></p>
                            </Link>
                        </button>
                        <button className='bg-blue-500 rounded-md py-1 px-1 w-16 lg:w-28'>
                            <Link onClick={(e) => LinkCall(e, "tel:9111911162")} href="tel:9111911162" target='_blank'>
                                <p className='flex gap-1 items-center text-[8px] lg:text-lg'><span><BiPhoneCall className='lg:size-6' size={10} /></span> <span>Call Us</span></p>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className='pt-10'>
                <p className="lg:flex hidden text-4xl font-bold ">Offers And Discounts</p>
                <div className='lg:flex-row flex flex-col gap-10 justify-center lg:px-10'>
                    <Link href={'tel:9111911162'}>
                        <Image
                            className="h-fit w-full"
                            src={'/offers/1rpdozzy.webp'}
                            alt={"Dozzy App For Farmhouse Booking"}
                            width={1000}
                            height={1000}
                        />
                    </Link>
                    <div onClick={handleStoreRedirect}>
                        <Image
                            className="h-fit w-full"
                            src={'/offers/newuserdozzy2.webp'}
                            alt={"Dozzy App For Farmhouse Booking"}
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FarmStarts;