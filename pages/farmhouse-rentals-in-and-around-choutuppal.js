import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import choutuppal from '@/public/hyddozzy/Choutuppal.webp'
import NearByFarm from './components/NearByFarm'

function Choutuppal({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Choutuppal Farmhouses - Best Rentals in Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Book farmhouses in Choutuppal near Hyderabad with pools, lawns, BBQ setups, and event facilities. Perfect for birthdays, family gatherings, and weekend trips." />
                <meta property="og:title" content="Choutuppal Farmhouses - Best Rentals in Hyderabad" />
                <meta property="og:description" content="Book farmhouses in Choutuppal near Hyderabad with pools, lawns, BBQ setups, and event facilities. Perfect for birthdays, family gatherings, and weekend trips." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                        Luxury Farmhouse Rentals in Hyderabad, Choutuppal Area
                    </h1>
                </div>

                <div>
                    <Image
                        src={choutuppal}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouses in Choutuppal Hyderabad with pools and lawns"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'17.249466555544746'} lon={'78.89539125853271'} loc={"Choutuppal"} />
                    <p>
                        Looking for a relaxing getaway or a private celebration? Choutuppal has become one of the sought-after
                        locations for farmhouse near Choutuppal, offering calm surroundings, greenery, and convenient access from
                        Hyderabad city. Whether it’s a weekend trip, birthday party, or family outing, this area is ideal for those
                        looking for comfort and privacy.
                    </p>
                    <p>
                        With Dozzy, you can explore verified listings of farmhouse in Hyderabad under 10000, from budget-friendly
                        options to luxury villas with private pools and large lawns. Even if you’re on a tight budget, there are
                        listings like farm house for rent in Hyderabad under 5000, perfect for small groups or casual day trips. For
                        larger gatherings, premium spaces are also available, making it one of the best spots for a best farm house
                        Hyderabad experience.
                    </p>

                    <p className='font-bold text-lg py-2'>Why Choose a Farmhouse in Choutuppal</p>
                    <p>
                        Choutuppal combines peaceful countryside vibes with easy connectivity to Hyderabad. Farmhouses here come
                        with spacious lawns, swimming pools, barbecue setups, and open spaces for parties or relaxation. Whether
                        you’re celebrating a birthday, organizing a corporate outing, or enjoying a family weekend, there’s a farmhouse
                        to suit every need. Many properties also include music setups, outdoor games, and bonfire facilities.
                    </p>

                    <p className='font-bold text-lg py-2'>Top Farmhouses for Rent in Hyderabad (Choutuppal Area)</p>
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
                                    <td className="border p-2">Dozzy 1755</td>
                                    <td className="border p-2">5</td>
                                    <td className="border p-2">₹9000 / 11 hrs ; ₹10000 / 22 hrs</td>
                                    <td className="border p-2">25</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className='py-2'>
                        We also allow you to include additional guests beyond the listed capacity at ₹400 per person, making it
                        easier for larger groups to enjoy the farmhouse together.
                    </p>

                    <p className='font-bold text-lg py-2'>Why You Can Trust Dozzy</p>
                    <ul className='list-disc pl-5'>
                        <li>Verified farm house for rent in Hyderabad under 5000 listings with real photos</li>
                        <li>Transparent pricing with no hidden charges</li>
                        <li>Flexible 11-hour and 22-hour stay options</li>
                        <li>Amenities like private pools, lawns, barbecue setups, indoor games, and outdoor sports</li>
                        <li>Options ranging from budget stays to luxury villas</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Event-Specific Farmhouse Uses</p>
                    <ul className='list-disc pl-5'>
                        <li>Birthday Parties – Private lawns, pools, and music setups</li>
                        <li>Corporate Outings – Team-building activities with open spaces and outdoor games</li>
                        <li>Family Gatherings – Bonfires, kids’ play areas, and cozy event setups</li>
                        <li>Couple Retreats – Quiet, private stays for relaxation</li>
                        <li>Bachelor & Bachelorette Nights – Alcohol-permitted and music-friendly options</li>
                        <li>Pre-Wedding Shoots – Natural backdrops and scenic farmhouses</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Nearby Attractions of Choutuppal</p>
                    <ul className='list-disc pl-5'>
                        <li>Choutuppal Lake – Peaceful spot for evening walks and picnics</li>
                        <li>Ramoji Film City – A short drive away for sightseeing and fun</li>
                        <li>Sanghi Temple – Hilltop temple with panoramic views</li>
                        <li>Shamirpet Lake – Nature escape with boating and birdwatching</li>
                        <li>Pedda Amberpet Lake – Another serene getaway within driving distance</li>
                    </ul>

                    {/* FAQ Section */}
                    <div className="container py-6">
                        <p className="font-bold text-lg py-2">Frequently Asked Questions on Farmhouses in Choutuppal</p>

                        <div className="mb-4">
                            <p className="font-semibold">1. Can I find a private farmhouse here?</p>
                            <p>Yes. Dozzy offers several farmhouses near Choutuppal options suitable for full privacy.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">2. What is the price range for farmhouses in Choutuppal?</p>
                            <p>Prices range from ₹5000 for 11 hours to ₹15000 for premium villas.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">3. Are these farmhouses family-friendly?</p>
                            <p>Yes, many are safe for children and include play areas and secure boundaries.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">4. Can I book a farmhouse for just a day?</p>
                            <p>Yes, flexible 11-hour and 22-hour options are available.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">5. Do these farmhouses have swimming pools?</p>
                            <p>Yes, mid-range and premium villas typically include private pools.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">6. Are these farmhouses good for corporate outings?</p>
                            <p>Absolutely. They have open lawns, event spaces, and outdoor games for teams.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">7. Can I host music or party events?</p>
                            <p>Yes, most farmhouses allow music, bonfires, and celebrations.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">8. How far is Choutuppal from Hyderabad city?</p>
                            <p>It’s about 45 km from the city, reachable in roughly 60–70 minutes by road.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">9. What amenities are included?</p>
                            <p>Furnished bedrooms, kitchen access, music systems, indoor games, pools, lawns, and barbecue setups.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">10. How do I book a farmhouse in Choutuppal with Dozzy?</p>
                            <p>Visit the Dozzy website or app, select your dates, budget, and group size, browse verified photos, and book instantly.</p>
                        </div>
                    </div>

                    {/* Book Your Farmhouse Section */}
                    <div>
                        <p className="font-bold text-lg py-2">Book Your Farmhouse Today</p>
                        <p>
                            Choutuppal is an ideal location for a peaceful and accessible farmhouse getaway near Hyderabad.
                            From budget-friendly stays to premium villas, Dozzy helps you find a farmhouse in Hyderabad under
                            10000 or even a farm house for rent in Hyderabad under 5000, making it easy to enjoy a best farm
                            house Hyderabad experience. Whether for family, friends, or a quiet weekend, booking here is
                            simple, transparent, and stress-free.
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
                            Choutuppal is an ideal location for a peaceful and accessible farmhouse getaway near Hyderabad.
                            From budget-friendly stays to premium villas, Dozzy helps you find a farmhouse in Hyderabad under
                            10000 or even a farm house for rent in Hyderabad under 5000, making it easy to enjoy a best farm
                            house Hyderabad experience. Whether for family, friends, or a quiet weekend, booking here is
                            simple, transparent, and stress-free.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choutuppal

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-choutuppal'
        : 'https://www.dozzy.com/farmhouse-rentals-in-choutuppal'

    return {
        props: {
            canonicalUrl,
        }
    }
}
