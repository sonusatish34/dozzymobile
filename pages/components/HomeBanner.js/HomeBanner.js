import React from 'react';
import Image from 'next/image';
import homebanner from '../../images/bgo.webp'
import apple from '../../images/apple.webp'
import google from '../../images/ggle.webp'
import Link from 'next/link';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { MdOutlineFestival } from "react-icons/md";
import { GiPartyHat } from "react-icons/gi";

const ImageChange = ({ locname }) => {

    return (
        <div className='xl:mt-0 lg:mt-0 xl:pl-20 lg:pl-4 px-2 py-2 pb-5'>
            <div className='bg-white'>
                <div className='lg:flex lg:flex-row-reverse flex flex-col justify-center items-center lg:pl-10 xl:px-0 '>
                    <Image
                        src={homebanner}
                        alt="Dozzy app"
                        height={1000}
                        width={1000}
                        className='xl:w-[450px] lg:w-[350px] w-[300px] relative xl:right-36 lg:right-16 top-3'
                        priority
                    />
                    <div className="lg:text-left xl:pl-0 lg:pl-4 text-black font-[500] xl:text-base text-xl lg:pt-10 pt-3">
                        <h1 className='xl:text-3xl lg:text-2xl text-xl text-center lg:text-left  font-bold  lg:w-2/3'>Farm House
                            for Rent In Hyderabad</h1>
                        <h3 className='pt-4 xl:text-2xl lg:text-xl text-lg text-center lg:text-left font-semibold lg:w-2/3'>Download Dozzy App to Check Available Farm Houses & Book</h3>
                        <div className='flex flex-wrap justify-center lg:justify-normal lg:gap-8 pt-2 gap-2 lg:w-full text-sm md:text-xs xl:text-base'>
                            <div className="flex gap-2 py-2 justify-center lg:justify-normal items-center relative ">
                                <Link href={'https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530'}>
                                    <Image
                                        height={500}
                                        width={500}
                                        alt="apple"
                                        className="lg:w-40 lg:h-14 w-28 h-11 lg:hover:scale-105"
                                        src={apple}
                                        priority={true}
                                    />
                                </Link>
                                <Link href="https://play.google.com/store/apps/details?id=com.dozzy_customer">
                                    <Image
                                        height={500}
                                        width={500}
                                        alt="google"
                                        className="lg:w-48 lg:h-20 w-32 h-16 lg:hover:scale-105"
                                        src={google}
                                        priority={true}
                                    />
                                </Link>
                            </div>
                            <div className='lg:block hidden'>
                                <div className="flex gap-4  pt-4 pr-4  text-xs font-medium lg:text-sm  flex-wrap text-white">

                                    {<div className="flex items-center gap-1 p-2 bg-[#556ee6] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[220px]  w-full">
                                        <RiMoneyRupeeCircleFill className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                                        <p className="ml-2 ">No Deposit</p>
                                    </div>}
                                    <div className="flex items-center gap-1 p-2 bg-[#556ee6] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[220px]  w-full">
                                        <FaSwimmingPool className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                                        <p className="ml-2">Private Swimming Pool</p>
                                    </div>

                                    <div className="flex items-center gap-1 p-2 bg-[#556ee6] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[220px]  w-full">
                                        <BiCameraMovie className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                                        <p className="ml-2">Private Theater
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1 p-2 bg-[#556ee6] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[220px]  w-full">
                                        <GiPartyHat className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                                        <p className="ml-2">For Parties</p>
                                    </div>
                                    <div className="flex items-center gap-1 p-2 bg-[#556ee6] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[220px]  w-full">
                                        <MdOutlineFestival className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                                        <p className="ml-2">For Events</p>
                                    </div>
                                    <div className="flex items-center gap-1 p-2 bg-[#556ee6] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[220px]  w-full">
                                        <GiPartyPopper className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                                        <p className="ml-2">For Functions</p>
                                    </div>

                                    {/* <div className="flex items-center gap-1 p-2 bg-[#556ee6] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[220px]  w-full">
                                        <IoIosBonfire className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                                        <p className="ml-2">Bonfire
                                        </p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageChange;
