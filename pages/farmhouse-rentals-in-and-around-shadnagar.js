import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import shadnagar from '@/public/hyddozzy/Shadnagar.webp'
import NearByFarm from './components/NearByFarm'

function Shadnagar({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Shadnagar Farmhouses - Best Rentals in Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Book farmhouses in Shadnagar near Hyderabad with pools, lawns, BBQ setups, and event spaces. Perfect for birthdays, family gatherings, and weekend trips." />
                <meta property="og:title" content="Shadnagar Farmhouses - Best Rentals in Hyderabad" />
                <meta property="og:description" content="Book farmhouses in Shadnagar near Hyderabad with pools, lawns, BBQ setups, and event spaces. Perfect for birthdays, family gatherings, and weekend trips." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                       Farmhouses for Small Events in Hyderabad, Shadnagar Area
                    </h1>
                </div>
                <div>
                    <Image
                        src={shadnagar}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouses in Shadnagar Hyderabad with pools and lawns"
                        loading='lazy'
                    />
                </div>
                <div className='lg:px-20 px-4'>
                <NearByFarm lat={'17.071582677448355'} lon={'78.20482252996761'} loc={"shadnagar"} />
                    <p>
                        Looking for the best farmhouse in Hyderabad for a private getaway, party, or family outing? 
                        Shadnagar is quickly becoming a favourite spot for farmhouses due to its peaceful surroundings, 
                        greenery, and easy accessibility from the city. If you want to escape the hustle and bustle, a 
                        farmhouse in Hyderabad near Shadnagar is perfect for celebrations, weekend retreats, or quiet stays.
                    </p>
                    <p>
                        With Dozzy, you can browse verified listings of farm houses Hyderabad offers, including budget-friendly 
                        options and premium villas with private pools, large lawns, and event spaces. Whether you’re planning 
                        a birthday, corporate outing, or family gathering, Shadnagar has something for everyone.
                    </p>

                    <p className='font-bold text-lg py-2'>Why Choose a Farmhouse in Shadnagar</p>
                    <p>
                        Shadnagar offers a balance of natural beauty and accessibility. Farmhouses here feature wide lawns, 
                        pools, barbecue setups, and spaces for parties or quiet retreats. Whether it’s a birthday party, 
                        bachelor night, corporate outing, or family gathering, you can find options that fit every budget. 
                        Many farmhouses also allow music systems, bonfires, and outdoor sports, making them suitable for group fun.
                    </p>

                    <p className='font-bold text-lg py-2'>Top Farmhouses for Rent in Hyderabad (Shadnagar Area)</p>
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
                                <tr><td className="border p-2">Dozzy 1853</td><td className="border p-2">2</td><td className="border p-2">₹5000 / 11 hrs ; ₹6000 / 22 hrs</td><td className="border p-2">-</td></tr>
                                <tr><td className="border p-2">Dozzy 1704</td><td className="border p-2">7</td><td className="border p-2">₹9000 / 11 hrs ; ₹10000 / 22 hrs</td><td className="border p-2">20</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className='py-2'>
                        We also allow you to include extra guests beyond the listed capacity at ₹400 per person, making it 
                        easier for larger groups to enjoy the farmhouse together.
                    </p>

                    <p className='font-bold text-lg py-2'>Why You Can Trust Dozzy</p>
                    <ul className='list-disc pl-5'>
                        <li>Verified farm houses Hyderabad listings with real photos</li>
                        <li>Transparent pricing with no hidden charges</li>
                        <li>Flexible 11-hour and 22-hour booking options</li>
                        <li>Amenities like private pools, lawns, barbecue setups, indoor games, and cricket courts</li>
                        <li>Options ranging from budget stays to luxury villas</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Event-Specific Farmhouse Uses</p>
                    <ul className='list-disc pl-5'>
                        <li>Birthday Parties – Private lawns, pools, and music setups</li>
                        <li>Corporate Outings – Team-building activities with outdoor games and open spaces</li>
                        <li>Family Gatherings – Bonfires, kids’ play areas, and cozy dining setups</li>
                        <li>Couple Retreats – Quiet and private stays for couples</li>
                        <li>Bachelor & Bachelorette Nights – Alcohol-permitted and music-friendly options</li>
                        <li>Pre-Wedding Shoots – Green backdrops and scenic farmhouses for photography</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Nearby Attractions of Shadnagar</p>
                    <ul className='list-disc pl-5'>
                        <li>Shadnagar Lake – Calm lake ideal for evening walks and picnics</li>
                        <li>Ramoji Film City – Perfect for a day trip and sightseeing</li>
                        <li>Sanghi Temple – Hilltop temple with scenic views</li>
                        <li>Pedda Amberpet Lake – Short drive for a quiet outing</li>
                    </ul>

                    {/* FAQ Section */}
                    <div className="container py-6">
                        <p className="font-bold text-lg py-2">Frequently Asked Questions on Farmhouses in Shadnagar</p>

                        <div className="mb-4">
                            <p className="font-semibold">1. What is the average price of a farmhouse in Shadnagar?</p>
                            <p>Prices range from ₹6000 for 11 hours to ₹15000 for premium villas.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">2. Are Shadnagar farmhouses family-friendly?</p>
                            <p>Yes, many are safe for children, with play areas and secure boundaries.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">3. Can I book a farmhouse for a single day?</p>
                            <p>Yes, you can book flexible 11-hour or 22-hour stays.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">4. Do these farmhouses have swimming pools?</p>
                            <p>Many mid-range and premium villas include private pools.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">5. Are they suitable for corporate outings?</p>
                            <p>Absolutely. They offer open lawns, event spaces, and outdoor games for teams.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">6. Can I host parties or music events?</p>
                            <p>Yes, most farmhouses allow music, bonfires, and celebrations.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">7. How far is Shadnagar from Hyderabad city?</p>
                            <p>It is around 35 km from the city center, accessible in about 50–60 minutes by road.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">8. What amenities are included in the farmhouse?</p>
                            <p>Furnished bedrooms, kitchen access, music systems, pools, lawns, indoor games, and outdoor sports setups.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">9. Can I bring my own food and drinks?</p>
                            <p>Yes, most farmhouses allow outside food and drinks; some also permit alcohol.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">10. How do I book a farmhouse in Shadnagar with Dozzy?</p>
                            <p>Simply visit the Dozzy website or app, select your dates, budget, and group size, view real photos, and book instantly.</p>
                        </div>
                    </div>

                    {/* Book Your Farmhouse Section */}
                    <div>
                        <p className="font-bold text-lg py-2">Book Your Farmhouse Today</p>
                        <p>
                            Shadnagar is one of the best locations for a peaceful yet accessible farmhouse stays near Hyderabad. 
                            From budget-friendly rentals to luxury villas with pools and lawns, Dozzy helps you find the best 
                            farmhouse in Hyderabad for any occasion. Whether it’s a party, family gathering, or quiet retreat, 
                            booking here is simple, transparent, and stress-free.
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
                            Shadnagar is one of the best locations for a peaceful yet accessible farmhouse stays near Hyderabad. 
                            From budget-friendly rentals to luxury villas with pools and lawns, Dozzy helps you find the best 
                            farmhouse in Hyderabad for any occasion. Whether it’s a party, family gathering, or quiet retreat, 
                            booking here is simple, transparent, and stress-free.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shadnagar

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-shadnagar'
        : 'https://www.dozzy.com/farmhouse-rentals-in-shadnagar'

    return {
        props: {
            canonicalUrl,
        }
    }
}
