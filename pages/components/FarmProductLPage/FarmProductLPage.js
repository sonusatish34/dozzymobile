import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkCall from "../LinkCall";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { BsStarFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoBedSharp } from "react-icons/io5";



import skfarm1 from "../../images/saketh/1.webp"
import skfarm2 from "../../images/saketh/2.webp"
import skfarm3 from "../../images/saketh/3.webp"
import skfarm4 from "../../images/saketh/4.webp"
import skfarm5 from "../../images/saketh/5.webp"
import skfarm6 from "../../images/saketh/6.webp"
import skfarm7 from "../../images/saketh/7.webp"
import skfarm8 from "../../images/saketh/8.webp"

import shfarm1 from "../../images/shan/1.webp"
import shfarm2 from "../../images/shan/2.webp"
import shfarm3 from "../../images/shan/3.webp"

import srfarm1 from "../../images/srinivasa/1.webp"
import srfarm2 from "../../images/srinivasa/2.webp"
import srfarm3 from "../../images/srinivasa/3.webp"

import zfarm1 from "../../images/zoozoo/1.webp"
import zfarm2 from "../../images/zoozoo/2.webp"
import zfarm3 from "../../images/zoozoo/3.webp"

import ty1 from '../../images/tyb/1.webp'
import ty2 from '../../images/tyb/2.webp'
import ty3 from '../../images/tyb/3.webp'

import a1 from '../../images/a1/1.webp'
import a2 from '../../images/a1/2.webp'
import a3 from '../../images/a1/3.webp'

import alsafa1 from '../../images/alsafa/1.webp'
import alsafa2 from '../../images/alsafa/2.webp'
import alsafa3 from '../../images/alsafa/3.webp'

import courtyard1 from '../../images/courtyard/1.webp'
import courtyard2 from '../../images/courtyard/2.webp'
import courtyard3 from '../../images/courtyard/3.webp'

import holiday1 from '../../images/holiday/1.webp'
import holiday2 from '../../images/holiday/2.webp'
import holiday3 from '../../images/holiday/3.webp'
import holiday4 from '../../images/holiday/4.webp'
import holiday5 from '../../images/holiday/5.webp'
import holiday6 from '../../images/holiday/6.webp'
import holiday7 from '../../images/holiday/7.webp'
import holiday8 from '../../images/holiday/8.webp'

import nbr1 from '../../images/nbr/1.webp'
import nbr2 from '../../images/nbr/2.webp'
import nbr3 from '../../images/nbr/3.webp'

import pleasant1 from '../../images/pleasant/1.webp'
import pleasant2 from '../../images/pleasant/2.webp'
import pleasant3 from '../../images/pleasant/3.webp'

import serinity1 from '../../images/serinity/1.webp'
import serinity2 from '../../images/serinity/2.webp'
import serinity3 from '../../images/serinity/3.webp'

import sp1 from '../../images/sp/1.webp'
import sp2 from '../../images/sp/2.webp'
import sp3 from '../../images/sp/3.webp'

import taksh1 from '../../images/taksh/1.webp'
import taksh2 from '../../images/taksh/2.webp'
import taksh3 from '../../images/taksh/3.webp'

import starbh1 from '../../images/starbh/1.webp'
import starbh2 from '../../images/starbh/2.webp'
import starbh3 from '../../images/starbh/3.webp'

import starling1 from '../../images/starling/1.webp'
import starling2 from '../../images/starling/2.webp'
import starling3 from '../../images/starling/3.webp'

import rajes1 from '../../images/rajes/1.webp'
import rajes2 from '../../images/rajes/2.webp'
import rajes3 from '../../images/rajes/3.webp'

import sskf1 from '../../images/sravan/1.webp'
import sskf2 from '../../images/sravan/2.webp'
import sskf3 from '../../images/sravan/3.webp'
import sskf4 from '../../images/sravan/4.webp'
import sskf5 from '../../images/sravan/5.webp'
import sskf6 from '../../images/sravan/6.webp'
import sskf7 from '../../images/sravan/7.webp'
import sskf8 from '../../images/sravan/8.webp'


