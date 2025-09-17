import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import ibrahimpatnam from '@/public/hyddozzy/Ibrahimpatnam.webp'
import NearByFarm from './components/NearByFarm'

function Ibrahimpatnam({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Ibrahimpatnam Farmhouses - Best Rentals in Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Book farmhouses in Ibrahimpatnam near Hyderabad with pools, lawns, BBQ, and event setups. Perfect for parties, family gatherings, and weekend trips." />
                <meta property="og:title" content="Ibrahimpatnam Farmhouses - Best Rentals in Hyderabad" />
                <meta property="og:description" content="Book farmhouses in Ibrahimpatnam near Hyderabad with pools, lawns, BBQ, and event setups. Perfect for parties, family gatherings, and weekend trips." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                        Farmhouse Rentals in Hyderabad, Ibrahimpatnam Area
                    </h1>
                </div>

                <div>
                    <Image
                        src={ibrahimpatnam}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouses in Ibrahimpatnam Hyderabad with pool and lawns"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'17.64413325387218'} lon={''} loc={"Ibrahimpatnam"} />
                    <p>
                        Looking for the best farm house Hyderabad has to offer for a private getaway, party, or family outing?
                        Ibrahimpatnam is one of the fastest-growing farmhouse rental spots, known for its peaceful atmosphere and proximity to the city.
                        Surrounded by scenic hills, lakes, and open landscapes, this area is perfect if you’re looking for a private farm house for rent in Hyderabad without the city rush.
                        With Dozzy, you can browse verified listings of farmhouses in Hyderabad with price details upfront.
                        From budget-friendly options to premium villas with pools and large lawns, you’ll find the right pick for your celebration or stay.
                    </p>

                    <p className='font-bold text-lg py-2'>Why Choose a Farmhouse in Ibrahimpatnam</p>
                    <p>
                        Ibrahimpatnam stands out because it combines natural beauty with accessibility. Just a short drive from Hyderabad,
                        you’ll find farmhouses with wide lawns, private pools, BBQ setups, and event spaces. Whether it’s a birthday celebration,
                        bachelor party, corporate outing, or a weekend escape, you can choose from affordable rentals to the best farm house Hyderabad has for premium gatherings.
                    </p>

                    <p>
                        Many farmhouses in Ibrahimpatnam also allow alcohol, come with powerful sound systems for parties,
                        and offer outdoor setups for cricket, football, and bonfire nights. With options across different budgets,
                        it’s a go-to spot for anyone searching for a farmhouse in Hyderabad with price flexibility.
                    </p>

                    <p className='font-bold text-lg py-2'>Top Farmhouses for Rent in Hyderabad (Ibrahimpatnam Area)</p>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-sm lg:text-base">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-2 text-left">Farmhouse Name</th>
                                    <th className="border p-2 text-left">No of Bedrooms</th>
                                    <th className="border p-2 text-left">Price</th>
                                    <th className="border p-2 text-left">People Allowed</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border p-2">Dozzy 1637</td><td className="border p-2">2</td><td className="border p-2">₹8000 / 11 hrs , ₹10000 / 22 hrs</td><td className="border p-2">10</td></tr>
                                <tr><td className="border p-2">Dozzy 1677</td><td className="border p-2">2</td><td className="border p-2">₹9000 / 11 hrs , ₹10000 / 22 hrs</td><td className="border p-2">15</td></tr>
                                <tr><td className="border p-2">Dozzy 1742</td><td className="border p-2">3</td><td className="border p-2">₹8000 / 11 hrs , ₹10000 / 22 hrs</td><td className="border p-2">18</td></tr>
                                <tr><td className="border p-2">Dozzy 1875</td><td className="border p-2">4</td><td className="border p-2">₹13000 / 11 hrs , ₹14000 / 22 hrs</td><td className="border p-2">18</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className='py-2'>
                        We also allow you to include additional guests beyond the listed capacity at ₹400 per person,
                        making it easier for larger groups to enjoy the farmhouse together.
                    </p>

                    <p className='font-bold text-lg py-2'>Why You Can Trust Dozzy</p>
                    <ul className='list-disc pl-5'>
                        <li>A wide range of farmhouses in and around Ibrahimpatnam</li>
                        <li>Listings with real photos and verified amenities</li>
                        <li>Secure booking with no hidden charges</li>
                        <li>Flexible 11-hour and 22-hour stay options</li>
                        <li>Transparent farmhouse in Hyderabad with price details shown upfront</li>
                        <li>Options from budget-friendly stays to luxury villas</li>
                        <li>Amenities like pools, BBQ setups, indoor games, and box cricket courts</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Event-Specific Farmhouse Uses</p>
                    <ul className='list-disc pl-5'>
                        <li>Birthday Parties – With private pools, lawns, and music setups</li>
                        <li>Corporate Outings – Team bonding with outdoor games and open-air seating</li>
                        <li>Family Gatherings – Bonfires, kids’ play areas, and cozy event spaces</li>
                        <li>Couple-Friendly Stays – Quiet retreats with full privacy</li>
                        <li>Bachelor & Bachelorette Nights – Alcohol-permitted options with sound systems</li>
                        <li>Pre-Wedding Shoots – Beautiful farmhouse backdrops surrounded by greenery</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Nearby Attractions of Ibrahimpatnam, Hyderabad</p>
                    <ul className='list-disc pl-5'>
                        <li>Ibrahimpatnam Lake – A peaceful lake perfect for evening walks, boating, or a picnic.</li>
                        <li>Kuntala Waterfalls – A scenic drive and popular nature escape.</li>
                        <li>Ramoji Film City – One of the world’s largest film studios, perfect for a day trip.</li>
                        <li>Sanghi Temple – A beautiful temple on a hilltop with stunning views.</li>
                        <li>Pedda Amberpet Lake – Great for nature lovers and birdwatchers.</li>
                    </ul>

                    {/* FAQ Section */}
                    <div className="container py-6">
                        <p className="font-bold text-lg py-2">Frequently Asked Questions</p>

                        <div className="mb-4">
                            <p className="font-semibold">1. Can I find a private farm house for rent in Hyderabad (Ibrahimpatnam area)?</p>
                            <p>Yes, we list several private farmhouses in Ibrahimpatnam that offer complete privacy, ideal for group stays, birthdays, and parties.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">2. What is the price range for a farmhouse in Hyderabad (Ibrahimpatnam)?</p>
                            <p>Prices usually start around ₹6000 for 11-hour slots and can go up to ₹15000 for luxury farmhouses with bigger pools and lawns.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">3. Are Ibrahimpatnam farmhouses good for corporate outings?</p>
                            <p>Absolutely. Many properties come with open lawns, large seating areas, and facilities for games, making them great for team bonding.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">4. What is the best farm house Hyderabad offers in Ibrahimpatnam?</p>
                            <p>That depends on your group size and event type. With Dozzy, you can filter listings by amenities, budget, and location to find the best fit.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">5. How do I book a farmhouse in Ibrahimpatnam with Dozzy?</p>
                            <p>Just log in to the Dozzy website or app, select your date, group size, and budget, compare verified listings with real photos, and book instantly.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">6. How far is Ibrahimpatnam from Hyderabad city?</p>
                            <p>It’s about 30–35 km from central Hyderabad and usually takes less than an hour’s drive, making it a convenient weekend option.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">7. Do Ibrahimpatnam farmhouses allow alcohol and loud music?</p>
                            <p>Yes, most do, but always check the house rules in the listing. Many come with Bluetooth speakers or DJ setup compatibility.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">8. Are there farmhouses in Ibrahimpatnam under ₹10000?</p>
                            <p>Yes, you’ll find several budget-friendly farmhouses under ₹10000 that include private pools, lawns, and event spaces.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">9. Are farmhouses in Ibrahimpatnam safe for families and kids?</p>
                            <p>Definitely. Most properties are gated, verified, and come with lawns, pools, and indoor play areas suitable for families.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">10. Can I book a farmhouse in Ibrahimpatnam for just one day?</p>
                            <p>Yes, many farmhouses offer flexible 11-hour day or night slots, as well as 22-hour packages for overnight stays.</p>
                        </div>
                    </div>

                    {/* Book Your Farmhouse Section */}
                    <div>
                        <p className="font-bold text-lg py-2">Book Your Farmhouse Today</p>
                        <p>
                            Whether it’s a birthday celebration, a weekend trip, or a family outing, Dozzy makes booking easy, verified, and budget-friendly. Download the app on:
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
                            If you’re planning a getaway or event, a farmhouse in Ibrahimpatnam is one of the best choices near Hyderabad.
                            From budget stays under ₹5000 to premium villas with private pools and lawns, Dozzy helps you find the right fit.
                            Whether it’s a party, family gathering, or quiet escape, booking with Dozzy makes the experience simple, transparent, and stress-free.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ibrahimpatnam

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-ibrahimpatnam'
        : 'https://www.dozzy.com/farmhouse-rentals-in-ibrahimpatnam'

    return {
        props: {
            canonicalUrl,
        }
    }
}
