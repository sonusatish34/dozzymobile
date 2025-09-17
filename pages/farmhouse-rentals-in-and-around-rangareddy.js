import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import rangareddy from '@/public/hyddozzy/Rangareddy.webp'
import NearByFarm from './components/NearByFarm'

function Rangareddy({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Rangareddy Farmhouses - Best Rentals in Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Book affordable and luxury farmhouses in Rangareddy near Hyderabad with pools, lawns, BBQ, and event setups. Perfect for parties, family gatherings, and weekend trips." />
                <meta property="og:title" content="Rangareddy Farmhouses - Best Rentals in Hyderabad" />
                <meta property="og:description" content="Book affordable and luxury farmhouses in Rangareddy near Hyderabad with pools, lawns, BBQ, and event setups. Perfect for parties, family gatherings, and weekend trips." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                        Farmhouses in Rangareddy Under 10,000
                    </h1>
                </div>

                <div>
                    <Image
                        src={rangareddy}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouses in Rangareddy under 10000 with pool and lawns"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'17.2000'} lon={'78.5505'} loc={"Rangareddy"} />

                    <p>
                        Looking for the best farmhouse in Hyderabad to relax, celebrate, or host a private party?
                        Rangareddy is one of the top spots for farmhouse rentals, thanks to its easy connectivity and scenic
                        pockets like Gandipet Lake, Moinabad stretch, and Shankarpally road. With Dozzy, you can explore a
                        wide range of verified listings, from a farmhouse under ₹5000 in Hyderabad to luxury stays with
                        private pools and large lawns.
                    </p>

                    <p className='font-bold text-lg py-2'>Why Choose a Farmhouse in Rangareddy?</p>
                    <p>
                        Rangareddy is popular because it strikes the perfect balance between accessibility and peaceful
                        surroundings. Just a short drive from the city, you’ll find farmhouses with open lawns, fresh air,
                        and plenty of space for events. Whether it’s a birthday by the pool, a family bonfire night, a
                        bachelor party, or a weekend trip with friends, Rangareddy has a farmhouse to match every need.
                    </p>

                    <p>
                        Many farmhouses here also allow alcohol, include strong sound systems for parties, and even have
                        outdoor setups for cricket, football, or BBQ nights. With options across all price ranges, from
                        budget-friendly picks to premium villas, Rangareddy has become one of the best farmhouse
                        destinations near Hyderabad.
                    </p>

                    <p className='font-bold text-lg py-2'>Top Farmhouses for Rent in Hyderabad (Rangareddy Area)</p>

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
                                <tr><td className="border p-2">Dozzy 1722</td><td className="border p-2">3</td><td className="border p-2">₹6000 / 11 hrs , ₹8000 / 22 hrs</td><td className="border p-2">15</td></tr>
                                <tr><td className="border p-2">Dozzy 1676</td><td className="border p-2">2</td><td className="border p-2">₹7000 / 11 hrs , ₹8500 / 22 hrs</td><td className="border p-2">10</td></tr>
                                <tr><td className="border p-2">Dozzy 1783</td><td className="border p-2">3</td><td className="border p-2">₹8000 / 11 hrs , ₹9000 / 22 hrs</td><td className="border p-2">12</td></tr>
                                <tr><td className="border p-2">Dozzy 1714</td><td className="border p-2">2</td><td className="border p-2">₹8000 / 11 hrs , ₹10000 / 22 hrs</td><td className="border p-2">12</td></tr>
                                <tr><td className="border p-2">Dozzy 1839</td><td className="border p-2">3</td><td className="border p-2">₹8000 / 11 hrs , ₹10000 / 22 hrs</td><td className="border p-2">14</td></tr>
                                <tr><td className="border p-2">Dozzy 1750</td><td className="border p-2">2</td><td className="border p-2">₹9000 / 11 hrs , ₹10000 / 22 hrs</td><td className="border p-2">12</td></tr>
                                <tr><td className="border p-2">Dozzy 1863</td><td className="border p-2">4</td><td className="border p-2">₹9000 / 11 hrs , ₹11000 / 22 hrs</td><td className="border p-2">20</td></tr>
                                <tr><td className="border p-2">Dozzy 1823</td><td className="border p-2">4</td><td className="border p-2">₹10000 / 11 hrs , ₹12000 / 22 hrs</td><td className="border p-2">20</td></tr>
                                <tr><td className="border p-2">Dozzy 1838</td><td className="border p-2">4</td><td className="border p-2">₹10000 / 11 hrs , ₹12000 / 22 hrs</td><td className="border p-2">20</td></tr>
                                <tr><td className="border p-2">Dozzy 1792</td><td className="border p-2">4</td><td className="border p-2">₹10000 / 11 hrs , ₹12000 / 22 hrs</td><td className="border p-2">20</td></tr>
                                <tr><td className="border p-2">Dozzy 1844</td><td className="border p-2">4</td><td className="border p-2">₹12000 / 11 hrs , ₹13000 / 22 hrs</td><td className="border p-2">25</td></tr>
                                <tr><td className="border p-2">Dozzy 1811</td><td className="border p-2">5</td><td className="border p-2">₹13000 / 11 hrs , ₹14000 / 22 hrs</td><td className="border p-2">25</td></tr>
                                <tr><td className="border p-2">Dozzy 1871</td><td className="border p-2">4</td><td className="border p-2">₹12000 / 11 hrs , ₹15000 / 22 hrs</td><td className="border p-2">18</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className='py-2'>We also allow you to include additional guests beyond the listed capacity at ₹400 per person, making it easier for larger groups to enjoy the farmhouse together.</p>

                    <p className='font-bold text-lg py-2'>Why You Can Trust Dozzy</p>
                    <ul className='list-disc pl-5'>
                        <li>Wide list of farmhouses in and around Rangareddy</li>
                        <li>Filters for price, amenities, and event type</li>
                        <li>Verified listings with real photos</li>
                        <li>Secure booking with no hidden charges</li>
                        <li>Options for all budgets, from farmhouse under ₹5000 to premium villas</li>
                        <li>11-hour and 22-hour stay slots for flexible planning</li>
                        <li>Farmhouses with pools, BBQ setups, and box cricket courts</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Nearby Attractions in Rangareddy</p>
                    <ul className='list-disc pl-5'>
                        <li>Chilkur Balaji Temple – The famous “Visa Balaji Temple”</li>
                        <li>Mrugavani National Park – A lush wildlife sanctuary</li>
                        <li>Ananthagiri Hills – Great for trekking and camping</li>
                        <li>Osman Sagar & Himayat Sagar Lakes – Calm picnic and boating spots</li>
                        <li>Golconda Fort – A must-visit historical monument</li>
                    </ul>

                    {/* FAQ Section */}
                    <div className="container py-6">
                        <p className="font-bold text-lg py-2">Frequently Asked Questions</p>

                        <div className="mb-4">
                            <p className="font-semibold">1. Can I find a farmhouse under ₹5000 in Rangareddy?</p>
                            <p>Yes, Dozzy lists budget farmhouses starting from ₹5000, especially for smaller groups or weekday bookings.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">2. What facilities do farmhouses in Rangareddy usually include?</p>
                            <p>Most properties come with pools, lawns, BBQ setups, kitchen access, parking, sound systems, and sometimes box cricket setups.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">3. Are Rangareddy farmhouses good for corporate events?</p>
                            <p>Absolutely. Spacious lawns, open seating, and indoor halls make them perfect for team bonding and corporate parties.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">4. What is the best farmhouse in Hyderabad for parties?</p>
                            <p>The best depends on group size, budget, and event type. Dozzy lets you filter Rangareddy options to find your ideal match.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">5. How do I book a farmhouse in Rangareddy on Dozzy?</p>
                            <p>Enter your date, budget, and group size on the Dozzy website or app, check listings, and book instantly.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">6. How far is Rangareddy from central Hyderabad?</p>
                            <p>Rangareddy farmhouses are about 20–40 km from the city, usually a 40–60 minute drive.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">7. Do Rangareddy farmhouses allow outside food and alcohol?</p>
                            <p>Yes, most allow outside catering and alcohol, but always check rules before booking.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">8. Are there farmhouses in Rangareddy under ₹10,000 with pools?</p>
                            <p>Yes, several mid-range farmhouses under ₹10,000 include pools, lawns, and event spaces.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">9. Are farmhouses safe for families with kids?</p>
                            <p>Yes, most are gated, secured, and have kid-friendly lawns, pools, and play areas.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">10. Can I book a farmhouse in Rangareddy for shoots or small functions?</p>
                            <p>Yes, many farmhouses have scenic lawns and open spaces perfect for pre-wedding shoots and intimate events.</p>
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
                            If you’re looking for a farmhouse for rent in Hyderabad, Rangareddy is one of the top areas to explore.
                            From budget-friendly stays under ₹10,000 to premium villas with pools and lawns, Dozzy has it all.
                            Booking is simple, affordable, and stress-free for birthdays, family gatherings, or weekend trips.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rangareddy

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-rangareddy'
        : 'https://www.dozzy.com/farmhouse-rentals-in-rangareddy'

    return {
        props: {
            canonicalUrl,
        }
    }
}