import arush1 from '../../images/arush/1.webp'
import arush2 from '../../images/arush/2.webp'
import arush3 from '../../images/arush/3.webp'
import arush4 from '../../images/arush/4.webp'
import arush5 from '../../images/arush/5.webp'
import arush6 from '../../images/arush/6.webp'
import arush7 from '../../images/arush/7.webp'
import arush8 from '../../images/arush/8.webp'

import ram1 from '../../images/4ram/1.webp'
import ram2 from '../../images/4ram/2.webp'
import ram3 from '../../images/4ram/3.webp'

import svr1 from "../../images/svrp/1.webp"
import svr2 from "../../images/svrp/2.webp"
import svr3 from "../../images/svrp/3.webp"
import svr4 from "../../images/svrp/4.webp"
import svr5 from "../../images/svrp/5.webp"
import svr6 from "../../images/svrp/6.webp"
import svr7 from "../../images/svrp/7.webp"
import svr8 from "../../images/svrp/8.webp"

import asn1 from "../../images/asn/1.webp"
import asn2 from "../../images/asn/2.webp"
import asn3 from "../../images/asn/3.webp"
import asn4 from "../../images/asn/4.webp"
import asn5 from "../../images/asn/5.webp"
import asn6 from "../../images/asn/6.webp"
import asn7 from "../../images/asn/7.webp"
import asn8 from "../../images/asn/8.webp"


import bgy1 from "../../images/bgy/1.webp"
import bgy2 from "../../images/bgy/2.webp"
import bgy3 from "../../images/bgy/3.webp"
import bgy4 from "../../images/bgy/4.webp"
import bgy5 from "../../images/bgy/5.webp"
import bgy6 from "../../images/bgy/6.webp"
import bgy7 from "../../images/bgy/7.webp"
import bgy8 from "../../images/bgy/8.webp"

import bom1 from "../../images/bamboo/1.webp"
import bom2 from "../../images/bamboo/2.webp"
import bom3 from "../../images/bamboo/3.webp"


import box1 from "../../images/box/1.webp"
import box2 from "../../images/box/2.webp"
import box3 from "../../images/box/3.webp"
import box4 from "../../images/box/4.webp"
import box5 from "../../images/box/5.webp"
import box6 from "../../images/box/6.webp"
import box7 from "../../images/box/7.webp"
import box8 from "../../images/box/8.webp"


import pb1 from "../../images/pb/1.webp"
import pb2 from "../../images/pb/2.webp"
import pb3 from "../../images/pb/3.webp"
import pb4 from "../../images/pb/4.webp"
import pb5 from "../../images/pb/5.webp"
import pb6 from "../../images/pb/6.webp"
import pb7 from "../../images/pb/7.webp"
import pb8 from "../../images/pb/8.webp"

import sb1 from "../../images/sb/1.webp"
import sb2 from "../../images/sb/2.webp"
import sb3 from "../../images/sb/3.webp"
import sb4 from "../../images/sb/4.webp"
import sb5 from "../../images/sb/5.webp"
import sb6 from "../../images/sb/6.webp"
import sb7 from "../../images/sb/7.webp"
import sb8 from "../../images/sb/8.webp"


import py1 from "../../images/py/1.webp"
import py2 from "../../images/py/2.webp"
import py3 from "../../images/py/3.webp"
import py4 from "../../images/py/4.webp"
import py5 from "../../images/py/5.webp"
import py6 from "../../images/py/6.webp"
import py7 from "../../images/py/7.webp"
import py8 from "../../images/py/8.webp"


import Head from "next/head";

