import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import shankarpally from '@/public/hyddozzy/Shankarpally.webp'
import NearByFarm from './components/NearByFarm'

function Shankarpally({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Shankarpally Farmhouses - Best Rentals in Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Farmhouse rentals in Shankarpally Hyderabad with pools, lawns, BBQ setups, and event spaces. Perfect for birthdays, corporate outings, and weekend trips." />
                <meta property="og:title" content="Shankarpally Farmhouses - Best Rentals in Hyderabad" />
                <meta property="og:description" content="Farmhouse rentals in Shankarpally Hyderabad with pools, lawns, BBQ setups, and event spaces. Perfect for birthdays, corporate outings, and weekend trips." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                        Farmhouses with Pool in Shankarpally, Hyderabad
                    </h1>
                </div>

                <div>
                    <Image
                        src={shankarpally}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouses in Shankarpally Hyderabad with pools and lawns"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'17.45540322289383'} lon={'78.13223845236956'} loc={"Shankarpally"} />
 
                    <p>
                        Looking for a relaxing yet lively escape from the city? A farmhouse in Shankarpally is one of the top
                        picks for parties, private stays, and family gatherings. With wide green spaces, scenic surroundings,
                        and great connectivity to the ORR, Shankarpally has become a favorite spot for those who want the
                        best farm house Hyderabad offers without going too far.
                    </p>
                    <p>
                        With Dozzy, you can browse verified listings of farmhouse in Hyderabad with price details clearly
                        shown. From budget-friendly options to premium villas with pools, lawns, and outdoor setups,
                        Shankarpally farmhouses are a perfect match for all occasions.
                    </p>

                    <p className='font-bold text-lg py-2'>Why Choose a Farmhouse in Shankarpally</p>
                    <p>
                        Shankarpally is popular because it balances nature and accessibility. Just a short drive from
                        Gachibowli and Financial District, this area has become a go-to for weekend trips and events.
                        Whether you’re hosting a birthday party, a bachelor night, a corporate team outing, or a family
                        celebration, you’ll find everything from budget rentals to the best farm house Hyderabad offers for
                        luxury gatherings.
                    </p>
                    <p>
                        Most Shankarpally farmhouses come with swimming pools, BBQ areas, large lawns, and sound
                        systems. Some also allow alcohol and provide open spaces for cricket, football, or bonfires. If you’re
                        looking for a farm house for rent in Hyderabad under 10000, Shankarpally has plenty of good
                        choices.
                    </p>

                    <p className='font-bold text-lg py-2'>Top Farmhouses for Rent in Hyderabad (Shankarpally Area)</p>
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
                                <tr><td className="border p-2">Dozzy 1700</td><td className="border p-2">3</td><td className="border p-2">₹9000 / 11 hrs ; ₹10000 / 22 hrs</td><td className="border p-2">15</td></tr>
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
                        <li>Flexible 11-hour and 22-hour booking slots</li>
                        <li>Transparent farmhouse in Shankarpally with price details upfront</li>
                        <li>Options ranging from budget stays to premium villas with pools and lawns</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Event-Specific Farmhouses</p>
                    <ul className='list-disc pl-5'>
                        <li>Birthday Parties – Pools, lawns, and music-ready setups</li>
                        <li>Corporate Outings – Outdoor team activities with spacious seating areas</li>
                        <li>Family Gatherings – Kid-friendly play areas, bonfires, and cozy spaces</li>
                        <li>Couple-Friendly Stays – Peaceful retreats surrounded by greenery</li>
                        <li>Bachelor & Bachelorette Nights – Alcohol-permitted stays with sound systems</li>
                        <li>Pre-Wedding Shoots – Scenic farmhouse backdrops with wide lawns and open skies</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Nearby Attractions of Shankarpally, Hyderabad</p>
                    <ul className='list-disc pl-5'>
                        <li>Gandipet Lake (Osman Sagar) – Great for boating and picnics</li>
                        <li>Mrugavani National Park – A wildlife sanctuary filled with deer and birds</li>
                        <li>Chilkur Balaji Temple – Known as the “Visa Balaji Temple”</li>
                        <li>Ananthagiri Hills – Famous for trekking, camping, and road trips</li>
                        <li>Financial District (Gachibowli) – Just a short drive away, making it super accessible</li>
                    </ul>

                    {/* FAQ Section */}
                    <div className="container py-6">
                        <p className="font-bold text-lg py-2">Frequently Asked Questions on Farmhouses in Shankarpally</p>

                        <div className="mb-4">
                            <p className="font-semibold">1. Can I find a farm house in Shankarpally under ₹10000?</p>
                            <p>Yes, several farmhouses in Shankarpally are available under ₹10000, ideal for small groups, birthday parties, or day events.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">2. What is the price range for a farmhouse in Shankarpally?</p>
                            <p>Most farmhouses start at around ₹8000 for 11-hour slots and can go up to ₹15000 for luxury villas with pools and lawns.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">3. Are Shankarpally farmhouses good for parties?</p>
                            <p>Absolutely. With private pools, lawns, and music setups, they are popular choices for birthdays, bachelor parties, and family gatherings.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">4. Which is the best farm house Hyderabad offers in Shankarpally?</p>
                            <p>The best option depends on your group size and budget. You can filter listings on Dozzy by amenities, capacity, and price to find the right match.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">5. How do I book a farmhouse in Shankarpally?</p>
                            <p>Booking is easy. Enter your date, group size, and budget on the Dozzy website or app, check real photos and details, and confirm instantly.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">6. How far is Shankarpally from Hyderabad city?</p>
                            <p>Shankarpally is about 35 km from Hyderabad and usually takes around 45 minutes to 1 hour by road.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">7. Do farmhouses in Shankarpally allow alcohol and outside catering?</p>
                            <p>Yes, most listings allow alcohol and outside food, but it’s always best to confirm the house rules before booking.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">8. Are there farmhouses in Shankarpally suitable for corporate outings?</p>
                            <p>Yes. Many come with open lawns, indoor halls, and games like cricket or volleyball, making them ideal for office team events.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">9. Can I book a farmhouse in Shankarpally for just one day?</p>
                            <p>Yes, flexible rental options are available, including 11-hour day packages and 22-hour overnight stays.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">10. What are some attractions near Shankarpally farmhouses?</p>
                            <p>Nearby spots include Chilkur Balaji Temple, Mrugavani National Park, and Gandipet Lake, making it a convenient weekend getaway.</p>
                        </div>
                    </div>

                    {/* Book Your Farmhouse Section */}
                    <div>
                        <p className="font-bold text-lg py-2">Book Your Farmhouse Today</p>
                        <p>
                            If you’re looking for a scenic yet accessible spot near Hyderabad, Shankarpally is one of the best
                            choices for farmhouse rentals. From farm house for rent in Hyderabad under 10000 to luxury villas
                            with pools and lawns, you’ll find everything here. With Dozzy, booking your farmhouse is easy,
                            transparent, and hassle-free.
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
                            If you’re looking for a scenic yet accessible spot near Hyderabad, Shankarpally is one of the best
                            choices for farmhouse rentals. From budget stays under ₹10000 to luxury villas with pools and lawns,
                            Dozzy gives you verified listings to choose from. Booking is quick, reliable, and stress-free.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shankarpally

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-shankarpally'
        : 'https://www.dozzy.com/farmhouse-rentals-in-shankarpally'

    return {
        props: {
            canonicalUrl,
        }
    }
}
