import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import customData from './components/kk.json';
import { PiCarFill } from "react-icons/pi";
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

import { FaIndianRupeeSign } from "react-icons/fa6";


import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import LinkCall from './components/LinkCall';

const CarDetails = ({ canonicalUrl, approvedProperties }) => {

  const router = useRouter();
  const [caritem, setCarItem] = useState('')
  const { farmproduct } = router.query;
  // console.log(propertyid, "propertyid");

  const mdfyFarmProduct = farmproduct;

  const [loading, setLoading] = useState(true);
  const [fmDetail, setFmDetail] = useState(null);



  useEffect(() => {
    async function fetchCarDetails() {
      try {
        const response = await fetch(`https://api.dozzy.com/customer/approved_properties?lat=17.387140&long=78.491684&program_id=1&property_capacity=1000`);
        const requestOptions = {
          method: "GET",
          redirect: "follow"
        };
        const items = await response.json();

        const cars = items?.data?.results;
        const car = cars?.find(i => i?.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-') === mdfyFarmProduct);
        // setCarItem(car);
        // item.property_name.toLowerCase().replaceAll(/_/g, " ").replace(/\d+/g, ' ').replace('dozzy', '').trim().replaceAll(/ /g, '-')
        setFmDetail(car)

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (farmproduct) {
      fetchCarDetails();
    }
  }, [farmproduct]);

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
      imageMap["night_garden_pic_1"],
    ];
  };
  

  return (
    <div className='bg-white text-black mont-text'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Private Farmhouse for Rent in Hyderabad</title>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="farmhouses in Hyderabad, cheapest farmhouse rentals, farmhouses near me, farmhouse rentals, top farmhouses in Hyderabad, private farmhouses for rent, rent a farmhouse, farmhouses for celebrations" />
        <meta name="description" content="Top Rated Farmhouses in Hyderabad for Weddings, Haldhi, Mehndi, Parties and More. Enjoy Scenic Venues with Beautiful Setups for your Special Celebrations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Private Farmhouse for Rent in Hyderabad" />
        <meta name="og:description" content="Top Rated Farmhouses in Hyderabad for Weddings, Haldhi, Mehndi, Parties and More. Enjoy Scenic Venues with Beautiful Setups for your Special Celebrations." />
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16698821101"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16698821101');
                      `,
          }}
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16698821101"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16698821101');
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-16698821101/AchICOTCyOsZEO2Tz5o-',
                  'value': 1.0,
                  'currency': 'INR',
                  'event_callback': callback
                });
                return false;
              }
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
                         'phone_conversion_number': '96666-559-73'
                         });`,
          }}
        />


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
        <div className='flex flex-col md:flex-row md:mt-2 lg:mt-2 lg:gap-16  p-2 border-2 border-[#556EE6] rounded-md'>
          <div className="crsldetails rounded-lg xl:w-[45%] lg:w-[70%]">
            <Carousel
              showThumbs={false}
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              stopOnHover={true}
              className=""
            >
              {getOrderedImages(fmDetail?.images).map(
                (imageSrc, index) => (
                  <div key={index} onClick={(e) => LinkCall(e, `/${fmDetail?.property_name.replace('_Dozzy_', ' ').replace(/\d/g, '')}`)} href={`/${fmDetail?.property_name.toLowerCase().replace(/ /g, "-")}`}>
                    {<Image height={1000} width={1000} alt={"Farm Houses In Hyderbad"} src={imageSrc} ></Image>}
                    {console.log(getOrderedImages(fmDetail?.images), "imageSrc")}
                  </div>
                )
              )}

            </Carousel>
          </div>
          <div className='flex flex-col lg:gap-14 gap-4 lg:pt-10 pt-2'>
            <div>
              <div className='p-1 font-bold  text-xl lg:text-3xl lg: capitalize'>{fmDetail?.property_name} Farm House ({fmDetail?.no_of_bedrooms} BHK) <p className='text-blue-600 pt-3'>₹ {fmDetail?.property_price}/day</p>
                <p className='text-blue-600 opacity-70 text-sm pl-1 pt-2'>₹{fmDetail?.weekend_price}/day <span className='text-black'>(Fri-Sun)</span></p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-col  text-xs font-semibold lg:text-base xs: lg:w-full">
              <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md">
                <HiCurrencyRupee className="bg-[#556ee6] rounded-md p-1 text-white text-xs" size={30} />
                <p className="ml-1">No Deposit</p>
              </div>
              <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md">
                <FaPeopleLine className="bg-[#556ee6] text-white rounded px-[4px]" size={30} />
                <p className="ml-1">Unlimited Persons</p>
              </div>
            </div>
            <div className=''>
              <h2 className='font-semibold text-xl'>Contact Us By</h2>
              <div className='flex justify-start gap-4 lg:gap-5 xl:gap-8 xl:pt-4 pb-2 pt-2 text-white'>
                <button className='bg-green-500 rounded-md p-2 lg:p-3'>
                  <Link onClick={(e) => LinkCall(e, "https://api.whatsapp.com/send?phone=+9666655973&text=Hi%0AI%20am%20looking%20for%20a%20farmhouse%20booking.")} href="https://api.whatsapp.com/send?phone=+9666655973&text=Hi%0AI%20am%20looking%20for%20a%20farmhouse%20booking.">
                    <p className=' flex items-center gap-1 text-sm'><span><FaWhatsapp className='xl:size-6' /></span> <span>Whatsapp</span></p>
                  </Link>
                </button>
                <button className='bg-blue-500 rounded-md p-2 lg:p-3 lg:px-7'>
                  <Link onClick={(e) => LinkCall(e, "tel:9666655973")} href="tel:9666655973" target='_blank'>
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
              <GiBarbecue size={30} className={`text-${caritem?.vehicle_color}-400 lg:size-10`} />
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
            <ul className='p-4 text-sm font-normaltext-[14px] lg:text-lg leading-6 font-poppins'>
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
              <p className='font-bold text-sm lg:text-lg pl-[70px] mxs:pl-[123px] msm:pl-44 lg:pl-7 md:pl-[520px] border-red-900'>  <FaIndianRupeeSign className="text-black" /></p>
            </div>
          </div>
          <div className="w-full  text-black border border-black lg:w-[265px] font-semibold lg:text-[14px] text-xs ">
            <div className="flex justify-between border-b border-black p-[10px] lg:p-2  ">
              <span className=" border-black px-2 ">Self Cooking Access</span>
              <span className=" border-black px-2  lg:px-[10px] border-r-2"></span>
              <span className=" border-black px-3  lg:px-4  ">500</span>
            </div>
            <div className="flex justify-between border-b border-black p-[10px] lg:p-2  ">
              <span className=" border-black px-2 ">Barbecue Setup</span>
              <span className=" border-black px-[21px] lg:px-[24.5px]  border-r-2"></span>
              <span className=" border-black px-3 lg:px-4   ">500</span>
            </div>
            <div className="flex justify-between border-b border-black p-[10px] lg:p-2  ">
              <span className=" border-black px-2 w-18 ">Cleaning Charges</span>
              <span className=" border-black px-[14px] lg:px-[16.5px] border-r-2"></span>
              <span className=" border-black px-3 lg:px-4  ">500</span>
            </div>
            <div className="flex justify-between border-b border-black p-[10px] lg:p-2   ">
              <span className=" border-black px-2 ">Extra Per Person</span>
              <span className=" border-black px-[20.5px] lg:px-[24px] border-r-2"></span>
              <span className=" border-black px-3 lg:px-4   ">500</span>
            </div>
          </div>
        </div>
        <div className='px-5 lg:px-0 pt-2'>
          <h2 className='font-bold text-2xl lg:text-3xl border-l-4 pl-2 border-red-900 md:my-6 my-2' >Description</h2>
          <p className='font-normal p-1 text-[14px] lg:text-lg leading-6 font-poppins pb-8 lg:w-[50%]'>
            {customData[mdfyFarmProduct?.toLowerCase()]?.desc}
          </p>
          <p className='font-normal p-1 text-[14px] lg:text-lg leading-6 font-poppins pb-8 lg:w-[50%]'>
            {customData[mdfyFarmProduct?.toLowerCase()]?.subdesc}
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


export async function getServerSideProps({ req }) {
  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? 'https://www.dozzy.in'
    : 'https://www.dozzy.com';
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  try {
    // Fetching the approved properties data
    const response = await fetch("https://api.dozzy.com/customer/approved_properties?lat=17.387140&long=78.491684&program_id=1&property_capacity=1000", requestOptions);
    const result = await response.json();

    // Return both data objects as props
    return {
      props: {
        approvedProperties: result,
        canonicalUrl: canonicalUrl
      }
    };
  } catch (error) {
    console.error(error);
    // Handle the error if the fetches fail, return an empty array or appropriate fallback
    return {
      props: {
        approvedProperties: null,

      }
    };
  }
}