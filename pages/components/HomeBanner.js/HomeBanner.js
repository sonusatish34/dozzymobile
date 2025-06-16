// import React, { memo } from 'react';
// import Image from 'next/image';
// import homebanner from '../../images/bgo.webp'
// import apple from '../../images/apple.webp'
// import google from '../../images/ggle.webp'
// import Link from 'next/link';
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
// import { TbDiscount } from "react-icons/tb";
// import { MdSportsCricket } from "react-icons/md";
// import { TbKayak } from "react-icons/tb";
// import { BiCameraMovie } from "react-icons/bi";
// import { FaSwimmingPool } from "react-icons/fa";
// import { MdOutlineFestival } from "react-icons/md";
// import { BsMusicPlayerFill } from "react-icons/bs";
// import { SiPrivateinternetaccess } from "react-icons/si";
// import { HiUserGroup } from "react-icons/hi";
// import { IoMdPhotos } from "react-icons/io";
// import { FaHouse } from "react-icons/fa6";
// import { FaHouseSignal } from "react-icons/fa6";
// import { GiSpookyHouse } from "react-icons/gi";

// const IconCard = ({ Icon, text }) => (
//     <div className="flex items-center gap-1 p-2 bg-[#556ee6] xl:text-sm lg:text-xs text-xs border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[220px] w-full">
//         <Icon className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
//         <p className="ml-2">{text}</p>
//     </div>
// );

// const ImageChange = (({ locname }) => {
//     return (
//         <div className="xl:mt-0 lg:mt-0 xl:pl-20 lg:pl-4 px-2 py-2 pb-5">
//             <div className="bg-white">
//                 <div className="lg:flex lg:flex-row-reverse flex flex-col justify-center items-center lg:pl-10 xl:px-0">
//                     <Image
//                         src={homebanner}
//                         alt="Dozzy app"
//                         height={1000}
//                         width={1000}
//                         className="xl:w-[450px] lg:w-[350px] w-[300px] relative xl:right-36 lg:right-16 top-3"
//                         priority
//                     />
//                     <div className="lg:text-left xl:pl-0 lg:pl-4 text-black font-[500] xl:text-base text-xl lg:pt-10 pt-3">
//                         <h1 className="xl:text-3xl lg:text-2xl text-xl text-center lg:text-left font-bold lg:w-2/3">Farm House for Rent In Hyderabad</h1>
//                         <h3 className="pt-4 xl:text-2xl lg:text-xl text-lg text-center lg:text-left font-semibold lg:w-2/3">Download Dozzy App to Check Available Farm Houses & Book</h3>
//                         <div className="flex flex-wrap justify-center lg:justify-normal lg:gap-8 pt-2 gap-2 lg:w-full text-sm md:text-xs xl:text-base">
//                             <div className="flex gap-2 py-2 justify-center lg:justify-normal items-center relative ">
//                                 <Link href={'https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530'}>
//                                     <Image
//                                         height={500}
//                                         width={500}
//                                         alt="apple"
//                                         className="lg:w-40 lg:h-14 w-28 h-11 lg:hover:scale-105"
//                                         src={apple}
//                                         priority={true}
//                                     />
//                                 </Link>
//                                 <Link href="https://play.google.com/store/apps/details?id=com.dozzy_customer">
//                                     <Image
//                                         height={500}
//                                         width={500}
//                                         alt="google"
//                                         className="lg:w-48 lg:h-20 w-32 h-16 lg:hover:scale-105"
//                                         src={google}
//                                         priority={true}
//                                     />
//                                 </Link>
//                             </div>

//                             <div className=" ">
//                                 <div className="flex gap-4 pt-4 pr-4 text-xs font-medium lg:text-sm flex-wrap text-white">
//                                     <IconCard Icon={TbDiscount} text="Cheapest Farm house Near U" />
//                                     <IconCard Icon={MdOutlineFestival} text="For Parties Marriges & Events" />
//                                     <IconCard Icon={RiMoneyRupeeCircleFill} text="Farm house Under 10000" />
//                                     <IconCard Icon={FaSwimmingPool} text="Private Swimming Pool" />
//                                     <IconCard Icon={BiCameraMovie} text="Private Theater" />
//                                     <IconCard Icon={BsMusicPlayerFill} text="Party Music System" />
//                                     <IconCard Icon={SiPrivateinternetaccess} text="Full Privacy for Couples & friends" />
//                                     <IconCard Icon={MdSportsCricket} text="Box Cricket" />
//                                     <IconCard Icon={TbKayak} text="Kayaking in Pool" />
//                                     <IconCard Icon={RiMoneyRupeeCircleFill} text="No Deposit Required" />
//                                     <IconCard Icon={HiUserGroup} text="Unlimited Persons Allowed" />
//                                     <IconCard Icon={IoMdPhotos} text="Check Real Photos & Book" />
//                                     {/* <IconCard Icon={FaHouse} text="Basic Farm House Under 6000" />
//                                     <IconCard Icon={FaHouseSignal} text="Premium Farm House Under 10000" />
//                                     <IconCard Icon={GiSpookyHouse} text="Luxury Farm House Under 20000" /> */}
//                                     <div className="flex items-center gap-1 p-2 bg-[#556ee6] xl:text-base lg:text-xs text-xs border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[220px] w-full lg:hidden">
//                                         <GiSpookyHouse className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
//                                         <ul className="ml-2 flex flex-col gap-y-1">
//                                             <li>Basic Farm House Under 6000</li>
//                                             <li>Premium Farm House Under 10000</li>
//                                             <li>Luxury Farm House Under 20000</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// });

