import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import chevella from '@/public/hyddozzy/Chevella.webp'
import NearByFarm from './components/NearByFarm'

function Chevella({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Chevella Farmhouses - Best Rentals in Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Book farmhouses in Chevella near Hyderabad with pools, lawns, BBQ setups, and event facilities. Perfect for birthdays, family gatherings, and weekend trips." />
                <meta property="og:title" content="Chevella Farmhouses - Best Rentals in Hyderabad" />
                <meta property="og:description" content="Book farmhouses in Chevella near Hyderabad with pools, lawns, BBQ setups, and event facilities. Perfect for birthdays, family gatherings, and weekend trips." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                        Private Farmhouse for rent in Hyderabad, Chevella Area
                    </h1>
                </div>

                <div>
                    <Image
                        src={chevella}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouses in Chevella Hyderabad with pool and lawns"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'17.3067'} lon={'78.1353'} loc={"Chevella"} />

                    <p>
                        Looking for the best farmhouse near Hyderabad to celebrate, relax, or host a private gathering?
                        Chevella is one of the most scenic spots for farmhouse rentals, surrounded by hills, farmlands,
                        and a peaceful countryside vibe. Just a short drive from the city, it’s ideal if you want a quiet
                        yet well-connected getaway. With Dozzy, you can explore verified listings of farmhouse in Hyderabad
                        with price details shown upfront. From budget-friendly rentals to premium villas with pools and lawns,
                        you’ll find the right choice for your event or family stay.
                    </p>

                    <p className='font-bold text-lg py-2'>Why Choose a Farmhouse in Chevella</p>
                    <p>
                        Chevella is loved for its fresh air, greenery, and open landscapes. Its calm setting makes it perfect
                        for parties, weekend stays, or private celebrations. Whether you’re planning a birthday, bachelor party,
                        corporate outing, or just a peaceful family get-together, you’ll find everything from affordable rentals
                        to the best farm house Hyderabad has for luxury experiences.
                    </p>
                    <p>
                        Many Chevella farmhouses include pools, lawns, BBQ setups, and music systems. Some also allow alcohol
                        and offer outdoor games like cricket and football, making it a go-to spot for all kinds of gatherings.
                    </p>

                    <p className='font-bold text-lg py-2'>Top Farmhouses for Rent in Hyderabad (Chevella Area)</p>

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
                                <tr><td className="border p-2">Dozzy 1583</td><td className="border p-2">2</td><td className="border p-2">₹6000 / 11 hrs , ₹7000 / 22 hrs</td><td className="border p-2">18</td></tr>
                                <tr><td className="border p-2">Dozzy 1749</td><td className="border p-2">2</td><td className="border p-2">₹8000 / 11 hrs , ₹10000 / 22 hrs</td><td className="border p-2">12</td></tr>
                                <tr><td className="border p-2">Dozzy 1715</td><td className="border p-2">3</td><td className="border p-2">₹8500 / 11 hrs , ₹9500 / 22 hrs</td><td className="border p-2">15</td></tr>
                                <tr><td className="border p-2">Dozzy 1674</td><td className="border p-2">3</td><td className="border p-2">₹9000 / 11 hrs , ₹10500 / 22 hrs</td><td className="border p-2">18</td></tr>
                                <tr><td className="border p-2">Dozzy 1862</td><td className="border p-2">3</td><td className="border p-2">₹10000 / 11 hrs , ₹12000 / 22 hrs</td><td className="border p-2">20</td></tr>
                                <tr><td className="border p-2">Dozzy 1754</td><td className="border p-2">3</td><td className="border p-2">₹9000 / 11 hrs , ₹10000 / 22 hrs</td><td className="border p-2">18</td></tr>
                                <tr><td className="border p-2">Dozzy 1825</td><td className="border p-2">3</td><td className="border p-2">₹9500 / 11 hrs , ₹10500 / 22 hrs</td><td className="border p-2">20</td></tr>
                                <tr><td className="border p-2">Dozzy 1837</td><td className="border p-2">4</td><td className="border p-2">₹9500 / 11 hrs , ₹10500 / 22 hrs</td><td className="border p-2">20</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className='py-2'>
                        We also allow you to include additional guests beyond the listed capacity at ₹400 per person,
                        making it easier for larger groups to enjoy the farmhouse together.
                    </p>

                    <p className='font-bold text-lg py-2'>Why You Can Trust Dozzy</p>
                    <ul className='list-disc pl-5'>
                        <li>A wide list of farmhouses in and around Chevella</li>
                        <li>Verified photos and amenities</li>
                        <li>Secure booking with no hidden fees</li>
                        <li>Flexible 11-hour and 22-hour stay slots</li>
                        <li>Farmhouse in Hyderabad with price details clearly listed</li>
                        <li>Options from budget-friendly to luxury stays</li>
                        <li>Amenities like pools, lawns, BBQ setups, and indoor/outdoor games</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Event-Specific Farmhouses</p>
                    <ul className='list-disc pl-5'>
                        <li>Birthday Parties – Lawns, pools, and private dining spaces</li>
                        <li>Corporate Outings – Outdoor games, seating, and peaceful event setups</li>
                        <li>Family Gatherings – Bonfires, kid’s play zones, and open lawns</li>
                        <li>Couple-Friendly Stays – Private retreats surrounded by greenery</li>
                        <li>Bachelor & Bachelorette Nights – Music, alcohol-permitted spaces, and late-night fun</li>
                        <li>Pre-Wedding Shoots – Scenic farmhouse backdrops for memorable photos</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Nearby Attractions of Chevella, Hyderabad</p>
                    <ul className='list-disc pl-5'>
                        <li>Ananthagiri Hills – Famous for trekking, camping, and scenic drives.</li>
                        <li>Kotepally Reservoir – Great for kayaking, boating, and water activities.</li>
                        <li>Mrugavani National Park (nearby) – A wildlife sanctuary with deer, peacocks, and lush greenery.</li>
                        <li>Chilkur Balaji Temple – The popular “Visa Balaji Temple” is just a short drive away.</li>
                        <li>Srisailam Highway Scenic Drive – Known for its greenery and peaceful views.</li>
                    </ul>

                    {/* FAQ Section */}
                    <div className="container py-6">
                        <p className="font-bold text-lg py-2">Frequently Asked Questions</p>

                        <div className="mb-4">
                            <p className="font-semibold">1. Can I find a budget-friendly farmhouse in Chevella?</p>
                            <p>Yes, we list affordable farmhouses starting around ₹7000, ideal for smaller groups and quick getaways.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">2. What is the price range for a farmhouse in Hyderabad (Chevella)?</p>
                            <p>Most farmhouses range from ₹6000 to ₹15000 depending on the property size, amenities, and rental duration.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">3. Is Chevella good for corporate or team outings?</p>
                            <p>Absolutely. With big lawns, indoor halls, and outdoor games, Chevella is a popular choice for office trips and team bonding.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">4. Which is the best farmhouse near Hyderabad for events?</p>
                            <p>Chevella is one of the top areas. On Dozzy, you can filter listings by budget, guest capacity, and facilities to find the best farmhouse for your event.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">5. How can I book a farmhouse in Chevella with Dozzy?</p>
                            <p>Visit the Dozzy website or app, enter your budget, date, and group size, compare listings with real photos, and book instantly.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">6. How far is Chevella from Hyderabad city?</p>
                            <p>Chevella is about 40 km from the city and usually takes around 1 to 1.5 hours by road.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">7. Do Chevella farmhouses allow alcohol and outside food?</p>
                            <p>Yes, most allow outside catering, food, and alcohol, but it’s best to confirm the rules in each listing before booking.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">8. Are there farmhouses in Chevella under ₹10000 with a pool?</p>
                            <p>Yes, several farmhouses under ₹10000 in Chevella include private pools, lawns, and event-ready spaces.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">9. Are farmhouses in Chevella suitable for families with kids?</p>
                            <p>Definitely. Most are gated, secured, and come with lawns, pools, and safe play areas for children.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">10. Can I book a farmhouse in Chevella for just one day?</p>
                            <p>Yes, you can choose from flexible 11-hour or 22-hour slots, depending on whether you want a day party or an overnight stay.</p>
                        </div>
                    </div>

                    {/* Book Your Farmhouse Section */}
                    <div>
                        <p className="font-bold text-lg py-2">Book Your Farmhouse Today</p>
                        <p>
                            Whether it’s a weekend party, family get-together, or private function, Dozzy makes it easy to find
                            and book verified farmhouses in Chevella. Download the app on:
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
                            If you’re planning a party, trip, or family celebration, Chevella is one of the best areas to rent a farmhouse near Hyderabad.
                            With options ranging from budget stays to luxury villas, we make it simple to find and book the right one.
                            Whether it’s for a poolside party, a corporate event, or a weekend escape, booking with Dozzy ensures a smooth,
                            secure, and stress-free experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chevella

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-chevella'
        : 'https://www.dozzy.com/farmhouse-rentals-in-chevella'

    return {
        props: {
            canonicalUrl,
        }
    }
}
