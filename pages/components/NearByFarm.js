import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const NearByFarm = ({ lat, lon, loc }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      // 17.071582677448355&long=78.20482252996761
      fetch(`https://api.dozzy.com/customer/approved_properties?lat=${lat}&long=${lon}&program_id=1&property_capacity=1000&limit=10`, requestOptions)
        .then((response) => response.json())
        .then((result) => setData(result?.data?.results))
        .catch((error) => console.error(error));
    }
    fetchData()
  }, [])

  return (
    <div>
      <p className='text-xl lg:text-4xl lg:pt-10 pt-5 font-bold'>Farmhouses Near by {loc}</p>
      <div className='grid lg:grid-cols-3 grid-cols-1 items-center justify-center lg:justify-normal gap-10 lg:gap-16 px-2 lg:px-2 py-10'>
        {
          data?.length > 0 ? data?.map((fh, index) => (
            fh.distance <= 15 &&
             <div key={index} className='w'>
              <Link href={`https://www.dozzy.com/${fh?.property_name?.replaceAll(' ','-')}`}>
              <Image src={fh?.images[0]?.attribute_value} alt='nearby-farmhouse' width={1920} height={450} className='w-full h-[333px] object-cover rounded-t-lg' />
              </Link>
              
              <div className='bg-gray-100 p-2 rounded-b-lg'>
                <p className='flex justify-between '><Link className='font-bold' href={`https://www.dozzy.com/${fh?.property_name?.replaceAll(' ','-')}`}>{fh?.property_name}</Link><span>{fh?.property_price}/Day</span></p>
                <p className='p'>For Booking</p>
                <div className='flex justify-start gap-4 lg:gap-5 xl:gap-8 pb-2 pt-2 text-white'>
                  <button className='bg-green-500 rounded-md p-2 lg:p-1 lg:px-2'>
                    <Link href="https://api.whatsapp.com/send/?phone=919111911162&text=Hi+I+am+looking+for+farmhouse+booking&type=phone_number&app_absent=0">
                      <p className=' flex items-center gap-1 text-sm'><span><FaWhatsapp className='xl:size-6' /></span> <span>Whatsapp</span></p>
                    </Link>
                  </button>
                  <button className='bg-blue-500 rounded-md p-2 lg:p-2 lg:px-7'>
                    <Link href="tel:9111911162" target='_blank'>
                      <p className=' flex items-center gap-1 text-sm'><span><BiPhoneCall className='xl:size-6' /></span> <span>Call Us</span></p>
                    </Link>
                  </button>
                </div>
              </div>
            </div>


            // <p>{fh?.distance}</p>
          )) : ''
        }
      </div>

    </div>
  );
};

export default NearByFarm;