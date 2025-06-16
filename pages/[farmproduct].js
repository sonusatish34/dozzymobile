import Image from 'next/image';
import { useState, useEffect } from 'react';
import customData from './components/kk.json';
import { BiPhoneCall } from "react-icons/bi";
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import Head from 'next/head';
import { FaPeopleLine } from "react-icons/fa6";
import { HiCurrencyRupee } from "react-icons/hi2";
import { FaSwimmingPool } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { IoWifi } from "react-icons/io5";
import { GiBatteryPack } from "react-icons/gi";
import { MdOutlineWaterDamage } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { FaKitchenSet } from "react-icons/fa6";
import { GiBarbecue } from "react-icons/gi";
import { IoIosBonfire } from "react-icons/io";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { SiPrivateinternetaccess } from "react-icons/si";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import LinkCall from './components/LinkCall';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CarDetails = ({ canonicalUrl, selectedAtt, farmproduct }) => {

  const mdfyFarmProduct = farmproduct;

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

  const TimeCard = ({ price, hrs, checkin, checkout }) => {
    return (
      <div className="flex justify-between font-normal text-xs ">
        <div className="flex flex-col gap-y-2 border-2 border-[#F5F5F5] rounded-lg p-1 mxs:p-2">
          <div><p className="underline text-center tracking-wide text-xs mxs:text-sm text-[#556EE6] ">{price} / {hrs} hrs</p></div>
          <div className="flex items-center capitalize text-center lg:gap-x-1 gap-x-1 text-[6px]  lg:text-[8px] xl:lg:text-xs">
            <ul key={'9'} className="">
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

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-04YJBDK2VX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                         window.dataLayer = window.dataLayer || [];
                         function gtag(){dataLayer.push(arguments);}
                         gtag('js', new Date());
                         gtag('config', 'G-04YJBDK2VX');
                        `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){
                w[l]=w[l]||[]; 
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NFJZZ34X');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('config', 'AW-16797121033/PPdfCKqh7_AZEIn0vsk-', {
                         'phone_conversion_number': '9111-9111-62'
                         });`,
          }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
              n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '951887287035030');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=951887287035030&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
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
          <div className="relative md:w-2/3 xl:w-[525px] lg:w-[424px] rounded-t-md  w-full p-1 xl:h-[534px] lg:h-[434px]  mxs:h-[455px] h-[400px]  overflow-hidden sliderarrows ">
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={true}
              // autoplay={true}
              responsive={[
                {
                  breakpoint: 1024, // for tablets and above
                  settings: {
                    slidesToShow: 1,  // Shows 2 slides on medium screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 768, // for smaller tablets and below
                  settings: {
                    slidesToShow: 1,  // Shows 1 slide on smaller screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                  }
                },
                {
                  breakpoint: 480, // for mobile phones
                  settings: {
                    slidesToShow: 1,  // Shows 1 slide on mobile screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                  }
                }
              ]}
              swipeToSlide={true}
              className="relative lg:rounded-md sliderclass"
            >
              {(selectedAtt?.images)?.map((imageSrc, index) => (
                imageSrc && (
                  <div key={index}>
                    <Image className='object-cover rounded-t-md object-center xl:h-[534px] lg:h-[434px] h-[355px] mxs:h-[455px]' height={1000} width={1000} alt={"Farm Houses In Hyderabad"} src={imageSrc} />
                  </div>
                )
              ))}
            </Slider>
          </div>
          <div className='flex flex-col xl:gap-8  lg:gap-4 gap-4 xl:pt-10 pt-2'>
            <div>
              <div className='p-1 font-bold  text-xl xl:text-3xl lg:text-xl lg: capitalize'>
                <h1>{selectedAtt?.property_name ? capitalizeFirstLetter(selectedAtt?.property_name.replaceAll(/_/g, " ").replace(/\d+/g, ' ').replaceAll('Dozzy', '').trim().toLowerCase()) : null} ({selectedAtt?.no_of_bedrooms} BHK)
                </h1>
                <div className="flex lg:gap-x-3 justify-between lg:justify-normal pt-4">
                  <TimeCard key={'1'} price={selectedAtt?.customer_night_prices} hrs={'11'} checkin={'9am'} checkout={'8pm'} />
                  <TimeCard key={'2'} price={selectedAtt?.customer_night_prices} hrs={'11'} checkin={'9pm'} checkout={'8am'} />
                  <TimeCard key={'3'} price={selectedAtt?.property_price} hrs={'22'} checkin={'12pm'} checkout={'10am'} />
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
          <ul className='my-2 flex-wrap pb-4 grid grid-cols-2 gap-y-3 md:flex lg:w-[83%] xl:w-[60%] justify-center lg:justify-normal'>
            <li className='w-36 md:w-28 lg:w-36 flex flex-col justify-center gap-2 items-center border-[1px] border-gray-100 py-2   '>
              <FaSwimmingPool size={30} className='text-green-700 lg:size-10' />
              <p className='font text-xs lg:text-base text-center '>Swimming Pool</p>
            </li>
            <li className='w-36 lg:w-36 w- flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <TbAirConditioning size={30} className='text-blue-700 lg:size-10' />
              <p className='font text-xs lg:text-base text-center'>Air Conditioner</p>
            </li>
            <li className='w-36 lg:w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <IoWifi size={20} className='text-amber-900 lg:size-10' />
              <p className='font text-xs lg:text-base text-center'>Wifi Connection</p>
            </li>
            <li className='w-36 lg:w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <GiBatteryPack size={30} className='text-orange-500 lg:size-10' />
              <p className='font text-xs lg:text-base text-center'>Power Backup</p>
            </li>
            <li className='w-36 lg:w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <MdOutlineWaterDamage size={30} className='text-yellow-500 lg:size-10' />
              <p className='font text-xs lg:text-base text-center'>Water Purifier + Gyser</p>
            </li>
            <li className='w-36 lg:w-36 flex flex-col justify-center gap-2 items-center border-[1px] border-gray-100 py-2   '>
              <FaKitchenSet size={30} className='text-gray-600 lg:size-10' />
              <p className='font text-xs lg:text-base text-center '>Private Kitchen</p>
            </li>
            <li className='w-36 lg:w-36 w- flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <GiBarbecue size={30} className={` lg:size-10`} />
              <p className='font text-xs lg:text-base text-center'>Barbeque</p>
            </li>
            <li className='w-36 lg:w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <IoIosBonfire size={30} className='text-orange-700 lg:size-10' />
              <p className='font text-xs lg:text-base text-center'>Bonfire</p>
            </li>
            <li className='w-36 lg:w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <BiCameraMovie size={30} className='text-black lg:size-10' />
              <p className='font text-xs lg:text-base text-center'>Tv / Projector</p>
            </li>
            <li className='w-36 lg:w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <MdOutlineSportsVolleyball size={30} className='text-purple-500 lg:size-10' />
              <p className='font text-xs lg:text-base text-center'>In & Out-Door Games</p>
            </li>
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
              <p className='font-bold text-sm lg:text-lg border-l-4 pl-2 border-red-900 '>Additional Charges</p>
            </div>
          </div>
          <div className="w-full  text-black border border-black lg:w-[265px] font-semibold lg:text-[14px] text-xs ">
            <div className="flex justify-between border-b border-black p-[10px] lg:p-2  ">
              <span className=" border-black px-2 ">Self Cooking Access</span>
              <span className=" border-black px-2  lg:px-[10px] border-r-2"></span>
              <p className=" border-black px-3  lg:px-4 flex items-center "><span> <FaIndianRupeeSign className="text-black" /> </span> <span>500</span></p>
            </div>
            <div className="flex justify-between border-b border-black p-[10px] lg:p-2  ">
              <span className=" border-black px-2 ">Barbecue Setup</span>
              <span className=" border-black px-[21px] lg:px-[24.5px]  border-r-2"></span>
              <p className=" border-black px-3  lg:px-4 flex items-center "><span> <FaIndianRupeeSign className="text-black" /> </span> <span>500</span></p>
            </div>
            <div className="flex justify-between border-b border-black p-[10px] lg:p-2  ">
              <span className=" border-black px-2 w-18 ">Cleaning Charges</span>
              <span className=" border-black px-[14px] lg:px-[16.5px] border-r-2"></span>
              <p className=" border-black px-3  lg:px-4 flex items-center "><span> <FaIndianRupeeSign className="text-black" /> </span> <span>500</span></p>
            </div>
            <div className="flex justify-between border-b border-black p-[10px] lg:p-2   ">
              <span className=" border-black px-2 ">Extra Per Person</span>
              <span className=" border-black px-[20.5px] lg:px-[24px] border-r-2"></span>
              <p className=" border-black px-3  lg:px-4 flex items-center "><span> <FaIndianRupeeSign className="text-black" /> </span> <span>400</span></p>
            </div>
          </div>
        </div>
        <div className='px-5 lg:px-0 pt-2'>
          <h2 className='font-bold text-2xl lg:text-3xl border-l-4 pl-2 border-red-900 md:my-6 my-2' >Description</h2>
          <p className='font-normal p-1 text-[14px] lg:text-lg leading-6  pb-8 lg:w-[50%]'>
            {customData[selectedAtt?.property_name.trim().replaceAll(/ /g, '-').toLowerCase()]?.desc ? customData[selectedAtt?.property_name.trim().replaceAll(/ /g, '-').toLowerCase()]?.desc : ` ${selectedAtt?.property_name && capitalizeFirstLetter(selectedAtt?.property_name.replaceAll(/_/g, " ").replace(/\d+/g, ' ').replaceAll('Dozzy', '').trim().toLowerCase())} offers a tranquil escape just outside the city, nestled in the heart of nature. This peaceful sanctuary is the perfect destination for those seeking a quiet retreat away from the hustle and bustle. Whether you're a solo traveler, a couple, or a group, ${selectedAtt?.property_name && capitalizeFirstLetter(selectedAtt?.property_name.replaceAll(/_/g, " ").replace(/\d+/g, ' ').replaceAll('Dozzy', '').trim().toLowerCase())} provides a serene environment to relax, unwind, and recharge.`}
          </p>
          <p className='font-normal p-1 text-[14px] lg:text-lg leading-6  pb-8 lg:w-[50%]'>
            {customData[selectedAtt?.property_name.replaceAll(/ /g, '-').trim().toLowerCase()]?.subdesc ? customData[selectedAtt?.property_name.replaceAll(/ /g, '-').trim().toLowerCase()]?.subdesc : `The expansive outdoor area allows guests to enjoy leisurely walks through lush greenery, partake in outdoor activities, or simply bask in the calm ambiance of the surroundings. Inside, the farmhouse is designed for comfort, featuring cozy, air-conditioned rooms with double beds, a flat-screen TV, a mini-fridge, and generous storage space, ensuring a cozy and relaxing stay. ${selectedAtt?.property_name && capitalizeFirstLetter(selectedAtt?.property_name.replaceAll(/_/g, " ").replace(/\d+/g, ' ').replaceAll('Dozzy', '').trim().toLowerCase())} is the ideal location for anyone wanting to reconnect with nature and experience peaceful relaxation.`}
          </p>
        </div>
        {loading && <div className="text-center py-4">
          <div className="fixed inset-0 bg-white flex items-center justify-center z-50 opacity-90">
            <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default CarDetails;


export async function getServerSideProps({ req, query, params }) {
  const farmproduct = params.farmproduct;

  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? `https://www.dozzy.in/${farmproduct}`
    : `https://www.dozzy.com/${farmproduct}`;

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  try {
    const response = await fetch("https://api.dozzy.com/customer/approved_properties?lat=17&long=78&program_id=1&property_capacity=1000", requestOptions);
    const result = await response.json();
    const getOrderedImages = (attributes) => {
      const imageMap = {};
      attributes?.forEach((attr) => {
        imageMap[attr.attribute_name] = attr.attribute_value;
      });

      return [
        imageMap["farmhouse_front_view"],
        imageMap["building_outside_pic_1"],
        imageMap["swimming_pool_pic_1"],
        imageMap["bedroom_1_0"],
        imageMap["garden_pic_1"]
      ].filter(imageSrc => imageSrc);
    };
    const cars = result?.data?.results;
    const car = cars?.find(i => i?.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-') === farmproduct);
    const selectedAtt = {
      property_name: car?.property_name,
      property_price: car?.property_price,
      weekend_price: car?.weekend_price,
      no_of_bedrooms: car?.no_of_bedrooms,
      property_capacity: car?.property_capacity,
      customer_night_prices: car?.customer_night_prices,
      images: getOrderedImages(car?.images)
    }
    return {
      props: {
        canonicalUrl: canonicalUrl,
        selectedAtt: selectedAtt || null // Set the car object or null if not found
      }
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        approvedProperties: null,
        canonicalUrl,
        car: null,
        farmproduct: farmproduct
      }
    };
  }
}