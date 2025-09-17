import Head from "next/head";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import PopUp from "../components/Popup";
const HomeBanner = dynamic(() => import('../components/HomeBanner.js/HomeBanner'));
const FarmStarts = dynamic(() => import('../components/FarmStarts/FarmStarts'), { ssr: false });
const FHLPage = dynamic(() => import('../components/FarmProductLPage/FHLPage'), { ssr: false });
const FarmProductLPage = dynamic(() => import('../components/FarmProductLPage/FarmProductLPage'), { ssr: false });
const CareGuests = dynamic(() => import('../components/CareGuests/CareGuests'), { ssr: false });
const FAQComponentBng = dynamic(() => import('../components/FAQComponent/FAQComponentBng'), { ssr: false });
export default function Home({ canonicalUrl, filteredFHS }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (filteredFHS?.length >= 1) {
      setLoading(false)
    }
  }, [filteredFHS])

  return (
    <div className="text-black ">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bangalore Farmhouses for Weekend Getaways</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Take a fun break from the city. Stay at peaceful farmhouses near Bangalore. Great for families, groups, and playing in green spaces." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Bangalore Farmhouses for Weekend Getaways" />
        <meta name="og:description" content="Take a fun break from the city. Stay at peaceful farmhouses near Bangalore. Great for families, groups, and playing in green spaces." />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className="lg:block hidden"><FHLPage place={'bangalore'} FHList={filteredFHS} /></div>
      <div className="lg:hidden block"><FarmProductLPage place={'bangalore'} FHList={filteredFHS} /></div>
      <HomeBanner place={'bangalore'} />
      <FarmStarts />
      
      {/* <div className='bg-white rounded xl:py-12 lg:px-14 xl:px-14 p-2'>
        <p className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</p>
        <FAQComponentBng />
      </div> */}
      <CareGuests />
      <PopUp />
      {/* 
      {loading && <div className="text-center py-4">
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50 opacity-90">
          <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
        </div>
      </div>} */}
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? 'https://www.dozzy.in/bangalore'
    : 'https://www.dozzy.com/bangalore';

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  const getOrderedImages = (attributes) => {
    const imageMap = {};
    attributes.forEach((attr) => {
      imageMap[attr.attribute_name] = attr.attribute_value;
    });

    return [
      imageMap["farmhouse_front_view"],
    ];
  };

  const moinbadlistkey = [
    "popular-farm-house-Bangalore", "farm-house-for-rent-at-Bangalore",
    "Bangalore-farm-house-price-list", "bangalore-Bangalore-farmhouse",
    "farm-house-Bangalore", "farmhouse-in-Bangalore"
  ];

  const farmhouseKeywords = [
    "cheap-farmhouse-for-rent-in-bangalore", "farm-stay", "hillview-farmstay", "farm-cottages",
    "farmhouse-in-bangalore", "farm-accommodation", "farmhouse-with-pool",
    "cheap-farm-house-for-rent", "farmhouse-for-rent-in-bangalore", "luxury-farm-stay",
    "family-farm-stay", "pet-friendly-farm-stays", "farm-stay-bangalore",
    "farm-stays-around-bangalore", "farm-house-swimming-pool", "farmhouse-for-lease",
    "farmhouse-for-daily-rent", "rural-farm-houses-for-rent", "3-bedroom-farm-house-for-rent",
    "farm-stays-in-bangalore", "farm-stays-near-me", "farm-house-for-rent-in-bangalore",
    "farm-house-for-parties", "modern-farmhouse-pool", "farm-house-to-rent-near-me",
    "2-bedroom-farm-house-for-rent", "farm-house-near-me-for-rent", "farm-house-for-hire",
    "farm-house-for-one-day-rent", "farm-house-for-rent-for-a-day",
    "farmhouse-with-swimming-pool-near-me", "farmhouse-for-couples",
    "farmhouse-with-swimming-pool-for-rent", "farm-house-for-daily-rent",
    "farm-house-for-event", "swimming-pool-farm-house", "pool-farm-house",
    "entire-farm-house-for-rent", "best-farmhouse-with-pool", "farmstays-in-bangalore",
    "farmhouse-with-big-swimming-pool", "farmstays-near-bangalore",
    "small-farmhouse-with-pool", "small-farm-house-with-swimming-pool",
    "farmhouse-vacation-rental-near-me", "best-private-places-for-lovers-in-bangalore",
    "farm-house-for-functions", "near-farm-house-with-swimming-pool",
    "farmhouse-for-night-stay-in-bangalore", "private-farm-house-for-rent-in-bangalore",
    "farm-house-for-haldi", "farm-house-for-haldi-function", "hideout-farmstay-bangalore-price"
  ];

  try {
    const response = await fetch(
      "https://api.dozzy.com/site/properties?property_region=Bengaluru",
      requestOptions
    );
    const result = await response.json();

    const filteredFHS = result.data.map(car => {

      let keyword;
      const index = Math.floor(Math.random() * farmhouseKeywords.length);
      keyword = farmhouseKeywords[index];

      return {
        property_price: car.property_price,
        no_of_bedrooms: car.no_of_bedrooms,
        customer_night_prices: car.customer_night_prices,
        images: car.farmhouse_front_view,
        link: `bangalore/${keyword}-${car.property_id}`,
        area_name: car.area_name,
        property_name: `Dozzy ${car.property_id}`
      };
    });


    return {
      props: {
        canonicalUrl: canonicalUrl,
        filteredFHS,
      }
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        approvedProperties: null
      }
    };
  }
}