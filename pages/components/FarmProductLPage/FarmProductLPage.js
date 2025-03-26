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
import { RxSlash } from "react-icons/rx";
import apple from '../../images/343reee.webp'
import dzyqr from '../../images/dzyqr.png'
import { FaTentArrowDownToLine } from "react-icons/fa6";
import { IoIosBed } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaAppStore } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLogoPlayStore } from "react-icons/bi";

import { RiArrowDownWideLine } from "react-icons/ri";




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

    const [showDown, setShowDown] = useState(false)
    // function handletoggledownload() {
    //     setShowProof(showDown)
    // }

    return (
        <div>
            <div className="text-sm pl-4 py-4 md:px-20 lg:py-16 text-black">

                <p className="font-semibold text-base mxs:text-lg lg:text-5xl font-poppins">
                    Top Farm Houses In Hyderabad
                </p>
                <p className="md:py-4 py-1 text-sm mxs:text-base lg:text-2xl lg:pb-4 mont-text pt-1">
                    Get Very Low prices Compared To Others
                </p>
            </div>
            <div>
                <div className="flex flex-wrap xl:gap-x-12 xl:gap-y-12 md:gap-x-8 md:gap-y-8 gap-y-8 lg:items-start justify-center  lg:px-20 items-center">
                    {sortedData?.slice(0, count ? sortedData?.length : mobileC ? 10 : 12).map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col xl:w-[360px] lg:w-[260px] w-[97%] md:w-80 h-3/4">
                                <div
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="relative bg-r lpcarousal bg- rounded- overflow-hidden cursor-pointer sliderarrows">
                                    <Slider
                                        dots={false}
                                        infinite={true}
                                        speed={500}
                                        slidesToShow={1}
                                        slidesToScroll={1}
                                        arrows={true}
                                        swipeToSlide={true}
                                        className="lg:rounded-md"
                                        lazyLoad="ondemand"
                                        responsive={[
                                            {
                                                breakpoint: 1024, // for tablets and above
                                                settings: {
                                                    slidesToShow: 1,  // Shows 2 slides on medium screens
                                                    slidesToScroll: 1,
                                                    infinite: true,
                                                    dots: true
                                                }
                                            },
                                            {
                                                breakpoint: 768, // for smaller tablets and below
                                                settings: {
                                                    slidesToShow: 1,  // Shows 1 slide on smaller screens
                                                    slidesToScroll: 1,
                                                    infinite: true,
                                                    dots: true,
                                                }
                                            },
                                            {
                                                breakpoint: 480, // for mobile phones
                                                settings: {
                                                    slidesToShow: 1,  // Shows 1 slide on mobile screens
                                                    slidesToScroll: 1,
                                                    infinite: true,
                                                    dots: true,
                                                    arrows: false
                                                }
                                            }
                                        ]}
                                    >

                                        {(item?.images).map((imageSrc, index) => {
                                            // Check if imageSrc is valid
                                            if (imageSrc) {
                                                return (
                                                    <div
                                                        key={index}
                                                        onClick={(e) => LinkCall(e, `/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`)}
                                                        href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}
                                                    >
                                                        <Image
                                                            className="xl:h-[450px] lg:h-[370px] h-[400px] mxs:h-[450px]"
                                                            height={600}
                                                            width={400}
                                                            alt={"Farm Houses In Hyderabad"}
                                                            src={imageSrc}
                                                            fetchPriority={index == 0 ? "high" : "low"}
                                                            loading={index == 0 ? "eager" : "lazy"}
                                                            sizes="(max-width: 200px) 100vw, 50vw"
                                                        >

                                                        </Image>
                                                    </div>
                                                );
                                            }
                                            // Return null if imageSrc is not valid (i.e., null or empty)
                                            return null;
                                        })}
                                    </Slider>
                                </div>
                                <div className="px- flex flex-col justify-center  gap-4">
                                    <div className="flex items-baseline justify-between px-2">
                                        <div>
                                            <Link onClick={(e) => LinkCall(e, `/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`)} href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}>
                                                <p className="text-gray-900 font-medium text-sm lg:text-md opacity-75 font-Montserrat">Dozzy Farm House</p>
                                            </Link>
                                            <Link
                                                className="text-[#556EE6] xl:text-2xl lg:text-lg text-base font-semibold" href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}
                                            >
                                                {capitalizeFirstLetter(item.property_name.replaceAll(/_/g, " ").replace(/\d+/g, ' ').replaceAll('Dozzy', '').trim().toLowerCase())}
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="flex gap-2 items-center pt-2">
                                                <IoIosBed size={20} className="text-black" />
                                                {/* <Image
                                                    height={1000}
                                                    width={1000}
                                                    alt="apple"
                                                    className="w-7 h-7 scale-105 mxs:scale-100 object-cover"
                                                    src={bed}
                                                    priority={true}
                                                /> */}
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
                                    <div className="text-black text-sm font-semibold flex justify-center ">
                                        For Booking
                                    </div>
                                    <div className="flex flex-col justify-between  text-white">
                                        <ul className="flex justify-center gap-x-8 w-ful px-3">
                                            <li className="bg-green-500 w-32 py-2  text-center rounded-md ">
                                                {" "}
                                                <Link
                                                    href={`https://api.whatsapp.com/send/?phone=919666655973&text=Hi+I+am+looking+for+farmhouse+booking&type=phone_number&app_absent=0`}
                                                    target="_blank"
                                                >
                                                    <p className=" flex gap-1 lg:text-sm text-sm justify-center items-center">
                                                        <span>
                                                            <FaWhatsapp size={20} />
                                                        </span>{" "}
                                                        <span>Whatsapp</span>
                                                    </p>
                                                </Link>
                                            </li>
                                            <li className="bg-blue-500 w-32 py-2 rounded-md ">
                                                <Link href={`tel:9666655973`} target="_blank">
                                                    <p className=" flex gap-1 lg:text-sm text-sm justify-center items-center">
                                                        <span>
                                                            <BiPhoneCall size={20} />
                                                        </span>{" "}
                                                        <span>Call Us</span>
                                                    </p>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div onClick={handleStoreRedirect} className="flex lg:hidden justify-center items-center cursor-pointer text-black py-4 text-lg font-semibold">
                                            {/* <Image
                                                height={500}
                                                width={500}
                                                alt="apple"
                                                className="w-full h-10 scale-105 mxs:scale-100 object-cover"
                                                src={apple}
                                                priority={true}
                                            /> */}
                                            {/* <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Download Dozzy App</p> */}
                                            <p className="bg-gradient-to-r from-green-600 via-[#556ee6] to-indigo-400 inline-block text-transparent bg-clip-text animate-gradient border-[1px] border-[#5566ee] p-2 rounded-md">
                                                Download Dozzy App
                                            </p>

                                        </div>
                                        <div onClick={() => { setShowDown(true) }} className="flex  justify-center items-center cursor-pointer text-black py-4 text-lg font-semibold">
                                            <p className="bg-gradient-to-r from-green-600 via-[#556ee6] to-indigo-400 text-transparent bg-clip-text animate-gradient border-[1px] border-[#5566ee] p-2 rounded-md lg:block hidden">
                                                Download Dozzy App
                                            </p>
                                        </div>
                                        {showDown && (
                                            <div >
                                                <div className='text-black fixed inset-0 backdrop-blur-0 bg-[#1f1f1f] bg-opacity-5 z-50  h-'>
                                                    <div className='flex justify-center items-center '>
                                                        <div className='bg-white absolute top-20 h-[500px] lg:h-[300px] transition-all duration-300 ease-in-out p-8 rounded-lg shadow-md max-w-lg lg:w-[800px] w-[500px]'>
                                                            <button
                                                                onClick={() => {
                                                                    setShowDown(false)
                                                                }}
                                                                className='relative lg:left-96 rounded-full bg-white lg:bottom-20 text-black py-2 px-4 text-xl border-2 border-gray-300 w-10 h-10'
                                                            >
                                                                <span className="relative bottom-1 right-[1px] ">x</span>
                                                            </button>
                                                            <div className="flex gap-3">
                                                                <div>
                                                                    <h2 className="text-base font-semibold text-gray-900">
                                                                        Download the Dozzy App and Book Your Preferred Farmhouse
                                                                    </h2>
                                                                    <ul className="mt-2 text-gray-600">
                                                                        <li>Scan the QR code to get the app from the Play Store or App Store.</li>
                                                                        <li className="flex gap-x-3 pt-3"><FaAppStore className="text-black" size={30} /> <BiLogoPlayStore className="text-black" size={30} /></li>
                                                                    </ul>

                                                                </div>

                                                                <Image
                                                                    src={dzyqr}
                                                                    height={1000}
                                                                    width={1000}
                                                                    alt='dozzy farmhouse logo'
                                                                    className='w-full h-44 object-contain'
                                                                />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className={`${count?.length ? 'hidden' : 'block'} text-center py-4 lg:px-2 px-10 flex justify-center items-center`}>
                <Link onClick={(e) => LinkCall(e, "/explore-all-farmhouses-in-hyderabad")}
                    href="/explore-all-farmhouses-in-hyderabad" className="flex flex-col items-center spinner-border text-lg lg:text-2xl font-bold text-[#556ee6] w-full lg:w-96 py-8 rounded-full capitalize">
                    <p
                        className=""
                    >View all farm houses</p>
                    <RiArrowDownWideLine className="animate-pulse text-black" size={40} />
                </Link>
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
