import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import manneguda from '@/public/hyddozzy/Manneguda.webp'
import NearByFarm from './components/NearByFarm'

function Manneguda({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Manneguda Farmhouses - Best Rentals in Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Book farmhouses in Manneguda near Hyderabad with pools, lawns, BBQ setups, and event facilities. Perfect for birthdays, family gatherings, and weekend trips." />
                <meta property="og:title" content="Manneguda Farmhouses - Best Rentals in Hyderabad" />
                <meta property="og:description" content="Book farmhouses in Manneguda near Hyderabad with pools, lawns, BBQ setups, and event facilities. Perfect for birthdays, family gatherings, and weekend trips." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                        Farmhouses for Events in Manneguda, Hyderabad
                    </h1>
                </div>

                <div>
                    <Image
                        src={manneguda}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouses in Manneguda Hyderabad with pools and lawns"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'17.255267750111347'} lon={'78.5847258745441'} loc={"Manneguda"} />

                    <p>
                        If you’re searching for a peaceful and private getaway, farmhouse near Manneguda offers just the
                        right balance of greenery, open spaces, and easy access from Hyderabad city. Whether it’s a weekend
                        celebration, a birthday party, or a simple family retreat, farmhouses here give you the comfort of
                        privacy along with modern amenities.
                    </p>
                    <p>
                        With Dozzy, you can explore verified listings that range from budget stays to premium villas. From
                        compact spaces to spacious retreats with lawns and pools, there are options for every type of
                        gathering. If you’re planning a small get-together, you can even find a farm house for rent in
                        Hyderabad under 5000, while larger groups can enjoy luxury stays like a farmhouse in Hyderabad under
                        10000 with expansive amenities. Whatever your occasion, Dozzy helps you discover the best farm house
                        Hyderabad has to offer in this region.
                    </p>

                    <p className='font-bold text-lg py-2'>Why Choose a Farmhouse in Manneguda</p>
                    <p>Manneguda is known for its natural surroundings, open skies, and peaceful charm. Just a short drive
                        from the city, it gives you the perfect chance to relax without the noise of urban life. Farmhouses
                        here include features like:
                    </p>
                    <ul className='list-disc pl-5'>
                        <li>Private swimming pools</li>
                        <li>Spacious lawns for games and events</li>
                        <li>Bonfire and barbecue setups</li>
                        <li>Indoor game rooms</li>
                        <li>Music systems for parties</li>
                        <li>Outdoor spaces for cricket, football, and badminton</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Top Farmhouses for Rent in Hyderabad (Manneguda Area)</p>
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
                                    <td className="border p-2">Dozzy 1860</td>
                                    <td className="border p-2">3</td>
                                    <td className="border p-2">₹13000 / 11 hrs ; ₹15000 / 22 hrs</td>
                                    <td className="border p-2">18</td>
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
                        <li>Verified listings with real photos</li>
                        <li>Transparent pricing with no hidden fees</li>
                        <li>Flexible 11-hour and 22-hour booking options</li>
                        <li>Options from budget-friendly rentals to premium villas</li>
                        <li>Amenities like pools, outdoor sports areas, bonfire setups, and music systems</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Event-Specific Farmhouse Uses</p>
                    <ul className='list-disc pl-5'>
                        <li>Birthday Parties – Music, pool, and lawn setups for celebrations</li>
                        <li>Corporate Team Outings – Outdoor games and event-friendly spaces</li>
                        <li>Family Gatherings – Safe, cozy setups with bonfires and kids’ play areas</li>
                        <li>Couple Retreats – Private stays surrounded by greenery</li>
                        <li>Bachelor Nights – Spacious, alcohol-permitted farmhouses with music</li>
                        <li>Pre-Wedding Shoots – Scenic backdrops and open landscapes</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Nearby Attractions of Manneguda</p>
                    <ul className='list-disc pl-5'>
                        <li>Manneguda Forest Area – A green escape for nature lovers</li>
                        <li>Ramoji Film City – A fun day trip, just a short drive away</li>
                        <li>Sanghi Temple – Hilltop temple with panoramic views</li>
                        <li>Ibrahimpatnam Lake – Calm lake for an evening outing</li>
                        <li>Pedda Amberpet Lake – A nearby nature spot perfect for walks and picnics</li>
                    </ul>

                    {/* FAQ Section */}
                    <div className="container py-6">
                        <p className="font-bold text-lg py-2">Frequently Asked Questions on Farmhouses in Manneguda</p>

                        <div className="mb-4">
                            <p className="font-semibold">1. What is the price range of farmhouses in Manneguda?</p>
                            <p>Prices start at ₹5000 for smaller rentals and go up to ₹15000 for premium villas.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">2. Can I book a farmhouse for just one day?</p>
                            <p>Yes, Dozzy offers flexible 11-hour and 22-hour stay options.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">3. Are farmhouses in Manneguda suitable for families?</p>
                            <p>Yes, many farmhouses are family-friendly with play areas and safe boundaries.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">4. Do these farmhouses have swimming pools?</p>
                            <p>Yes, several listings include private pools.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">5. Are they good for corporate team outings?</p>
                            <p>Absolutely. Spacious lawns and outdoor setups make them ideal for team activities.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">6. Can I host a bachelor party here?</p>
                            <p>Yes, many farmhouses allow music, bonfires, and alcohol for private events.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">7. How far is Manneguda from Hyderabad?</p>
                            <p>It is about 35–40 km from the city, easily reachable within an hour’s drive.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">8. What amenities are usually included?</p>
                            <p>Swimming pools, barbecue areas, lawns, indoor games, outdoor sports courts, and furnished living spaces.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">9. Can I bring my own food and drinks?</p>
                            <p>Yes, most farmhouses allow outside food and drinks.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">10. How do I book with Dozzy?</p>
                            <p>You can book instantly through the Dozzy website or app by choosing your date, budget, and group size.</p>
                        </div>
                    </div>

                    {/* Book Your Farmhouse Section */}
                    <div>
                        <p className="font-bold text-lg py-2">Book Your Farmhouse Today</p>
                        <p>
                            Manneguda is one of the best places near Hyderabad for a farmhouse stay. From budget-friendly
                            properties to premium villas with pools and lawns, Dozzy makes it easy to find the right fit. Whether
                            it’s a family gathering, party, or quiet retreat, booking a farmhouse here is simple, transparent, and
                            stress-free.
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
                            Manneguda is one of the best places near Hyderabad for a farmhouse stay. From budget-friendly
                            properties to premium villas with pools and lawns, Dozzy makes it easy to find the right fit. Whether
                            it’s a family gathering, party, or quiet retreat, booking a farmhouse here is simple, transparent, and
                            stress-free.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manneguda

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-manneguda'
        : 'https://www.dozzy.com/farmhouse-rentals-in-manneguda'

    return {
        props: {
            canonicalUrl,
        }
    }
}
