import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
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

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import skfarm1 from "./images/saketh/1.webp"
import skfarm2 from "./images/saketh/2.webp"
import skfarm3 from "./images/saketh/3.webp"

import shfarm1 from "./images/shan/1.webp"
import shfarm2 from "./images/shan/2.webp"
import shfarm3 from "./images/shan/3.webp"

import srfarm1 from "./images/srinivasa/1.webp"
import srfarm2 from "./images/srinivasa/2.webp"
import srfarm3 from "./images/srinivasa/3.webp"

import zfarm1 from "./images/zoozoo/1.webp"
import zfarm2 from "./images/zoozoo/2.webp"
import zfarm3 from "./images/zoozoo/3.webp"

// import srvf1 from './images/sravan/1.webp'
// import srvf2 from './images/sravan/2.webp'
// import srvf3 from './images/sravan/3.webp'

import ty1 from './images/tyb/1.webp'
import ty2 from './images/tyb/2.webp'
import ty3 from './images/tyb/3.webp'

import a1 from './images/a1/1.webp'
import a2 from './images/a1/2.webp'
import a3 from './images/a1/3.webp'

import alsafa1 from './images/alsafa/1.webp'
import alsafa2 from './images/alsafa/2.webp'
import alsafa3 from './images/alsafa/3.webp'

import courtyard1 from './images/courtyard/1.webp'
import courtyard2 from './images/courtyard/2.webp'
import courtyard3 from './images/courtyard/3.webp'

import holiday1 from './images/holiday/1.webp'
import holiday2 from './images/holiday/2.webp'
import holiday3 from './images/holiday/3.webp'

import nbr1 from './images/nbr/1.webp'
import nbr2 from './images/nbr/2.webp'
import nbr3 from './images/nbr/3.webp'

import pleasant1 from './images/pleasant/1.webp'
import pleasant2 from './images/pleasant/2.webp'
import pleasant3 from './images/pleasant/3.webp'

import serinity1 from './images/serinity/1.webp'
import serinity2 from './images/serinity/2.webp'
import serinity3 from './images/serinity/3.webp'

import sp1 from './images/sp/1.webp'
import sp2 from './images/sp/2.webp'
import sp3 from './images/sp/3.webp'

import taksh1 from './images/taksh/1.webp'
import taksh2 from './images/taksh/2.webp'
import taksh3 from './images/taksh/3.webp'

import starbh1 from './images/starbh/1.webp'
import starbh2 from './images/starbh/2.webp'
import starbh3 from './images/starbh/3.webp'

import starling1 from './images/starling/1.webp'
import starling2 from './images/starling/2.webp'
import starling3 from './images/starling/3.webp'

