import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkCall from "../LinkCall";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { RiArrowDownWideLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import PopUp from "../Popup";
const FarmProductLPage = ({ count, FHList }) => {

    const sortedData = FHList?.sort(
        (a, b) => a.property_price - b.property_price
    );

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
                <div className="flex flex-col gap-y-2 border-2 border-[#F5F5F5] rounded-lg p-1 mxs:p-2">
                    <div><p className="underline tracking-wide text-xs mxs:text-sm text-[#556EE6] ">{price} / {hrs} hrs</p></div>
                    <div className="flex items-center text-center lg:gap-x-1 gap-x-1 text-[6px] mxs:text-[7px]">
                        <ul key={'9'} className="capitalize">
                            <li>{checkin}</li>
                            <li>check - in</li>
                        </ul>
                        <ul><li className="text-[#F5F5F5] text-base">|</li></ul>
                        <ul>
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
                                                alt={"Dozzy App For Farmhouse Booking"}
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
                                                alt={"Dozzy App For Farmhouse Booking"}
                                                width={1000}
                                                height={1000}
                                            />
                                        </div>
                                    }
                                    <Swiper
                                        modules={[Autoplay]}
                                        loop={true}
                                        autoplay={{
                                            delay: 2000,
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
                                                                alt={"Dozzy App For Farmhouse Booking"}
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
                                                                        <p className="text-gray-900 text-xs lg:text-md opacity-75 font-Montserrat">Book in Dozzy App (<span className="font-bold text-black">{item.no_of_bedrooms} BHK</span>  )</p>
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
                                                                <TimeCard key={'1'} price={item.customer_night_prices} hrs={'11'} checkin={'9am'} checkout={'8pm'} />
                                                                <TimeCard key={'2'} price={item.customer_night_prices} hrs={'11'} checkin={'9pm'} checkout={'8am'} />
                                                                <TimeCard key={'3'} price={item.property_price} hrs={'24'} checkin={'12pm'} checkout={'10am'} />

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


                                                            </div>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div> :
                                groupByPrice[priceKey].map((item, index) => (
                                    <React.Fragment key={index} >
                                        <div className="bg-red-2 rounded-lg  overflow-hidden flex justify-center flex-col xl:w-[360px] lg:w-[260px] w-[100%] px-1 md:w-80 h-[680px] rounded-t-lg ">
                                            <div
                                                key={index}
                                                onClick={(e) => LinkCall(e, `/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`)}
                                                href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}
                                            >
                                                <Image
                                                    className="rounded-t-lg xl:h-[410px] lg:h-[370px] h-[395px] mxs:h-[400px] object-cover"
                                                    src={item?.images[0]}
                                                    alt={"Dozzy App For Farmhouse Booking"}
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
                                                            <p className="text-gray-900 text-xs lg:text-md opacity-75 font-Montserrat">Book in Dozzy App (<span className="font-bold text-black">{item.no_of_bedrooms} BHK</span>  )</p>
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


                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                        </div>
                    ))}
                <div className={`${count?.length ? 'hidden' : 'block'} text-center py-4 lg:px-2 px-10 flex justify-center items-center`}>
                    <Link onClick={(e) => LinkCall(e, "/explore-all-farmhouses-in-hyderabad")}
                        href="/explore-all-farmhouses-in-hyderabad" className="flex flex-col items-center spinner-border text-lg lg:text-2xl font-bold text-[#556ee6] w-full lg:w-96 py-8 rounded-full capitalize">
                        <p
                            className=""
                        >View all farm houses</p>
                        <RiArrowDownWideLine className="animate-pulse text-black" size={40} />
                    </Link>
                </div>
                <PopUp />
            </div>
        </>
    );
};

export default FarmProductLPage;
