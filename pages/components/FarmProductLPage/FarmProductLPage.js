import React from 'react'
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import farm1 from '../../images/farmhouse/shan.jpg'
import farm2 from '../../images/farmhouse/cheritanfarmhouse.jpg'
import farm3 from '../../images/farmhouse/Sakethvanam.jpg'
import farm4 from '../../images/farmhouse/Urban.jpg'
const FarmProductLPage = () => {
    const [visibleItems, setVisibleItems] = useState(7);
    const replaceText = (str) => {
        return str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls3', 'https://d10uth61hedy2t.cloudfront.net');
    };
    const filteredData = [
        {
            maker_model: 'Cheritan Farm House',
            car_owner_id: 5,
            car_number: 'TS28Q1467',
            price_24_hours: 1500,
            car_image_car_right_view: farm1, // Use imported image directly
            fuel_type: 'Petrol',
            transmission_type: 'Manual',
            seater: '5',
            vehicle_color: 'Blue',
        },
        {
            maker_model: 'Saketh Vanam',
            car_owner_id: 9,
            car_number: 'TS05FC6005',
            price_24_hours: 1500,
            car_image_car_right_view: farm2,
            fuel_type: 'Diesel',
            transmission_type: 'Manual',
            seater: '5',
            vehicle_color: 'Grey',
        },
        {
            maker_model: 'Srinivasa Farm House',
            car_owner_id: 10,
            car_number: 'AP40F8748',
            price_24_hours: 1500,
            car_image_car_right_view: farm3,
            fuel_type: 'Petrol',
            transmission_type: 'Manual',
            seater: '5',
            vehicle_color: 'Grey',
        },
        {
            maker_model: 'Urban Farm House',
            car_owner_id: 11,
            car_number: 'AP39SZ5981',
            price_24_hours: 1500,
            car_image_car_right_view: farm4,
            fuel_type: 'Petrol',
            transmission_type: 'Manual',
            seater: '5',
            vehicle_color: 'Blue',
        },
    ];
   
    return (
        <div>
            <div className='text-sm pl-4 py-4 md:px-12'>
                <p className='font-bold md:text-xl'>Farm House In Hyderbad</p>
                <p className='md:py-4'>Get Very Low  prices Compared To Others</p>
            </div>
            <div>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 items-center xs:justify-center lg:max-w-7xl">
                    {filteredData?.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:w-72 w-[97%]  xs:w-[90%] md:w-80 h-96 lg:hover:scale-105">
                                <div className="relative h-64">
                                    <Link href={`/${item.maker_model}`}>
                                        <Image
                                            src={item.car_image_car_right_view}
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
                                        {/* <Link href={`/${item.maker_model}`}>
                                            <p className="text-gray-700 cursor-pointer font-semibold text-sm hover:text-red-600 w-fit">{item.maker_model}</p>
                                        </Link> */}
                                        <p className='text-[#556EE6]'>Dozzy</p>
                                        <p className="text-black font-bold">₹ {item.price_24_hours}/day</p>
                                    </div>
                                    <div className='flex justify-between px-2'>
                                        <Link href={`/${item.maker_model}`}>
                                            <p className="text-gray-700 cursor-pointer font-semibold text-sm hover:text-red-600 w-fit">{item.maker_model}</p>
                                        </Link>
                                        {/* <p className='text-[#556EE6]'>Dozzy</p> */}
                                        <p className="text-black font-bold flex flex-col text-[8px]"><span>2000 % /1 Day</span><span>5000 % /1 Day</span></p>
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