import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { BiPhoneCall } from "react-icons/bi";
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import Head from 'next/head';
import { HiCurrencyRupee } from "react-icons/hi2";
import { FaSwimmingPool } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { IoWifi } from "react-icons/io5";
import { GiBatteryPack } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { IoIosBonfire } from "react-icons/io";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { CgSmartHomeBoiler } from "react-icons/cg";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

import { SiPrivateinternetaccess } from "react-icons/si";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import LinkCall from '../components/LinkCall';


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
const CarDetails = ({ canonicalUrl, selectedAtt, farmproduct, propertyId }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedAtt) {
      setLoading(false)
    }
  }, [selectedAtt]);

  function capitalizeFirstLetter(input) {
    return input
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const TimeCard = ({ price, hrs, checkin, checkout }) => {
    return (
      <div className="flex justify-between font-normal text-xs">
        <div className="flex flex-col gap-y-2 border-2 border-[#F5F5F5] rounded-lg p-1 mxs:p-2 shadow-md">
          <div><p className="tracking-normal text-xs mxs:text-sm lg:text-lg text-[#556EE6] font-semibold ">{price} / {hrs} hrs</p></div>
          <div className="flex flex-col capitalize text-center lg:gap-y-1 gap-y-1 text-[7px] mxs:text-[9px] lg:text-xs">
            <ul key={'9'} className="flex gap-x-1">
              <li className="w-16 mxs:w-14 lg:w-20 text-left">check - in</li>
              <li className="font-semibold">{checkin}</li>
            </ul>
            {/* <ul><li className="text-[#F5F5F5] text-base">|</li></ul> */}
            <ul className="flex gap-x-1">
              <li className="w-16 mxs:w-14 lg:w-20 text-left">check - out</li>
              <li className="font-semibold">{checkout}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  const allowedAmenities = ['Swimming pool', 'Geyser', 'AC', 'Wifi', 'Inverter', 'Projector', 'Bonfire', 'Kids Play Area'];

  return (
    <div className='bg-white text-black mont-text'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Private Farmhouse Rental @ 6K/Day - Cheapest FarmStay Near U</title>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="farmhouses in Hyderabad, cheapest farmhouse rentals, farmhouses near me, farmhouse rentals, top farmhouses in Hyderabad, private farmhouses for rent, rent a farmhouse, farmhouses for celebrations" />
        <meta name="description" content="1 Day Free Farmhouse @ New User - Full Privacy for Couples & Friends – Private Swimming Pool - Box Cricket - Cycling - Private Theater - Kayaking" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Private Farmhouse Rental @ 6K/Day - Cheapest FarmStay Near U" />
        <meta name="og:description" content="1 Day Free Farmhouse @ New User - Full Privacy for Couples & Friends – Private Swimming Pool - Box Cricket - Cycling - Private Theater - Kayaking" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <div className=' lg:px-2 lg:mx-16 xl:mx-16 lg:p-4  px-2 py-2'>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NFJZZ34X"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div className='flex flex-col md:flex-row md:mt-2 lg:mt-2 xl:gap-16 lg:gap-3  p-2 border-2 border-[#556EE6] rounded-t-md'>
          <div className="relative md:w-2/3 xl:w-[525px] lg:w-[424px] rounded-t-md  w-full p-1 xl:h-[534px] lg:h-[434px]  mxs:h-[455px] h-[372px] z-20  overflow-hidden  ">
            <div className="absolute top- flex h-full lg:hover:bg-black/40  left-1  z-30">
              <button ref={prevRef} className="swiper-custom-prev">
                <IoIosArrowDropleftCircle className='size-5 lg:size-7' color='white' />
              </button>
            </div>
            <div className="absolute top- flex h-full lg:hover:bg-black/40  right-1  z-30 ">
              <button ref={nextRef} className="swiper-custom-next ">
                <IoIosArrowDroprightCircle className='size-5 lg:size-7 ' color='white' />
              </button>
            </div>
            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              style={{ maxWidth: '800px', margin: 'auto' }}
            >
              {(selectedAtt?.images || []).map((imageSrc, index) =>
                (imageSrc?.attribute_value && !imageSrc?.attribute_name.includes('kitchen')) ? (
                  <SwiperSlide key={index}>
                    <Image
                      className="object-cover rounded-t-md object-center xl:h-[534px] lg:h-[434px] h-[355px] mxs:h-[455px]"
                      height={1000}
                      width={1000}
                      alt="Farm Houses In Hyderabad"
                      src={imageSrc.attribute_value}
                    />
                  </SwiperSlide>
                ) : null
              )}

            </Swiper>


          </div>
          <div className='flex flex-col xl:gap-8  lg:gap-4 gap-4 xl:pt-10 pt-2'>
            <div>
              <div className='p-1 font-bold  text-xl xl:text-3xl lg:text-xl lg: capitalize'>
                <h1>
                  Dozzy
                  {selectedAtt?.property_details && selectedAtt?.property_details.length > 0 ? (
                    <>
                      {selectedAtt?.property_details[0]?.property_id}
                      {selectedAtt?.property_name ?
                        capitalizeFirstLetter(selectedAtt?.property_name?.replaceAll(/_/g, " ").trim().toLowerCase()) : null}
                      ({selectedAtt?.no_of_bedrooms} BHK)
                    </>
                  ) : (
                    <span>Property Details Not Available</span>  
  )}
                </h1>

                <div className="flex lg:gap-x-6 justify-between lg:justify-normal pt-4">
                  <TimeCard key={'1'} price={selectedAtt?.property_details[0]?.customer_night_prices} hrs={'11'} checkin={'9am'} checkout={'8pm'} />
                  <TimeCard key={'2'} price={selectedAtt?.property_details[0]?.customer_night_prices} hrs={'11'} checkin={'9pm'} checkout={'8am'} />
                  <TimeCard key={'3'} price={selectedAtt?.property_details[0]?.property_price} hrs={'22'} checkin={'12pm'} checkout={'10am'} />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl font-bold bg-gradient-to-r from-[#556ee6] via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Add People
              </p>
              <p className='pt-1 text-sm lg:text-base'>Upto <span className='font-bold text-sm'>{selectedAtt?.property_capacity}</span> People is Free, After that <span className='text-[#556ee6] font-bold'>400</span>/Person Extra</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4   text-sm font-semibold lg:text-base xs: lg:w-full">
              <div className="flex items-center gap-1 p-2 xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[220px] w-full">
                <HiCurrencyRupee className="bg-[#556ee6] rounded-md p-1 text-white text-xs1" size={30} />
                <p className="ml-2">No Deposit</p>
              </div>
              <div className="flex items-center gap-1 p-2 xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[220px] w-full">
                <IoMdPhotos className="bg-[#556ee6] rounded-md p-1 text-white text-xs1" size={30} />
                <p className="ml-2">Check Real Photos & Book</p>
              </div>
              <div className="flex items-center gap-1 p-2 xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[220px] w-full">
                <SiPrivateinternetaccess className="bg-[#556ee6] rounded-md p-1 text-white text-xs1" size={30} />
                <p className="ml-2">Full Privacy For Couples & Friends</p>
              </div>
              <div className="flex items-center gap-1 p-2 xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[220px] w-full">
                <FaSwimmingPool className="bg-[#556ee6] rounded-md p-1 text-white text-xs1" size={30} />
                <p className="ml-2">Private Swimming Pool</p>
              </div>
            </div>
            <div className=''>
              <h2 className='font-semibold text-xl'>Contact Us By</h2>
              <div className='flex justify-start gap-4 lg:gap-5 xl:gap-8 xl:pt-4 pb-2 pt-2 text-white'>
                <button className='bg-green-500 rounded-md p-2 lg:p-3'>
                  <Link onClick={(e) => LinkCall(e, "https://api.whatsapp.com/send/?phone=919111911162&text=Hi+I+am+looking+for+farmhouse+booking&type=phone_number&app_absent=0")} href="https://api.whatsapp.com/send/?phone=919111911162&text=Hi+I+am+looking+for+farmhouse+booking&type=phone_number&app_absent=0">
                    <p className=' flex items-center gap-1 text-sm'><span><FaWhatsapp className='xl:size-6' /></span> <span>Whatsapp</span></p>
                  </Link>
                </button>
                <button className='bg-blue-500 rounded-md p-2 lg:p-3 lg:px-7'>
                  <Link onClick={(e) => LinkCall(e, "tel:9111911162")} href="tel:9111911162" target='_blank'>
                    <p className=' flex items-center gap-1 text-sm'><span><BiPhoneCall className='xl:size-6' /></span> <span>Call Us</span></p>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='overview pt-10 px-5 lg:px-0'>
          <h2 className='font-bold text-2xl lg:text-3xl border-l-4 pl-2 border-red-900 mb-4  '>Our Amenities</h2>
          <ul className="my-2 pb-4 grid grid-cols-2 gap-y-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:w-[83%] xl:w-[60%]">
            {selectedAtt?.amenities
              ?.filter(
                item =>
                  allowedAmenities.includes(item.attribute_name) &&
                  item.attribute_value >= 1
              )
              ?.map((item, ind) => (
                <li key={ind} className="flex flex-col justify-center items-center gap-2 border border-gray-100 py-2 w-36 md:w-28 lg:w-36 lg:h-32 h-24 mx-auto">
                  {item.attribute_name === "Swimming pool" && (
                    <>
                      <FaSwimmingPool size={30} className="text-green-700 lg:size-10" />
                      <span className="text-xs lg:text-base text-center">
                        Swimming Pool
                      </span>
                    </>
                  )}
                  {item.attribute_name === "Geyser" && (
                    <>
                      <CgSmartHomeBoiler size={30} className="text-blue-700 lg:size-10" />
                      <span className="text-xs lg:text-base text-center">Geyser</span>
                    </>
                  )}
                  {item.attribute_name === "AC" && (
                    <>
                      <TbAirConditioning size={30} className="text-red-700 lg:size-10" />
                      <span className="text-xs lg:text-base text-center">AC</span>
                    </>
                  )}
                  {item.attribute_name === "Wifi" && (
                    <>
                      <IoWifi size={30} className="text-black lg:size-10" />
                      <span className="text-xs lg:text-base text-center">Wifi</span>
                    </>
                  )}
                  {item.attribute_name === "Inverter" && (
                    <>
                      <GiBatteryPack size={30} className="text-pink-600 lg:size-10" />
                      <span className="text-xs lg:text-base text-center">Inverter</span>
                    </>
                  )}
                  {item.attribute_name === "Projector" && (
                    <>
                      <BiCameraMovie size={30} className="text-blue-700 lg:size-10" />
                      <span className="text-xs lg:text-base text-center">Projector</span>
                    </>
                  )}
                  {item.attribute_name === "Bonfire" && (
                    <>
                      <IoIosBonfire size={30} className="text-orange-700 lg:size-10" />
                      <span className="text-xs lg:text-base text-center">Bonfire</span>
                    </>
                  )}
                  {item.attribute_name === "Kids Play Area" && (
                    <>
                      <MdOutlineSportsVolleyball size={30} className="text-purple-700 lg:size-10" />
                      <span className="text-xs lg:text-base text-center">In/Out Door Games</span>
                    </>
                  )}

                  {/* Add more icons/conditions here if needed */}
                </li>

              ))}

          </ul>
        </div>
        <div className='px-5 lg:px-0'>
          <p className='font-bold text-2xl lg:text-3xl border-l-4 pl-2 border-red-900 md:my-6 my-2 '>Property Rules</p>
          <div className='flex flex-wrap flex-col'>
            <ul className='p-4 text-sm font-normaltext-[14px] lg:text-lg leading-6 '>
              <li className='list-disc'><p>Check in after 1pm | Check Out before 12pm </p></li>
              <li className='list-disc'><p>Alcohol Consumption Is Allowed</p></li>
              <li className='list-disc'><p>Pets are allowed </p></li>
              <li className='list-disc'><p>Guests are responsible for their safety and belongings</p></li>
              <li className='list-disc'><p>Cooking and Barbequee available on demand</p></li>
              <li className='list-disc'><p>Aadhar photo is compulsory for each & every person</p></li>
              <li className='list-disc'><p>No delay in Checkout We have Another Booking</p></li>
              <li className='list-disc'><p>Any Damage Customer has to Pay</p></li>
              <li className='list-disc'><p>Drugs/Hookah Not Allowed </p></li>
            </ul>
            <div className='flex items-center lg:py-5 py-3 '>
              <p className='font-bold text-2xl lg:text-lg border-l-4 pl-2 border-red-900 '>Additional Charges</p>
            </div>
          </div>
          <div className="w-full  text-black border border-black lg:w-[265px] font-semibold lg:text-[14px] text-xs ">
            <div className="flex justify-between border-b border-black p-[10px] lg:p-2  ">
              <span className=" border-black px-2 ">Self Cooking Access</span>
              <span className=" border-black px-2  lg:px-[10px] border-r-2"></span>
              <p className=" border-black px-3  lg:px-4 flex items-center "><span> <FaIndianRupeeSign className="text-black" /> </span> <span>{selectedAtt?.addons.find(addon => addon.attribute_name === "addon_Kitchen")?.attribute_value}</span></p>
            </div>
            <div className="flex justify-between border-b border-black p-[10px] lg:p-2  ">
              <span className=" border-black px-2 ">Barbecue Setup</span>
              <span className=" border-black px-[21px] lg:px-[24.5px]  border-r-2"></span>
              <p className=" border-black px-3  lg:px-4 flex items-center "><span> <FaIndianRupeeSign className="text-black" /> </span> <span>{selectedAtt?.addons.find(addon => addon.attribute_name === "addon_Bonfire")?.attribute_value}</span></p>
            </div>
            <div className="flex justify-between border-b border-black p-[10px] lg:p-2  ">
              <span className=" border-black px-2 w-18 ">Cleaning Charges</span>
              <span className=" border-black px-[14px] lg:px-[16.5px] border-r-2"></span>
              <p className=" border-black px-3  lg:px-4 flex items-center "><span> <FaIndianRupeeSign className="text-black" /> </span> <span>500</span></p>
            </div>
            <div className="flex justify-between border-b border-black p-[10px] lg:p-2   ">
              <span className=" border-black px-2 ">Extra Per Person</span>
              <span className=" border-black px-[20.5px] lg:px-[24px] border-r-2"></span>
              <p className=" border-black px-3  lg:px-4 flex items-center "><span> <FaIndianRupeeSign className="text-black" /> </span> <span>{selectedAtt?.addons.find(addon => addon.attribute_name === "addon_extra_person")?.attribute_value}</span></p>
            </div>
          </div>
        </div>
        <div className='px-5 lg:px-0 pt-2'>
          <h2 className='font-bold text-2xl lg:text-3xl border-l-4 pl-2 border-red-900 md:my-6 my-2' >Description</h2>
          <p className='font-normal p-1 text-[14px] lg:text-lg leading-6  pb-3 lg:w-[50%]'>
            Dozzy Farmhouses offer a peaceful escape from the city's hustle, set across scenic natural locations just beyond the urban edge. Whether you're traveling solo, as a couple, or with a group, each farmhouse provides a serene and comfortable environment designed for relaxation. With expansive green spaces and tranquil surroundings, guests can enjoy leisurely walks, outdoor activities, or simply unwind in nature’s calm embrace.
          </p>
          <p className='font-normal p-1 text-[14px] lg:text-lg leading-6  pb-8 lg:w-[50%]'>
            Inside, every farmhouse is thoughtfully equipped with cozy, air-conditioned rooms featuring double beds, flat-screen TVs, mini-fridges, and ample storage for a restful stay. Whether you're planning a weekend getaway or an extended retreat, Dozzy Farmhouses are the perfect place to disconnect, recharge, and reconnect with nature.
          </p>
        </div>
      </div>

    </div>
  );
};

export default CarDetails;


export async function getServerSideProps({ req, query, params }) {
  const { farmproduct } = params;
  const propertyId = farmproduct?.split('-').pop();
  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? `https://www.dozzy.in/bangalore/${farmproduct}`
    : `https://www.dozzy.com/bangalore/${farmproduct}`;

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://dev.dozzy.com/site/property-data?property_id=${propertyId}`, requestOptions);
    const result = await response.json();
    const cars = result?.data || [];
    const selectedAtt = cars

    return {
      props: {
        canonicalUrl,
        propertyId: propertyId,
        selectedAtt: selectedAtt
      }
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
  }
}
