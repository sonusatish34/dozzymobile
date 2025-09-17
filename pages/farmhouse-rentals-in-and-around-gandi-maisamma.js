import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import gandi from '@/public/hyddozzy/Gandi-Maisamma.webp'
import NearByFarm from './components/NearByFarm'

function GandiMaisamma({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Gandi Maisamma Farmhouses - Best Rentals in Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Book farmhouses in Gandi Maisamma near Hyderabad with pools, lawns, BBQ setups, and event facilities. Perfect for birthdays, family gatherings, and weekend trips." />
                <meta property="og:title" content="Gandi Maisamma Farmhouses - Best Rentals in Hyderabad" />
                <meta property="og:description" content="Book farmhouses in Gandi Maisamma near Hyderabad with pools, lawns, BBQ setups, and event facilities. Perfect for birthdays, family gatherings, and weekend trips." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                        Book Cheap Farmhouse Rentals in Gandi Maisamma, Hyderabad
                    </h1>
                </div>

                <div>
                    <Image
                        src={gandi}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouses in Gandi Maisamma Hyderabad with pools and lawns"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'17.5771'} lon={'78.4223'} loc={"Gandi Maisamma"} />

                    <p>
                        Planning a party, weekend getaway, or family reunion? Choosing a farmhouse near Gandi Maisamma
                        is a great way to escape the busy city and enjoy fresh air, wide lawns, and peaceful surroundings.
                        Just a short drive from Hyderabad, this location is popular for private gatherings, birthday
                        celebrations, corporate team outings, and pre-wedding shoots.
                    </p>
                    <p>
                        With Dozzy, you can browse verified listings that include budget-friendly stays, premium villas, and
                        spacious lawns. Whether you’re looking for a farm house for rent in Hyderabad under 5000 for a small
                        group or a luxury farm house for rent in Hyderabad under 10000 with a private pool, you’ll find the
                        right option. For larger occasions, you can even book the best farmhouse in Hyderabad in this area
                        with top-notch facilities.
                    </p>

                    <p className='font-bold text-lg py-2'>Why Choose a Farmhouse in Gandi Maisamma</p>
                    <ul className='list-disc pl-5'>
                        <li>Spacious lawns and gardens</li>
                        <li>Private swimming pools</li>
                        <li>Barbecue and bonfire setups</li>
                        <li>Indoor game rooms and outdoor sports areas</li>
                        <li>Music systems for parties</li>
                        <li>Event-friendly open spaces</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Top Farmhouses for Rent in Hyderabad (Gandi Maisamma Area)</p>
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
                                <tr>
                                    <td className="border p-2">Dozzy 1721</td>
                                    <td className="border p-2">2</td>
                                    <td className="border p-2">₹8000 / 11 hrs ; ₹9000 / 22 hrs</td>
                                    <td className="border p-2">10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className='py-2'>
                        We also allow you to include additional guests beyond the listed capacity at ₹400 per person,
                        making it easier for larger groups to enjoy the farmhouse together.
                    </p>

                    <p className='font-bold text-lg py-2'>Why Book with Dozzy</p>
                    <ul className='list-disc pl-5'>
                        <li>Verified farmhouse listings with real photos</li>
                        <li>Transparent pricing and no hidden fees</li>
                        <li>Options from budget-friendly to premium villas</li>
                        <li>11-hour and 22-hour flexible booking slots</li>
                        <li>Amenities like pools, BBQ areas, sports courts, and music setups</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Event-Specific Uses</p>
                    <ul className='list-disc pl-5'>
                        <li>Birthday Parties – Private lawns, pools, and music for fun celebrations</li>
                        <li>Corporate Outings – Team bonding with outdoor games and event-friendly lawns</li>
                        <li>Family Gatherings – Safe and cozy setups for all age groups</li>
                        <li>Couple Retreats – Peaceful and private spaces away from the city</li>
                        <li>Bachelor & Bachelorette Nights – Alcohol-friendly farmhouses with sound systems</li>
                        <li>Pre-Wedding Shoots – Green and scenic backdrops for stunning photos</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Nearby Attractions of Gandi Maisamma</p>
                    <ul className='list-disc pl-5'>
                        <li>Durgam Cheruvu Lake – A peaceful outing spot nearby</li>
                        <li>Kompally Zone – Popular for restaurants and quick getaways</li>
                        <li>Shamirpet Lake – Perfect for boating and birdwatching</li>
                        <li>Cine Planet Multiplex – A casual entertainment option within reach</li>
                        <li>Sanghi Temple – Scenic temple visits on a hilltop</li>
                    </ul>

                    {/* FAQ Section */}
                    <div className="container py-6">
                        <p className="font-bold text-lg py-2">Frequently Asked Questions on Farmhouses in Gandi Maisamma</p>

                        <div className="mb-4">
                            <p className="font-semibold">1. What is the price range for farmhouses here?</p>
                            <p>They start around ₹5000 and go up to ₹15000, depending on size and amenities.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">2. Are farmhouses in this area family-friendly?</p>
                            <p>Yes, many include kids’ play areas and safe lawns.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">3. Can I book a farmhouse for a day?</p>
                            <p>Yes, Dozzy offers flexible 11-hour and 22-hour stays.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">4. Do farmhouses include swimming pools?</p>
                            <p>Yes, several listings come with private pools.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">5. Can these farmhouses host corporate events?</p>
                            <p>Absolutely, they provide large lawns and spaces for team activities.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">6. Are bachelor parties allowed?</p>
                            <p>Yes, many farmhouses permit music, bonfires, and alcohol.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">7. How far is Gandi Maisamma from Hyderabad city?</p>
                            <p>It’s roughly 25–30 km away, around 40–50 minutes by road.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">8. What amenities are usually included?</p>
                            <p>Furnished bedrooms, kitchen space, pools, lawns, music systems, and sports setups.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">9. Can I bring my own food and drinks?</p>
                            <p>Yes, most farmhouses allow outside catering and beverages.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">10. How can I book with Dozzy?</p>
                            <p>Simply check the Dozzy app or website, select your group size and budget, and confirm your booking instantly.</p>
                        </div>
                    </div>

                    {/* Book Your Farmhouse Section */}
                    <div>
                        <p className="font-bold text-lg py-2">Book Your Farmhouse Today</p>
                        <p>
                            Gandi Maisamma is one of the best spots near Hyderabad for hosting parties, family events, and
                            weekend escapes. Whether you want a farm house for rent in Hyderabad under 5000 for a quick
                            gathering, a farm house for rent in Hyderabad under 10000 with extra amenities, or the best
                            farmhouse in Hyderabad for premium celebrations, Dozzy makes the process simple and transparent.
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
                </div>
            </div>
        </div>
    )
}

export default GandiMaisamma

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-gandi-maisamma'
        : 'https://www.dozzy.com/farmhouse-rentals-in-gandi-maisamma'

    return {
        props: {
            canonicalUrl,
        }
    }
}