import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const FarmProductLPage = ({ count, FHList }) => {

    const [mobileC, setMobileC] = useState(false)
    useEffect(() => {

        if (window.innerWidth < 700) {
            setMobileC(true);
        }
    }, [])
    const router = useRouter();
    const [autoPlay, setAutoPlay] = useState(false);

    const handleMouseEnter = useCallback(() => {
        setAutoPlay(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setAutoPlay(false);
    }, []);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay or async operation
        const loadData = async () => {
            // Set loading to true to show the loader
            setLoading(true);

            // Simulate loading delay
            await new Promise((resolve) => setTimeout(resolve, 300)); // 3 seconds

            // After data is loaded, set loading to false to hide the loader
            setLoading(false);
        };

        loadData();
    }, []);


    useEffect(() => {
        // Refresh the page on route change
        const handleRouteChange = () => {
            window.location.reload();
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        // Cleanup the event listener when the component is unmounted
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router]);


    const filteredData = [

        // {
        //     property_name: "SSK",
        //     price_24_hours: 17000,
        //     farm_image: { c1: sskf1, c2: sskf2, c3: sskf3, c4: sskf4, c5: sskf5, c6: sskf6, c7: sskf7, c8: sskf8, },
        //     weekdays: { oneday: "17000", twoday: "34000" },
        //     weekends: { oneday: "17000", twoday: "34000" },
        //     rating: "4.6",
        //     no_bed: "2",
        // },

        {
            property_name: "Arush Agri",
            price_24_hours: 20000,
            farm_image: { c1: arush1, c2: arush2, c3: arush3, c4: arush4, c5: arush5, c6: arush6, c7: arush7, c8: arush8, },
            weekdays: { oneday: "10000", twoday: "20000" },
            weekends: { oneday: "20000", twoday: "40000" },
            rating: "4.8",
            alt: "Luxury Farmhouses in Shamshabad ",
            no_bed: "3",
        },

        {
            property_name: "Saketh Vanam",
            price_24_hours: 17000,
            farm_image: { c1: skfarm1, c2: skfarm2, c3: skfarm3, c4: skfarm4, c5: skfarm5, c6: skfarm6, c7: skfarm7, c8: skfarm8, },
            weekdays: { oneday: "10000", twoday: "20000" },
            weekends: { oneday: "17000", twoday: "34000" },
            rating: "4.5",
            alt: "Luxury Farmhouses in Shamshabad ",
            no_bed: "3",
        },

        {
            property_name: "BGY",
            price_24_hours: 17000,
            farm_image: { c1: bgy1, c2: bgy2, c3: bgy3, c4: bgy4, c5: bgy5, c6: bgy6, c7: bgy7, c8: bgy8, },
            weekdays: { oneday: "12000", twoday: "24000" },
            weekends: { oneday: "17000", twoday: "34000" },
            rating: "4.6",
            alt: "Luxury Farmhouses in Shamshabad ",
            no_bed: "2",
        },

        {
            property_name: "BOXED SERENITY",
            price_24_hours: 20000,
            farm_image: { c1: box1, c2: box2, c3: box3, c4: box4, c5: box5, c6: box6, c7: box7, c8: box8, },
            weekdays: { oneday: "10000", twoday: "20000" },
            weekends: { oneday: "20000", twoday: "40000" },
            rating: "4.8",
            alt: "Luxury Farmhouses in Shamshabad  ",
            no_bed: "3",
        },

        {
            property_name: "SB Farmhouse",
            price_24_hours: 15000,
            farm_image: { c1: sb1, c2: sb2, c3: sb3, c4: sb4, c5: sb5, c6: sb6, c7: sb7, c8: sb8, },
            weekdays: { oneday: "10000", twoday: "20000" },
            weekends: { oneday: "15000", twoday: "30000" },
            rating: "4.6",
            alt: "Luxury Farmhouses in MOINABAD  ",
            no_bed: "4",
        },

        {
            property_name: "PB Farmhouse",
            price_24_hours: 15000,
            farm_image: { c1: pb1, c2: pb2, c3: pb3, c4: pb4, c5: pb5, c6: pb6, c7: pb7, c8: pb8, },
            weekdays: { oneday: "10000", twoday: "20000" },
            weekends: { oneday: "15000", twoday: "30000" },
            rating: "4.6",
            alt: "Luxury Farmhouses in Shamshabad  ",
            no_bed: "2",
        },

        {
            property_name: "Holiday",
            price_24_hours: 10000,
            farm_image: { c1: holiday1, c2: holiday2, c3: holiday3, c4: holiday4, c5: holiday5, c6: holiday6, c7: holiday7, c8: holiday8, },
            weekdays: { oneday: "6000", twoday: "12000" },
            weekends: { oneday: "10000", twoday: "20000" },
            rating: "4.3",
            alt: "Luxury Farmhouses in  Moinabad",
            no_bed: "2",
        },

        {
            property_name: "svr peacock view",
            price_24_hours: 12000,
            farm_image: { c1: svr1, c2: svr2, c3: svr3, c4: svr4, c5: svr5, c6: svr6, c7: svr7, c8: svr8, },
            weekdays: { oneday: "8000", twoday: "16000" },
            weekends: { oneday: "12000", twoday: "24000" },
            rating: "4.6",
            no_bed: "2",
        },

        {
            property_name: "ASN Farmhouse",
            price_24_hours: 12000,
            farm_image: { c1: asn1, c2: asn2, c3: asn3, c4: asn4, c5: asn5, c6: asn6, c7: asn7, c8: asn8, },
            weekdays: { oneday: "6000", twoday: "12000" },
            weekends: { oneday: "10000", twoday: "20000" },
            rating: "4.6",
            no_bed: "2",
        },

        {
            property_name: "PY Farmhouse",
            price_24_hours: 12000,
            farm_image: { c1: py1, c2: py2, c3: py3, c4: py4, c5: py5, c6: py6, c7: py7, c8: py8, },
            weekdays: { oneday: "8000", twoday: "16000" },
            weekends: { oneday: "12000", twoday: "24000" },
            rating: "4.3",
            alt: "Luxury Farmhouses in  Moinabad",
            no_bed: "2",
        },




    ];
    const getOrderedImages = (attributes) => {
        const imageMap = {};
        attributes.forEach((attr) => {
            imageMap[attr.attribute_name] = attr.attribute_value;
        });

        return [
            imageMap["farmhouse_front_view"],
            imageMap["building_outside_pic_1"],
            imageMap["swimming_pool_pic_1"],
            imageMap["bedroom_1_0"],
            imageMap["night_bedroom_1_0"],
            imageMap["night_garden_pic_1"],
        ];
    };

    return (
        <div>
            <div className="text-sm pl-4 py-4 md:px-20 lg:py-16 text-black">

                <p className="font-semibold md:text-xl lg:text-5xl font-poppins">
                    Top Farm Houses In Hyderbad
                </p>
                <p className="md:py-4 lg:text-2xl lg:pb-4 mont-text">
                    Get Very Low prices Compared To Others
                </p>
            </div>
            <div>
                <div className="flex flex-wrap gap-x-8 gap-y-8 lg:items-start justify-center lg:pl-12 items-center">
                    {FHList?.slice(0, count ? FHList?.length : mobileC ? 4 : 6).map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:w-[400px] w-[97%] md:w-80 h-full">
                                <div
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="relative crsldetails rounded-lg overflow-hidden cursor-pointer">

                                    <Carousel
                                        autoPlay={autoPlay}
                                        interval={2000}
                                        infiniteLoop={true}
                                        showThumbs={false}
                                        showStatus={false}
                                        showArrows={true}
                                        transitionTime={1000}
                                    >
                                        {getOrderedImages(item?.images).map(
                                            (imageSrc, index) => (
                                                <div key={index} onClick={(e) => LinkCall(e, `/${item.property_name.replace('_Dozzy_', ' ').replace(/\d/g, '')}`)} href={`/${item.property_name.toLowerCase().replace(/ /g, "-")}`}>
                                                    {<Image height={1000} width={1000} alt={"Farm Houses In Hyderbad"} src={imageSrc} ></Image>}
                                                </div>
                                            )
                                        )}

                                    </Carousel>
                                </div>
                                <div className="px-2 flex flex-col gap-4 p-1">
                                    <div className="flex items-baseline justify-between px-2">
                                        <div>
                                            <Link onClick={(e) => LinkCall(e, `/${item.property_name.replace('_Dozzy_', '').replace(/\d/g, '')}-${item.property__id}`)} href={`${item.property_name.replace('_Dozzy_', '').replace(/\d/g, '')}-${item.property__id} `}>
                                                <p className="text-gray-900 font-medium text-sm lg:text-md opacity-75 font-Montserrat">Dozzy Farm House</p>
                                            </Link>
                                            <Link
                                                className="text-blue-500" href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}
                                            >
                                                {/* Display only the farmhouse name */}
                                                {item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}
                                            </Link>

                                        </div>
                                        <div className="pt-2">
                                            <div className="flex gap-2 items-center">
                                                <IoBedSharp size={20} className="text-[#935732]" />
                                                <p className="text-black">{item?.no_of_bedrooms} BHK</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="font-normal text-sm">
                                        <div className="flex items-baseline justify-between px-2">
                                            <p className="text-black">Sun-Fri</p>
                                            <p className="text-[#556EE6]">₹ {item.property_price} /Day</p>
                                        </div>
                                        <div className="flex items-baseline justify-between px-2">
                                            <p className="text-black">Sat</p>
                                            <p className="text-[#556EE6]">₹ {item.weekend_price} /Day</p>
                                        </div>
                                    </div>
                                    <div className="text-black flex justify-center font-semibold">
                                        For Booking
                                    </div>
                                    <div className="flex justify-between gap-1 text-white ">
                                        <ul className="text-black flex w-full justify-between gap-5">
                                            <li className="bg-green-500 w-full p-2 rounded-bl-md text-center text-white border-[1px] border-black">
                                                {" "}
                                                <Link
                                                    onClick={(e) => LinkCall(e, "https://api.whatsapp.com/send?phone=+9666655973&text=Hi%0AI%20am%20looking%20for%20a%20farmhouse%20booking.")}
                                                    href="https://api.whatsapp.com/send?phone=+9666655973&text=Hi%0AI%20am%20looking%20for%20a%20farmhouse%20booking."
                                                    target="_blank"
                                                >
                                                    <p className=" flex gap-1 text-sm justify-center">
                                                        <span>
                                                            <FaWhatsapp size={20} />
                                                        </span>{" "}
                                                        <span>Whatsapp</span>
                                                    </p>
                                                </Link>
                                            </li>
                                            <li className="bg-blue-500 w-full p-2 rounded-br-md text-white border-[1px] border-black">
                                                {" "}
                                                <Link onClick={(e) => LinkCall(e, "tel:9666655973")} href="tel:9666655973" target="_blank">
                                                    <p className=" flex gap-1 text-sm justify-center">
                                                        <span>
                                                            <BiPhoneCall size={20} />
                                                        </span>{" "}
                                                        <span>Call Us</span>
                                                    </p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className={`${count?.length ? 'hidden' : 'block'} text-center px-6 pb-10 pt-8`}>

                <button className="bg-[#4508a6] spinner-border text-xl font-bold text-white w-full lg:w-96 py-4 rounded-full">
                    <Link
                        onClick={(e) => LinkCall(e, "/explore-all-farmhouses-in-hyderabad")}
                        href="/explore-all-farmhouses-in-hyderabad"
                    >View all farm houses</Link>
                </button>

            </div>
            {loading && <div className="text-center py-4">
                <div className="fixed inset-0 bg-white flex items-center justify-center z-50 opacity-90">
                    <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
                </div>
            </div>}

        </div>
    );

};

export default FarmProductLPage;
