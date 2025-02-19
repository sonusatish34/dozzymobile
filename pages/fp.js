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


import skfarm1 from "./images/saketh/1.webp"
import skfarm2 from "./images/saketh/2.webp"
import skfarm3 from "./images/saketh/3.webp"
import skfarm4 from "./images/saketh/4.webp"
import skfarm5 from "./images/saketh/5.webp"
import skfarm6 from "./images/saketh/6.webp"
import skfarm7 from "./images/saketh/7.webp"
import skfarm8 from "./images/saketh/8.webp"

import shfarm1 from "./images/shan/1.webp"
import shfarm2 from "./images/shan/2.webp"
import shfarm3 from "./images/shan/3.webp"

import srfarm1 from "./images/srinivasa/1.webp"
import srfarm2 from "./images/srinivasa/2.webp"
import srfarm3 from "./images/srinivasa/3.webp"

import zfarm1 from "./images/zoozoo/1.webp"
import zfarm2 from "./images/zoozoo/2.webp"
import zfarm3 from "./images/zoozoo/3.webp"

import sskf1 from './images/sravan/1.webp'
import sskf2 from './images/sravan/2.webp'
import sskf3 from './images/sravan/3.webp'
import sskf4 from './images/sravan/4.webp'
import sskf5 from './images/sravan/5.webp'
import sskf6 from './images/sravan/6.webp'
import sskf7 from './images/sravan/7.webp'
import sskf8 from './images/sravan/8.webp'

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
import holiday4 from './images/holiday/4.webp'
import holiday5 from './images/holiday/5.webp'
import holiday6 from './images/holiday/6.webp'
import holiday7 from './images/holiday/7.webp'
import holiday8 from './images/holiday/8.webp'

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

import arush1 from "./images/arush/1.webp"
import arush2 from "./images/arush/2.webp"
import arush3 from "./images/arush/3.webp"
import arush4 from "./images/arush/4.webp"
import arush5 from "./images/arush/5.webp"
import arush6 from "./images/arush/6.webp"
import arush7 from "./images/arush/7.webp"
import arush8 from "./images/arush/8.webp"

import ram1 from "./images/4ram/1.webp"
import ram2 from "./images/4ram/2.webp"
import ram3 from "./images/4ram/3.webp"

import svr1 from "./images/svrp/1.webp"
import svr2 from "./images/svrp/2.webp"
import svr3 from "./images/svrp/3.webp"
import svr4 from "./images/svrp/4.webp"
import svr5 from "./images/svrp/5.webp"
import svr6 from "./images/svrp/6.webp"
import svr7 from "./images/svrp/7.webp"
import svr8 from "./images/svrp/8.webp"


import asn1 from "./images/asn/1.webp"
import asn2 from "./images/asn/2.webp"
import asn3 from "./images/asn/3.webp"
import asn4 from "./images/asn/4.webp"
import asn5 from "./images/asn/5.webp"
import asn6 from "./images/asn/6.webp"
import asn7 from "./images/asn/7.webp"
import asn8 from "./images/asn/8.webp"


import bgy1 from "./images/bgy/1.webp"
import bgy2 from "./images/bgy/2.webp"
import bgy3 from "./images/bgy/3.webp"
import bgy4 from "./images/bgy/4.webp"
import bgy5 from "./images/bgy/5.webp"
import bgy6 from "./images/bgy/6.webp"
import bgy7 from "./images/bgy/7.webp"
import bgy8 from "./images/bgy/8.webp"

import bom1 from "./images/bamboo/1.webp"
import bom2 from "./images/bamboo/2.webp"
import bom3 from "./images/bamboo/3.webp"

import box1 from "./images/box/1.webp"
import box2 from "./images/box/2.webp"
import box3 from "./images/box/3.webp"
import box4 from "./images/box/4.webp"
import box5 from "./images/box/5.webp"
import box6 from "./images/box/6.webp"
import box7 from "./images/box/7.webp"
import box8 from "./images/box/8.webp"

import pb1 from "./images/pb/1.webp"
import pb2 from "./images/pb/2.webp"
import pb3 from "./images/pb/3.webp"
import pb4 from "./images/pb/4.webp"
import pb5 from "./images/pb/5.webp"
import pb6 from "./images/pb/6.webp"
import pb7 from "./images/pb/7.webp"
import pb8 from "./images/pb/8.webp"

import sb1 from "./images/sb/1.webp"
import sb2 from "./images/sb/2.webp"
import sb3 from "./images/sb/3.webp"
import sb4 from "./images/sb/4.webp"
import sb5 from "./images/sb/5.webp"
import sb6 from "./images/sb/6.webp"
import sb7 from "./images/sb/7.webp"
import sb8 from "./images/sb/8.webp"

import py1 from "./images/py/1.webp"
import py2 from "./images/py/2.webp"
import py3 from "./images/py/3.webp"
import py4 from "./images/py/4.webp"
import py5 from "./images/py/5.webp"
import py6 from "./images/py/6.webp"
import py7 from "./images/py/7.webp"
import py8 from "./images/py/8.webp"


