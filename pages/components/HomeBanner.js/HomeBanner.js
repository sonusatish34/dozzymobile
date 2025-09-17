import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import homebanner from '../../images/erasebg-transformed (1).webp';
import apple from '../../images/apple.webp';
import google from '../../images/ggle.webp';

import { RiMoneyRupeeCircleFill } from 'react-icons/ri';
import { TbDiscount, TbKayak } from 'react-icons/tb';
import { MdSportsCricket, MdOutlineFestival } from 'react-icons/md';
import { BiCameraMovie } from 'react-icons/bi';
import { FaSwimmingPool } from 'react-icons/fa';
import { BsMusicPlayerFill } from 'react-icons/bs';
import { SiPrivateinternetaccess } from 'react-icons/si';
import { HiUserGroup } from 'react-icons/hi';
import { IoMdPhotos } from 'react-icons/io';
import { GiSpookyHouse } from 'react-icons/gi';

// Card component with fixed height to reduce CLS
const IconCard = ({ Icon, text }) => (
  <div className="flex items-center gap-1 p-2 bg-[#556ee6] min-h-[64px] xl:text-sm lg:text-xs text-xs border border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[220px] w-full">
    <Icon className="bg-white text-black lg:rounded-full rounded-md p-1 flex-shrink-0" size={40} />
    <p className="ml-2">{text}</p>
  </div>
);

const ImageChange = ({ locname, place }) => {
  const safePlace = place || 'Hyderabad';

  return (
    <div className="bg-white px-2">
      <div className="lg:flex lg:flex-row-reverse flex flex-col justify-between items-center lg:pl-10 xl:px-0">
        
        {/* Banner Image */}
        <div className="relative xl:w-[350px] lg:w-[350px] w-[300px] h-[300px]">
          <Image
            src={homebanner}
            alt="Dozzy app"
            fill
            className=""
            fetchPriority='high'
          />
        </div>

        {/* Text & Buttons */}
        <div className="lg:text-left xl:pl-0 lg:pl-4 text-black font-[500] xl:text-base text-xl">
          <h1 className="xl:text-3xl lg:text-2xl text-xl text-center lg:text-left font-bold capitalize lg:w-2/3">
            Farm House for Rent In {safePlace}
          </h1>
          <h3 className="pt-4 xl:text-2xl lg:text-xl text-lg text-center lg:text-left font-semibold lg:w-2/3">
            Download Dozzy App to Check Available Farm Houses & Book
          </h3>

          {/* App Store Buttons */}
          <div className="flex flex-col justify-center lg:justify-normal lg:gap-8 pt-2 gap-2 w-full text-sm md:text-xs xl:text-base">
            <div className="flex gap-2 py-2 justify-center lg:justify-normal items-center">
              <div className="w-[160px] h-[56px] relative">
                <Link href="https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530">
                  <Image src={apple} alt="apple" fill className="object-contain" priority />
                </Link>
              </div>
              <div className="w-[192px] h-[64px] relative">
                <Link href="https://play.google.com/store/apps/details?id=com.dozzy_customer">
                  <Image src={google} alt="google" fill className="object-contain" priority />
                </Link>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-4 pr-4 text-xs font-medium lg:text-sm flex-wrap text-white">
              <IconCard Icon={TbDiscount} text="Cheapest Farm house Near U" />
              <IconCard Icon={MdOutlineFestival} text="For Parties Marriges & Events" />
              <IconCard Icon={RiMoneyRupeeCircleFill} text="Farm house Under 10000" />
              <IconCard Icon={FaSwimmingPool} text="Private Swimming Pool" />
              <IconCard Icon={BiCameraMovie} text="Private Theater" />
              <IconCard Icon={BsMusicPlayerFill} text="Party Music System" />
              <IconCard Icon={SiPrivateinternetaccess} text="Full Privacy for Couples & friends" />
              <IconCard Icon={MdSportsCricket} text="Box Cricket" />
              <IconCard Icon={TbKayak} text="Kayaking in Pool" />
              <IconCard Icon={RiMoneyRupeeCircleFill} text="No Deposit Required" />
              <IconCard Icon={HiUserGroup} text="Unlimited Persons Allowed" />
              <IconCard Icon={IoMdPhotos} text="Check Real Photos & Book" />

              {/* Extra Info - Small Screens Only */}
              <div className="flex items-center gap-1 p-2 bg-[#556ee6] min-h-[64px] xl:text-base lg:text-xs text-xs border border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[220px] w-full lg:hidden">
                <GiSpookyHouse className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                <ul className="ml-2 flex flex-col gap-y-1">
                  <li>Basic Farm House Under 6000</li>
                  <li>Premium Farm House Under 10000</li>
                  <li>Luxury Farm House Under 20000</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ImageChange);
