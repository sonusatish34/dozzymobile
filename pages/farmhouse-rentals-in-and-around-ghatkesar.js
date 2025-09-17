import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import ghatkesar from '@/public/hyddozzy/Ghatkesar.webp'
import NearByFarm from './components/NearByFarm'

function Ghatkesar({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Ghatkesar Farmhouses - Best Rentals in Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Affordable farmhouse rentals in Ghatkesar near Hyderabad with pools, lawns, BBQ setups, and event-ready spaces. Perfect for parties, family outings, and weekend trips." />
                <meta property="og:title" content="Ghatkesar Farmhouses - Best Rentals in Hyderabad" />
                <meta property="og:description" content="Affordable farmhouse rentals in Ghatkesar near Hyderabad with pools, lawns, BBQ setups, and event-ready spaces. Perfect for parties, family outings, and weekend trips." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                       Affordable Farmhouses for rent in Ghatkesar, Hyderabad
                    </h1>
                </div>

                <div>
                    <Image
                        src={ghatkesar}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouses in Ghatkesar Hyderabad with pools and lawns"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                                        <NearByFarm lat={'17.45089969059221'} lon={'78.68184931094207'} loc={"Ghatkesar"} />
                    <p>
                        If you’re looking for a peaceful yet well-connected escape, renting a Ghatkesar farmhouse is a perfect 
                        choice. Located along the Warangal Highway and just a short drive from Hyderabad, Ghatkesar is 
                        known for its clean air, scenic lakes, and open landscapes. It has become a favourite weekend spot 
                        for families, youngsters, and corporate groups who want to celebrate in privacy while staying close to 
                        the city. The area also offers smooth access through the Outer Ring Road, making travel quick and 
                        hassle-free.
                    </p>
                    <p>
                        Choosing a farmhouse near Ghatkesar means you don’t just get a stay – you get an experience. 
                        Farmhouses here come with large lawns, private pools, indoor and outdoor games, and cozy setups 
                        for bonfire nights. Whether you’re planning a birthday bash, a bachelor party, or a simple family 
                        outing, these farmhouses balance comfort and entertainment. Many even have BBQ setups, 
                        powerful music systems, and alcohol-permitted spaces, making them ideal for both casual and grand 
                        celebrations.
                    </p>

                    <p className='font-bold text-lg py-2'>Top Farmhouses for Rent in Hyderabad (Ghatkesar Area)</p>
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
                                <tr><td className="border p-2">Dozzy 1643</td><td className="border p-2">1</td><td className="border p-2">₹5000 / 11 hrs ; ₹6000 / 22 hrs</td><td className="border p-2">-</td></tr>
                                <tr><td className="border p-2">Dozzy 1725</td><td className="border p-2">1</td><td className="border p-2">₹5000 / 11 hrs ; ₹6000 / 22 hrs</td><td className="border p-2">6</td></tr>
                                <tr><td className="border p-2">Dozzy 1795</td><td className="border p-2">1</td><td className="border p-2">₹6000 / 11 hrs ; ₹8000 / 22 hrs</td><td className="border p-2">12</td></tr>
                                <tr><td className="border p-2">Dozzy 1697</td><td className="border p-2">3</td><td className="border p-2">₹7000 / 11 hrs ; ₹9000 / 22 hrs</td><td className="border p-2">12</td></tr>
                                <tr><td className="border p-2">Dozzy 1671</td><td className="border p-2">3</td><td className="border p-2">₹8000 / 11 hrs ; ₹10000 / 22 hrs</td><td className="border p-2">15</td></tr>
                                <tr><td className="border p-2">Dozzy 1550</td><td className="border p-2">4</td><td className="border p-2">₹10000 / 11 hrs ; ₹12000 / 22 hrs</td><td className="border p-2">20</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className='py-2'>
                        We also allow you to include additional guests beyond the listed capacity at ₹400 per person, making 
                        it easier for larger groups to enjoy the farmhouse together.
                    </p>

                    <p className='font-bold text-lg py-2'>Why You Can Trust Dozzy</p>
                    <ul className='list-disc pl-5'>
                        <li>Verified listings with real photos and amenities</li>
                        <li>Flexible booking slots (11 hours and 22 hours)</li>
                        <li>Transparent pricing with no hidden charges</li>
                        <li>Options from budget stays to premium villas with lawns and pools</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Event-Specific Farmhouses</p>
                    <ul className='list-disc pl-5'>
                        <li>Birthday Parties – Pools, lawns and private setups</li>
                        <li>Corporate Outings – Spacious outdoor areas and team games</li>
                        <li>Family Gatherings – Bonfires, kids play zones and large dining areas</li>
                        <li>Couple-Friendly Stays – Private retreats with complete privacy</li>
                        <li>Bachelor & Bachelorette Nights – Music, alcohol-permitted options and fun until late</li>
                        <li>Pre-Wedding Shoots – Scenic farmhouse backdrops and greenery</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Nearby Attractions of Ghatkesar, Hyderabad</p>
                    <ul className='list-disc pl-5'>
                        <li>Keesaragutta Temple – A famous Shiva temple surrounded by hills</li>
                        <li>Ramoji Film City – A must-visit for entertainment and themed experiences</li>
                        <li>Pocharam Reservoir – Great for nature lovers and peaceful walks</li>
                        <li>Yadagirigutta Temple – A scenic spiritual spot, perfect for a short trip</li>
                    </ul>

                    {/* FAQ Section */}
                    <div className="container py-6">
                        <p className="font-bold text-lg py-2">Frequently Asked Questions on Farmhouses in Ghatkesar</p>

                        <div className="mb-4">
                            <p className="font-semibold">1. Can I book a farmhouse with pool in Ghatkesar?</p>
                            <p>Yes, several farmhouses in Ghatkesar include private pools, making them perfect for parties, family stays, and weekend relaxation.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">2. What is the price range of farmhouses in Ghatkesar?</p>
                            <p>Most farmhouses range from ₹8000 to ₹15000 depending on amenities, capacity, and duration of stay.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">3. Is Ghatkesar a good spot for weekend trips?</p>
                            <p>Absolutely. With lakes, temples, and quick access through the Outer Ring Road, it’s a top choice for weekend getaways.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">4. How do I book a farmhouse near Ghatkesar?</p>
                            <p>You can browse verified listings on Dozzy, compare photos and prices, and book instantly with secure payment options.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">5. Are farmhouses in Ghatkesar suitable for birthdays and events?</p>
                            <p>Yes, most farmhouses come with lawns, music systems, and event setups ideal for birthdays, anniversaries, and private parties.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">6. Do farmhouses in Ghatkesar allow alcohol and catering?</p>
                            <p>Many listings allow alcohol and outside catering, but it’s best to check the property rules before booking.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">7. How far is Ghatkesar from Hyderabad city?</p>
                            <p>Ghatkesar is about 25 km from Hyderabad and can be reached in 30–40 minutes by road.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">8. Are there budget-friendly farmhouses in Ghatkesar under ₹10000?</p>
                            <p>Yes, there are multiple budget options under ₹10000 that include pools, lawns, and basic amenities for small groups.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">9. Are Ghatkesar farmhouses safe for families with kids?</p>
                            <p>Definitely. Most farmhouses are gated, secure, and include lawns and play areas where kids can enjoy safely.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">10. What attractions are near farmhouses in Ghatkesar?</p>
                            <p>Nearby spots include Shamirpet Lake, Ramoji Film City, and local temples, making it a great location for short trips.</p>
                        </div>
                    </div>

                    {/* Book Your Farmhouse Section */}
                    <div>
                        <p className="font-bold text-lg py-2">Book Your Farmhouse Today</p>
                        <p>
                            A Ghatkesar farmhouse gives you the perfect balance of nature, privacy, and comfort for your next 
                            getaway. Whether it’s a party, family outing, or corporate trip, booking through Dozzy ensures you 
                            get the right farmhouse at the right price without any hassle.
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
                            A Ghatkesar farmhouse gives you the perfect balance of nature, privacy, and comfort for your next 
                            getaway. Whether it’s a party, family outing, or corporate trip, booking through Dozzy ensures you 
                            get the right farmhouse at the right price without any hassle.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ghatkesar

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-ghatkesar'
        : 'https://www.dozzy.com/farmhouse-rentals-in-ghatkesar'

    return {
        props: {
            canonicalUrl,
        }
    }
}
