import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkCall from "../LinkCall";
import { useState, useRef } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import dzyqr from "../../images/dzyqr.png";
import { IoIosBed } from "react-icons/io";
import { FaAppStore } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { RiArrowDownWideLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import PopUp from "../Popup";
const FarmProductLPage = ({ count, FHList }) => {

    const sortedData = FHList?.sort(
        (a, b) => a.property_price - b.property_price
    );

    function capitalizeFirstLetter(input) {
        return input
            .split(" ") // Split the string into words
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
            .join(" "); // Join the words back together with spaces
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

    const [showDown, setShowDown] = useState(false);

    const groupByPrice = sortedData?.reduce((acc, curr) => {
        const price = curr?.property_price;
        if (!acc[price]) {
            acc[price] = [];
        }
        acc[price].push(curr);
        return acc;
    }, {});

    const TimeCard = ({ price, hrs, checkin, checkout }) => {
        return (
            <div className="flex justify-between font-normal text-xs ">
                <div className="flex flex-col gap-y-2 border-2 border-gray-300 rounded-lg p-1">
                    <div><p className="underline tracking-wide text-xs mxs:text-sm text-[#556EE6]">{price} / {hrs} hrs</p></div>
                    <div className="flex items-center text-center gap-x-1 text-[7px] mxs:text-[9px]">
                        <ul>
                            <li>{checkin}</li>
                            <li>check - in</li>
                        </ul>
                        <ul >
                            <li className="borde=">{checkout}</li>
                            <li>check - out</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div>
                {groupByPrice && typeof groupByPrice === 'object' && Object?.keys(groupByPrice)
                    .sort((a, b) => a - b)
                    ?.map((priceKey) => (
                        <div
                            key={priceKey}
                            className="slider-container flex flex-col gap-y- justify-center h-fit mx-auto pt-4 py-3"
                        >
                            {groupByPrice[priceKey].length > 1 ?
                                <div>
                                    {priceKey === "10000" &&
                                        <div className="pb-10">
                                            <Image
                                                className="h-fit"
                                                src={'/offers/1rpdozzy.webp'}
                                                alt={"postDisplay?.cialt"}
                                                width={1000}
                                                height={1000}
                                            />
                                        </div>
                                    }
                                    {priceKey === "15000" &&
                                        <div className="pb-10">
                                            <Image
                                                className="h-fit"
                                                src={'/offers/newuserdozzy.webp'}
                                                alt={"postDisplay?.cialt"}
                                                width={1000}
                                                height={1000}
                                            />
                                        </div>
                                    }
                                    <Swiper
                                        modules={[Autoplay]}
                                        loop={true}
                                        autoplay={{
                                            delay: 208800,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true,
                                        }}
                                        slidesPerView={1}
                                        onTouchStart={(swiper) => swiper.autoplay.stop()}
                                        onTouchEnd={(swiper) => swiper.autoplay.start()}
                                        style={{ maxWidth: "800px", margin: "auto" }}
                                    >
                                        {groupByPrice[priceKey].map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <React.Fragment >
                                                    <div className="bg-red-2 rounded-lg shadow-lg overflow-hidden flex justify-center flex-col xl:w-[360px] lg:w-[260px] w-[100%] px-1 md:w-80 h-[680px] rounded-t-lg ">
                                                        <div
                                                            key={index}
                                                            onClick={(e) => LinkCall(e, `/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`)}
                                                            href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}
                                                        >
                                                            <Image
                                                                className="rounded-t-lg xl:h-[410px] lg:h-[370px] h-[395px] mxs:h-[400px] object-cover"
                                                                src={item?.images[0]}
                                                                alt={"postDisplay?.cialt"}
                                                                width={2000}
                                                                height={2000}
                                                            />
                                                        </div>
                                                        <div className="px- flex flex-col justify-center  gap-4">
                                                            <div className="flex items-baseline justify-between px-2 py-2">
                                                                <div>

                                                                    <Link
                                                                        className="text-[#556EE6] xl:text-2xl lg:text-lg text-base font-semibold uppercase" href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}
                                                                    >
                                                                        {(item.property_name.replaceAll(/_/g, " ").replace(/\d+/g, ' ').replaceAll('Dozzy', '').trim().toLowerCase())}
                                                                    </Link>
                                                                    <Link onClick={(e) => LinkCall(e, `/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`)} href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}>
                                                                        <p className="text-gray-900 text-xs lg:text-md opacity-75 font-Montserrat">Book in Dozzy App</p>
                                                                    </Link>
                                                                </div>
                                                                <div>
                                                                    <div className="flex flex-col gap-2 text-[10px] items-center pt-2">
                                                                        <p><span className="text-blue-500">500</span> Added in Dozzy Wallet</p>
                                                                        <p className="text-black">Use 500 for First Booking</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between px-2">
                                                                <TimeCard price={item.customer_night_prices} hrs={'11'} checkin={'9am'} checkout={'8pm'} />
                                                                <TimeCard price={item.customer_night_prices} hrs={'11'} checkin={'9pm'} checkout={'8am'} />
                                                                <TimeCard price={item.property_price} hrs={'11'} checkin={'12pm'} checkout={'10am'} />

                                                            </div>

                                                            <div className="flex flex-col justify-between  text-white">
                                                                <ul className="flex justify-center gap-x-1 w-full px-3 pb-4">
                                                                    <li className="bg-[#74C184] w-full py-3 px-2  text-center rounded-md ">
                                                                        {" "}
                                                                        <Link
                                                                            href={`https://api.whatsapp.com/send/?phone=919666655973&text=Hi+I+am+looking+for+farmhouse+booking&type=phone_number&app_absent=0`}
                                                                            target="_blank"
                                                                        >
                                                                            <p className=" flex gap-1 lg:text-sm text-xs justify-center items-center">
                                                                                <span>
                                                                                    <FaWhatsapp size={20} />
                                                                                </span>{" "}
                                                                                <span>Whatsapp Us</span>
                                                                            </p>
                                                                        </Link>
                                                                    </li>
                                                                    <li className="bg-[#556EE6] w-full py-3 px-2 rounded-md ">
                                                                        <Link href={`tel:9666655973`} target="_blank">
                                                                            <p className=" flex gap-1 lg:text-sm text-xs justify-center items-center">
                                                                                <span>
                                                                                    <BiPhoneCall size={20} />
                                                                                </span>{" "}
                                                                                <span>Call Us</span>
                                                                            </p>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                                <div onClick={handleStoreRedirect} className="flex lg:hidden justify-center items-center cursor-pointer text-white text-lg font- bg-[#102E50] py-2 rounded-b-lg ">
                                                                    <p className="text-[11px]">
                                                                        To View More Farm houses Download Dozzy App
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
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div> :
                                groupByPrice[priceKey].map((item, index) => (
                                    <React.Fragment >
                                                    <div className="bg-red-2 rounded-lg shadow-lg  flex justify-center flex-col xl:w-[360px] lg:w-[260px] w-[100%] px-1 md:w-80 h-[680px] rounded-t-lg ">
                                                        <div
                                                            key={index}
                                                            onClick={(e) => LinkCall(e, `/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`)}
                                                            href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}
                                                        >
                                                            <Image
                                                                className="rounded-t-lg xl:h-[410px] lg:h-[370px] h-[395px] mxs:h-[400px] object-cover"
                                                                src={item?.images[0]}
                                                                alt={"postDisplay?.cialt"}
                                                                width={2000}
                                                                height={2000}
                                                            />
                                                        </div>
                                                        <div className="px- flex flex-col justify-center  gap-4">
                                                            <div className="flex items-baseline justify-between px-2 py-2">
                                                                <div>

                                                                    <Link
                                                                        className="text-[#556EE6] xl:text-2xl lg:text-lg text-base font-semibold uppercase" href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}
                                                                    >
                                                                        {(item.property_name.replaceAll(/_/g, " ").replace(/\d+/g, ' ').replaceAll('Dozzy', '').trim().toLowerCase())}
                                                                    </Link>
                                                                    <Link onClick={(e) => LinkCall(e, `/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`)} href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}>
                                                                        <p className="text-gray-900 text-xs lg:text-md opacity-75 font-Montserrat">Book in Dozzy App</p>
                                                                    </Link>
                                                                </div>
                                                                <div>
                                                                    <div className="flex flex-col gap-2 text-[10px] items-center pt-2">
                                                                        <p><span className="text-blue-500">500</span> Added in Dozzy Wallet</p>
                                                                        <p className="text-black">Use 500 for First Booking</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between px-2">
                                                                <TimeCard price={item.customer_night_prices} hrs={'11'} checkin={'9am'} checkout={'8pm'} />
                                                                <TimeCard price={item.customer_night_prices} hrs={'11'} checkin={'9pm'} checkout={'8am'} />
                                                                <TimeCard price={item.property_price} hrs={'24'} checkin={'12pm'} checkout={'10am'} />

                                                            </div>

                                                            <div className="flex flex-col justify-between  text-white">
                                                                <ul className="flex justify-center gap-x-1 w-full px-3 pb-4">
                                                                    <li className="bg-[#74C184] w-full py-3 px-2  text-center rounded-md ">
                                                                        {" "}
                                                                        <Link
                                                                            href={`https://api.whatsapp.com/send/?phone=919666655973&text=Hi+I+am+looking+for+farmhouse+booking&type=phone_number&app_absent=0`}
                                                                            target="_blank"
                                                                        >
                                                                            <p className=" flex gap-1 lg:text-sm text-xs justify-center items-center">
                                                                                <span>
                                                                                    <FaWhatsapp size={20} />
                                                                                </span>{" "}
                                                                                <span>Whatsapp Us</span>
                                                                            </p>
                                                                        </Link>
                                                                    </li>
                                                                    <li className="bg-[#556EE6] w-full py-3 px-2 rounded-md ">
                                                                        <Link href={`tel:9666655973`} target="_blank">
                                                                            <p className=" flex gap-1 lg:text-sm text-xs justify-center items-center">
                                                                                <span>
                                                                                    <BiPhoneCall size={20} />
                                                                                </span>{" "}
                                                                                <span>Call Us</span>
                                                                            </p>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                                <div onClick={handleStoreRedirect} className="flex lg:hidden justify-center items-center cursor-pointer text-white text-lg font- bg-[#102E50] py-2 rounded-b-lg ">
                                                                    <p className="text-[11px]">
                                                                        To View More Farm houses Download Dozzy App
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
                    ))}
                <PopUp />
            </div>
        </>
    );
};

export default FarmProductLPage;
