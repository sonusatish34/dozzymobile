import React from 'react'
import FHLPage from './components/FarmProductLPage/FHLPage'
import Head from 'next/head';
function exploreallfarmhouses({ canonicalUrl, filteredFHS }) {

  return (
    <div className='pb-6'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>No Deposit & Unlimited Guests - Dozzy Farmhouse Rentals</title>
        <meta name="description" content="Enjoy the great outdoors with No deposit, Unlimited Guests, and luxurious farmhouse rentals. Perfect for relaxation, parties, and weddings. Book now and enjoy your privacy in nature's luxury." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="No Deposit & Unlimited Guests - Dozzy Farmhouse Rentals" />
        <meta property="og:description" content="Enjoy the great outdoors with No deposit, Unlimited Guests, and luxurious farmhouse rentals. Perfect for relaxation, parties, and weddings. Book now and enjoy your privacy in nature's luxury. " />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <FHLPage place={'hyderabad'} count='all' FHList={filteredFHS} />
    </div>
  )
}

export default exploreallfarmhouses;
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
        images: car?.duplicate_farmhouse_front_view ? car?.duplicate_farmhouse_front_view : car?.farmhouse_front_view,
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

