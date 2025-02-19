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
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";


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
const generateRandomRating = () => {
    return (Math.random() * (5 - 4) + 4).toFixed(1); // Generates a random number between 3 and 5, and fixes it to one decimal place
};
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

    function capitalizeFirstLetter(input) {
        return input
          .split(' ') // Split the string into words
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
          .join(' '); // Join the words back together with spaces
      }
      
      let result = capitalizeFirstLetter("hi iam robot");
      console.log(result,"imrorororo");  // Output: "Hi Iam Robot"
      

    const handleStoreRedirect = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // Redirect to App Store if iOS
            window.open(
                "https://apps.apple.com/in/app/long-drive-cars/id6466695391",
                "_blank"
            );
        } else if (/android/i.test(userAgent)) {
            // Redirect to Play Store if Android
            window.open(
                "https://play.google.com/store/search?q=long+drive+cars&c=apps",
                "_blank"
            );
        } else {
            // Optional: Provide a message for non-mobile devices
            alert("App is available only on mobile devices.");
        }
    };

    
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
                <div className="flex flex-wrap xl:gap-x-12 xl:gap-y-12 lg:gap-x-8 lg:gap-y-8 lg:items-start justify-center lg:justify-normal lg:px-20 items-center">
                    {FHList?.slice(0, count ? FHList?.length : mobileC ? 4 : 6).map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col xl:w-[400px] w-[97%] md:w-80 h-3/4">
                                <div
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="relative lpcarousal rounded-lg overflow-hidden cursor-pointer">
                                    <Carousel
                                        autoPlay={autoPlay}
                                        interval={2000}
                                        infiniteLoop={true}
                                        showThumbs={false}
                                        showStatus={false}
                                        showArrows={true}
                                        transitionTime={1000}
                                    >
                                        {getOrderedImages(item?.images).map((imageSrc, index) => {
                                            // Check if imageSrc is valid
                                            if (imageSrc) {
                                                return (
                                                    <div
                                                        key={index}
                                                        onClick={(e) => LinkCall(e, `/${item.property_name.replace('_Dozzy_', ' ').replace(/\d/g, '')}`)}
                                                        href={`/${item.property_name.toLowerCase().replace(/ /g, "-")}`}
                                                    >
                                                        <Image className="h-[500px]" height={1000} width={1000} alt={"Farm Houses In Hyderabad"} src={imageSrc}></Image>
                                                    </div>
                                                );
                                            }
                                            // Return null if imageSrc is not valid (i.e., null or empty)
                                            return null;
                                        })}
                                    </Carousel>

                                </div>
                                <div className="px- flex flex-col gap-4">
                                    <div className="flex items-baseline justify-between px-2">
                                        <div>
                                            <Link onClick={(e) => LinkCall(e, `/${item.property_name.replace('_Dozzy_', '').replace(/\d/g, '')}-${item.property__id}`)} href={`${item.property_name.replace('_Dozzy_', '').replace(/\d/g, '')}-${item.property__id} `}>
                                                <p className="text-gray-900 font-medium text-sm lg:text-md opacity-75 font-Montserrat">Dozzy Farm House</p>
                                            </Link>
                                            <Link
                                                className="text-[#556EE6] text-2xl font-semibold" href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}
                                            >
                                                {/* Display only the farmhouse name */}
                                                {capitalizeFirstLetter(item.property_name.replaceAll(/_/g, " ").replace(/\d+/g, ' ').replaceAll('Dozzy', '').trim().toLowerCase())}
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="flex gap-2 items-center pt-2">
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
                                    <div className="text-black text-xl font-semibold flex justify-center ">
                                        For Booking
                                    </div>
                                    <div className="flex flex-col justify-between  text-white">
                                        <ul className="flex w-full justify-between">
                                            <li className="bg-green-500 w-full py-2  text-center lg:rounded-none">
                                                {" "}
                                                <Link
                                                    href={`https://api.whatsapp.com/send?phone=+9666655973&text=Hi%0AI%20am%20looking%20for%20a%20farmhouse%20booking.`}
                                                    target="_blank"
                                                >
                                                    <p className=" flex gap-1 lg:text-sm text-lg justify-center items-center">
                                                        <span>
                                                            <FaWhatsapp size={20} />
                                                        </span>{" "}
                                                        <span>Whatsapp</span>
                                                    </p>
                                                </Link>
                                            </li>
                                            <li className="bg-blue-500 w-full py-2 lg:rounded-none">
                                                <Link href={`tel:9666655973`} target="_blank">
                                                    <p className=" flex gap-1 lg:text-sm text-lg justify-center items-center">
                                                        <span>
                                                            <BiPhoneCall size={20} />
                                                        </span>{" "}
                                                        <span>Call Us</span>
                                                    </p>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div
                                            onClick={handleStoreRedirect}
                                            className="cursor-pointer bg-[#001f3d]  py-4 lg:py-2 rounded-b-lg lg:rounded-b-lg  shimmer "
                                        >
                                            <div className="flex justify-around place-items-center   ">
                                                <span className="flex  ">
                                                    <FaGooglePlay className="lg:size-6" size={25} />{" "}
                                                    <RxSlash className="lg:size-5" size={30} />{" "}
                                                    <FaAppStoreIos className="lg:size-6" size={25} />
                                                </span>
                                                <p className=" text-center  font-semibold text-2xl lg:text-xl tracking-wide  ">
                                                    {" "}
                                                    Download App{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className={`${count?.length ? 'hidden' : 'block'} text-center py-12 px-2 `}>

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
