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
import { MdDownloadForOffline } from "react-icons/md";
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

    // console.log(groupByPrice,'gbp');

    const TimeCard = ({ price, hrs, checkin, checkout }) => {
        return (
            <div className="flex justify-between font-normal text-xs">
                <div className="flex flex-col gap-y-2 border-2 border-[#F5F5F5] rounded-lg p-1 mxs:p-2 shadow-md">
                    <div><p className="tracking-normal text-xs mxs:text-sm text-[#556EE6] font-semibold ">{price} / {hrs} hrs</p></div>
                    <div className="flex flex-col capitalize text-center lg:gap-x-1 gap-x-1 text-[7px] mxs:text-[9px]">
                        <ul key={'9'} className="flex gap-x-1">
                            <li className="w-12 mxs:w-14 text-left">check - in</li>
                            <li className="font-semibold">{checkin}</li>
                        </ul>
                        {/* <ul><li className="text-[#F5F5F5] text-base">|</li></ul> */}
                        <ul className="flex gap-x-1">
                            <li className="w-12 mxs:w-14 text-left">check - out</li>
                            <li className="font-semibold">{checkout}</li>
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
                                            <Link href={'tel:9111911162'}>
                                                <Image
                                                    className="h-fit"
                                                    src={'/offers/1rpdozzy.webp'}
                                                    alt={"Dozzy App For Farmhouse Booking"}
                                                    width={1000}
                                                    height={1000}
                                                />
                                            </Link>
                                        </div>}
                                    {priceKey === "15000" &&
                                        <div onClick={handleStoreRedirect} className="pb-10">
                                            <Image
                                                className="h-fit"
                                                src={'/offers/newuserdozzy2.webp'}
                                                alt={"Dozzy App For Farmhouse Booking"}
                                                width={1000}
                                                height={1000}
                                            />
                                        </div>}
                                    <Swiper
                                        modules={[Autoplay]}
                                        loop={true}
                                        autoplay={{
                                            delay: 3000,
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
                                                    <div className="bg-red-2 rounded-lg shadow-lg overflow-hidden flex justify-center flex-col xl:w-[360px] lg:w-[260px] w-[100%] px-1 md:w-80 h-[690px] mxs:h-[700px] rounded-t-lg ">
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
                                                            <div className="flex items-baseline justify-between px-1 pt-2">
                                                                <div>

                                                                    <Link
                                                                        className="text-[#556EE6] xl:text-2xl lg:text-lg text-sm mxs:text-base font-semibold uppercase" href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}
                                                                    >
                                                                        {(item.property_name.replaceAll(/_/g, " ").replace(/\d+/g, ' ').replaceAll('Dozzy', '').trim().toLowerCase())}
                                                                    </Link>
                                                                </div>
                                                                <div>
                                                                    <div className="flex flex-col gap-2 text-[10px] items-center text-black pt-2">
                                                                        <p className="text-gray-900 text-xs lg:text-md opacity-75 font-Montserrat">Book in Dozzy App (<span className="font-bold text-black">{item.no_of_bedrooms} BHK</span>  )</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between px-2">
                                                                <TimeCard key={'1'} price={item.customer_night_prices} hrs={'11'} checkin={'9am'} checkout={'8pm'} />
                                                                <TimeCard key={'2'} price={item.customer_night_prices} hrs={'11'} checkin={'9pm'} checkout={'8am'} />
                                                                <TimeCard key={'3'} price={item.property_price} hrs={'22'} checkin={'12pm'} checkout={'10am'} />

                                                            </div>

                                                            <div className="flex flex-col justify-between  text-white">
                                                                <ul className="flex justify-center gap-x-1 w-full px-3 pb-4">
                                                                    <li className="bg-[#74C184] w-full py-3 px-2  text-center rounded-md ">
                                                                        {" "}
                                                                        <Link
                                                                            href={`https://api.whatsapp.com/send/?phone=919111911162&text=Hi+I+am+looking+for+farmhouse+booking&type=phone_number&app_absent=0`}
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
                                                                        <Link href={`tel:9111911162`} target="_blank">
                                                                            <p className=" flex gap-1 lg:text-sm text-xs justify-center items-center">
                                                                                <span>
                                                                                    <BiPhoneCall size={20} />
                                                                                </span>{" "}
                                                                                <span>Call Us</span>
                                                                            </p>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                                <p className="text-black text-center pb-4"> <span className="bg-gradient-to-r from-[#556ee6] via-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold">₹500 off</span> on your first booking</p>
                                                                <div onClick={handleStoreRedirect} className="">
                                                                    <p className=" text-white mxs:text-sm text-xs font- bg-[#102E50] py-2 mxs:py-3 rounded-md flex flex- gap-x-1 justify-center items-center">
                                                                        <span>To View More Farmhouses Download Dozzy App</span>
                                                                        <span><MdDownloadForOffline className="size-4 " /></span>
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
                                                <div className="flex items-baseline justify-between px-1 pt-2">
                                                    <div>
                                                        <Link
                                                            className="text-[#556EE6] xl:text-2xl lg:text-lg text-sm font-semibold uppercase" href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}
                                                        >
                                                            {(item.property_name.replaceAll(/_/g, " ").replace(/\d+/g, ' ').replaceAll('Dozzy', '').trim().toLowerCase())}
                                                        </Link>
                                                        
                                                    </div>
                                                    <div>
                                                        <div className="flex flex-col gap-2 text-[10px] items-center text-black pt-2">
                                                            <p className="text-gray-900 text-xs lg:text-md opacity-75 font-Montserrat">Book in Dozzy App (<span className="font-bold text-black">{item.no_of_bedrooms} BHK</span>  )</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between px-2">
                                                    <TimeCard price={item.customer_night_prices} hrs={'11'} checkin={'9am'} checkout={'8pm'} />
                                                    <TimeCard price={item.customer_night_prices} hrs={'11'} checkin={'9pm'} checkout={'8am'} />
                                                    <TimeCard price={item.property_price} hrs={'22'} checkin={'12pm'} checkout={'10am'} />

                                                </div>

                                                <div className="flex flex-col justify-between  text-white">
                                                    <ul className="flex justify-center gap-x-1 w-full px-3 pb-4">
                                                        <li className="bg-[#74C184] w-full py-3 px-2  text-center rounded-md ">
                                                            {" "}
                                                            <Link
                                                                href={`https://api.whatsapp.com/send/?phone=919111911162&text=Hi+I+am+looking+for+farmhouse+booking&type=phone_number&app_absent=0`}
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
                                                            <Link href={`tel:9111911162`} target="_blank">
                                                                <p className=" flex gap-1 lg:text-sm text-xs justify-center items-center">
                                                                    <span>
                                                                        <BiPhoneCall size={20} />
                                                                    </span>{" "}
                                                                    <span>Call Us</span>
                                                                </p>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <div onClick={handleStoreRedirect} className="">
                                                        <p className=" text-white mxs:text-sm text-xs font- bg-[#102E50] py-2 mxs:py-3 rounded-md flex flex- gap-x-1 justify-center items-center">
                                                            <span>To View More Farmhouses Download Dozzy App</span>
                                                            <span><MdDownloadForOffline className="size-4 " /></span>
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
                        <p className="">View all farm houses</p>
                        <RiArrowDownWideLine className="animate-pulse text-black" size={40} />
                    </Link>
                </div>
                <PopUp />
            </div>
        </>
    );
};

export default FarmProductLPage;
