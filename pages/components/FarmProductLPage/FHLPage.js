import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { RiArrowDownWideLine } from "react-icons/ri";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import Cardfragment from "./CardFragment";
import { useRouter } from "next/router";
const FarmProductLPage = ({ count, FHList, place }) => {
  const [mobileC, setMobileC] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const [placeNow, setPlaceNow] = useState(place ? place : 'Hyderabad');
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBHK, setSelectedBHK] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const router = useRouter();
  useEffect(() => {
    if (window.innerWidth < 700) {
      setMobileC(true);
    }
  }, []);

  useEffect(() => {
    const savedScroll = sessionStorage.getItem('farmhouse_scroll');
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll));
      sessionStorage.removeItem('farmhouse_scroll'); // optional
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

  const handleSelect = (city) => {
    setPlaceNow(city);
    setShowDrop(false);
  };

  const sortedData = FHList?.sort((a, b) => a.property_price - b.property_price);

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

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBHK("");
    setPriceRange("");
    setSortOrder("asc");
    router.replace(router.pathname, undefined, { shallow: true });
  };

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
    <div>
      {/* Heading */}
      <div className="text-sm  text-black">
        <h2 className="font-semibold text-lg mxs:text-xl lg:text-5xl flex items-center gap-x-2 relative">
          <span>Top FarmHouses In</span>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDrop(!showDrop)}
              className="flex items-center gap-1 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-semibold capitalize lg:h-16"
            >
              {placeNow}
              <FaChevronDown size={40} className="text-indigo-500" />
            </button>
            {showDrop && (
              <div className="absolute left-0 mt-2 w-40 lg:w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-10 z-20">
                <ul className="py-2 text-sm lg:text-xl text-gray-700">
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

        <p className="mt-4 text-gray-700 lg:text-2xl">Get Very Low prices Compared To Others</p>
      </div>

      <div className="w-full  py-4 lg:py-10 px-4 flex flex-wrap gap-4 justify- text-black">
        <input
          type="text"
          placeholder="Search Farmhouse"
          className="px-4 py-3 border-2 border-gray-300 rounded-md text-sm w-full xl:max-w-lg lg:max-w-sm h-12"
          value={searchTerm}
          onChange={(e) => {
            const value = e.target.value;
            setSearchTerm(value);
            updateQueryParams('search', value);
          }}
        />
        <select
          className="px-4 py-2 border border-gray-300 rounded-md text-sm h-12"
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
          className="px-4 py- border border-gray-300 rounded-md text-sm h-12"
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
          className="px-4 py-2 border border-gray-300 rounded-md text-sm h-12"
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
          className="px-4 py-2 border border-gray-300 lg:hover:bg-red-300 rounded-md text-sm flex gap-x-1 justify-center items-center h-12"
        >
          <span>Clear All Filters</span>  <span><CiCircleRemove size={20} color="red" /></span>
        </button>
      </div>

      {/* Farmhouse Cards */}
      <div className="flex flex-wrap xl:gap-x-12 xl:gap-y-12 md:gap-x-8 md:gap-y-8 gap-y-8 lg:items-start justify-center items-center  px-1">
        {filteredData?.slice(
          0,
          searchTerm || selectedBHK || priceRange ? filteredData?.length : (count ? filteredData?.length : mobileC ? 10 : 12)
        ).map((item, index) => (
          <Cardfragment key={item.id || item.property_id || index} item={item} index={index} place={place} />
        ))}
      </div>

      {(filteredData?.length < 1) && (
        <p className="text-lg font-semibold text-red-500 text-center py-8 flex flex-col gap-y-4 justify-center items-center">
          <span><Image alt="famhouses for rent" width={100} height={100} src={'/notfound.webp'} /></span>
          <span>Sorry! No Farmhouses</span>
        </p>
      )}

      {/* View All */}
      <div className={`${count?.length ? 'hidden' : 'block'} text-center cuso py-4 lg:px-2 px-10 flex justify-center items-center`}>
        <Link href={`${place == 'hyderabad' ? '' : place}/explore-all-farmhouses-in-${place?.toLowerCase() || 'hyderabad'}`} className="flex flex-col items-center spinner-border text-lg lg:text-2xl font-bold text-[#556ee6] w-full lg:w-96 py-8 rounded-full capitalize">
          <p>View all farm houses</p>
          <RiArrowDownWideLine className="animate-pulse text-black" size={40} />
        </Link>
      </div>
    </div>
  );
};

export default FarmProductLPage;