import rajes1 from './images/rajes/1.webp'
import rajes2 from './images/rajes/2.webp'
import rajes3 from './images/rajes/3.webp'
import LinkCall from './components/LinkCall';
const CarDetails = () => {

  const router = useRouter();
  const [caritem, setCarItem] = useState('')
  const { farmproduct } = router.query;
  const mdfyFarmProduct = farmproduct?.toLowerCase().replace(/-/g, " ");

  const customData = {
    "saketh vanam": {
      farm_name: 'Saketh Vanam',
      price_24_hours: 13000,
      farm_image: { c1: skfarm1, c2: skfarm2, c3: skfarm3, },
      weekdays: { oneday: "10000", twoday: "25000" },
      weekends: { oneday: "12000", twoday: "35000" },
      desc: "Traditionally Farmhouses are simply homes built on agricultural lands to house and protect who owned or worked the land. The term Farmhouse isn't necessarily connected to a particular style identified by a fixed set of features, but a setting for a way of life. This is most likely why its appeal seems to be timeless."
    },
    "srinivasa": {
      farm_name: 'Srinivasa',
      price_24_hours: 13000,
      farm_image: { c1: srfarm1, c2: srfarm2, c3: srfarm3, },
      weekdays: { oneday: "15000", twoday: "25000" },
      weekends: { oneday: "17000", twoday: "35000" },
      desc: "SRINIVASA Farmhouse, nestled amidst the natural beauty, provides a serene escape from the city's hustle and bustle. Tailored for both relaxation and fun, our farmhouse guarantees a memorable experience for you and your loved ones. It features a refreshing swimming pool/baby pool, 12 acres of mango trees, a banyan tree, a fish pond, a fully equipped kitchen with bowls and plates, and a barbecue setup for delightful meals. For entertainment, there's a Bluetooth music system, a 100-inch big projector, WiFi, and access to Netflix, Prime, Hotstar, Aha, ZEE5, and YouTube. Game enthusiasts can indulge in cricket, shuttle, carroms, and chess, promising endless enjoyment for everyone. "
    },
    "zoo zoo": {
      farm_name: 'Zoo Zoo',
      price_24_hours: 8000,
      farm_image: { c1: zfarm1, c2: zfarm2, c3: zfarm3, },
      weekdays: { oneday: "8000", twoday: "10000" },
      weekends: { oneday: "10000", twoday: "25000" },
      desc: "The tranquil haven that Zoo Zoo Farmhouse provides from the bustle of the city is located deep inside the natural world. You and your loved ones are guaranteed a pleasant stay at our farmhouse, which is designed to offer the ideal balance of leisure and enjoyment.The Zoo Zoo Farmhouse has unique features such a cool pool, comfortable sit-out areas, a fully stocked kitchen with dishes and bowls, and a grill for delicious dinners. With a 55-inch TV, WiFi, Bluetooth audio system, Aha, ZEE5, YouTube, Netflix, and Prime, there are plenty of entertainment alternatives. Chess, carroms, shuttle, and cricket are available for those who enjoy playing games, so everyone will have a great time."
    },
    "shan": {
      farm_name: 'Shan',
      price_24_hours: 10000,
      farm_image: { c1: shfarm1, c2: shfarm2, c3: shfarm3, },
      weekdays: { oneday: "10000", twoday: "19000" },
      weekends: { oneday: "12000", twoday: "29000" },
      desc: "SHAN Farmhouse provides a tranquil getaway from the bustle of the city because it is tucked away in a beautiful natural setting. Our farmhouse is designed to provide you and your loved ones with an unforgettable experience, combining leisure and enjoyment. It has unique features including a cool pool, five acres of mango trees, a fully functional kitchen with dishes and bowls, and a grill for delicious dinners. A 100-inch large projector, Bluetooth audio system, WiFi, and access to Netflix, Prime, Hotstar, Aha, ZEE5, and YouTube are available for amusement. Gamers can play chess, carroms, shuttle, cricket, and shuttle, all of which guarantee hours of fun for all players. "
    },
    // "sravan": {
    //   farm_name: "Sravan",
    //   price_24_hours: 17000,
    //   farm_image: { c1: srvf1, c2: srvf2, c3: srvf3, },
    //   weekdays: { oneday: "17000", twoday: "34000" },
    //   weekends: { oneday: "17000", twoday: "34000" },
    //   desc: "Sravan Farm House, nestled in the serene heart of the forest, offers a dreamlike escape from the hustle and bustle of city life. Our farmhouse is designed to provide the perfect blend of leisure and enjoyment, ensuring a memorable stay for you and your loved ones. Key features of Sravan Farm House include a beautiful garden, a refreshing swimming pool, a fully equipped kitchen with dishes and bowls, and a barbecue area for delicious meals. For entertainment, we offer a 43-inch TV, WiFi, a Bluetooth audio system, and access to Netflix, Prime, Hotstar, Aha, and ZEE5. Enjoy a variety of games such as chess, carrom, shuttle, and cricket, ensuring fun for everyone."
    // },
    "tyb": {
      farm_name: "TYB",
      price_24_hours: 1000,
      farm_image: { c1: ty1, c2: ty2, c3: ty3, },
      weekdays: { oneday: "10000", twoday: "20000" },
      weekends: { oneday: "12000", twoday: "24000" },
      desc: "TYP Farmhouse, nestled in the tranquil heart of the forest, provides a dreamlike retreat from the chaos of city life. Our farmhouse is crafted to offer the ideal mix of relaxation and enjoyment, promising an unforgettable stay for you and your loved ones. TYP Farmhouse features a stunning garden, a refreshing swimming pool, a fully equipped kitchen with all necessary dishes and utensils, and a barbecue area for delightful meals. For entertainment, we provide a 43-inch TV, WiFi, a Bluetooth audio system, and access to Netflix, Prime, Hotstar, Aha, and ZEE5. Additionally, enjoy a range of games like chess, carrom, shuttle, and cricket, ensuring fun for everyone."
    },
    "al haadi": {
      farm_name: "Al Haadi",
      farm_image: { c1: a1, c2: a2, c3: a3, },
      weekdays: { oneday: "15000", twoday: "20000" },
      weekends: { oneday: "17000", twoday: "24000" },
      desc: "Al Haddi FarmHouse, set in the calm of the forest, is the perfect retreat from the fast-paced city life. Our farmhouse is thoughtfully designed to create a harmonious blend of relaxation and fun, guaranteeing a memorable stay for you and your loved ones. Enjoy the lush garden, the inviting swimming pool, and a fully equipped kitchen that allows you to whip up your favorite meals.",
      desc1: "Take advantage of the beautiful surroundings to connect with nature and relish the fresh, green atmosphere. With self-cooking facilities at your disposal, you can enjoy meals made to your liking while embracing the tranquility of the outdoors. For entertainment, we provide a 43-inch TV, WiFi, a Bluetooth sound system, and access to popular streaming services. Plus, enjoy engaging games like chess, carrom, shuttle, and cricket for endless fun."
    },
    "alsafa": {
      farm_name: "Alsafa",
      farm_image: { c1: alsafa1, c2: alsafa2, c3: alsafa3, },
      weekdays: { oneday: "13000", twoday: "20000" },
      weekends: { oneday: "15000", twoday: "24000" },
      desc: "Alsafa FarmHouse, tucked away in the peaceful heart of the forest, provides an idyllic escape from the fast-paced city life. Surrounded by lush greenery, our farmhouse allows you to fully immerse yourself in nature, enjoying the tranquil atmosphere that enhances your stay. Crafted for the perfect mix of relaxation and enjoyment, Alsafa FarmHouse ensures an unforgettable experience for you and your loved ones.",
      desc1: "Key features include a vibrant garden, a sparkling swimming pool, a fully equipped kitchen complete with dishes and bowls, and a barbecue area for delightful meals. For entertainment, we offer a 43-inch TV, WiFi, a Bluetooth sound system, and access to Netflix, Prime, Hotstar, Aha, and ZEE5. Additionally, enjoy fun games like chess, carrom, shuttle, and cricket, making it a perfect retreat for everyone. Embrace the beauty of nature at Alsafa FarmHouse and create cherished memories amidst the greenery."
    },
    "courtyard": {
      farm_name: "CourtYard",
      farm_image: { c1: courtyard1, c2: courtyard2, c3: courtyard3, },
      weekdays: { oneday: "10000", twoday: "20000" },
      weekends: { oneday: "12000", twoday: "24000" },
      desc: "Courtyard FarmHouse, tucked away in the peaceful heart of the forest, provides an idyllic escape from the fast-paced city life. Our farmhouse is crafted to offer the perfect mix of relaxation and enjoyment, ensuring an unforgettable experience for you and your loved ones. Key features include a lush garden, a sparkling swimming pool, a fully equipped kitchen complete with dishes and bowls, and a barbecue area for delightful meals. For entertainment, we provide a 43-inch TV, WiFi, a Bluetooth sound system, and access to Netflix, Prime, Hotstar, Aha, and ZEE5. Additionally, enjoy fun games like chess, carrom, shuttle, and cricket, making it a perfect stay for everyone.",
      desc1: ""
    },
    "holiday": {
      farm_name: "holiday",
      farm_image: { c1: holiday1, c2: holiday2, c3: holiday3, },
      weekdays: { oneday: "8000", twoday: "20000" },
      weekends: { oneday: "10000", twoday: "24000" },
      desc: "Holiday FarmHouse, set in the serene forest, invites you to unwind and enjoy quality time away from the fast-paced city. Our farmhouse ensures a comfortable stay with its well-maintained garden, a refreshing pool, and a fully stocked kitchen complete with dishes and a barbecue area. Stay entertained with a 43-inch TV, WiFi, Bluetooth sound system, and access to streaming services like Netflix, Prime, Hotstar, Aha, and ZEE5. Guests can also engage in various games, including chess, carrom, shuttle, and cricket, for a truly enjoyable experience.",
      desc1: ""
    },
    "nbr": {
      farm_name: "NBR",
      farm_image: { c1: nbr1, c2: nbr2, c3: nbr3, },
      weekdays: { oneday: "8000", twoday: "20000" },
      weekends: { oneday: "10000", twoday: "24000" },
      desc: "NBR FarmHouse, nestled in the tranquil heart of the forest, offers an idyllic retreat from the hustle and bustle of city life. Designed to provide the perfect blend of relaxation and enjoyment, our farmhouse ensures an unforgettable experience for you and your loved ones. Key features include a lush garden, a sparkling swimming pool, and a fully equipped kitchen complete with dishes and bowls, allowing you to enjoy self-cooking and savor your own culinary creations in the midst of nature.",
      desc1: "Immerse yourself in the beauty of the surrounding greenery and truly enjoy the atmosphere, where nature thrives. For entertainment, we offer a 43-inch TV, WiFi, a Bluetooth sound system, and access to streaming services like Netflix, Prime, Hotstar, Aha, and ZEE5. Additionally, engage in fun games such as chess, carrom, shuttle, and cricket, ensuring there's something for everyone. Experience a holiday filled with delicious homemade food, nature, and exciting adventures at NBR FarmHouse."
    },
    "pleasant view": {
      farm_name: "Pleasant",
      farm_image: { c1: pleasant1, c2: pleasant2, c3: pleasant3, },
      weekdays: { oneday: "10000", twoday: "20000" },
      weekends: { oneday: "12000", twoday: "24000" },
      desc: "Set in the quiet heart of the forest, Pleasantview FarmHouse offers a peaceful escape from the demands of everyday city living. Our farmhouse is designed to give you the ideal mix of leisure and entertainment, making it a wonderful getaway for families or friends. Enjoy a lovely garden, a refreshing swimming pool, a fully functional kitchen with all necessary dishes and bowls, and a barbecue area to savor outdoor meals. We provide entertainment with a 43-inch TV, WiFi, Bluetooth audio system, and access to popular streaming services such as Netflix, Prime, Hotstar, Aha, and ZEE5. Games like chess, carrom, shuttle, and cricket are also available to keep the fun going throughout your stay.",
      desc1: ""
    },
    "serenity": {
      farm_name: "Serenity",
      farm_image: { c1: serinity1, c2: serinity2, c3: serinity3, },
      weekdays: { oneday: "8000", twoday: "20000" },
      weekends: { oneday: "9000", twoday: "24000" },
      desc: "Serenity FarmHouse, tucked away in the peaceful heart of the forest, offers an idyllic escape from the fast-paced city life. Crafted to provide the perfect blend of relaxation and enjoyment, our farmhouse ensures an unforgettable experience for you and your loved ones. Key features include a lush garden, a sparkling swimming pool, and a fully equipped kitchen with dishes and bowls, allowing you to enjoy self-cooking and savor your favorite meals.",
      desc1: "Immerse yourself in the beauty of nature, surrounded by greenery that enhances the serene atmosphere. For entertainment, we offer a 43-inch TV, WiFi, a Bluetooth sound system, and access to Netflix, Prime, Hotstar, Aha, and ZEE5. Additionally, enjoy fun games like chess, carrom, shuttle, and cricket, making it a perfect stay for everyone. Indulge in your culinary adventures and relish your holiday with your own food amidst nature’s tranquility."
    },
    "sp farmhouse": {
      farm_name: "SP Farmhouse",
      farm_image: { c1: sp1, c2: sp2, c3: sp3, },
      weekdays: { oneday: "12000", twoday: "24000" },
      weekends: { oneday: "15000", twoday: "3000" },
      desc: "SP Farm House, located in a peaceful forest setting, provides the perfect escape from city life. With a focus on relaxation and fun, our farmhouse promises an enjoyable stay. Key features include a charming garden, a relaxing swimming pool, a fully equipped kitchen with all the essentials, and a barbecue area for outdoor dining. Entertainment options abound with a 43-inch TV, WiFi, a Bluetooth sound system, and access to popular streaming platforms like Netflix, Prime, Hotstar, Aha, and ZEE5. Additionally, indoor and outdoor games such as chess, carrom, shuttle, and cricket ensure fun for everyone.",
      desc1: ""
    },
    "takshvi": {
      farm_name: "Takshvi",
      farm_image: { c1: taksh1, c2: taksh2, c3: taksh3, },
      weekdays: { oneday: "10000", twoday: "20000" },
      weekends: { oneday: "12000", twoday: "24000" },
      desc: "Takshvi FarmHouse, tucked away in the peaceful heart of the forest, offers an idyllic escape from the fast-paced city life. Our farmhouse is designed to provide the perfect mix of relaxation and enjoyment, ensuring an unforgettable experience for you and your loved ones. Key features include a lush garden, a sparkling swimming pool, and a fully equipped kitchen stocked with dishes and bowls, allowing you to indulge in self-cooking and savor your own meals surrounded by nature.",
      desc1: "Immerse yourself in the beautiful atmosphere and greenery, where you can truly appreciate the tranquility of the outdoors. For entertainment, we provide a 43-inch TV, WiFi, a Bluetooth sound system, and access to streaming services like Netflix, Prime, Hotstar, Aha, and ZEE5. Additionally, enjoy fun games such as chess, carrom, shuttle, and cricket, making it a perfect stay for everyone. Embrace your holiday with delicious homemade food and thrilling adventures in nature."
    },
    "star lingam": {
      farm_name: "Star Lingam",
      farm_image: { c1: starling1, c2: starling2, c3: starling3, },
      weekdays: { oneday: "15000", twoday: "20000" },
      weekends: { oneday: "17000", twoday: "24000" },
      desc: "Star Lingam FarmHouse, nestled in the tranquil heart of the forest, offers a serene escape from the fast-paced city life. Designed for the perfect blend of relaxation and enjoyment, our farmhouse guarantees an unforgettable experience for you and your loved ones. Key features include a lush garden, a sparkling swimming pool, and a fully equipped kitchen complete with dishes and bowls, allowing you to enjoy self-cooking facilities and create your own culinary delights.",
      desc1: "Embrace the beauty of nature as you immerse yourself in the greenery surrounding the farmhouse. For entertainment, we provide a 43-inch TV, WiFi, a Bluetooth sound system, and access to popular streaming services like Netflix, Prime, Hotstar, Aha, and ZEE5. Additionally, engage in enjoyable games like chess, carrom, shuttle, and cricket, ensuring fun for everyone. Enjoy your holiday filled with nature, delicious home-cooked meals, and thrilling adventures"
    },
    "star bhima": {
      farm_name: "Star Bhima",
      farm_image: { c1: starbh1, c2: starbh2, c3: starbh3, },
      weekdays: { oneday: "15000", twoday: "20000" },
      weekends: { oneday: "17000", twoday: "24000" },
      desc: "Star Bhima FarmHouse, located in the peaceful embrace of the forest, is your ideal getaway from the city's chaos. Our farmhouse is thoughtfully designed to provide a harmonious blend of relaxation and enjoyment, promising a memorable stay for you and your family. Enjoy features such as a lush garden, a sparkling swimming pool, and a fully equipped kitchen that makes self-cooking a delight, allowing you to create meals using fresh ingredients.",
      desc1: "Revel in the beautiful surroundings, where the atmosphere is filled with the sounds of nature and the scent of greenery. For your entertainment, we provide a 43-inch TV, WiFi, a Bluetooth audio system, and access to popular streaming services like Netflix, Prime, Hotstar, Aha, and ZEE5. You can also enjoy fun-filled activities such as chess, carrom, shuttle, and cricket, making it a perfect getaway for all. Enjoy a holiday of culinary delights and nature adventures at Star Bhima FarmHouse."
    },
    "rajeswari": {
      farm_name: "Rajeswari",
      farm_image: { c1: rajes1, c2: rajes2, c3: rajes3, },
      weekdays: { oneday: "15000", twoday: "20000" },
      weekends: { oneday: "17000", twoday: "24000" },
      desc: "Rajeswari FarmHouse, located in the peaceful embrace of the forest, is your ideal getaway from the city's chaos. Our farmhouse is thoughtfully designed to provide a harmonious blend of relaxation and enjoyment, promising a memorable stay for you and your family. Enjoy features such as a lush garden, a sparkling swimming pool, and a fully equipped kitchen that makes self-cooking a delight, allowing you to create meals using fresh ingredients.",
      desc1: "Revel in the beautiful surroundings, where the atmosphere is filled with the sounds of nature and the scent of greenery. For your entertainment, we provide a 43-inch TV, WiFi, a Bluetooth audio system, and access to popular streaming services like Netflix, Prime, Hotstar, Aha, and ZEE5. You can also enjoy fun-filled activities such as chess, carrom, shuttle, and cricket, making it a perfect getaway for all. Enjoy a holiday of culinary delights and nature adventures at Rajeswari FarmHouse."
    },
  }

  return (
    <div className='bg-white text-black mont-text'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zero Deposit & Unlimited Guests - Dozzy Farmhouse Rentals</title>
        <meta name="description" content="Enjoy the great outdoors with zero deposit, Unlimited Guests, and luxurious farmhouse rentals. Perfect for relaxation, parties, and weddings. Book now and enjoy your privacy in nature's luxury." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Zero Deposit & Unlimited Guests - Dozzy Farmhouse Rentals" />
        <meta property="og:description" content="Enjoy the great outdoors with zero deposit, Unlimited Guests, and luxurious farmhouse rentals. Perfect for relaxation, parties, and weddings. Book now and enjoy your privacy in nature's luxury. " />
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
              interval={5000}
              stopOnHover={true}
              className=""
            >
              {<Image className='rounded-md' src={customData[mdfyFarmProduct?.toLowerCase()]?.farm_image.c1} alt={"1"} />}
              {<Image className='rounded-md' src={customData[mdfyFarmProduct?.toLowerCase()]?.farm_image.c2} alt={"2"} />}
              {<Image className='rounded-md' src={customData[mdfyFarmProduct?.toLowerCase()]?.farm_image.c3} alt={"3"} />}
            </Carousel>
          </div>
          <div className='flex flex-col lg:gap-14 gap-4 lg:pt-10 pt-2'>
            <div>
              <h2 className='p-1 font-bold  text-xl lg:text-3xl lg: capitalize'>{customData[mdfyFarmProduct?.toLowerCase()]?.farm_name} Farm House <p className='text-blue-600 pt-3'>₹ {customData[mdfyFarmProduct?.toLowerCase()]?.weekdays.oneday}/day</p>
                <p className='text-blue-600 opacity-70 text-xs pl-1'>₹ {customData[mdfyFarmProduct?.toLowerCase()]?.weekends.oneday}/day <span className='text-black'>(Fri-Sun)</span></p>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-col  text-xs font-semibold lg:text-base xs: lg:w-full">
              <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md">
                <HiCurrencyRupee className="bg-[#556ee6] rounded-md p-1 text-white text-xs" size={30} />
                <p className="ml-1">Zero Deposit</p>
              </div>
              <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md">
                <FaPeopleLine className="bg-[#556ee6] text-white rounded px-[4px]" size={30} />
                <p className="ml-1">Unlimited Persons</p>
              </div>
            </div>
            <div className=''>
              <h2 className='font-semibold text-xl'>Contact Us By</h2>
              <div className='flex justify-start gap-4 lg:gap-5 xl:gap-8 xl:pt-4 pb-2 pt-2 text-white'>
                <button  className='bg-green-500 rounded-md p-2 lg:p-3'>
                  <Link onClick={LinkCall} href="https://api.whatsapp.com/send?phone=+9111911162&text=Hi%0AI%20am%20looking%20for%20a%20farmhouse%20booking.">
                    <p className=' flex items-center gap-1 text-sm'><span><FaWhatsapp className='xl:size-6' /></span> <span>1Whatsapp</span></p>
                  </Link>
                </button>
                <button className='bg-blue-500 rounded-md p-2 lg:p-3 lg:px-7'>
                  <Link onClick={LinkCall} href="tel:9111911162" target='_blank'>
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
            <p className='font-bold text-2xl lg:text-3xl border-l-4 pl-2 border-red-900 md:my-6 my-2 '>Additional Charges</p>
            <ul className='p-4 text-sm font-normaltext-[14px] lg:text-lg leading-6 font-poppins capitalize'>
              <li className='list-decimal md:w-72'><p className='flex justify-between'><span>Self Cooking Access  </span><span> 500</span></p> </li>
              <li className='list-decimal md:w-72'><p className='flex justify-between'><span>barbecue Setup </span><span> 500</span></p> </li>
              <li className='list-decimal md:w-72'><p className='flex justify-between'><span>bonfire Setup</span><span> 500</span></p> </li>
              <li className='list-decimal md:w-72'><p className='flex justify-between'><span>Cleaning charges </span><span> 500</span></p> </li>
              <li className='list-decimal md:w-72'><p className='flex justify-between'><span>extra per person </span><span> 500</span></p> </li>
            </ul>
          </div>
        </div>
        <div className='px-5 lg:px-0'>
          <h2 className='font-bold text-2xl lg:text-3xl border-l-4 pl-2 border-red-900 md:my-6 my-2' >Description</h2>
          <p className='font-normal p-1 text-[14px] lg:text-lg leading-6 font-poppins pb-8 lg:w-[50%]'>
            {customData[mdfyFarmProduct?.toLowerCase()]?.desc}
          </p>
        </div>

      </div>
    </div>
  );
};

export default CarDetails;

