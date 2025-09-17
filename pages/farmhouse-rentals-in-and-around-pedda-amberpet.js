import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import amberpet from '@/public/hyddozzy/Amberpet.webp'
import NearByFarm from './components/NearByFarm'

function Amberpet({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Pedda Amberpet Farmhouses - Best Rentals in Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Book farmhouses in Pedda Amberpet near Hyderabad with private pools, lawns, BBQ setups, and event spaces. Perfect for birthdays, family gatherings, and weekend trips." />
                <meta property="og:title" content="Pedda Amberpet Farmhouses - Best Rentals in Hyderabad" />
                <meta property="og:description" content="Book farmhouses in Pedda Amberpet near Hyderabad with private pools, lawns, BBQ setups, and event spaces. Perfect for birthdays, family gatherings, and weekend trips." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                        Best Farmhouses with Priavte Pool in Pedda Amberpet, Hyderabad
                    </h1>
                </div>

                <div>
                    <Image
                        src={amberpet}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouses in Pedda Amberpet Hyderabad with pools and lawns"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'17.32268507363657'} lon={'78.64312905870823'} loc={"Pedda Amberpet"} />
                    <p>
                        Looking for the perfect farm house Hyderabad has to offer for a peaceful outing, family celebration,
                        or private party? Pedda Amberpet is emerging as a top spot for farmhouse rentals, thanks to its
                        greenery, lakes, and easy access from the city. If you want to enjoy privacy and comfort away from
                        traffic, a farmhouse near Pedda Amberpet is a great choice for weekends or events.
                    </p>
                    <p>
                        With Dozzy, you can explore verified listings of farmhouses with clear pricing and facilities. From
                        budget-friendly houses to luxury villas with swimming pools, you’ll find plenty of options that suit
                        your plan. Whether you’re planning a birthday, a reunion, or just a break, you’ll easily get a
                        farmhouse in Hyderabad under ₹10000 and even premium spaces with lawns and pools.
                    </p>

                    <p className='font-bold text-lg py-2'>Why Choose a Farmhouse in Pedda Amberpet</p>
                    <p>
                        Pedda Amberpet offers a mix of calm surroundings and easy road connectivity. Farmhouses here
                        come with lawns, pools, barbecue setups, and event spaces. Whether it’s a casual get-together, a
                        bachelor party, or a team outing, you can book anything from a budget home to a villa. Some even
                        allow alcohol, have music systems, and provide sports setups for cricket, football, or bonfire nights.
                    </p>

                    <p className='font-bold text-lg py-2'>Top Farmhouses for Rent in Hyderabad (Pedda Amberpet Area)</p>
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
                                <tr><td className="border p-2">Dozzy 1867</td><td className="border p-2">2</td><td className="border p-2">₹6000 / 11 hrs ; ₹8000 / 22 hrs</td><td className="border p-2">-</td></tr>
                                <tr><td className="border p-2">Dozzy 1675</td><td className="border p-2">2</td><td className="border p-2">₹6000 / 11 hrs ; ₹8000 / 22 hrs</td><td className="border p-2">10</td></tr>
                                <tr><td className="border p-2">Dozzy 1851</td><td className="border p-2">2</td><td className="border p-2">₹8000 / 11 hrs ; ₹9000 / 22 hrs</td><td className="border p-2">15</td></tr>
                                <tr><td className="border p-2">Dozzy 1786</td><td className="border p-2">5</td><td className="border p-2">₹12000 / 11 hrs ; ₹13000 / 22 hrs</td><td className="border p-2">22</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className='py-2'>
                        We also allow you to include additional guests beyond the listed capacity at ₹400 per person, making
                        it easier for larger groups to enjoy the farmhouse together.
                    </p>

                    <p className='font-bold text-lg py-2'>Why You Can Trust Dozzy</p>
                    <ul className='list-disc pl-5'>
                        <li>Wide choice of verified farmhouses in and around Pedda Amberpet</li>
                        <li>Real photos and honest amenity details</li>
                        <li>Clear pricing with no hidden charges</li>
                        <li>Flexible 11-hour and 22-hour booking options</li>
                        <li>Facilities like pools, barbecue setups, indoor games, and cricket grounds</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Event-Specific Farmhouse Uses</p>
                    <ul className='list-disc pl-5'>
                        <li>Birthday Parties – Perfect for lawns, pools, and music</li>
                        <li>Corporate Outings – Team bonding with outdoor games and private seating</li>
                        <li>Family Gatherings – Bonfires, play areas, and dining spaces</li>
                        <li>Couple-Friendly Stays – A private farm house for rent in Hyderabad with full privacy</li>
                        <li>Bachelor Nights – Alcohol-permitted, music-friendly options</li>
                        <li>Pre-Wedding Shoots – Natural and green backdrops for photography</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Nearby Attractions of Pedda Amberpet</p>
                    <ul className='list-disc pl-5'>
                        <li>Pedda Amberpet Lake – A calm spot for evening walks and picnics</li>
                        <li>Ramoji Film City – One of the largest film studios, perfect for a day outing</li>
                        <li>Sanghi Temple – A hilltop temple with panoramic views</li>
                        <li>Ibrahimpatnam Lake – A short drive away, great for boating and nature lovers</li>
                    </ul>

                    {/* FAQ Section */}
                    <div className="container py-6">
                        <p className="font-bold text-lg py-2">Frequently Asked Questions on Farmhouses in Pedda Amberpet</p>

                        <div className="mb-4">
                            <p className="font-semibold">1. Can I book a farmhouse in Pedda Amberpet for a single day?</p>
                            <p>Yes, most farmhouses here are available on 11-hour or 22-hour packages, perfect for day events or overnight stays.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">2. What is the average cost of renting a farmhouse in Pedda Amberpet?</p>
                            <p>Prices usually range between ₹6000 to ₹15000 depending on the size, number of rooms, and amenities like pools or lawns.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">3. Do farmhouses in Pedda Amberpet have swimming pools?</p>
                            <p>Many farmhouses here include private pools, especially the mid-range and premium options.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">4. Are these farmhouses good for birthday parties and celebrations?</p>
                            <p>Absolutely. They have music setups, open lawns, and pools, which make them perfect for birthdays, anniversaries, and other celebrations.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">5. Can we bring outside food and drinks?</p>
                            <p>Yes, most farmhouses allow outside food and drinks, and some even allow alcohol. You can confirm this while booking.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">6. Are farmhouses in Pedda Amberpet safe for families with kids?</p>
                            <p>Yes. Family-friendly options come with secure boundaries, play areas, and peaceful surroundings ideal for kids.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">7. Do farmhouses here allow pets?</p>
                            <p>Some farmhouses are pet-friendly, but it’s best to check the listing details before booking.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">8. How far is Pedda Amberpet from Hyderabad city?</p>
                            <p>It’s around 25–30 km from the main city, making it easy to reach by road in about 40–50 minutes.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">9. What amenities can I expect inside the farmhouse?</p>
                            <p>Most include furnished bedrooms, kitchen access, music systems, indoor games, pools, and BBQ setups.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">10. How do I book a farmhouse in Pedda Amberpet with Dozzy?</p>
                            <p>Just open the Dozzy website or app, choose your date and budget, browse real photos, and confirm your bookings instantly.</p>
                        </div>
                    </div>

                    {/* Book Your Farmhouse Section */}
                    <div>
                        <p className="font-bold text-lg py-2">Book Your Farmhouse Today</p>
                        <p>
                            Pedda Amberpet is one of the most convenient and peaceful areas to rent a farmhouse near
                            Hyderabad. From affordable stays to premium villas, Dozzy makes booking easy with upfront prices
                            and real photos. Whether it’s a family get-together, a private party, or a relaxing weekend, you’ll find
                            the right farmhouse here without any stress.
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
                            Pedda Amberpet is one of the most convenient and peaceful areas to rent a farmhouse near
                            Hyderabad. From affordable stays to premium villas, Dozzy makes booking easy with upfront prices
                            and real photos. Whether it’s a family get-together, a private party, or a relaxing weekend, you’ll find
                            the right farmhouse here without any stress.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Amberpet

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-amberpet'
        : 'https://www.dozzy.com/farmhouse-rentals-in-amberpet'

    return {
        props: {
            canonicalUrl,
        }
    }
}
