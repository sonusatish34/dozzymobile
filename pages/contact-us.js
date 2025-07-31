import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import apple from './images/apple.webp';
import google from './images/ggle.webp';
import dynamic from 'next/dynamic';
const HomeBanner = dynamic(() => import('./components/HomeBanner.js/HomeBanner'));
import contactr from './images/contactr.webp';
import LinkCall from './components/LinkCall';
import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { ImLocation2 } from 'react-icons/im';

const ComponentName = ({ filteredFHs }) => {
  useEffect(() => {
    // Disable right-click
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', disableContextMenu);

    // Disable text copy
    const disableCopy = (e) => e.preventDefault();
    document.addEventListener('copy', disableCopy);

    // Disable inspect element
    const disableInspectKeys = (e) => {
      if (
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U') ||
        e.key === 'F12'
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', disableInspectKeys);

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('copy', disableCopy);
      document.removeEventListener('keydown', disableInspectKeys);
    };
  }, []);

  return (
    <div
      className="select-none"
      style={{
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
      }}
    >
      <div className="text-black bg-white pt-7 px-2 py-2">
        <div className="bg-white text-black lg:text-lg text-sm lg:leading-9 leading-7 lg:pt-2">
          <div className="flex lg:flex-row flex-col justify-between items-center lg:px-16 px-2 pt-4">
            <div>
              <h3 className="pt-4 xl:text-2xl lg:text-xl text-lg text-center lg:text-left font-semibold lg:w-2/3">
                Download Dozzy App to Check Available Farm Houses & Book
              </h3>
              <div className="flex gap-2 py-2 justify-center lg:justify-normal items-center relative ">
                <Link href="https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530">
                  <Image
                    height={500}
                    width={500}
                    alt="apple"
                    className="lg:w-40 lg:h-14 w-28 h-11 lg:hover:scale-105"
                    src={apple}
                    loading="lazy"
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.dozzy_customer">
                  <Image
                    height={500}
                    width={500}
                    alt="google"
                    className="lg:w-48 lg:h-20 w-32 h-16 lg:hover:scale-105"
                    src={google}
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
            <div>
              <Image
                src={contactr}
                alt="Dozzy app"
                height={1000}
                width={1000}
                className="xl:w-[450px] lg:scale-150 lg:w-[350px] w-[300px] relative xl:right-36 lg:right-16 top-3"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pt-20 lg:pl-20 text-black py-4 px-6">
        <h3 className="font-bold lg:text-3xl text-xl pb-4">Contact Details</h3>
        <div className="flex lg:flex-row flex-col lg:gap-x-4 gap-y-4">
          <Link
            className="xl:text-3xl lg:text-xl font-bold text-base flex items-center gap-1 lg:gap-2 lg:pt-2 border-2 p-2 rounded-md w-fit"
            href="tel:9111911162"
            target="_blank"
          >
            <FiPhoneCall className="size-4 lg:size-6 text-blue-500" />
            <span>9111-9111-62</span>
          </Link>
          <Link
            className="xl:text-3xl lg:text-xl font-bold text-base flex items-center gap-1 lg:gap-2 lg:pt-2 border-2 p-2 rounded-md w-fit"
            href="https://api.whatsapp.com/send/?phone=919111911162&text=Hi+I+am+looking+for+farmhouse+booking&type=phone_number&app_absent=0"
            target="_blank"
          >
            <FaWhatsapp className="size-4 lg:size-8 text-green-600" />
            <span>9111-9111-62</span>
          </Link>
        </div>

        <div className="py-10">
          <h3 className="font-bold lg:text-3xl text-xl pb-4">Farm Houses</h3>
          {filteredFHs.map((fh, ind) => (
            <ul key={ind} className="flex flex-col border-b-2 py-3 gap-y-2 lg:text-xl text-sm">
              <li className="font-semibold">
                <span className="capitalize">{fh.property_name?.toLowerCase()}</span>
              </li>
              <li className="flex gap-x-2">
               <span><ImLocation2 className='lg:size-10 size-6' color="orange" /></span> 
                <span>{fh.property_location}</span>
              </li>
              <li className="flex gap-x-2">
                <span>Area: {fh.area_name}</span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentName;

export async function getServerSideProps({ req }) {
  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? 'https://www.dozzy.in'
    : 'https://www.dozzy.com';

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const response = await fetch(
      'https://api.dozzy.com/customer/approved_properties?lat=17&long=78&program_id=1&property_capacity=1000',
      requestOptions
    );
    const result = await response.json();

    const filteredFHs = result?.data?.results?.map((car) => ({
      property_name: car.property_name,
      property_price: car.property_price,
      weekend_price: car.weekend_price,
      no_of_bedrooms: car.no_of_bedrooms,
      customer_night_prices: car.customer_night_prices,
      property_location: car.property_location,
      area_name: car.area_name,
    }));

    return {
      props: {
        canonicalUrl,
        filteredFHs,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        filteredFHs: [],
      },
    };
  }
}
