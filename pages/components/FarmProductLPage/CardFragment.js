// components/FarmProductLPage/CardFragment.js

import React, { useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import handleStoreRedirect from "@/utils/redirectUtils";
import { useRouter } from "next/router";

const CardFragment = ({ item }) => {
  const router = useRouter();

  // Early return if item or property_name is missing
  if (!item?.property_name) return null;

  // Memoizing the safe property name and display name
  const safePropertyName = useMemo(() => {
    return item.property_name
      .toLowerCase()
      .replace(/_/g, " ")
      .trim()
      .replace(/ /g, "-");
  }, [item.property_name]);

  const safeDisplayName = useMemo(() => {
    return item.property_name
      .replace(/_/g, " ")
      .trim()
      .toLowerCase();
  }, [item.property_name]);

  // Memoizing the link click handler
  const handleLinkClick = useCallback(() => {
    sessionStorage.setItem("farmhouse_scroll", window.scrollY);
  }, []);

  return (
    <div className="bg-red-2 rounded-lg overflow-hidden flex flex-col w-full xl:w-[380px] lg:w-[380px] px- lg:px-0 md:w-80 lg:h-[555px] h-[510px] mxs:h-[550px] relative ">
      <Link href={`${item?.link}`} onClick={handleLinkClick}>
        <Image
          className="rounded-t-lg xl:h-[410px] lg:h-[370px] h-[395px] mxs:h-[400px] object-cover"
          src={
            typeof item?.images === 'string' && item.images.trim() !== ''
              ? item.images
              : '/fallback.jpg' // Make sure this image exists in your /public folder
          }
          alt={`Farmhouse ${safeDisplayName} Image`}
          width={2000}
          height={2000}
          fetchPriority="high"
          loading="eager"
        />
      </Link>


      <div className="flex flex-col justify-center">
        <div className="flex items-baseline justify-between pt-2 lg:h-14 relative bottom-[2.5rem] lg:bottom-[3.5rem] bg-gradient-to-t from-black opacity-90 text-white px-3 py-2 font-semibold">
          <Link
            href={`${item?.link}`}
            onClick={handleLinkClick}
            className="lg:text-lg text-sm mxs:text-base  uppercase"
          >
            {safeDisplayName} <span className="text-xs">{item.no_of_bedrooms} BHK</span>
          </Link>

          <p className="text-white text-base font-bold lg:text-base font-Montserrat">
            ₹ {item?.customer_night_prices}
          </p>
        </div>
        <p className="text-white text-center py-2 relative bottom-[27.17rem] mxs:bottom-[27.5rem] lg:bottom-[26.6rem] xl:bottom-[29.2rem] rounded-t-lg bg-gradient-to-b from-black opacity-90 flex flex-col font-semibold">
          <span className="  p text-base lg:text-sm">
            500 discount + 500 cashback
          </span>{" "}
          <span className="  p text-base lg:text-sm">
            + 100 off for new user
          </span>{" "}

        </p>
        <div className="flex flex-col justify-between text-white relative bottom-[5.5rem] mxs:bottom-[5.5rem] xl:bottom-[5.5rem]">
          <ul className="flex justify-center gap-x-1 w-full px-4 pb-3">
            <li className="bg-[#74C184] w-full py-2 px-1 text-center rounded-md">
              <Link
                href="https://api.whatsapp.com/send/?phone=919111911162&text=Hi+I+am+looking+for+farmhouse+booking&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="flex gap-1 lg:text-sm text-xs justify-center items-center">
                  <FaWhatsapp size={20} /> <span>Whatsapp Us</span>
                </p>
              </Link>
            </li>
            <li className="bg-[#556EE6] w-full py-2 px-2 rounded-md">
              <Link href="tel:9111911162" target="_blank" rel="noopener noreferrer">
                <p className="flex gap-1 lg:text-sm text-xs justify-center items-center">
                  <BiPhoneCall size={20} /> <span>Call Us</span>
                </p>
              </Link>
            </li>
          </ul>

          <div onClick={handleStoreRedirect} className="cursor-pointer px-2">
            <p className="text-white text-base font-medium  border  border-[#556ee6] py-2 mxs:py-3 rounded-md flex gap-x-1 justify-center items-center bg-gradient-to-r from-blue-500 via-blue-700 to-gray-800">
              <span>Download Dozzy App</span>
              <MdDownloadForOffline className="size-5" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFragment;
