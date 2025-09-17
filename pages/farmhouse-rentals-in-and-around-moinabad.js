import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import moinabad from '@/public/hyddozzy/Moinabad.webp'
import NearByFarm from './components/NearByFarm'

function Moinabad({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Moinabad Farmhouses - Best Weekend Rentals in Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Find the best farmhouses in Moinabad with pools, lawns, and affordable prices. Perfect for parties, family gatherings, and private celebrations." />
                <meta property="og:title" content="Moinabad Farmhouses - Best Weekend Rentals in Hyderabad" />
                <meta property="og:description" content="Find the best farmhouses in Moinabad with pools, lawns, and affordable prices. Perfect for parties, family gatherings, and private celebrations." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                        Best Farmhouses in Moinabad with Private Pool
                    </h1>
                </div>

                <div>
                    <Image
                        src={moinabad}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Best Farmhouses in Moinabad with Private Pool"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'17.32774773073347'} lon={'78.27357308646393'} loc={"Moinabad"} />

                    <p>
                        Looking for the best farmhouse in Moinabad where you can host parties, relax with friends,
                        or enjoy a peaceful family day? Dozzy makes it simple to find cheap and affordable farmhouses
                        in Moinabad under ₹5000 that come with pools, lawns, and everything you need for a private getaway.
                    </p>

                    <p className='font-bold text-lg py-2'>Why Choose a Farmhouse in Moinabad?</p>
                    <p>
                        A farmhouse in Moinabad feels like a quick little escape from Hyderabad. It is close enough to
                        reach in under an hour, yet the wide green fields and calm surroundings make you feel far away
                        from the city rush. That’s why Moinabad has become one of the best farmhouse rental spots near Hyderabad.
                    </p>

                    <p>
                        Whether you want to celebrate a birthday by the pool, gather the whole family for lawn games and a bonfire,
                        plan a weekend trip with friends for under ₹10,000, or just enjoy a private get-together,
                        Moinabad has the right vibe for it all.
                    </p>

                    <p className='font-bold text-lg py-2'>Best Farmhouses in Moinabad for Rent</p>

                    <div className="overflow-x-auto">
                        <p>The below table contains farmhouses in moinabad under 10000 and above prices:</p>
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
                                <tr><td className="border p-2">Dozzy 1699</td><td className="border p-2">1</td><td className="border p-2">₹5000 / 11 hrs ,
                                    ₹6000 / 22 hrs</td><td className="border p-2">6</td></tr>
                                <tr><td className="border p-2">Dozzy 1773</td><td className="border p-2">1</td><td className="border p-2">₹6000 / 11 hrs ,  ₹7000 / 22 hrs</td><td className="border p-2">10</td></tr>
                                <tr><td className="border p-2">Dozzy 1473</td><td className="border p-2">2</td><td className="border p-2">₹6000 / 11 hrs ,  ₹6000 / 22 hrs</td><td className="border p-2">8</td></tr>
                                <tr><td className="border p-2">Dozzy 1848</td><td className="border p-2">2</td><td className="border p-2">₹6000 / 11 hrs ,  ₹7000 / 22 hrs</td><td className="border p-2">6</td></tr>
                                <tr><td className="border p-2">Dozzy 1669</td><td className="border p-2">2</td><td className="border p-2">₹6000 / 11 hrs ,  ₹8000 / 22 hrs</td><td className="border p-2">12</td></tr>
                                <tr><td className="border p-2">Dozzy 1771</td><td className="border p-2">2</td><td className="border p-2">₹6000 / 11 hrs ,  ₹8000 / 22 hrs</td><td className="border p-2">12</td></tr>
                                <tr><td className="border p-2">Dozzy 1815</td><td className="border p-2">2</td><td className="border p-2">₹6000 / 11 hrs ,  ₹8000 / 22 hrs</td><td className="border p-2">12</td></tr>
                                <tr><td className="border p-2">Dozzy 1782</td><td className="border p-2">2</td><td className="border p-2">₹7000 / 11 hrs ,  ₹8000 / 22 hrs</td><td className="border p-2">10</td></tr>
                                <tr><td className="border p-2">Dozzy 1810</td><td className="border p-2">2</td><td className="border p-2">₹8000 / 11 hrs ,  ₹9000 / 22 hrs</td><td className="border p-2">10</td></tr>
                                <tr><td className="border p-2">Dozzy 1828</td><td className="border p-2">2</td><td className="border p-2">₹8000 / 11 hrs ,  ₹9000 / 22 hrs</td><td className="border p-2">12</td></tr>
                                <tr><td className="border p-2">Dozzy 1824</td><td className="border p-2">2</td><td className="border p-2">₹8000 / 11 hrs ,  ₹10000 / 22 hrs</td><td className="border p-2">12</td></tr>
                                <tr><td className="border p-2">Dozzy 1868</td><td className="border p-2">2</td><td className="border p-2">₹8000 / 11 hrs ,  ₹12000 / 22 hrs</td><td className="border p-2">18</td></tr>
                                <tr><td className="border p-2">Dozzy 1865</td><td className="border p-2">3</td><td className="border p-2">₹9000 / 11 hrs ,  ₹10000 / 22 hrs</td><td className="border p-2">20</td></tr>
                                <tr><td className="border p-2">Dozzy 1832</td><td className="border p-2">3</td><td className="border p-2">₹10000 / 11 hrs ,  ₹11000 / 22 hrs</td><td className="border p-2">18</td></tr>
                                <tr><td className="border p-2">Dozzy 1843</td><td className="border p-2">3</td><td className="border p-2">₹12000 / 11 hrs ,  ₹13000 / 22 hrs</td><td className="border p-2">15</td></tr>
                                <tr><td className="border p-2">Dozzy 1769</td><td className="border p-2">3</td><td className="border p-2">₹14000 / 11 hrs ,  ₹15000 / 22 hrs</td><td className="border p-2">18</td></tr>
                                <tr><td className="border p-2">Dozzy 1701</td><td className="border p-2">4</td><td className="border p-2">₹8000 / 11 hrs ,  ₹10000 / 22 hrs</td><td className="border p-2">20</td></tr>
                                <tr><td className="border p-2">Dozzy 1829</td><td className="border p-2">4</td><td className="border p-2">₹10000 / 11 hrs ,  ₹12000 / 22 hrs</td><td className="border p-2">20</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className='py-2'>We also allow you to include additional guests beyond the listed capacity at ₹400 per person, making it easier for larger groups to enjoy the farmhouse together.</p>

                    <p className='font-bold text-lg py-2'>Why Trust Dozzy Farmhouses in Moinabad?</p>
                    <ul className='list-disc pl-5'>
                        <li>Wide list of farmhouses in and around Moinabad</li>
                        <li>Filters for price, amenities, and event type</li>
                        <li>Verified listings with real pictures</li>
                        <li>Secure and quick booking process</li>
                        <li>11-hour and 22-hour stay options</li>
                        <li>Some with box cricket setups</li>
                    </ul>



                    <div className="container py-6">
                        {/* FAQ Section */}
                        <div>
                            <p className="font-bold text-lg py-2">Frequently Asked Questions on Farmhouses near Moinabad</p>

                            <div className="mb-4">
                                <p className="font-semibold">1. What is the best farmhouse in Moinabad for a group stay?</p>
                                <p>The best option depends on your budget and group size. You can filter by guest capacity, pool, and lawn to find the right fit in Moinabad.</p>
                            </div>

                            <div className="mb-4">
                                <p className="font-semibold">2. Can I get a cheap farmhouse in Moinabad under 10000?</p>
                                <p>Yes. We list budget-friendly farmhouses in Moinabad under 10000 with flexible 11-hour and 22-hour booking options.</p>
                            </div>

                            <div className="mb-4">
                                <p className="font-semibold">3. What facilities are usually available in farmhouses in Moinabad?</p>
                                <p>Most farmhouses include private pools, large lawns, kitchens, BBQ setups, parking, indoor games, upgraded sound systems, and even box cricket grounds.</p>
                            </div>

                            <div className="mb-4">
                                <p className="font-semibold">4. Are farmhouses in Moinabad suitable for events like birthdays or corporate outings?</p>
                                <p>Yes, you’ll find event-ready farmhouses with lawns, seating, and music setups for birthdays, family events, and team outings.</p>
                            </div>

                            <div className="mb-4">
                                <p className="font-semibold">5. How can I book a farmhouse in Moinabad with private pool on Dozzy?</p>
                                <p>Just enter your date, budget, and group size on the Dozzy app or website, check real photos and house rules, and book instantly.</p>
                            </div>

                            <div className="mb-4">
                                <p className="font-semibold">6. How many people can a farm house in Moinabad accommodate?</p>
                                <p>Depending on the property, farmhouses can host anywhere from 10–15 guests in smaller ones to 50+ in larger villas.</p>
                            </div>

                            <div className="mb-4">
                                <p className="font-semibold">7. Do farm houses in Moinabad allow alcohol and music?</p>
                                <p>Yes, many listings permit alcohol and come with powerful music systems, but you should always confirm before booking.</p>
                            </div>

                            <div className="mb-4">
                                <p className="font-semibold">8. Are there farmhouses in Moinabad good for couples or small families?</p>
                                <p>Definitely. Some farmhouses are designed as cozy, private spaces with small lawns and pools for couples or family getaways.</p>
                            </div>

                            <div className="mb-4">
                                <p className="font-semibold">9. How far is Moinabad from Hyderabad city?</p>
                                <p>Moinabad is around 25–30 km from the city, making it easy to reach within 40–50 minutes by road.</p>
                            </div>

                            <div className="mb-4">
                                <p className="font-semibold">10. Do farmhouses around Moinabad allow outside catering or home-cooked food?</p>
                                <p>Yes, most properties allow outside catering and also have kitchen access if you prefer to cook your own meals.</p>
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
                                </Link>.
                            </p>
                        </div>

                        {/* Conclusion */}
                        <div className="pt-4">
                            <p className="text-lg font-bold">Conclusion</p>
                            <p>
                                If you’re planning a getaway with friends, a birthday celebration, or a family outing, choosing a farmhouse in Moinabad is one of the best options around Hyderabad. With Dozzy, you get access to verified farmhouses that are cheap, affordable, and under ₹10,000, with flexible 11-hour or 22-hour stays, better sound systems, box cricket setups, and even alcohol-permitted options for groups that want to party late into the night. We make sure your farmhouse booking is simple, budget-friendly, and stress-free.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moinabad;

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/famhouse-rentals-in-and-around-moinabad'
        : 'https://www.dozzy.com/famhouse-rentals-in-and-around-moinabad'

    return {
        props: {
            canonicalUrl,
        }
    }
}
