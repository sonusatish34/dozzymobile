import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import shamshabad from '@/public/hyddozzy/Shamshaba.webp';
import NearByFarm from './components/NearByFarm';

function Shamshabad({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Farmhouse Rentals in & around Shamshabad, Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Find the best farmhouse in Shamshabad with pools, lawns, box cricket setups, and budget-friendly stays under ₹10,000. Perfect for parties, family gatherings, and weekend trips." />
                <meta property="og:title" content="Farmhouse Rentals in & around Shamshabad, Hyderabad" />
                <meta property="og:description" content="Find the best farmhouse in Shamshabad with pools, lawns, box cricket setups, and budget-friendly stays under ₹10,000. Perfect for parties, family gatherings, and weekend trips." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                        shamshabad
                    </h1>
                </div>

                <div>
                    <Image
                        src={shamshabad}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouse in Shamshabad Hyderabad"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'17.264097163015627'} lon={'78.3847130912515'} loc={"Shamshabad"} />

                    <p>Looking for the best farmhouse in Shamshabad to host parties, relax with friends, or enjoy a family day out? Dozzy app makes it easy to find cheap and affordable farmhouses under ₹10,000 that come with pools, lawns, and all the essentials for a private getaway.</p>

                    <p className='font-bold text-lg py-2'>Why to Choose a Farmhouse in Shamshabad</p>
                    <p>Shamshabad is one of the most convenient spots for farmhouse rentals near Hyderabad. Being close to the airport and well-connected by highways, it’s easy to reach while still giving you a peaceful break from the city. Wide open spaces, fresh air, and scenic greenery make Shamshabad farmhouses a popular choice for quick escapes.</p>
                    <p>Whether you’re planning a poolside birthday, a fun weekend with friends under ₹10,000, or a family reunion with lawn games and a bonfire, Shamshabad has the perfect setting. Many farmhouses here also allow alcohol, offer powerful sound systems for music nights, and some even have separate box cricket setups with net covering so you don’t have to chase balls around.</p>

                    <p className='font-bold text-lg py-2'>Farmhouse in Shamshabad for rent:</p>
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
                                <tr><td className="border p-2">Dozzy 1591</td><td className="border p-2">1</td><td className="border p-2">₹5000 / 11 hrs; ₹6000 / 22 hrs</td><td className="border p-2">10</td></tr>
                                <tr><td className="border p-2">Dozzy 1548</td><td className="border p-2">2</td><td className="border p-2">₹10000 / 11 hrs; ₹12000 / 22 hrs</td><td className="border p-2">15</td></tr>
                                <tr><td className="border p-2">Dozzy 1802</td><td className="border p-2">3</td><td className="border p-2">₹7000 / 11 hrs; ₹8000 / 22 hrs</td><td className="border p-2">15</td></tr>
                                <tr><td className="border p-2">Dozzy 1468</td><td className="border p-2">3</td><td className="border p-2">₹8000 / 11 hrs; ₹10000 / 22 hrs</td><td className="border p-2">20</td></tr>
                                <tr><td className="border p-2">Dozzy 1705</td><td className="border p-2">3</td><td className="border p-2">₹8000 / 11 hrs; ₹10000 / 22 hrs</td><td className="border p-2">20</td></tr>
                                <tr><td className="border p-2">Dozzy 1703</td><td className="border p-2">4</td><td className="border p-2">₹8000 / 11 hrs; ₹10000 / 22 hrs</td><td className="border p-2">15</td></tr>
                                <tr><td className="border p-2">Dozzy 1636</td><td className="border p-2">4</td><td className="border p-2">₹10000 / 11 hrs; ₹12000 / 22 hrs</td><td className="border p-2">18</td></tr>
                                <tr><td className="border p-2">Dozzy 1723</td><td className="border p-2">4</td><td className="border p-2">₹8000 / 11 hrs; ₹10000 / 22 hrs</td><td className="border p-2">20</td></tr>
                                <tr><td className="border p-2">Dozzy 1745</td><td className="border p-2">5</td><td className="border p-2">₹10000 / 11 hrs; ₹12000 / 22 hrs</td><td className="border p-2">20</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className='py-2'>We also allow you to include additional guests beyond the listed capacity at ₹400 per person, making it easier for larger groups to enjoy the farmhouse together.</p>

                    <p className='font-bold text-lg py-2'>Why You Can Trust Us</p>
                    <ul className='list-disc pl-5'>
                        <li>A wide list of farmhouses in and around Shamshabad</li>
                        <li>Filters for price, amenities, and event type</li>
                        <li>Verified listings with real photos and details</li>
                        <li>Secure and easy booking process</li>
                        <li>Options for groups of all sizes</li>
                        <li>11-hour and 22-hour stay slots for flexible planning</li>
                        <li>Budget-friendly choices for families, students, and corporate groups</li>
                        <li>Farmhouses with pools, BBQ setups, and even box cricket courts</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Farmhouse for Event-Specific Uses</p>
                    <ul className='list-disc pl-5'>
                        <li>Birthday parties with pool access, music, and private dining</li>
                        <li>Corporate team outings with big lawns for activities and games</li>
                        <li>Family gatherings with bonfire and kids-friendly open space</li>
                        <li>Couple-friendly stays for a calm weekend getaway</li>
                        <li>Bachelor or bachelorette nights with alcohol-permitted options and late-night fun</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Frequently Asked Questions on Farmhouse in Shamshabad</p>

                    <p className='font-bold text-md py-2'>1. What is the best farmhouse in Shamshabad for a group stay?</p>
                    <p>It depends on your group size and budget. Dozzy lets you filter by guest capacity, pool access, and amenities to find the best farmhouse for your group.</p>

                    <p className='font-bold text-md py-2'>2. Can I book a cheap farmhouse in Shamshabad under ₹10,000?</p>
                    <p>Yes. Dozzy lists several cheap and affordable farmhouse options under ₹10,000 with flexible booking slots for day or overnight stays.</p>

                    <p className='font-bold text-md py-2'>3. What facilities do farmhouses in Shamshabad usually offer?</p>
                    <p>Most listings include private pools, large lawns, kitchens, BBQ setups, parking, indoor games, music systems, and in some cases, box cricket grounds.</p>

                    <p className='font-bold text-md py-2'>4. Are Shamshabad farmhouses suitable for birthdays or corporate outings?</p>
                    <p>Definitely. With lawns, pools, and event-ready spaces, you can host birthday parties, corporate team outings, or family gatherings with ease.</p>

                    <p className='font-bold text-md py-2'>5. How can I book a farmhouse in Shamshabad on Dozzy?</p>
                    <p>Enter your date, budget, and group size on the Dozzy app or website. Compare listings, check real photos, and book instantly with secure payment.</p>

                    <p className='font-bold text-md py-2'>6. How far is Shamshabad from Hyderabad city?</p>
                    <p>Shamshabad is about 25–30 km from central Hyderabad and well-connected by the Outer Ring Road, making travel quick and easy.</p>

                    <p className='font-bold text-md py-2'>7. Do Shamshabad farmhouses allow alcohol and music systems?</p>
                    <p>Yes, many listings permit alcohol and provide powerful music systems. Always check house rules before booking.</p>

                    <p className='font-bold text-md py-2'>8. Are there farmhouses in Shamshabad for couples or small families?</p>
                    <p>Yes, Dozzy also lists cozy private villas and compact farmhouses that are perfect for couples and small families.</p>

                    <p className='font-bold text-md py-2'>9. Do budget farmhouses in Shamshabad also have pools?</p>
                    <p>Yes, even affordable farmhouses under ₹10,000 often come with private pools and lawns for group fun.</p>

                    <p className='font-bold text-md py-2'>10. What attractions are near Shamshabad farmhouses?</p>
                    <p>Nearby spots include Wonderla Amusement Park, Escape Water Park, and easy access to Hyderabad Airport, making it a convenient getaway location.</p>

                    <p className='font-bold text-lg py-2'>Conclusion</p>
                    <p>If you’re planning a party, weekend trip, or family outing, choosing a farmhouse in Shamshabad is one of the best options near Hyderabad. In our app, you’ll find verified farmhouses under ₹10,000 that come with pools, lawns, box cricket setups, alcohol-permitted options, and flexible 11-hour or 22-hour stays. Dozzy ensures your booking is budget-friendly, simple, and stress-free.</p>

                    <p>For Dozzy Farmhouses, download the app from the <Link className='text-blue-700 underline' href='https://play.google.com/store/apps/details?id=com.dozzy_customer'>Play Store</Link> or <Link className='text-blue-700 underline' href='https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530'>App Store</Link>, or visit the website: <a href="https://www.dozzy.com" className='text-blue-500 underline'>https://www.dozzy.com</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default Shamshabad;

export async function getServerSideProps({ req }) {
    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-shamshabad'
        : 'https://www.dozzy.com/farmhouse-rentals-in-shamshabad';

    return {
        props: {
            canonicalUrl: canonicalUrl,
        }
    };
}