// export default ImageChange;



'use client';
import React, { memo } from 'react';
import Image from 'next/image';
import homebanner from '../../images/bgo.webp';
import apple from '../../images/apple.webp';
import google from '../../images/ggle.webp';
import Link from 'next/link';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { TbDiscount } from "react-icons/tb";
import { MdSportsCricket } from "react-icons/md";
import { TbKayak } from "react-icons/tb";
import { BiCameraMovie } from "react-icons/bi";
import { FaSwimmingPool } from "react-icons/fa";
import { MdOutlineFestival } from "react-icons/md";
import { BsMusicPlayerFill } from "react-icons/bs";
import { SiPrivateinternetaccess } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { FaHouseSignal } from "react-icons/fa6";
import { GiSpookyHouse } from "react-icons/gi";

const IconCard = ({ Icon, text }) => (
  <div className="flex items-center gap-1 p-2 bg-[#556ee6] border border-black text-white rounded-lg transition-transform hover:scale-105 w-full max-w-[330px]">
    <Icon className="bg-white text-black rounded-full p-1 min-w-[40px]" size={40} />
    <p className="ml-2 text-sm">{text}</p>
  </div>
);

const ImageChange = memo(({ locname }) => {
  return (
    <div className="py-6 px-2 bg-white">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:px-10 xl:px-20">
        <Image
          src={homebanner}
          alt="Dozzy app"
          width={450}
          height={450}
          className="relative top-3 xl:right-36 lg:right-16"
          priority
          sizes="(max-width: 768px) 300px, (max-width: 1200px) 350px, 450px"
        />
        <div className="text-black font-medium lg:pt-10 pt-4 text-center lg:text-left lg:pl-6">
          <h1 className="text-2xl xl:text-3xl font-bold max-w-xl mx-auto lg:mx-0">
            Farm House for Rent In Hyderabad
          </h1>
          <h3 className="pt-4 text-lg xl:text-2xl font-semibold max-w-xl mx-auto lg:mx-0">
            Download Dozzy App to Check Available Farm Houses & Book
          </h3>
          <div className="pt-4 flex flex-col items-center lg:items-start gap-4">
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <Link href="https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530">
                <Image
                  src={apple}
                  alt="Download on Apple"
                  width={160}
                  height={56}
                  className="hover:scale-105 transition-transform"
                  priority
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.dozzy_customer">
                <Image
                  src={google}
                  alt="Download on Google Play"
                  width={192}
                  height={64}
                  className="hover:scale-105 transition-transform"
                  priority
                />
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <IconCard Icon={TbDiscount} text="Cheapest Farm house Near U" />
              <IconCard Icon={MdOutlineFestival} text="For Parties, Marriages & Events" />
              <IconCard Icon={RiMoneyRupeeCircleFill} text="Farm House Under ₹10,000" />
              <IconCard Icon={FaSwimmingPool} text="Private Swimming Pool" />
              <IconCard Icon={BiCameraMovie} text="Private Theater" />
              <IconCard Icon={BsMusicPlayerFill} text="Party Music System" />
              <IconCard Icon={SiPrivateinternetaccess} text="Full Privacy for Couples & Friends" />
              <IconCard Icon={MdSportsCricket} text="Box Cricket" />
              <IconCard Icon={TbKayak} text="Kayaking in Pool" />
              <IconCard Icon={RiMoneyRupeeCircleFill} text="No Deposit Required" />
              <IconCard Icon={HiUserGroup} text="Unlimited Persons Allowed" />
              <IconCard Icon={IoMdPhotos} text="Check Real Photos & Book" />
              <div className="flex items-start gap-2 p-2 bg-[#556ee6] text-white border border-black rounded-md w-full max-w-[330px] lg:hidden">
                <GiSpookyHouse className="bg-white text-black rounded-fill p-1" size={40} />
                <ul className="text-sm leading-5 text-left">
                  <li>Basic Farm House Under ₹6000</li>
                  <li>Premium Farm House Under ₹10,000</li>
                  <li>Luxury Farm House Under ₹20,000</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ImageChange;





