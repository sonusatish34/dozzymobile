import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkCall from "../LinkCall";
import { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import dzyqr from '../../images/dzyqr.png'
import { FaAppStore } from "react-icons/fa";
import PopUp from "../Popup";
import { RiArrowDownWideLine } from "react-icons/ri";
import { BiLogoPlayStore } from "react-icons/bi";


const FarmProductLPage = ({ count, FHList }) => {
    const sortedData = FHList?.sort(
        (a, b) => a.property_price - b.property_price
    );

    const [mobileC, setMobileC] = useState(false)
    useEffect(() => {

        if (window.innerWidth < 700) {
            setMobileC(true);
        }
    }, [])

    const TimeCard = ({ price, hrs, checkin, checkout }) => {
        return (
            <div className="flex justify-between font-normal text-xs ">
                <div className="flex flex-col gap-y-2 border-2 border-[#F5F5F5] rounded-lg p-1">
                    <div><p className="underline tracking-wide text-xs mxs:text-sm text-[#556EE6]">{price} / {hrs} hrs</p></div>
                    <div className="flex items-center text-center lg:gap-x-1 text-[6px] mxs:text-[8px]">
                        <ul className="capitalize">
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

    const [showDown, setShowDown] = useState(false)

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
                <div className="flex flex-wrap xl:gap-x-12 xl:gap-y-12 md:gap-x-8 md:gap-y-8 gap-y-8 lg:items-start justify-center  lg:px-20 items-center px-1">
                    {sortedData?.slice(0, count ? sortedData?.length : mobileC ? 10 : 12).map((item, index) => (
                        <React.Fragment key={index} >
                            <div className="bg-red-2 rounded-lg overflow-hidden flex justify-center flex-col xl:w-[360px] lg:w-[260px] w-[100%]  md:w-80 h-[680px] rounded-t-lg ">
                                <div
                                    key={index}
                                    onClick={(e) => LinkCall(e, `/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`)}
                                    href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}
                                >
                                    <Image
                                        className="rounded-t-lg xl:h-[410px] lg:h-[370px] h-[395px] mxs:h-[400px] object-cover  cursor-pointer"
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
                                                className="text-[#556EE6] xl:text-xl lg:text-lg text-base font-semibold uppercase" href={`/${item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')}`}
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
                                        <div onClick={() => { setShowDown(true) }} className="flex justify-center items-center cursor-pointer text-white text-lg font- bg-[#102E50] py-2 rounded-b-lg ">
                                            <p className="text-[11px]">
                                                To View More Farm houses Download Dozzy App
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

            <PopUp />
        </div>
    );

};

export default FarmProductLPage;