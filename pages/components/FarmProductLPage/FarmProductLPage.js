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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLogoPlayStore } from "react-icons/bi";
import { RiArrowDownWideLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import PopUp from "../Popup";
const FarmProductLPage = ({ count, FHList }) => {


    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;

        const handleTouchStart = () => {
            slider?.slickPause?.();
        };

        const handleTouchEnd = () => {
            slider?.slickPlay?.();
        };

        // Wait for slider DOM to mount
        const interval = setInterval(() => {
            const trackNode = slider?.innerSlider?.list;
            if (trackNode) {
                trackNode.addEventListener("touchstart", handleTouchStart, { passive: true });
                trackNode.addEventListener("touchend", handleTouchEnd, { passive: true });
                clearInterval(interval);
            }
        }, 100);

        return () => {
            const trackNode = slider?.innerSlider?.list;
            if (trackNode) {
                trackNode.removeEventListener("touchstart", handleTouchStart);
                trackNode.removeEventListener("touchend", handleTouchEnd);
            }
        };
    }, []);

    const sortedData = FHList?.sort(
        (a, b) => a.property_price - b.property_price
    );
    console.log(FHList, "FHList");


    var settings = {
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        speed: 1000,
        autoplaySpeed: 1500,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                    infinite: true,
                    autoplay: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    pauseOnHover: true,
                    infinite: true,
                    autoplay: true,
                    speed: 1000,
                    autoplaySpeed: 2000,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                    autoplay: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    pauseOnFocus: true,
                    pauseOnHover: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // rows: 2,
                    infinite: true,
                    autoplay: true,
                    speed: 2000,
                    arrows: false,
                },
            },
        ],
    };


    const [mobileC, setMobileC] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 700) {
            setMobileC(true);
        }
    }, []);

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
    console.log(groupByPrice, 'groupByPrice');


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
                                                    delay: 2500,
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
                                                    <div className="bg-red-2 rounded-lg shadow-lg overflow-hidden flex justify-center flex-col xl:w-[360px] lg:w-[260px] w-[100%] px-1 md:w-80 h-[670px] ">
                                                        <div
                                                            key={index}
                                                            onClick={(e) =>
                                                                LinkCall(
                                                                    e,
                                                                    `/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, " ")
                                                                        .replace("dozzy", "")
                                                                        .trim()
                                                                        .replaceAll(/ /g, "-")}`
                                                                )
                                                            }
                                                            href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, " ")
                                                                .replace("dozzy", "")
                                                                .trim()
                                                                .replaceAll(/ /g, "-")}`}
                                                        >
                                                            <Image
                                                                className="xl:h-[410px] lg:h-[370px] h-[425px] mxs:h-[430px] object-cover"
                                                                src={item?.images[0]}
                                                                alt={"postDisplay?.cialt"}
                                                                width={2000}
                                                                height={2000}
                                                            />
                                                        </div>
                                                        <div className="px- flex flex-col justify-center  gap-4">
                                                            <div className="flex items-baseline justify-between px-2">
                                                                <div>
                                                                    <Link
                                                                        onClick={(e) =>
                                                                            LinkCall(
                                                                                e,
                                                                                `/${item.property_name
                                                                                    .toLowerCase()
                                                                                    .replaceAll(/_/g, " ")
                                                                                    .replace(/\d+/g, " ")
                                                                                    .replace("dozzy", "")
                                                                                    .trim()
                                                                                    .replaceAll(/ /g, "-")}`
                                                                            )
                                                                        }
                                                                        href={`/${item.property_name
                                                                            .toLowerCase()
                                                                            .replaceAll(/_/g, " ")
                                                                            .replace(/\d+/g, " ")
                                                                            .replace("dozzy", "")
                                                                            .trim()
                                                                            .replaceAll(/ /g, "-")}`}
                                                                    >
                                                                        <p className="text-gray-900 font-medium text-sm lg:text-md opacity-75 font-Montserrat">
                                                                            Dozzy Farm House
                                                                        </p>
                                                                    </Link>
                                                                    <Link
                                                                        className="text-[#556EE6] xl:text-2xl lg:text-lg text-base font-semibold"
                                                                        href={`/${item.property_name
                                                                            .toLowerCase()
                                                                            .replaceAll(/_/g, " ")
                                                                            .replace(/\d+/g, " ")
                                                                            .replace("dozzy", "")
                                                                            .trim()
                                                                            .replaceAll(/ /g, "-")}`}
                                                                    >
                                                                        {capitalizeFirstLetter(
                                                                            item.property_name
                                                                                .replaceAll(/_/g, " ")
                                                                                .replace(/\d+/g, " ")
                                                                                .replaceAll("Dozzy", "")
                                                                                .trim()
                                                                                .toLowerCase()
                                                                        )}
                                                                    </Link>
                                                                </div>
                                                                <div>
                                                                    <div className="flex gap-2 items-center pt-2">
                                                                        <IoIosBed size={20} className="text-black" />
                                                                        <p className="text-black">
                                                                            {item?.no_of_bedrooms} BHK
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between font-normal text-sm">
                                                                <div className="flex flex-col items-baseline justify-between px-2">
                                                                    <p className="text-black text-xl">Price</p>
                                                                </div>
                                                                <div className="flex flex-col items-baseline justify-between px-2">
                                                                    <p className="text-[#556EE6]">₹ {item.property_price} / Full Day (12pm to 10am)</p>
                                                                    <p className="text-[#556EE6]">₹ {item.customer_night_prices} / Day (
                                                                        9pm to 8am) </p>
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
                                                                <div
                                                                    onClick={handleStoreRedirect}
                                                                    className="flex lg:hidden justify-center items-center cursor-pointer text-black py-4 text-lg font-semibold"
                                                                >
                                                                    <p className="bg-gradient-to-r from-green-600 via-[#556ee6] to-indigo-400 inline-block text-transparent bg-clip-text animate-gradient border-[1px] border-[#5566ee] p-2 rounded-md">
                                                                        Download Dozzy App
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    onClick={() => {
                                                                        setShowDown(true);
                                                                    }}
                                                                    className="flex  justify-center items-center cursor-pointer text-black py-4 text-lg font-semibold"
                                                                >
                                                                    <p className="bg-gradient-to-r from-green-600 via-[#556ee6] to-indigo-400 text-transparent bg-clip-text animate-gradient border-[1px] border-[#5566ee] p-2 rounded-md lg:block hidden">
                                                                        Download Dozzy App
                                                                    </p>
                                                                </div>
                                                                {showDown && (
                                                                    <div>
                                                                        <div className="text-black fixed inset-0 backdrop-blur-0 bg-[#1f1f1f] bg-opacity-5 z-50  h-">
                                                                            <div className="flex justify-center items-center ">
                                                                                <div className="bg-white absolute top-20 h-[500px] lg:h-[300px] transition-all duration-300 ease-in-out p-8 rounded-lg shadow-md max-w-lg lg:w-[800px] w-[500px]">
                                                                                    <button
                                                                                        onClick={() => {
                                                                                            setShowDown(false);
                                                                                        }}
                                                                                        className="relative lg:left-96 rounded-full bg-white lg:bottom-20 text-black py-2 px-4 text-xl border-2 border-gray-300 w-10 h-10"
                                                                                    >
                                                                                        <span className="relative bottom-1 right-[1px] ">
                                                                                            x
                                                                                        </span>
                                                                                    </button>
                                                                                    <div className="flex gap-3">
                                                                                        <div>
                                                                                            <h2 className="text-base font-semibold text-gray-900">
                                                                                                Download the Dozzy App and Book Your
                                                                                                Preferred Farmhouse
                                                                                            </h2>
                                                                                            <ul className="mt-2 text-gray-600">
                                                                                                <li>
                                                                                                    Scan the QR code to get the app from
                                                                                                    the Play Store or App Store.
                                                                                                </li>
                                                                                                <li className="flex gap-x-3 pt-3">
                                                                                                    <FaAppStore
                                                                                                        className="text-black"
                                                                                                        size={30}
                                                                                                    />{" "}
                                                                                                    <BiLogoPlayStore
                                                                                                        className="text-black"
                                                                                                        size={30}
                                                                                                    />
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>

                                                                                        <Image
                                                                                            src={dzyqr}
                                                                                            height={1000}
                                                                                            width={1000}
                                                                                            alt="dozzy farmhouse logo"
                                                                                            className="w-full h-44 object-contain"
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
                                    <React.Fragment key={index}>
                                        <div className="bg-red-2 rounded-lg shadow-lg overflow-hidden flex justify-center flex-col xl:w-[360px] lg:w-[260px] w-[100%] px-1 md:w-80 h-[600px] ">
                                            <div
                                                key={index}
                                                onClick={(e) =>
                                                    LinkCall(
                                                        e,
                                                        `/${item.property_name
                                                            .toLowerCase()
                                                            .replaceAll(/_/g, " ")
                                                            .replace(/\d+/g, " ")
                                                            .replace("dozzy", "")
                                                            .trim()
                                                            .replaceAll(/ /g, "-")}`
                                                    )
                                                }
                                                href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, " ")
                                                    .replace("dozzy", "")
                                                    .trim()
                                                    .replaceAll(/ /g, "-")}`}
                                            >
                                                <Image
                                                    className="xl:h-[410px] lg:h-[370px] h-[335px] mxs:h-[350px]"
                                                    src={item?.images[0]}
                                                    alt={"postDisplay?.cialt"}
                                                    width={2000}
                                                    height={2000}
                                                />
                                            </div>
                                            <div className="px- flex flex-col justify-center  gap-4">
                                                <div className="flex items-baseline justify-between px-2">
                                                    <div>
                                                        <Link
                                                            onClick={(e) =>
                                                                LinkCall(
                                                                    e,
                                                                    `/${item.property_name
                                                                        .toLowerCase()
                                                                        .replaceAll(/_/g, " ")
                                                                        .replace(/\d+/g, " ")
                                                                        .replace("dozzy", "")
                                                                        .trim()
                                                                        .replaceAll(/ /g, "-")}`
                                                                )
                                                            }
                                                            href={`/${item.property_name
                                                                .toLowerCase()
                                                                .replaceAll(/_/g, " ")
                                                                .replace(/\d+/g, " ")
                                                                .replace("dozzy", "")
                                                                .trim()
                                                                .replaceAll(/ /g, "-")}`}
                                                        >
                                                            <p className="text-gray-900 font-medium text-sm lg:text-md opacity-75 font-Montserrat">
                                                                Dozzy Farm House
                                                            </p>
                                                        </Link>
                                                        <Link
                                                            className="text-[#556EE6] xl:text-2xl lg:text-lg text-base font-semibold"
                                                            href={`/${item.property_name
                                                                .toLowerCase()
                                                                .replaceAll(/_/g, " ")
                                                                .replace(/\d+/g, " ")
                                                                .replace("dozzy", "")
                                                                .trim()
                                                                .replaceAll(/ /g, "-")}`}
                                                        >
                                                            {capitalizeFirstLetter(
                                                                item.property_name
                                                                    .replaceAll(/_/g, " ")
                                                                    .replace(/\d+/g, " ")
                                                                    .replaceAll("Dozzy", "")
                                                                    .trim()
                                                                    .toLowerCase()
                                                            )}
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
                                                            <p className="text-black">
                                                                {item?.no_of_bedrooms} BHK
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="font-normal text-sm">
                                                    <div className="flex items-baseline justify-between px-2">
                                                        <p className="text-black">Sun - Thu</p>
                                                        <p className="text-[#556EE6]">
                                                            ₹ {item.property_price} /Day
                                                        </p>
                                                    </div>
                                                    <div className="flex items-baseline justify-between px-2">
                                                        <p className="text-black">Fri - Sat</p>
                                                        <p className="text-[#556EE6]">
                                                            ₹ {item.weekend_price} /Day
                                                        </p>
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
                                                    <div
                                                        onClick={handleStoreRedirect}
                                                        className="flex lg:hidden justify-center items-center cursor-pointer text-black py-4 text-lg font-semibold"
                                                    >
                                                        <p className="bg-gradient-to-r from-green-600 via-[#556ee6] to-indigo-400 inline-block text-transparent bg-clip-text animate-gradient border-[1px] border-[#5566ee] p-2 rounded-md">
                                                            Download Dozzy App
                                                        </p>
                                                    </div>
                                                    <div
                                                        onClick={() => {
                                                            setShowDown(true);
                                                        }}
                                                        className="flex  justify-center items-center cursor-pointer text-black py-4 text-lg font-semibold"
                                                    >
                                                        <p className="bg-gradient-to-r from-green-600 via-[#556ee6] to-indigo-400 text-transparent bg-clip-text animate-gradient border-[1px] border-[#5566ee] p-2 rounded-md lg:block hidden">
                                                            Download Dozzy App
                                                        </p>
                                                    </div>
                                                    {showDown && (
                                                        <div>
                                                            <div className="text-black fixed inset-0 backdrop-blur-0 bg-[#1f1f1f] bg-opacity-5 z-50  h-">
                                                                <div className="flex justify-center items-center ">
                                                                    <div className="bg-white absolute top-20 h-[500px] lg:h-[300px] transition-all duration-300 ease-in-out p-8 rounded-lg shadow-md max-w-lg lg:w-[800px] w-[500px]">
                                                                        <button
                                                                            onClick={() => {
                                                                                setShowDown(false);
                                                                            }}
                                                                            className="relative lg:left-96 rounded-full bg-white lg:bottom-20 text-black py-2 px-4 text-xl border-2 border-gray-300 w-10 h-10"
                                                                        >
                                                                            <span className="relative bottom-1 right-[1px] ">
                                                                                x
                                                                            </span>
                                                                        </button>
                                                                        <div className="flex gap-3">
                                                                            <div>
                                                                                <h2 className="text-base font-semibold text-gray-900">
                                                                                    Download the Dozzy App and Book Your
                                                                                    Preferred Farmhouse
                                                                                </h2>
                                                                                <ul className="mt-2 text-gray-600">
                                                                                    <li>
                                                                                        Scan the QR code to get the app from
                                                                                        the Play Store or App Store.
                                                                                    </li>
                                                                                    <li className="flex gap-x-3 pt-3">
                                                                                        <FaAppStore
                                                                                            className="text-black"
                                                                                            size={30}
                                                                                        />{" "}
                                                                                        <BiLogoPlayStore
                                                                                            className="text-black"
                                                                                            size={30}
                                                                                        />
                                                                                    </li>
                                                                                </ul>
                                                                            </div>

                                                                            <Image
                                                                                src={dzyqr}
                                                                                height={1000}
                                                                                width={1000}
                                                                                alt="dozzy farmhouse logo"
                                                                                className="w-full h-44 object-contain"
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
