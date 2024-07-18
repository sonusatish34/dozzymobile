import React from 'react'
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import cardphoto from '../../images/card.svg'
const FarmProductLPage = () => {
    const [visibleItems, setVisibleItems] = useState(7);
    const replaceText = (str) => {
        return str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls3', 'https://d10uth61hedy2t.cloudfront.net');
    };
    const filteredData = [
        {
            "maker_model": "HYUNDAI AURA",
            "car_owner_id": 5,
            "car_number": "TS28Q1467",
            "price_24_hours": 77,
            "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222449/images/car_image_car_right_view_072c12e6d8544e419a0810ba0fb4bff6.jpeg",
            "fuel_type": "Petrol",
            "transmission_type": "Manual",
            "seater": "5",
            "vehicle_color": "Blue"
        },
        {
            "maker_model": "MARUTHI BALENO",
            "car_owner_id": 9,
            "car_number": "TS05FC6005",
            "price_24_hours": 83,
            "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000566266/images/car_image_car_right_view_c593f80b31a2480c97ca0f4b1ee58f0a.jpeg",
            "fuel_type": "Diesel",
            "transmission_type": "Manual",
            "seater": "5",
            "vehicle_color": "Grey"
        },
        {
            "maker_model": "SWIFT DZIRE",
            "car_owner_id": 10,
            "car_number": "AP40F8748",
            "price_24_hours": 83,
            "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000666331/images/car_image_car_right_view_fd7bc4ad998b455eb6aee0340e2ccd3d.jpeg",
            "fuel_type": "Petrol",
            "transmission_type": "Manual",
            "seater": "5",
            "vehicle_color": "Grey"
        },
        {
            "maker_model": "MARUTHI BALENO",
            "car_owner_id": 11,
            "car_number": "AP39SZ5981",
            "price_24_hours": 83,
            "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222449/images/car_image_car_right_view_283b24dfb3df4ba28109e79c5459d196.jpeg",
            "fuel_type": "Petrol",
            "transmission_type": "Manual",
            "seater": "5",
            "vehicle_color": "Blue"
        },
        
    ]
   
    return (
        <div>
            <div className='text-sm pl-4 py-4'>
                <p className='font-bold'>Farm House In Hyderbad</p>
                <p>Get Very Low  prices Compared To Others</p>
            </div>
            <div>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 items-center xs:justify-center lg:max-w-7xl">
                    {filteredData?.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-72  xs:w-[90%] md:w-72 h-96 lg:hover:scale-105">
                                <div className="relative h-64">
                                    <Link href={`/${item.maker_model}`}>
                                        <Image
                                            src={cardphoto}
                                            alt="Car"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t-lg relative"
                                            priority
                                        />
                                    </Link>
                                </div>

                                <div className="px-2 pt-4 flex flex-col gap-4 p-1">
                                    <div className='flex items-baseline justify-between px-2'>
                                        <Link href={`/${item.maker_model}`}>
                                            <p className="text-gray-700 cursor-pointer font-semibold text-[11px] hover:text-red-600 w-fit">{item.maker_model}</p>
                                        </Link>
                                        <p className="text-blue-500 font-bold">₹ {item.price_24_hours * 24}/day</p>
                                    </div>
                                    <div className="flex items-center justify-around border-b border-gray-300 text-black font-normal text-base">
                                        <div className="flex items-center">
                                            <BsFuelPump size={15} className="mr-1" />
                                            <span>{item.fuel_type}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <TbManualGearbox size={15} className="mr-1" />
                                            <span>{item.transmission_type}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <MdOutlineAirlineSeatReclineExtra size={15} className="mr-1" />
                                            <span>{item.seater}</span>
                                        </div>
                                    </div>
                                    <div className='text-black flex justify-center font-semibold'>For Booking</div>
                                    <div className='flex justify-around gap-1 pb-2 text-white'>
                                        <button className='bg-green-500 rounded-full p-2'>
                                            <Link href="https://api.whatsapp.com/send?phone=+9666677405&text=Hi%21" target='_blank'>
                                                <p className=' flex gap-1 text-sm'><span><FaWhatsapp size={20} /></span> <span>Whatsapp</span></p>
                                            </Link>
                                        </button>
                                        <button className='bg-blue-500 rounded-full p-2'>
                                            <Link href="tel:9666677405" target='_blank'>
                                                <p className=' flex gap-1 text-sm'><span><BiPhoneCall size={20} /></span> <span>Call Us</span></p>
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FarmProductLPage