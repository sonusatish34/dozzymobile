import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Script from "next/script";
import { useEffect, useState } from "react";
const HomeBanner = dynamic(() => import('./components/HomeBanner.js/HomeBanner'));
const FarmStarts = dynamic(() => import('./components/FarmStarts/FarmStarts'), { ssr: false });
const FHLPage = dynamic(() => import('./components/FarmProductLPage/FHLPage'), { ssr: false });
const FarmProductLPage = dynamic(() => import('./components/FarmProductLPage/FarmProductLPage'), { ssr: false });
const CareGuests = dynamic(() => import('./components/CareGuests/CareGuests'), { ssr: false });
import PopUp from "./components/Popup";
import FAQComponent from "./components/FAQComponent/FAQComponent";
export default function Home({ canonicalUrl, filteredFHS }) {
  const skeletonStyle = "bg-gray-200 animate-pulse h-[300px]"; // Adjust height accordingly
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (filteredFHS?.length >= 1) {
      setLoading(false)
    }
  }, [filteredFHS])

  return (
    <div className="text-black">
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Dozzy and how does it help with farmhouse rentals in Hyderabad?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dozzy is a digital platform that makes it easy to find and book a farmhouse in Hyderabad or a farmhouse in Bangalore. It provides real photos, pricing, and availability for different farmhouse rental options."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What kinds of farmhouses for rent are available and what are the prices?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dozzy offers different categories of rental farmhouses including Basic farmhouses under ₹6,000, Premium under ₹10,000, and Luxury under ₹20,000. Whether you need a farmhouse in Hyderabad for a party or a farmhouse in Bangalore for a getaway, Dozzy provides transparent pricing and real photos."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What amenities do Dozzy’s rental farmhouses in Hyderabad include?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most farmhouses for rent through Dozzy include private swimming pools, music systems, barbecues, home theaters, gardens, and sports setups. These farmhouse rentals in Hyderabad and Bangalore are designed for parties, events, and family gatherings."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there discounts available on farmhouse rentals in Hyderabad?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Dozzy often provides discounts. Seasonal offers are available on selected farmhouse rentals in Hyderabad and farmhouse rentals in Bangalore."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the cancellation or refund policy for farmhouse rental bookings?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Once booked, farmhouse rentals are non-refundable. However, customers can visit the farmhouse in Hyderabad or farmhouse in Bangalore one hour before booking time to confirm facilities before use."
                  }
                }
              ]
            }
          `
          }}
        />
      </Head>
      <div className="w-full min-h-[400px]">
        <Suspense fallback={<div className={skeletonStyle} />}>
          <div className="lg:block hidden">
            <FHLPage FHList={filteredFHS} place={'hyderabad'} />
          </div>
          <div className="lg:hidden block">
            <FarmProductLPage FHList={filteredFHS} place={'hyderabad'} />
          </div>
        </Suspense>
      </div>

      {/* HomeBanner with reserved space */}
      <div className="w-full min-h-[400px]">
        <Suspense fallback={<div className={skeletonStyle} />}>
          <HomeBanner />
        </Suspense>
      </div>

      {/* FarmStarts */}
      <div className="w-full min-h-[400px]">
        <Suspense fallback={<div className={skeletonStyle} />}>
          <FarmStarts />
        </Suspense>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded xl:py-12 lg:px-14 xl:px-14 p-2">
        <p className="uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl">
          Frequently asked questions
        </p>
        <FAQComponent />
      </div>

      {/* CareGuests */}
      <div className="w-full min-h-[300px]">
        <Suspense fallback={<div className={skeletonStyle} />}>
          <CareGuests />
        </Suspense>
      </div>

      <PopUp />
      
    </div>
  );
}
export async function getServerSideProps({ req }) {
  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? 'https://www.dozzy.in'
    : 'https://www.dozzy.com';

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  const moinbadlistkey = [
    "popular-farm-house-moinabad", "farm-house-for-rent-at-moinabad",
    "moinabad-farm-house-price-list", "hyderabad-moinabad-farmhouse",
    "farm-house-moinabad", "farmhouse-in-moinabad"
  ];

  const farmhouseKeywords = [
    "cheap-farmhouse-for-rent-in-hyderabad", "farm-stay", "hillview-farmstay", "farm-cottages",
    "farmhouse-in-hyderabad", "farm-accommodation", "farmhouse-with-pool",
    "cheap-farm-house-for-rent", "farmhouse-for-rent-in-hyderabad", "luxury-farm-stay",
    "family-farm-stay", "pet-friendly-farm-stays", "farm-stay-hyderabad",
    "farm-stays-around-hyderabad", "farm-house-swimming-pool", "farmhouse-for-lease",
    "farmhouse-for-daily-rent", "rural-farm-houses-for-rent", "3-bedroom-farm-house-for-rent",
    "farm-stays-in-hyderabad", "farm-stays-near-me", "farm-house-for-rent-in-hyderabad",
    "farm-house-for-parties", "modern-farmhouse-pool", "farm-house-to-rent-near-me",
    "2-bedroom-farm-house-for-rent", "farm-house-near-me-for-rent", "farm-house-for-hire",
    "farm-house-for-one-day-rent", "farm-house-for-rent-for-a-day",
    "farmhouse-with-swimming-pool-near-me", "farmhouse-for-couples",
    "farmhouse-with-swimming-pool-for-rent", "farm-house-for-daily-rent",
    "farm-house-for-event", "swimming-pool-farm-house", "pool-farm-house",
    "entire-farm-house-for-rent", "best-farmhouse-with-pool", "farmstays-in-hyderabad",
    "farmhouse-with-big-swimming-pool", "farmstays-near-hyderabad",
    "small-farmhouse-with-pool", "small-farm-house-with-swimming-pool",
    "farmhouse-vacation-rental-near-me", "best-private-places-for-lovers-in-hyderabad",
    "farm-house-for-functions", "near-farm-house-with-swimming-pool",
    "farmhouse-for-night-stay-in-hyderabad", "private-farm-house-for-rent-in-hyderabad",
    "farm-house-for-haldi", "farm-house-for-haldi-function", "hideout-farmstay-hyderabad-price"
  ];

  try {
    const response = await fetch(
      "https://api.dozzy.com/site/properties?property_region=Hyderabad",
      requestOptions
    );
    const result = await response.json();

    const filteredFHS = result.data.map(car => {
      let keyword;

      if (car.area_name?.toLowerCase() === "moinabad") {
        const index = Math.floor(Math.random() * moinbadlistkey.length);
        keyword = moinbadlistkey[index];
      } else {
        const index = Math.floor(Math.random() * farmhouseKeywords.length);
        keyword = farmhouseKeywords[index];
      }

      return {
        property_price: car.property_price,
        no_of_bedrooms: car.no_of_bedrooms,
        customer_night_prices: car.customer_night_prices,
        images:car?.duplicate_farmhouse_front_view? car?.duplicate_farmhouse_front_view: car?.farmhouse_front_view,
        link: `/${keyword}-${car.property_id}`,
        area_name: car.area_name,
        property_name: `Dozzy ${car.property_id}`
      };
    });

    const onlymoin = filteredFHS.filter(item => item.area_name?.toLowerCase() === "moinabad");

    return {
      props: {
        canonicalUrl: canonicalUrl,
        filteredFHS,
        onlymoin
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
