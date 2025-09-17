import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import keesara from '@/public/hyddozzy/Keesara.webp'
import NearByFarm from './components/NearByFarm'

function Keesara({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Keesara Farmhouses - Best Rentals in Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Book farmhouses in Keesara near Hyderabad with pools, lawns, BBQ setups, and event facilities. Perfect for birthdays, family gatherings, and weekend trips." />
                <meta property="og:title" content="Keesara Farmhouses - Best Rentals in Hyderabad" />
                <meta property="og:description" content="Book farmhouses in Keesara near Hyderabad with pools, lawns, BBQ setups, and event facilities. Perfect for birthdays, family gatherings, and weekend trips." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                        Budget Friendly Farmhouse in Hyderabad, Keesara Area
                    </h1>
                </div>

                <div>
                    <Image
                        src={keesara}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouses in Keesara Hyderabad with pools and lawns"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'17.528282368867814'} lon={'78.65409303665244   '} loc={"Keesara"} />

                    <p>
                        Looking for the perfect farm stays in Hyderabad for a weekend getaway, party, or family outing?
                        Keesara is quickly becoming a popular spot for farmhouse rentals due to its serene environment,
                        open landscapes, and easy access from the city. If you want peace, privacy, and comfort, a farmhouse
                        near Keesara is an ideal choice for celebrations or quiet retreats.
                    </p>
                    <p>
                        With Dozzy, you can browse verified listings of farmhouses with clear pricing and amenities. Whether
                        you’re looking for budget-friendly options or villas with private pools and lawns, you’ll easily find the
                        right fit. Keesara also offers unique features like gardens, event spaces, and sports setups, including a
                        farm house with box cricket in Hyderabad for active group fun.
                    </p>

                    <p className='font-bold text-lg py-2'>Why Choose a Farmhouse in Keesara</p>
                    <p>
                        Keesara combines accessibility with natural beauty. Farmhouses here come with wide lawns, pools,
                        barbecue setups, and private spaces for parties or quiet stays. Whether it’s a birthday party, bachelor
                        night, corporate outing, or family gathering, there are options to fit all budgets. Many houses allow
                        music systems, bonfires, and outdoor games, making it a versatile choice for all occasions.
                    </p>

                    <p className='font-bold text-lg py-2'>Why You Can Trust Dozzy</p>
                    <ul className='list-disc pl-5'>
                        <li>Verified listings in and around Keesara</li>
                        <li>Real photos with detailed amenity descriptions</li>
                        <li>Transparent pricing with no hidden charges</li>
                        <li>Flexible 11-hour and 22-hour stay options</li>
                        <li>Amenities like private pools, lawns, BBQ setups, indoor games, and cricket courts</li>
                        <li>Options from budget stays to luxury villas</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Event-Specific Farmhouse Uses</p>
                    <ul className='list-disc pl-5'>
                        <li>Birthday Parties – Private lawns, pools, and music setups</li>
                        <li>Corporate Outings – Team-building activities with open spaces and outdoor games</li>
                        <li>Family Gatherings – Bonfires, kids play areas, and cozy event spaces</li>
                        <li>Couple Retreats – Quiet stays with full privacy, perfect for romantic getaways</li>
                        <li>Bachelor & Bachelorette Nights – Alcohol-permitted, music-friendly options</li>
                        <li>Pre-Wedding Shoots – Beautiful natural backdrops for photoshoots</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Nearby Attractions of Keesara, Hyderabad</p>
                    <ul className='list-disc pl-5'>
                        <li>Keesara Lake – Peaceful lake ideal for evening walks and picnics</li>
                        <li>Ramoji Film City – A short drive for a full-day excursion</li>
                        <li>Sanghi Temple – Hilltop temple with scenic views</li>
                        <li>Gandipet Lake – A serene getaway within driving distance</li>
                    </ul>

                    {/* FAQ Section */}
                    <div className="container py-6">
                        <p className="font-bold text-lg py-2">Frequently Asked Questions on Farmhouses in Keesara</p>

                        <div className="mb-4">
                            <p className="font-semibold">1. Can I find a private farmhouse here?</p>
                            <p>Yes. Dozzy lists several private farm houses for rent in Hyderabad options in Keesara for complete privacy.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">2. What is the price range for farmhouses in Keesara?</p>
                            <p>Most rentals start around ₹6000 for 11 hours and go up to ₹15000 for premium villas.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">3. Are these farmhouses suitable for corporate outings?</p>
                            <p>Yes. They offer open lawns, pools, and outdoor game setups for team activities.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">4. Can I book a farmhouse for just a day?</p>
                            <p>Yes. You can choose from flexible 11-hour or 22-hour booking options.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">5. Do Keesara farmhouses have swimming pools?</p>
                            <p>Many options come with private pools, especially mid-range and premium villas.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">6. Are these farmhouses family-friendly?</p>
                            <p>Yes, many are safe for children and include play areas and secure boundaries.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">7. Can we host music or party events here?</p>
                            <p>Yes, most farmhouses allow music, parties, and bonfire nights.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">8. How far is Keesara from Hyderabad city?</p>
                            <p>It’s about 25–30 km from the city center, reachable in 40–50 minutes by road.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">9. What amenities can I expect inside the farmhouse?</p>
                            <p>Furnished bedrooms, kitchen access, music systems, indoor games, pools, lawns, and farm house with box cricket in Hyderabad setups.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">10. How do I book a farmhouse in Keesara with Dozzy?</p>
                            <p>Visit the Dozzy website or app, select your date, budget, and group size, browse verified listings with real photos, and book instantly.</p>
                        </div>
                    </div>

                    {/* Book Your Farmhouse Section */}
                    <div>
                        <p className="font-bold text-lg py-2">Book Your Farmhouse Today</p>
                        <p>
                            Keesara is an ideal location for a peaceful yet accessible farmhouse near Hyderabad. From budget-friendly rentals to
                            luxury villas with pools and lawns, Dozzy makes finding the right farmhouse simple and transparent. Whether for family
                            gatherings, parties, or quiet weekends, a stay here is convenient, fun, and stress-free.
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
                            Keesara is an ideal location for a peaceful yet accessible farmhouse near Hyderabad. From budget-friendly rentals to
                            luxury villas with pools and lawns, Dozzy makes finding the right farmhouse simple and transparent. Whether for family
                            gatherings, parties, or quiet weekends, a stay here is convenient, fun, and stress-free.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Keesara

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-keesara'
        : 'https://www.dozzy.com/farmhouse-rentals-in-keesara'

    return {
        props: {
            canonicalUrl,
        }
    }
}
