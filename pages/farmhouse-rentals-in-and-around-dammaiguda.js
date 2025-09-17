import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import dammaiguda from '@/public/hyddozzy/Dammaiguda.webp'
import NearByFarm from './components/NearByFarm'

function Dammaiguda({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Dammaiguda Farmhouses - Best Rentals in Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Book farmhouses in Dammaiguda near Hyderabad with pools, lawns, BBQ setups, and event spaces. Perfect for birthdays, family gatherings, and weekend getaways." />
                <meta property="og:title" content="Dammaiguda Farmhouses - Best Rentals in Hyderabad" />
                <meta property="og:description" content="Book farmhouses in Dammaiguda near Hyderabad with pools, lawns, BBQ setups, and event spaces. Perfect for birthdays, family gatherings, and weekend getaways." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                        Farmhouses for Birthday parties near Dammaiguda, Hyderabad
                    </h1>
                </div>

                <div>
                    <Image
                        src={dammaiguda}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouses in Dammaiguda Hyderabad with pools and lawns"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'17.500094672741355'} lon={'78.59224918369794'} loc={"Dammaiguda"} />
                    <p>
                        If you’re searching for a calm and spacious spot for your next gathering, a farmhouse near
                        Dammaiguda is a great choice. Just a short drive from ECIL and Nagaram, this area has become
                        popular for family get-togethers, office team outings, and private parties. The farmhouses here come
                        with wide lawns, swimming pools, indoor games, and cozy spaces for celebrations.
                    </p>
                    <p>
                        With Dozzy, you can easily compare listings, see real photos, and check each farmhouse in
                        Hyderabad with price details before booking. Whether you need a small property for a birthday party
                        or the best farmhouse in Hyderabad for a larger gathering, you’ll find the right fit without any
                        confusion.
                    </p>

                    <p className='font-bold text-lg py-2'>Why Choose a Farmhouse in Dammaiguda</p>
                    <p>Dammaiguda offers the perfect balance of convenience and greenery. It’s close enough to the city for
                        easy access yet peaceful enough to feel like a real getaway. Many farmhouses here provide:
                    </p>
                    <ul className='list-disc pl-5'>
                        <li>Private swimming pools</li>
                        <li>Spacious lawns for cricket, football, and badminton</li>
                        <li>Bonfire and barbecue setups</li>
                        <li>Indoor game zones for carrom, pool, and table tennis</li>
                        <li>Music systems for parties</li>
                        <li>Event spaces for birthdays, reunions, and corporate outings</li>
                    </ul>
                    <p>
                        Travelers on a budget can even find a farm house for rent in Hyderabad under 5000, making it
                        affordable for small groups who just want to relax without overspending.
                    </p>

                    <p className='font-bold text-lg py-2'>Top Farmhouses for Rent in Hyderabad (Dammaiguda Area)</p>
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
                                    <td className="border p-2">Dozzy 1880</td>
                                    <td className="border p-2">3</td>
                                    <td className="border p-2">₹10000 / 11 hrs ; ₹12000 / 22 hrs</td>
                                    <td className="border p-2">15</td>
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
                        <li>Verified farmhouses with real photos and amenities</li>
                        <li>Clear pricing and no hidden charges</li>
                        <li>Flexible booking slots (11-hour and 22-hour options)</li>
                        <li>Properties ranging from budget to luxury villas</li>
                        <li>Amenities like pools, BBQ setups, lawns, and indoor games</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Event-Specific Uses of Farmhouses</p>
                    <ul className='list-disc pl-5'>
                        <li>Birthday Parties – Poolside fun and music for private celebrations</li>
                        <li>Corporate Outings – Outdoor activities and open spaces for team building</li>
                        <li>Family Gatherings – Safe play areas, lawns, and cozy setups</li>
                        <li>Couple Retreats – Peaceful private stays away from the city noise</li>
                        <li>Bachelor Nights – Alcohol-permitted options with sound systems</li>
                        <li>Pre-Wedding Shoots – Scenic backdrops with greenery and pools</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Nearby Attractions of Dammaiguda</p>
                    <ul className='list-disc pl-5'>
                        <li>Kapra Lake – A relaxing spot for evening walks and picnics</li>
                        <li>Pocharam Dam – Great for a scenic drive and outdoor activities</li>
                        <li>Shamirpet Lake – Known for boating and birdwatching</li>
                        <li>Sainikpuri Cafes – Trendy eateries and hangouts nearby</li>
                        <li>ECIL Zone – Shopping and dining options close to the area</li>
                    </ul>

                    {/* FAQ Section */}
                    <div className="container py-6">
                        <p className="font-bold text-lg py-2">Frequently Asked Questions on Farmhouses in Dammaiguda</p>

                        <div className="mb-4">
                            <p className="font-semibold">1. What is the price range of farmhouses in Dammaiguda?</p>
                            <p>They start from around ₹5000 and go up to ₹15000 depending on the amenities and size.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">2. Are these farmhouses good for family gatherings?</p>
                            <p>Yes, most have safe lawns, pools, and kid-friendly spaces.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">3. Can I book for just one day?</p>
                            <p>Yes, Dozzy offers both 11-hour and 22-hour stay options.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">4. Are bachelor parties allowed here?</p>
                            <p>Yes, many farmhouses allow music, bonfires, and alcohol.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">5. Do these farmhouses have swimming pools?</p>
                            <p>Several listings include private pools.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">6. How far is Dammaiguda from Hyderabad?</p>
                            <p>It’s around 20–25 km, which is roughly a 40–45 minute drive.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">7. Do they include indoor games?</p>
                            <p>Yes, some farmhouses have carrom, pool tables, and table tennis.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">8. Can I bring my own food?</p>
                            <p>Yes, most farmhouses allow outside catering.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">9. Are these farmhouses good for corporate events?</p>
                            <p>Definitely, they offer lawns and halls suitable for office outings.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">10. How do I book through Dozzy?</p>
                            <p>Just visit the Dozzy app or website, choose your group size and budget, and confirm your booking instantly.</p>
                        </div>
                    </div>

                    {/* Book Your Farmhouse Section */}
                    <div>
                        <p className="font-bold text-lg py-2">Book Your Farmhouse Today</p>
                        <p>
                            Farmhouses near Dammaiguda gives you the right mix of comfort, privacy, and fun. Whether you’re
                            looking for a budget-friendly stay like a farm house for rent in Hyderabad under 5000 or planning
                            something big at the best farmhouse in Hyderabad, Dozzy makes booking simple and reliable. From
                            casual escapes to grand celebrations, you’ll find the perfect place here.
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

export default Dammaiguda

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-dammaiguda'
        : 'https://www.dozzy.com/farmhouse-rentals-in-dammaiguda'

    return {
        props: {
            canonicalUrl,
        }
    }
}
