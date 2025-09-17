import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDownWideLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import { CiCircleRemove } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import Cardfragment from './CardFragment'
import  handleStoreRedirect  from "@/utils/redirectUtils";
import { useRouter } from "next/router";
const FarmProductLPage = ({ count, FHList, place }) => {
    const router = useRouter();
    const [mobileC, setMobileC] = useState(false);
    const [showDrop, setShowDrop] = useState(false);
    const [placeNow, setPlaceNow] = useState(place ? place : 'Hyderabad');
    const dropdownRef = useRef(null); // Create a ref for the dropdown

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBHK, setSelectedBHK] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const sortedData = FHList?.sort(
        (a, b) => a.property_price - b.property_price
    );

    const groupByPrice = sortedData?.reduce((acc, curr) => {
        const price = curr?.property_price;
        if (!acc[price]) {
            acc[price] = [];
        }
        acc[price].push(curr);
        return acc;
    }, {});

    const filteredData = sortedData
        ?.filter((item) =>
            item.property_name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        ?.filter((item) => {
            if (!selectedBHK) return true;
            return `${item.no_of_bedrooms}` === selectedBHK;
        })
        ?.filter((item) => {
            if (!priceRange) return true;
            const price = item.property_price;
            const [min, max] = priceRange.split('-').map(Number);
            return price >= min * 1000 && price <= max * 1000;
        })
        ?.sort((a, b) => {
            return sortOrder === 'asc'
                ? a.property_price - b.property_price
                : b.property_price - a.property_price;
        });

    const handleSelect = (city) => {
        setPlaceNow(city);
        setShowDrop(false);
    };

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedBHK("");
        setPriceRange("");
        setSortOrder("asc");
        router.replace(router.pathname, undefined, { shallow: true });
    };


    useEffect(() => {
        const savedScroll = sessionStorage.getItem('farmhouse_scroll');
        if (savedScroll) {
            window.scrollTo(0, parseInt(savedScroll));
            sessionStorage.removeItem('farmhouse_scroll');
        }
    }, []);

    // Close dropdown when clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDrop(false);
            }
        };

        // Add event listener for outside click
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const updateQueryParams = (key, value) => {
        const query = { ...router.query };
        if (value) {
            query[key] = value;
        } else {
            delete query[key];
        }
        router.replace({
            pathname: router.pathname,
            query,
        }, undefined, { shallow: true });
    };
    useEffect(() => {
        if (router.query.bhk) setSelectedBHK(router.query.bhk);
        if (router.query.price) setPriceRange(router.query.price);
        if (router.query.sort) setSortOrder(router.query.sort);
        if (router.query.search) setSearchTerm(router.query.search);
    }, [router.query]);


    return (
        <>
            <div>
                <div className="relative text-black px-4 pt-6">
                    <h2 className="text-[17px] font-semibold flex flex-wrap gap-2 items-center">
                        <span>Top FarmHouses In</span>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setShowDrop(!showDrop)}
                                className="flex items-center gap-1 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-semibold capitalize"
                            >
                                {placeNow}
                                <FaChevronDown className="text-indigo-500" />
                            </button>
                            {showDrop && (
                                <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-10 z-20">
                                    <ul className="py-2 text-sm text-gray-700">
                                        <li className="w-full">
                                            <Link
                                                href="/"
                                                onClick={() => handleSelect("Hyderabad")}
                                                className="block w-full px-4 py-2 hover:bg-pink-100 hover:text-indigo-700 transition-all duration-150"
                                            >
                                                Hyderabad
                                            </Link>
                                        </li>
                                        <li className="w-full">
                                            <Link
                                                href="/bangalore"
                                                onClick={() => handleSelect("Bangalore")}
                                                className="block w-full px-4 py-2 hover:bg-pink-100 hover:text-indigo-700 transition-all duration-150"
                                            >
                                                Bangalore
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </h2>

                    <p className="mt-4 text-gray-700">Get Very Low prices Compared To Others</p>
                </div>

                <div className="w-full lg:pl-16 py-4 px-4 flex flex-wrap gap-4 justify- text-black">
                    <input
                        type="text"
                        placeholder="Search Farmhouse"
                        className="px-4 py-3 border-2 border-gray-300 rounded-md text-sm w-full max-w-lg"
                        value={searchTerm}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSearchTerm(value);
                            updateQueryParams('search', value);
                        }}
                    />
                    <select
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm h-10"
                        value={selectedBHK}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSelectedBHK(value);
                            updateQueryParams('bhk', value);
                        }}
                    >
                        <option value="">All BHK</option>
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                        <option value="4">4 BHK</option>
                        <option value="5">5 BHK</option>
                        <option value="6">6 BHK</option>
                        <option value="7">7 BHK</option>
                    </select>
                    <select
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm h-"
                        value={priceRange}
                        onChange={(e) => {
                            const value = e.target.value;
                            setPriceRange(value);
                            updateQueryParams('price', value);
                        }}
                    >
                        <option value="">All Prices</option>
                        <option value="6-8">6K - 8K</option>
                        <option value="8-10">8K - 10K</option>
                        <option value="10-12">10K - 12K</option>
                        <option value="12-14">12K - 14K</option>
                        <option value="14-18">14K - 18K</option>
                    </select>
                    <select
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm"
                        value={sortOrder}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSortOrder(value);
                            updateQueryParams('sort', value);
                        }}
                    >
                        <option value="asc">Sort: Low to High</option>
                        <option value="desc">Sort: High to Low</option>
                    </select>
                    <button
                        onClick={clearFilters}
                        className="px-4 py-2 border border-gray-300 lg:hover:bg-red-300 rounded-md text-sm flex gap-x-1 justify-center items-center h-10"
                    >
                        <span>Clear All Filters</span>  <span><CiCircleRemove size={20} color="red" /></span>
                    </button>
                </div>

                {searchTerm?.length >= 1 || selectedBHK || priceRange ? (
                    filteredData?.slice(
                        0,
                        searchTerm || selectedBHK || priceRange ? filteredData?.length : (count ? filteredData?.length : mobileC ? 10 : 12)
                    ).map((item, index) => (
                            <Cardfragment key={ item.property_id || index} item={item} index={index} place={place} />

                    ))
                ) : (
                    groupByPrice &&
                    typeof groupByPrice === 'object' &&
                    Object?.keys(groupByPrice)
                        .sort((a, b) => a - b)
                        ?.map((priceKey) => (
                            <div
                                key={priceKey}
                                className="slider-container flex flex-col gap-y- justify-center h-fit mx-auto py-3 mxs:py-0"
                            >
                                {groupByPrice[priceKey].length > 1 ? (
                                    <div>
                                        {priceKey === "10000" && (
                                            <div className="pb-10">
                                                <Link href={'tel:9111911162'}>
                                                    <Image
                                                        className="h-fit"
                                                        src={'/offers/1rpdozzy.webp'}
                                                        alt={"Dozzy App For Farmhouse Booking"}
                                                        width={1000}
                                                        height={1000}
                                                    />
                                                </Link>
                                            </div>
                                        )}
                                        {priceKey === "15000" && (
                                            <div onClick={handleStoreRedirect} className="pb-10">
                                                <Image
                                                    className="h-fit"
                                                    src={'/offers/newuserdozzy2.webp'}
                                                    alt={"Dozzy App For Farmhouse Booking"}
                                                    width={1000}
                                                    height={1000}
                                                />
                                            </div>
                                        )}
                                        <Swiper
                                            modules={[Autoplay]}
                                            loop={true}
                                            autoplay={{
                                                delay: 3000,
                                                disableOnInteraction: false,
                                                pauseOnMouseEnter: true,
                                            }}
                                            slidesPerView={1}
                                            onTouchStart={(swiper) => swiper.autoplay.stop()}
                                            onTouchEnd={(swiper) => swiper.autoplay.start()}
                                            style={{ maxWidth: "800px", margin: "auto" }}
                                        >
                                            {groupByPrice[priceKey].map((item, index) => (
                                                <SwiperSlide key={item.id || item.property_id || index}>
                                                    <Cardfragment item={item} index={index} place={place} />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                ) : (
                                    groupByPrice[priceKey].map((item, index) => (
                                        <Cardfragment key={item.id || item.property_id || index} item={item} index={index} place={place} />
                                    ))
                                )}
                            </div>
                        ))
                )}

                {(filteredData?.length < 1) && (
                    <p className="text-lg font-semibold text-red-500 text-center py-8 flex flex-col gap-y-4 justify-center items-center">
                        <span><Image alt="famhouses for rent" width={100} height={100} src={'/notfound.webp'} /></span>
                        <span>Sorry! No Farmhouses</span>
                    </p>
                )}
                <div className={`${count?.length ? 'hidden' : 'block'} text-center py-4 lg:px-2 px-10 flex justify-center items-center`}>
                    <Link
                        href={`${place === 'hyderabad' ? '' : place}/explore-all-farmhouses-in-${place ? place.toLowerCase() : 'hyderabad'}`}
                        className="flex flex-col items-center spinner-border text-lg lg:text-2xl font-bold text-[#556ee6] w-full lg:w-96 py-8 rounded-full capitalize"
                    >
                        <p>View all farm houses</p>
                        <RiArrowDownWideLine className="animate-pulse text-black" color="red" size={40} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default FarmProductLPage;
