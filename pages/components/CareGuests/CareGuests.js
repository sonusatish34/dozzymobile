import React from "react";
import Image from "next/image";
import steps from "../../images/varahi3.webp";
import { SlCalender } from "react-icons/sl";
import { MdOutlineFindReplace } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { HiCurrencyRupee } from "react-icons/hi2";
import { PiInfinityBold } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import Link from "next/link";
const CareGuests = () => {
  return (
    <div className="lg:px-20 py-4">
      <div className="">
        <div className="">
          <p className="font-semibold pb-4 px-4 md:text-2xl lg:text-4xl lg:py-8 font-poppins">
            How We Care About Our Guests
          </p>
          <div className="bg-white rounded-md">
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={2000}
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              centerMode={true}
              className="pt-[1.2rem]"
              //   width={300}
              partialVisible={false}
              itemsToShow={1}
            >
              <div className="bg-blue-100 flex gap-4 h-[90px] lg:h-full   items-center justify-center lg:mx-24 mx-2 lg-w[70%] lg-w[50%] border-2 border-gray-200 rounded-lg p-1 px-3  lg:p-3">
                <HiCurrencyRupee className="bg-[#556EE6] text-white p-1 w-12 h-10 rounded lg:w-16 lg:h-14" />
                <div className="text-left">
                  <p className="font-semibold md:text-base text-[12px]  lg:text-2xl text-[#556ee6] underline">
                    No Deposit
                  </p>
                  <p className="text-[10px] md:text-xs lg:text-xl">
                    We don't Collect Any Security Deposit
                  </p>
                </div>
              </div>
              <div className="bg-purple-100 flex gap-4 h-[90px] lg:h-full   items-center justify-center lg:mx-24 mx-2 lg-w[70%] lg-w[50%] border-2 border-gray-200 rounded-lg p-1 px-3  lg:p-3">
                <PiInfinityBold className="bg-[#556EE6] text-white p-1 w-16 h-12 rounded lg:w-16 lg:h-14" />
                <div className="text-left">
                  <p className="font-semibold md:text-base text-[12px]  lg:text-2xl text-[#556ee6] underline">
                    Unlimited Persons
                  </p>
                  <p className="text-[10px] md:text-xs lg:text-xl">
                    Dozzy has no limit on no of persons. Enjoy Unlimited Entries
                  </p>
                </div>
              </div>
              <div className="bg-yellow-50 flex gap-3 h-[90px]  lg:h-full   items-center justify-center lg:mx-24 mx-2 lg-w[70%] lg-w[50%] border-2 border-gray-200 rounded-lg p-1 px-3 lg:p-3">
                <BiSolidOffer className="bg-[#556EE6] text-white p-1 w-16 h-12 rounded lg:w-16 lg:h-14" />
                <div className="text-left">
                  <p className="font-semibold md:text-base text-[12px]  lg:text-2xl text-[#556ee6] underline">
                    Best in market Discounts
                  </p>
                  <p className="text-[10px] md:text-xs lg:text-xl">
                    Dozzy Discounts applicable on weekdays and weekends.
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>

        <div className="py-6 px-4">
          <p className="font-semibold pb-3 lg:text-4xl lg:py-8">
            Book With Just 3 Easy Steps
          </p>
          <div className="flex items-center">
            <div className="rounded-lg relative lg:h-[300px] lg:w-[600px] mxs:w-[350px] mxs:h-[142px] h-[120px] w-[300px]">
              <Image
                src={steps}
                alt="farm house in hyderabad"
                width={1000}
                height={1000}
                className="rounded-lg object-cover object-right w-full h-full"
              />
            </div>

            <ul className="pl-2 lg:pl-10 flex flex-col lg:gap-5">
              <li className="flex items-center text-xs gap-2 p-1">
                <SlCalender className="bg-[#556EE6] text-white p-1 w-8 h-7 rounded lg:w-16 lg:h-14" />
                <div>
                  <p className="font-bold text-[8px] lg:text-xl">
                    Pick Date
                  </p>
                  <p className="text-[8px] leading-3 lg:text-base">
                    Pick Your Plan Dates In With Our User Friendly Interface
                  </p>
                </div>
              </li>
              <li className="flex items-center text-xs gap-2 p-1">
                <MdOutlineFindReplace className="bg-[#556EE6] text-white p-1 w-8 h-7 rounded lg:w-16 lg:h-14" />
                <div>
                  <p className="font-bold text-[8px] lg:text-xl">
                    Choose Place & Pay
                  </p>
                  <p className="text-[8px] leading-3 lg:text-base">
                    Pick Your Place And Pay Its That Simple As It Its
                  </p>
                </div>
              </li>
              <li className="flex items-center text-xs gap-2 p-1">
                <GiConfirmed className="bg-[#556EE6] size-2 text-white p-1 w-[27px] h-7 rounded lg:w-16 lg:h-14" />
                <div>
                  <p className="font-bold text-[8px] lg:text-xl">
                    Booking Confirmed
                  </p>
                  <p className="text-[8px] leading-3 lg:text-base">
                    Congrats Your Booking Confirmed
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`flex pl-10 py-5 md:justify-between text-white xl:px-28 lg:py-14 flex-wrap bg-[#556ee6] rounded-md my-3 items-center`}>
        <div className=' xl:text-left xl:text-base text-left text-xs font-semibold'>
          <ul className='lg:gap-x-12 lg:gap-y-3 gap-2 grid lg:grid-cols-3 grid-cols-1 capitalize'>
            <li className='hover:scale-105'><Link href={'/self-drive-car-rental/gachibowli'}>Self drive car rental in Gachibowli</Link></li>
            <li className='hover:scale-105'><Link href={'/self-drive-car-rental/medipally'}>Self drive car rental in Medipally</Link></li>
            <li className='hover:scale-105 '><Link href={'/self-drive-car-rental/miyapur'}>Self drive car rental in Miyapur</Link></li>
            <li className='hover:scale-105'><Link href={'/self-drive-car-rental/ramanthapur'}>Self drive car rental in Ramanthapur</Link></li>
            <li className='hover:scale-105'><Link href={'/self-drive-car-rental/secunderabad'}>Self drive car rental in Secunderabad</Link></li>
            <li className='hover:scale-105'><Link href={'/self-drive-car-rental/shamshabad'}>Self drive car rental in Shamshabad</Link></li>
            <li className='hover:scale-105'><Link href={'/branches/hyderabad-rental-car'}>Car rental services in Hyderabad</Link></li>
            <li className='hover:scale-105'><Link href={'/branches/self-drive-cars-kukatpally'}>Car rental services in Kukatpally</Link></li>
            <li className='hover:scale-105'><Link href={'/branches/self-drive-cars-lbnagar-kothapet'}>Car rental services in LB Nagar</Link></li>
            <li className='hover:scale-105'><Link href={'/branches/self-drive-cars-madhapur'}>Car rental services in Madhapur</Link></li>
            <li className='hover:scale-105'> <Link href={'/self-drive-car-rental/dilshuknagar'}>Self drive car rental in Dilshuknagar</Link></li>
            <li className='hover:scale-105'><Link href={'/self-drive-car-rental/madhapur'}>Self drive car rental in Madhapur</Link></li>
            <li className='hover:scale-105'><Link href={'/self-drive-car-rental/kukatpally'}>Self drive car rental in Kukatapally</Link></li>
            <li className='hover:scale-105'><Link href={'/self-drive-car-rental/ameerpet'}>Self drive car rental in Ameerpet</Link></li>
            {/* <li className='hover:scale-105'><Link href={'/branches/self-drive-cars-bengaluru'}>Car rental services in Bangalore</Link></li> */}
            <li className='hover:scale-105'><Link href={'/branches/self-drive-cars-warangal'}>Car rental services in Warangal</Link></li>
            <li className='hover:scale-105'><Link href={'/branches/self-drive-cars-uppal-medipally'}>Car rental services in Uppal Medipally</Link></li>
            <li className='hover:scale-105'><Link href={'/self-drive-car-rental/ecil'}>Self drive car rental in ECIL</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareGuests;