import LinkCall from './components/LinkCall';

const CarDetails = ({ canonicalUrl }) => {

  const router = useRouter();
  const [caritem, setCarItem] = useState('')
  const { farmproduct } = router.query;
  const mdfyFarmProduct = farmproduct?.toLowerCase().replace(/-/g, " ");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay or async operation
    const loadData = async () => {
      // Set loading to true to show the loader
      setLoading(true);
      // Simulate delay (e.g., with a timeout or actual async operation)
      await new Promise(resolve => setTimeout(resolve, 200));
      // Set loading to false after data has loaded
      setLoading(false);
    };
    loadData();
  }, []); // Add dependencies if needed


  const customData = {

    // "srinivasa": {
    //   farm_name: 'Srinivasa',
    //   price_24_hours: 13000,
    //   farm_image: { c1: srfarm1, c2: srfarm2, c3: srfarm3, },
    //   weekdays: { oneday: "15000", twoday: "25000" },
    //   weekends: { oneday: "17000", twoday: "35000" },
    //   desc: "SRINIVASA Farmhouse, nestled amidst the natural beauty, provides a serene escape from the city's hustle and bustle. Tailored for both relaxation and fun, our farmhouse guarantees a memorable experience for you and your loved ones. It features a refreshing swimming pool/baby pool, 12 acres of mango trees, a banyan tree, a fish pond, a fully equipped kitchen with bowls and plates, and a barbecue setup for delightful meals. For entertainment, there's a Bluetooth music system, a 100-inch big projector, WiFi, and access to Netflix, Prime, Hotstar, Aha, ZEE5, and YouTube. Game enthusiasts can indulge in cricket, shuttle, carroms, and chess, promising endless enjoyment for everyone. ",
    //   no_beds:"5"
    // },
    // "zoo zoo": {
    //   farm_name: 'Zoo Zoo',
    //   price_24_hours: 8000,
    //   farm_image: { c1: zfarm1, c2: zfarm2, c3: zfarm3, },
    //   weekdays: { oneday: "8000", twoday: "10000" },
    //   weekends: { oneday: "10000", twoday: "25000" },
    //   desc: "The tranquil haven that Zoo Zoo Farmhouse provides from the bustle of the city is located deep inside the natural world. You and your loved ones are guaranteed a pleasant stay at our farmhouse, which is designed to offer the ideal balance of leisure and enjoyment.The Zoo Zoo Farmhouse has unique features such a cool pool, comfortable sit-out areas, a fully stocked kitchen with dishes and bowls, and a grill for delicious dinners. With a 55-inch TV, WiFi, Bluetooth audio system, Aha, ZEE5, YouTube, Netflix, and Prime, there are plenty of entertainment alternatives. Chess, carroms, shuttle, and cricket are available for those who enjoy playing games, so everyone will have a great time.",
    //   no_beds:"2"
    // },
    // "shan": {
    //   farm_name: 'Shan',
    //   price_24_hours: 10000,
    //   farm_image: { c1: shfarm1, c2: shfarm2, c3: shfarm3, },
    //   weekdays: { oneday: "10000", twoday: "19000" },
    //   weekends: { oneday: "12000", twoday: "29000" },
    //   desc: "SHAN Farmhouse provides a tranquil getaway from the bustle of the city because it is tucked away in a beautiful natural setting. Our farmhouse is designed to provide you and your loved ones with an unforgettable experience, combining leisure and enjoyment. It has unique features including a cool pool, five acres of mango trees, a fully functional kitchen with dishes and bowls, and a grill for delicious dinners. A 100-inch large projector, Bluetooth audio system, WiFi, and access to Netflix, Prime, Hotstar, Aha, ZEE5, and YouTube are available for amusement. Gamers can play chess, carroms, shuttle, cricket, and shuttle, all of which guarantee hours of fun for all players. ",
    //   no_beds:"3"
    // },

    // "tyb": {
    //   farm_name: "TYB",
    //   price_24_hours: 1000,
    //   farm_image: { c1: ty1, c2: ty2, c3: ty3, },
    //   weekdays: { oneday: "10000", twoday: "20000" },
    //   weekends: { oneday: "12000", twoday: "24000" },
    //   desc: "TYP Farmhouse, nestled in the tranquil heart of the forest, provides a dreamlike retreat from the chaos of city life. Our farmhouse is crafted to offer the ideal mix of relaxation and enjoyment, promising an unforgettable stay for you and your loved ones. TYP Farmhouse features a stunning garden, a refreshing swimming pool, a fully equipped kitchen with all necessary dishes and utensils, and a barbecue area for delightful meals. For entertainment, we provide a 43-inch TV, WiFi, a Bluetooth audio system, and access to Netflix, Prime, Hotstar, Aha, and ZEE5. Additionally, enjoy a range of games like chess, carrom, shuttle, and cricket, ensuring fun for everyone."
    // },
    // "al haadi": {
    //   farm_name: "Al Haadi",
    //   farm_image: { c1: a1, c2: a2, c3: a3, },
    //   weekdays: { oneday: "15000", twoday: "20000" },
    //   weekends: { oneday: "17000", twoday: "24000" },
    //   desc: "Al Haddi FarmHouse, set in the calm of the forest, is the perfect retreat from the fast-paced city life. Our farmhouse is thoughtfully designed to create a harmonious blend of relaxation and fun, guaranteeing a memorable stay for you and your loved ones. Enjoy the lush garden, the inviting swimming pool, and a fully equipped kitchen that allows you to whip up your favorite meals.",
    //   desc1: "Take advantage of the beautiful surroundings to connect with nature and relish the fresh, green atmosphere. With self-cooking facilities at your disposal, you can enjoy meals made to your liking while embracing the tranquility of the outdoors. For entertainment, we provide a 43-inch TV, WiFi, a Bluetooth sound system, and access to popular streaming services. Plus, enjoy engaging games like chess, carrom, shuttle, and cricket for endless fun.",
    //   no_beds:"4"
    // },
    // "alsafa": {
    //   farm_name: "Alsafa",
    //   farm_image: { c1: alsafa1, c2: alsafa2, c3: alsafa3, },
    //   weekdays: { oneday: "13000", twoday: "20000" },
    //   weekends: { oneday: "15000", twoday: "24000" },
    //   desc: "Alsafa FarmHouse, tucked away in the peaceful heart of the forest, provides an idyllic escape from the fast-paced city life. Surrounded by lush greenery, our farmhouse allows you to fully immerse yourself in nature, enjoying the tranquil atmosphere that enhances your stay. Crafted for the perfect mix of relaxation and enjoyment, Alsafa FarmHouse ensures an unforgettable experience for you and your loved ones.",
    //   desc1: "Key features include a vibrant garden, a sparkling swimming pool, a fully equipped kitchen complete with dishes and bowls, and a barbecue area for delightful meals. For entertainment, we offer a 43-inch TV, WiFi, a Bluetooth sound system, and access to Netflix, Prime, Hotstar, Aha, and ZEE5. Additionally, enjoy fun games like chess, carrom, shuttle, and cricket, making it a perfect retreat for everyone. Embrace the beauty of nature at Alsafa FarmHouse and create cherished memories amidst the greenery.",
    //   no_beds:"2"
    // },
    // "pleasant view": {
    //   farm_name: "Pleasant",
    //   farm_image: { c1: pleasant1, c2: pleasant2, c3: pleasant3, },
    //   weekdays: { oneday: "10000", twoday: "20000" },
    //   weekends: { oneday: "12000", twoday: "24000" },
    //   desc: "Set in the quiet heart of the forest, Pleasantview FarmHouse offers a peaceful escape from the demands of everyday city living. Our farmhouse is designed to give you the ideal mix of leisure and entertainment, making it a wonderful getaway for families or friends. Enjoy a lovely garden, a refreshing swimming pool, a fully functional kitchen with all necessary dishes and bowls, and a barbecue area to savor outdoor meals. We provide entertainment with a 43-inch TV, WiFi, Bluetooth audio system, and access to popular streaming services such as Netflix, Prime, Hotstar, Aha, and ZEE5. Games like chess, carrom, shuttle, and cricket are also available to keep the fun going throughout your stay.",
    //   desc1: "",
    //   no_beds:"4"
    // },
    // "serenity": {
    //   farm_name: "Serenity",
    //   farm_image: { c1: serinity1, c2: serinity2, c3: serinity3, },
    //   weekdays: { oneday: "8000", twoday: "20000" },
    //   weekends: { oneday: "9000", twoday: "24000" },
    //   desc: "Serenity FarmHouse, tucked away in the peaceful heart of the forest, offers an idyllic escape from the fast-paced city life. Crafted to provide the perfect blend of relaxation and enjoyment, our farmhouse ensures an unforgettable experience for you and your loved ones. Key features include a lush garden, a sparkling swimming pool, and a fully equipped kitchen with dishes and bowls, allowing you to enjoy self-cooking and savor your favorite meals.",
    //   desc1: "Immerse yourself in the beauty of nature, surrounded by greenery that enhances the serene atmosphere. For entertainment, we offer a 43-inch TV, WiFi, a Bluetooth sound system, and access to Netflix, Prime, Hotstar, Aha, and ZEE5. Additionally, enjoy fun games like chess, carrom, shuttle, and cricket, making it a perfect stay for everyone. Indulge in your culinary adventures and relish your holiday with your own food amidst nature’s tranquility.",
    //   no_beds:"3"
    // },
    // "sp farmhouse": {
    //   farm_name: "SP Farmhouse",
    //   farm_image: { c1: sp1, c2: sp2, c3: sp3, },
    //   weekdays: { oneday: "12000", twoday: "24000" },
    //   weekends: { oneday: "15000", twoday: "3000" },
    //   desc: "SP Farm House, located in a peaceful forest setting, provides the perfect escape from city life. With a focus on relaxation and fun, our farmhouse promises an enjoyable stay. Key features include a charming garden, a relaxing swimming pool, a fully equipped kitchen with all the essentials, and a barbecue area for outdoor dining. Entertainment options abound with a 43-inch TV, WiFi, a Bluetooth sound system, and access to popular streaming platforms like Netflix, Prime, Hotstar, Aha, and ZEE5. Additionally, indoor and outdoor games such as chess, carrom, shuttle, and cricket ensure fun for everyone.",
    //   desc1: "",
    //   no_beds:"2"
    // },
    // "takshvi": {
    //   farm_name: "Takshvi",
    //   farm_image: { c1: taksh1, c2: taksh2, c3: taksh3, },
    //   weekdays: { oneday: "10000", twoday: "20000" },
    //   weekends: { oneday: "12000", twoday: "24000" },
    //   desc: "Takshvi FarmHouse, tucked away in the peaceful heart of the forest, offers an idyllic escape from the fast-paced city life. Our farmhouse is designed to provide the perfect mix of relaxation and enjoyment, ensuring an unforgettable experience for you and your loved ones. Key features include a lush garden, a sparkling swimming pool, and a fully equipped kitchen stocked with dishes and bowls, allowing you to indulge in self-cooking and savor your own meals surrounded by nature.",
    //   desc1: "Immerse yourself in the beautiful atmosphere and greenery, where you can truly appreciate the tranquility of the outdoors. For entertainment, we provide a 43-inch TV, WiFi, a Bluetooth sound system, and access to streaming services like Netflix, Prime, Hotstar, Aha, and ZEE5. Additionally, enjoy fun games such as chess, carrom, shuttle, and cricket, making it a perfect stay for everyone. Embrace your holiday with delicious homemade food and thrilling adventures in nature.",
    //   no_beds:"2"
    // },
    // "star lingam": {
    //   farm_name: "Star Lingam",
    //   farm_image: { c1: starling1, c2: starling2, c3: starling3, },
    //   weekdays: { oneday: "15000", twoday: "20000" },
    //   weekends: { oneday: "17000", twoday: "24000" },
    //   desc: "Star Lingam FarmHouse, nestled in the tranquil heart of the forest, offers a serene escape from the fast-paced city life. Designed for the perfect blend of relaxation and enjoyment, our farmhouse guarantees an unforgettable experience for you and your loved ones. Key features include a lush garden, a sparkling swimming pool, and a fully equipped kitchen complete with dishes and bowls, allowing you to enjoy self-cooking facilities and create your own culinary delights.",
    //   desc1: "Embrace the beauty of nature as you immerse yourself in the greenery surrounding the farmhouse. For entertainment, we provide a 43-inch TV, WiFi, a Bluetooth sound system, and access to popular streaming services like Netflix, Prime, Hotstar, Aha, and ZEE5. Additionally, engage in enjoyable games like chess, carrom, shuttle, and cricket, ensuring fun for everyone. Enjoy your holiday filled with nature, delicious home-cooked meals, and thrilling adventures",
    //   no_beds:"1"
    // },
    // "star bhima": {
    //   farm_name: "Star Bhima",
    //   farm_image: { c1: starbh1, c2: starbh2, c3: starbh3, },
    //   weekdays: { oneday: "15000", twoday: "20000" },
    //   weekends: { oneday: "17000", twoday: "24000" },
    //   desc: "Star Bhima FarmHouse, located in the peaceful embrace of the forest, is your ideal getaway from the city's chaos. Our farmhouse is thoughtfully designed to provide a harmonious blend of relaxation and enjoyment, promising a memorable stay for you and your family. Enjoy features such as a lush garden, a sparkling swimming pool, and a fully equipped kitchen that makes self-cooking a delight, allowing you to create meals using fresh ingredients.",
    //   desc1: "Revel in the beautiful surroundings, where the atmosphere is filled with the sounds of nature and the scent of greenery. For your entertainment, we provide a 43-inch TV, WiFi, a Bluetooth audio system, and access to popular streaming services like Netflix, Prime, Hotstar, Aha, and ZEE5. You can also enjoy fun-filled activities such as chess, carrom, shuttle, and cricket, making it a perfect getaway for all. Enjoy a holiday of culinary delights and nature adventures at Star Bhima FarmHouse.",
    //   no_beds:"5"
    // },
    // "rajeswari": {
    //   farm_name: "Rajeswari",
    //   farm_image: { c1: rajes1, c2: rajes2, c3: rajes3, },
    //   weekdays: { oneday: "15000", twoday: "20000" },
    //   weekends: { oneday: "17000", twoday: "24000" },
    //   desc: "Rajeswari FarmHouse, located in the peaceful embrace of the forest, is your ideal getaway from the city's chaos. Our farmhouse is thoughtfully designed to provide a harmonious blend of relaxation and enjoyment, promising a memorable stay for you and your family. Enjoy features such as a lush garden, a sparkling swimming pool, and a fully equipped kitchen that makes self-cooking a delight, allowing you to create meals using fresh ingredients.",
    //   desc1: "Revel in the beautiful surroundings, where the atmosphere is filled with the sounds of nature and the scent of greenery. For your entertainment, we provide a 43-inch TV, WiFi, a Bluetooth audio system, and access to popular streaming services like Netflix, Prime, Hotstar, Aha, and ZEE5. You can also enjoy fun-filled activities such as chess, carrom, shuttle, and cricket, making it a perfect getaway for all. Enjoy a holiday of culinary delights and nature adventures at Rajeswari FarmHouse.",
    //   no_beds:"5"
    // },

    // "nbr": {
    //   farm_name: "NBR",
    //   farm_image: { c1: nbr1, c2: nbr2, c3: nbr3, },
    //   weekdays: { oneday: "8000", twoday: "20000" },
    //   weekends: { oneday: "10000", twoday: "24000" },
    //   desc: "NBR FarmHouse, nestled in the tranquil heart of the forest, offers an idyllic retreat from the hustle and bustle of city life. Designed to provide the perfect blend of relaxation and enjoyment, our farmhouse ensures an unforgettable experience for you and your loved ones. Key features include a lush garden, a sparkling swimming pool, and a fully equipped kitchen complete with dishes and bowls, allowing you to enjoy self-cooking and savor your own culinary creations in the midst of nature.",
    //   desc1: "Immerse yourself in the beauty of the surrounding greenery and truly enjoy the atmosphere, where nature thrives. For entertainment, we offer a 43-inch TV, WiFi, a Bluetooth sound system, and access to streaming services like Netflix, Prime, Hotstar, Aha, and ZEE5. Additionally, engage in fun games such as chess, carrom, shuttle, and cricket, ensuring there's something for everyone. Experience a holiday filled with delicious homemade food, nature, and exciting adventures at NBR FarmHouse.",
    //   no_beds:"1"
    // },

    // "4ram fusion": {
    //   farm_name: "4Ram fusion",
    //   price_24_hours: 15000,
    //   farm_image: { c1: ram1, c2: ram2, c3: ram3, },
    //   weekdays: { oneday: "15000", twoday: "24000" },
    //   weekends: { oneday: "15000", twoday: "24000" },
    //   desc: "Dozzy offers some of the best farmhouse options in and around Hyderabad, perfect for a relaxing and enjoyable getaway. Our 4 Ram Fusion Farm Stays are located in a beautiful green setting, providing a peaceful and scenic environment. Each farmhouse features a spacious layout with a wonderful swimming pool to cool off and unwind. Inside, all rooms are designed for maximum comfort, equipped with air conditioning and luxurious king-sized beds to ensure a restful stay. For entertainment, each room is furnished with a TV and fridge, making it easy to enjoy refreshments and stay entertained. We also offer a BBQ setup for those who want to add a flavorful experience to their gatherings.",
    //   desc2: "Beyond these, Dozzy’s farm houses provide a range of quality amenities designed to enhance your stay, making it ideal for both short trips and extended stays. Whether you're looking to spend quality time with friends and family, or simply need a peaceful escape, Dozzy’s farm houses promise the perfect mix of luxury and nature. Our team ensures everything is well-maintained and ready for you to enjoy a seamless experience, so you can relax and focus on making memories in this wonderful setting.",
    //   no_beds: "4"
    // // },
    //   "courtyard": {
    //   farm_name: "CourtYard",
    //   price_24_hours: 12000,
    //   farm_image: { c1: courtyard1, c2: courtyard2, c3: courtyard3, },
    //   weekdays: { oneday: "12000", twoday: "24000" },
    //   weekends: { oneday: "12000", twoday: "24000" },
    //   desc: "Dozzy offers some of the best farmhouses in and around Hyderabad, ideal for those looking to escape to a beautiful, serene location. Our Courtyard  farmhouse is nestled in lush greenery, providing a peaceful and refreshing environment. With a spacious layout and stylish interiors, the property is perfect for gatherings, relaxation, and a break from the city.",
    //   desc1: "Each room in the farmhouse is equipped with essential amenities to enhance your stay. Every bedroom includes a king-size bed, air conditioning, and a television, ensuring a comfortable experience. Additionally, the rooms come with a refrigerator to keep your snacks and drinks cool. The farmhouse also features a fantastic BBQ setup, making it ideal for outdoor dining and evening gatherings with friends or family.",
    //   desc2: "The property’s highlight is its wonderful swimming pool, set against the backdrop of beautiful greenery. Whether you’re looking to take a swim or simply relax by the poolside, the ambiance is designed to help you unwind. Our goal is to provide a farmhouse experience that combines comfort, convenience, and a touch of luxury.With excellent amenities, a tranquil setting, and all the comforts of home, Dozzy's farmhouse is the perfect getaway in Hyderabad. Book your stay with us and experience the best of farmhouses living in a stunning natural environment.",
    //   no_beds: "2"
    // },

    // "bamboo huts": {
    //   farm_name: "Bamboo huts",
    //   price_24_hours: 14000,
    //   farm_image: { c1: bom1, c2: bom2, c3: bom3, },
    //   weekdays: { oneday: "14000", twoday: "28000" },
    //   weekends: { oneday: "14000", twoday: "28000" },
    //   desc: "Dozzy offers some of the best farmhouse rentals in and around Hyderabad, perfect for anyone looking to unwind in a beautiful, tranquil setting. One of our premier properties, the Bamboo Huts Farmhouse, is nestled amidst lush greenery, offering an ideal escape from city life. This charming farmhouse combines rustic charm with modern amenities, providing everything you need for a comfortable and relaxing stay.",
    //   desc1: "The Bamboo Huts Farmhouse features spacious rooms, each equipped with air conditioning to keep you comfortable year-round. Enjoy restful nights in our luxurious king-size beds, and take advantage of additional conveniences like a TV and a refrigerator in every room. Outside, you’ll find a wonderful swimming pool where you can relax, swim, and enjoy the scenic surroundings. For guests who love to cook outdoors, we also offer BBQ facilities.",
    //   desc2: "With thoughtful amenities and beautiful surroundings, Dozzy’s Bamboo Huts Farmhouse is the perfect destination for family gatherings, group outings, or simply a peaceful retreat. Book today and experience the best of what Hyderabad’s farmhouses have to offer.",
    //   no_beds: "2"
    // },

    // "ssk": {
    //   farm_name: "SSK",
    //   price_24_hours: 17000,
    //   farm_image: { c1: sskf1, c2: sskf2, c3: sskf3, c4: sskf4, c5: sskf5, c6: sskf6, c7: sskf7, c8: sskf8, },
    //   weekdays: { oneday: "17000", twoday: "34000" },
    //   weekends: { oneday: "17000", twoday: "34000" },
    //   desc: "Sravan Farm House, nestled in the serene heart of the forest, offers a dreamlike escape from the hustle and bustle of city life. Our farmhouse is designed to provide the perfect blend of leisure and enjoyment, ensuring a memorable stay for you and your loved ones. Key features of Sravan Farm House include a beautiful garden, a refreshing swimming pool, a fully equipped kitchen with dishes and bowls, and a barbecue area for delicious meals. For entertainment, we offer a 43-inch TV, WiFi, a Bluetooth audio system, and access to Netflix, Prime, Hotstar, Aha, and ZEE5. Enjoy a variety of games such as chess, carrom, shuttle, and cricket, ensuring fun for everyone.",
    //   no_beds: "2",

    // },



    "saketh vanam": {
      farm_name: 'Saketh Vanam',
      price_24_hours: 17000,
      farm_image: { c1: skfarm1, c2: skfarm2, c3: skfarm3, c4: skfarm4, c5: skfarm5, c6: skfarm6, c7: skfarm7, c8: skfarm8, },
      weekdays: { oneday: "10000", twoday: "17000" },
      weekends: { oneday: "15000", twoday: "34000" },
      desc: "Traditionally Farmhouses are simply homes built on agricultural lands to house and protect who owned or worked the land. The term Farmhouse isn't necessarily connected to a particular style identified by a fixed set of features, but a setting for a way of life. This is most likely why its appeal seems to be timeless.",
      no_beds: "3"
    },


    "holiday": {
      farm_name: "holiday",
      price_24_hours: 10000,
      farm_image: { c1: holiday1, c2: holiday2, c3: holiday3, c4: holiday4, c5: holiday6, c6: holiday7, c7: holiday5, c8: holiday8, },
      weekdays: { oneday: "6000", twoday: "12000" },
      weekends: { oneday: "8000", twoday: "20000" },
      desc: "Holiday FarmHouse, set in the serene forest, invites you to unwind and enjoy quality time away from the fast-paced city. Our farmhouse ensures a comfortable stay with its well-maintained garden, a refreshing pool, and a fully stocked kitchen complete with dishes and a barbecue area. Stay entertained with a 43-inch TV, WiFi, Bluetooth sound system, and access to streaming services like Netflix, Prime, Hotstar, Aha, and ZEE5. Guests can also engage in various games, including chess, carrom, shuttle, and cricket, for a truly enjoyable experience.",
      desc1: "",
      no_beds: "2"
    },

    "aarush agri": {
      farm_name: "Arush Agri",
      price_24_hours: 20000,
      farm_image: { c1: arush1, c2: arush2, c3: arush3, c4: arush4, c5: arush5, c6: arush6, c7: arush7, c8: arush8, },
      weekdays: { oneday: "10000", twoday: "20000" },
      weekends: { oneday: "18000", twoday: "40000" },
      desc: "Dozzy offers some of the best farmhouses in and around Hyderabad, providing beautiful and relaxing locations perfect for a peaceful getaway. Among our offerings is the stunning Arush Agri Farm Stays farmhouse, nestled in lush greenery for a refreshing, natural escape. This farmhouse features a wonderful swimming pool, perfect for cooling off and enjoying with friends or family.",
      desc1: "Each room in the farmhouse is designed with comfort in mind, furnished with king-size beds for a restful night’s sleep and equipped with air conditioning for a cool, relaxing environment. Additionally, rooms come with TVs and fridges, adding convenience to your stay, along with essential amenities to ensure a pleasant experience. A BBQ setup is also available for those who wish to grill and dine under the stars.",
      dec2: "Whether you're looking to unwind, host a gathering, or simply enjoy a getaway surrounded by nature, Dozzy’s farmhouses are equipped to make your stay enjoyable and memorable. Book today to experience a perfect blend of luxury and nature just outside Hyderabad.",
      no_beds: "3"
    },

    "bgy": {
      farm_name: "BGY",
      price_24_hours: 17000,
      farm_image: { c1: bgy1, c2: bgy2, c3: bgy3, c4: bgy4, c5: bgy5, c6: bgy6, c7: bgy7, c8: bgy8, },
      weekdays: { oneday: "12000", twoday: "24000" },
      weekends: { oneday: "17000", twoday: "34000" },
      desc: "Dozzy offers some of the best farmhouse experiences in and around Hyderabad, providing a serene escape from the city. Our beautiful BHY  farmhouse is located in a lush, green environment, perfect for unwinding with family and friends. Each room is designed with comfort in mind, featuring air conditioning, king-size beds, and premium amenities for a cozy stay.",
      desc1: "The farmhouse includes a spacious living area equipped with a large TV, refrigerator, and other essentials, making it feel like a home away from home. Outside, you’ll find a fantastic swimming pool set amidst greenery, ideal for cooling off or lounging by the water on a sunny day. The property also features a BBQ setup, allowing you to enjoy a delicious grill night with loved ones, all while surrounded by nature.",
      desc2: "With all the comforts of a well-maintained resort—such as AC in each room, comfortable beds, and scenic surroundings—Dozzy's farmhouse offers a complete experience that blends relaxation with luxury. Whether you’re planning a family getaway, a weekend with friends, or simply looking to spend some quiet time in nature, our farmhouse near Hyderabad is equipped to meet your needs, providing a memorable stay every time.",
      no_beds: "2"
    },


    "sb farmhouse": {
      farm_name: "sb farmhouse",
      price_24_hours: 15000,
      farm_image: { c1: sb1, c2: sb2, c3: sb3, c4: sb4, c5: sb5, c6: sb6, c7: sb7, c8: sb8, },
      weekdays: { oneday: "10000", twoday: "20000" },
      weekends: { oneday: "15000", twoday: "30000" },
      desc: "Looking for a perfect getaway in Hyderabad?  Dozzy offers the best farmhouse in Moinabad for anyone looking for a vacation or a small break at SB Farmstay.  The Farmhouse is surrounded by the greenery and features a swimming pool, perfect for family or friends. The rooms in the farmhouse are very well designed, featuring King size beds, air conditioning, TV, Fridges and many more amenities like BBQ setup for outdoor cooking and dining under the starts.",
      no_beds: "4"
    },

    "boxed serenity": {
      farm_name: "boxed serenity",
      price_24_hours: 20000,
      farm_image: { c1: box1, c2: box2, c3: box3, c4: box4, c5: box5, c6: box6, c7: box7, c8: box8, },
      weekdays: { oneday: "10000", twoday: "20000" },
      weekends: { oneday: "15000", twoday: "40000" },
      desc: "Looking for a farmhouse in Hyderabad ? Explore Boxed Serenity farmhouse in Shamshabad, Hyderabad with Dozzy farmhouses. The farmhouse is surrounded by greenery and a swimming pool which is perfect for a family and friends vacation or a quick escape. The rooms are well designed for comfort with king-size beds, AC, TV, Fridges and many more amenities. There is also a BBQ setup and Bonfire pit where you can set up for a fun outdoor dining experience under the stars, which makes your visit memorable.",
      no_beds: "3"
    },

    "pb farmhouse": {
      farm_name: "pb farmhouse",
      price_24_hours: 15000,
      farm_image: { c1: pb1, c2: pb2, c3: pb3, c4: pb4, c5: pb5, c6: pb6, c7: pb7, c8: pb8, },
      weekdays: { oneday: "10000", twoday: "20000" },
      weekends: { oneday: "15000", twoday: "30000" },
      desc: "Explore PB farmhouse in Shamshabad, Hyderabad with Dozzy farmhouses. The farm stay is surrounded by greenery and a swimming pool which is perfect for a vacation or a quick escape. The rooms are well designed for comfort with king-size beds, AC, TV, Fridges and more amenities.",
      desc1: "There is also a BBQ setup and Bonfire pit where you can set up for a fun outdoor dining experience under the stars, which makes your trip memorable.",
      no_beds: "2"
    },


    "py farmhouse": {
      farm_name: "py farmhouse",
      price_24_hours: 12000,
      farm_image: { c1: py1, c2: py2, c3: py3, c4: py4, c5: py5, c6: py6, c7: py7, c8: py8, },
      weekdays: { oneday: "8000", twoday: "16000" },
      weekends: { oneday: "12000", twoday: "24000" },
      desc: "PY Farmhouse, A farmhouse by Dozzy Farmhouse is Located in Shamshabad, surrounded by greenery and featuring a refreshing swimming pool. It is a perfect place for both family and friends vacation or weekend getaway. The farmhouse offers luxury comfortable rooms with king-size beds, AC, TV, fridges and many more amenities.Enjoy an outdoor BBQ and bonfire pit for a fun and memorable experience under the stars.",
      no_beds: "2"
    },

    "svr peacock view": {
      farm_name: "SVR Peacock View",
      price_24_hours: 12000,
      farm_image: { c1: svr1, c2: svr2, c3: svr3, c4: svr4, c5: svr5, c6: svr6, c7: svr7, c8: svr8, },
      weekdays: { oneday: "8000", twoday: "16000" },
      weekends: { oneday: "12000", twoday: "24000" },
      desc: "Dozzy offers some of the best farmhouses in and around Hyderabad, perfect for a relaxing getaway or an event with family and friends. One of our standout locations is the SVR Peacock View Farmhouse, nestled in lush greenery and designed to provide a serene experience close to nature.",
      desc1: "This beautiful farmhouse features a stunning swimming pool, ideal for both relaxation and fun. Inside, each room is equipped with air conditioning to keep you comfortable, along with king-sized beds for a restful sleep. Additionally, each room includes amenities like a television, fridge, and ample storage space.",
      desc2: "The farmhouse also includes BBQ facilities, so guests can enjoy outdoor cooking and dining, making for a memorable experience. Other amenities and conveniences have been thoughtfully included to ensure you have everything needed for a comfortable stay. With its natural surroundings, comfortable furnishings, and top-notch amenities, SVR Peacock View Farmhouse is an ideal choice for those looking to unwind, celebrate, or simply enjoy a peaceful retreat near Hyderabad.",
      no_beds: "2"
    },

    "asn farmhouse": {
      farm_name: "asn farmhouse",
      price_24_hours: 10000,
      farm_image: { c1: asn1, c2: asn2, c3: asn3, c4: asn4, c5: asn5, c6: asn6, c7: asn7, c8: asn8, },
      weekdays: { oneday: "8000", twoday: "12000" },
      weekends: { oneday: "12000", twoday: "24000" },
      desc: "ASN Entire Farmhouse by Dozzy, Located in Keesara is a peaceful getaway with nature all around. The property has luxurious rooms with king-size beds, AC, and a swimming pool. It is perfect for a BBQ and bonfire under the stars with family and friends, making it memorable.",
      no_beds: "2"
    },

  }

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
              {<Image className='rounded-md' src={customData[mdfyFarmProduct?.toLowerCase()]?.farm_image.c1} alt={"farm house in hyderabad"} />}
              {<Image className='rounded-md' src={customData[mdfyFarmProduct?.toLowerCase()]?.farm_image.c2} alt={"farm house in hyderabad"} />}
              {<Image className='rounded-md' src={customData[mdfyFarmProduct?.toLowerCase()]?.farm_image.c3} alt={"farm house in hyderabad"} />}
              {<Image className='rounded-md' src={customData[mdfyFarmProduct?.toLowerCase()]?.farm_image.c4} alt={"farm house in hyderabad"} />}
              {<Image className='rounded-md' src={customData[mdfyFarmProduct?.toLowerCase()]?.farm_image.c5} alt={"farm house in hyderabad"} />}
              {<Image className='rounded-md' src={customData[mdfyFarmProduct?.toLowerCase()]?.farm_image.c6} alt={"farm house in hyderabad"} />}
              {<Image className='rounded-md' src={customData[mdfyFarmProduct?.toLowerCase()]?.farm_image.c7} alt={"farm house in hyderabad"} />}
              {<Image className='rounded-md' src={customData[mdfyFarmProduct?.toLowerCase()]?.farm_image.c8} alt={"farm house in hyderabad"} />}
            </Carousel>
          </div>
          <div className='flex flex-col lg:gap-14 gap-4 lg:pt-10 pt-2'>
            <div>
              <div className='p-1 font-bold  text-xl lg:text-3xl lg: capitalize'>{customData[mdfyFarmProduct?.toLowerCase()]?.farm_name} Farm House ({customData[mdfyFarmProduct?.toLowerCase()]?.no_beds} BHK) <p className='text-blue-600 pt-3'>₹ {customData[mdfyFarmProduct?.toLowerCase()]?.weekdays.oneday}/day</p>
                <p className='text-blue-600 opacity-70 text-sm pl-1'>₹{customData[mdfyFarmProduct?.toLowerCase()]?.weekends.oneday}/day <span className='text-black'>(Fri-Sun)</span></p>
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
            {customData[mdfyFarmProduct?.toLowerCase()]?.desc1}
          </p>
          <p className='font-normal p-1 text-[14px] lg:text-lg leading-6 font-poppins pb-8 lg:w-[50%]'>
            {customData[mdfyFarmProduct?.toLowerCase()]?.desc2}
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

export async function getServerSideProps({ query, req }) {
  const { farmproduct } = query;
  // const mdfyFarmProduct = farmproduct?.toLowerCase().replace(/-/g, " ");
  const host = req.headers.host;

  // Construct the canonical URL based on the domain
  const canonicalUrl = host.includes('.in')
    ? `https://www.dozzy.in/${farmproduct}`
    : `https://www.dozzy.com/${farmproduct}`;

  return {
    props: {
      canonicalUrl,
    },
  };
}