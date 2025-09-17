import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import shamirpet from '@/public/hyddozzy/Shamirpet.webp'
import NearByFarm from './components/NearByFarm'

function Shamirpet({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Shamirpet Farmhouses - Best Rentals in Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Farmhouse rentals in Shamirpet, Hyderabad with pools, lawns, BBQ setups, and event spaces. Perfect for parties, family gatherings, and weekend trips." />
                <meta property="og:title" content="Shamirpet Farmhouses - Best Rentals in Hyderabad" />
                <meta property="og:description" content="Farmhouse rentals in Shamirpet, Hyderabad with pools, lawns, BBQ setups, and event spaces. Perfect for parties, family gatherings, and weekend trips." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                        Farm Stays in Hyderabad, Shamirpet Area
                    </h1>
                </div>

                <div>
                    <Image
                        src={shamirpet}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouses in Shamirpet Hyderabad with pools and lawns"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'17.59598509606844'} lon={'78.57190189496676'} loc={"Shamirpet"} />
                    <p>
                        Looking for a peaceful yet convenient getaway? A farm house in Shamirpet is a great choice for
                        parties, family gatherings, or weekend escapes. Known for its lake, deer park, and open green spaces,
                        Shamirpet offers a mix of nature and modern comforts, making it one of the most sought-after
                        farmhouse rental spots near the city.
                    </p>
                    <p>
                        With Dozzy, you can explore verified listings of farmhouse in Shamirpet with price details clearly
                        shown. From affordable stays to premium villas with pools and lawns, you’ll easily find the right fit
                        for your occasion.
                    </p>

                    <p className='font-bold text-lg py-2'>Why Choose a Farmhouse in Shamirpet</p>
                    <p>
                        Shamirpet is known for its natural charm, peaceful environment, and quick connectivity to Hyderabad.
                        Whether you’re planning a birthday, corporate event, bachelor party, or family outing, you’ll find
                        everything from budget stays to the best farm house Hyderabad offers for premium celebrations.
                    </p>
                    <p>
                        Most farmhouses here feature private pools, wide lawns, BBQ areas, and music setups. Some even allow
                        alcohol and provide outdoor activities like cricket, football, or bonfire nights. If you’re searching
                        for a farm house for rent in Hyderabad under 10000, Shamirpet has some great options.
                    </p>

                    <p className='font-bold text-lg py-2'>Top Farmhouses for Rent in Hyderabad (Shamirpet Area)</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-sm lg:text-base">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-2 text-left">Farmhouse Name</th>
                                    <th className="border p-2 text-left">No of Bedrooms</th>
                                    <th className="border p-2 text-left">Price</th>
                                    <th className="border p-2 text-left">No of People Allowed</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border p-2">Dozzy 1569</td><td className="border p-2">1</td><td className="border p-2">₹4500 / 11 hrs ; ₹6500 / 22 hrs</td><td className="border p-2">15</td></tr>
                                <tr><td className="border p-2">Dozzy 1688</td><td className="border p-2">2</td><td className="border p-2">₹6000 / 11 hrs ; ₹7000 / 22 hrs</td><td className="border p-2">10</td></tr>
                                <tr><td className="border p-2">Dozzy 1870</td><td className="border p-2">3</td><td className="border p-2">₹10000 / 11 hrs ; ₹12000 / 22 hrs</td><td className="border p-2">15</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className='py-2'>
                        We also allow you to include additional guests beyond the listed capacity at ₹400 per person, making
                        it easier for larger groups to enjoy the farmhouse together.
                    </p>

                    <p className='font-bold text-lg py-2'>Why You Can Trust Dozzy</p>
                    <ul className='list-disc pl-5'>
                        <li>Verified listings with real photos and amenities</li>
                        <li>Flexible 11-hour and 22-hour booking slots</li>
                        <li>Transparent farmhouse in Shamirpet with price details upfront</li>
                        <li>Options from budget-friendly rentals to premium luxury villas</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Event-Specific Farmhouses</p>
                    <ul className='list-disc pl-5'>
                        <li>Birthday Parties – Pools, lawns, and sound systems for celebrations</li>
                        <li>Corporate Outings – Outdoor team activities with private event spaces</li>
                        <li>Family Gatherings – Kids play areas, bonfires, and cozy seating</li>
                        <li>Couple-Friendly Stays – Private retreats surrounded by greenery</li>
                        <li>Bachelor & Bachelorette Nights – Alcohol-permitted spaces with music</li>
                        <li>Pre-Wedding Shoots – Scenic farmhouse settings with lake views</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Nearby Attractions of Shamirpet, Hyderabad</p>
                    <ul className='list-disc pl-5'>
                        <li>Shamirpet Lake – A serene spot for boating and evening walks</li>
                        <li>Shamirpet Deer Park – A must-visit for wildlife and nature lovers</li>
                        <li>Ratnalayam Temple – A peaceful temple with beautiful surroundings</li>
                        <li>Runway 9 (Kompally) – Adventure hub with go-karting and activities</li>
                        <li>Alwal & ECIL Markets – Local shopping and street food experiences</li>
                    </ul>

                    {/* FAQ Section */}
                    <div className="container py-6">
                        <p className="font-bold text-lg py-2">Frequently Asked Questions on Farmhouses in Shamirpet</p>

                        <div className="mb-4">
                            <p className="font-semibold">1. Can I find a farm house in Shamirpet under ₹10000?</p>
                            <p>Yes, several budget-friendly farmhouses are available under ₹10000, perfect for small to medium groups.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">2. What is the price range for a farmhouse in Shamirpet?</p>
                            <p>Prices usually start from ₹5000 for 11 hours and can go up to ₹15000 for premium villas with pools and lawns.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">3. Are Shamirpet farmhouses good for parties?</p>
                            <p>Absolutely. With private pools, large lawns, BBQ setups, and sound systems, they are among the top choices for parties.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">4. Which is the best farm house Hyderabad offers in Shamirpet?</p>
                            <p>It depends on your group size and budget. You can filter listings by guest capacity, amenities, and price to find the best fit.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">5. How do I book a farmhouse in Shamirpet?</p>
                            <p>Visit the Dozzy website or app, select your date, budget, and group size, check verified photos and amenities, and book instantly.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">6. How far is Shamirpet from Hyderabad city?</p>
                            <p>Shamirpet is about 30 km from the city and can be reached in 45 minutes to 1 hour by road.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">7. Are farmhouses in Shamirpet suitable for families with kids?</p>
                            <p>Yes, most farmhouses are gated, secure, and have lawns, pools, and safe areas where kids can play.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">8. Do Shamirpet farmhouses allow alcohol and outside food?</p>
                            <p>Many listings allow alcohol and outside catering, but house rules vary, so it’s best to check before booking.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">9. Can I book a farmhouse in Shamirpet for just one day?</p>
                            <p>Yes, flexible 11-hour day packages and 22-hour overnight stays are available for different occasions.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">10. What are the attractions near Shamirpet farmhouses?</p>
                            <p>Nearby spots include Shamirpet Lake, Shamirpet Deer Park, and amusement parks, making it a great getaway location.</p>
                        </div>
                    </div>

                    {/* Book Your Farmhouse Section */}
                    <div>
                        <p className="font-bold text-lg py-2">Book Your Farmhouse Today</p>
                        <p>
                            If you’re planning a celebration, team outing, or private trip, Shamirpet is one of the best places to
                            rent a farmhouse near Hyderabad. Booking through Dozzy is simple, transparent, and stress-free.
                            Download the app today:
                        </p>
                        <p>
                            <Link className="text-blue-700 underline" href="https://play.google.com/store/apps/details?id=com.dozzy_customer">
                                Play Store
                            </Link>{' '}
                            <Link className="text-blue-700 underline" href="https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530">
                                App Store
                            </Link>
                        </p>
                    </div>

                    <div className='pt-4'>
                        <p className='text-lg font-bold'>Conclusion</p>
                        <p>
                            If you’re planning a celebration, team outing, or private trip, Shamirpet is one of the best places to
                            rent a farmhouse near Hyderabad. From budget options under ₹10000 to premium villas with pools and lawns,
                            Dozzy makes it easy to find the right one. Booking through our app is simple, transparent, and stress-free.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shamirpet

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-shamirpet'
        : 'https://www.dozzy.com/farmhouse-rentals-in-shamirpet'

    return {
        props: {
            canonicalUrl,
        }
    }
}
