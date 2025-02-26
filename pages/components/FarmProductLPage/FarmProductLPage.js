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
import apple from '../../images/343reee.webp'
import google from '../../images/ggle.webp'


import Head from "next/head";

import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const FarmProductLPage = ({ count, FHList }) => {
    const sortedData = FHList?.sort(
        (a, b) => b.property_price - a.property_price
    );

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
            imageMap["garden_pic_1"]
        ];
    };

    return (
        <div>
            <div className="text-sm pl-4 py-4 md:px-20 lg:py-16 text-black">

                <p className="font-semibold text-base mxs:text-lg lg:text-5xl font-poppins">
                    Top Farm Houses In Hyderbad
                </p>
                <p className="md:py-4 py-1 text-sm mxs:text-base lg:text-2xl lg:pb-4 mont-text pt-1">
                    Get Very Low prices Compared To Others
                </p>
            </div>
            <div>
                <div className="flex flex-wrap xl:gap-x-12 xl:gap-y-12 lg:gap-x-8 lg:gap-y-8 gap-y-8 lg:items-start justify-center  lg:px-20 items-center">
                    {sortedData?.slice(0, count ? sortedData?.length : mobileC ? 10 : 12).map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col xl:w-[360px] lg:w-[260px] w-[97%] md:w-80 h-3/4">
                                <div
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="relative lpcarousal rounded- overflow-hidden cursor-pointer">
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
                                                        onClick={(e) => LinkCall(e, `/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`)}
                                                        href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}
                                                    >
                                                        <Image className="xl:h-[450px] lg:h-[370px] h-[400px]" height={1000} width={1000} alt={"Farm Houses In Hyderabad"} src={imageSrc}></Image>
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
                                            <Link onClick={(e) => LinkCall(e, `/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`)} href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}>
                                                <p className="text-gray-900 font-medium text-sm lg:text-md opacity-75 font-Montserrat">Dozzy Farm House</p>
                                            </Link>
                                            <Link
                                                className="text-[#556EE6] xl:text-2xl lg:text-lg font-semibold" href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}
                                            >
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
                                            <p className="text-black">Other Days</p>
                                            <p className="text-[#556EE6]">₹ {item.property_price} /Day</p>
                                        </div>
                                        <div className="flex items-baseline justify-between px-2">
                                            <p className="text-black">Saturday</p>
                                            <p className="text-[#556EE6]">₹ {item.weekend_price} /Day</p>
                                        </div>
                                    </div>
                                    <div className="text-black text-xl font-semibold flex justify-center ">
                                        For Booking
                                    </div>
                                    <div className="flex flex-col justify-between  text-white">
                                        <ul className="flex w-full justify-between">
                                            <li className="bg-green-500 w-full py-1  text-center lg:rounded-none">
                                                {" "}
                                                <Link
                                                    href={`https://api.whatsapp.com/send?phone=+9666655973&text=Hi%0AI%20am%20looking%20for%20a%20farmhouse%20booking.`}
                                                    target="_blank"
                                                >
                                                    <p className=" flex gap-1 lg:text-sm text-base justify-center items-center">
                                                        <span>
                                                            <FaWhatsapp size={20} />
                                                        </span>{" "}
                                                        <span>Whatsapp</span>
                                                    </p>
                                                </Link>
                                            </li>
                                            <li className="bg-blue-500 w-full py-1 lg:rounded-none">
                                                <Link href={`tel:9666655973`} target="_blank">
                                                    <p className=" flex gap-1 lg:text-sm text-base justify-center items-center">
                                                        <span>
                                                            <BiPhoneCall size={20} />
                                                        </span>{" "}
                                                        <span>Call Us</span>
                                                    </p>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div onClick={handleStoreRedirect} className="flex justify-center lg:justify-normal items-center h- cursor-pointer">
                                            <Image
                                                height={500}
                                                width={500}
                                                alt="apple"
                                                className="w-full h-10 scale-105 mxs:scale-100 object-cover"
                                                src={apple}
                                                priority={true}
                                            />

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className={`${count?.length ? 'hidden' : 'block'} text-center py-12 lg:px-2 px-10 `}>

                <button className="bg-[#4508a6] spinner-border lg:text-xl font-bold text-white w-full lg:w-96 py-4 rounded-full">
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
