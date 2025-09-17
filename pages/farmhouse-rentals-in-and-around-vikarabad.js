import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import vikarabad from '@/public/hyddozzy/Vikarabad.webp'
import NearByFarm from './components/NearByFarm';

function Vikarabad({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Farmhouse Rentals in & around Vikarabad, Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Book farmhouses in Vikarabad with pools, lawns, BBQ setups, and scenic Ananthagiri Hills views. Affordable prices starting under ₹5000." />
                <meta property="og:title" content="Farmhouse Rentals in & around Vikarabad, Hyderabad" />
                <meta property="og:description" content="Book farmhouses in Vikarabad with pools, lawns, BBQ setups, and scenic Ananthagiri Hills views. Affordable prices starting under ₹5000." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                        Farmhouse with Price in Hyderabad, Vikarabad Area
                    </h1>
                </div>

                <div>
                    <Image
                        src={vikarabad}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouse in Vikarabad Hyderabad"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'17.336759390516352'} lon={'77.90360578025137'} loc={"Vikarabad"} />

                    <p>Looking for a peaceful and refreshing farmhouse near Hyderabad? Vikarabad is the perfect destination where you can rent a farmhouse surrounded by greenery, hills, and fresh air. With Dozzy, finding best affordable farm houses in Hyderabad and specifically in Vikarabad becomes simple and stress-free. Whether it’s a birthday bash, a group trip, or a family reunion, you’ll find the right farm house for rent in Hyderabad that fits your budget and style.</p>

                    <p className='font-bold text-lg py-2'>Why Choose a Farmhouse in Vikarabad</p>
                    <p>Vikarabad, just 70 km from Hyderabad, feels like a hill station with its Ananthagiri Hills and lush greenery, making it one of the most loved weekend escapes. Booking a farmhouse in Vikarabad gives you the best of privacy, fresh air, and scenic views away from the city rush. It’s perfect for hosting birthdays or private pool parties with music, enjoying a family day out with kids playing on lawns and outdoor games, or planning a budget-friendly hangout with friends under ₹5000.</p>
                    <p>Many farmhouses here also come with swimming pools, open lawns, BBQ areas, powerful sound systems, indoor games, private event lighting, and ample parking. Some even allow alcohol, so you can enjoy your celebration with complete freedom. The scenic locations near Ananthagiri Hills add to the charm, offering both relaxation and fun. If you are looking for the best and affordable farmhouse near Hyderabad, Vikarabad stands out as a refreshing choice.</p>

                    <p className='font-bold text-lg py-2'>Budget Farmhouses in Hyderabad for Rent</p>
                    <p>The below table contains farmhouses in Vikarabad:</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-sm lg:text-base">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-2 text-left">Farmhouse Name</th>
                                    <th className="border p-2 text-left">No of Bedrooms</th>
                                    <th className="border p-2 text-left">Price</th>
                                    <th className="border p-2 text-left">Capacity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border p-2">Dozzy 1790</td><td className="border p-2">1</td><td className="border p-2">₹4000 / 11 hrs , ₹5000 / 22 hrs</td><td className="border p-2">8</td></tr>
                                <tr><td className="border p-2">Dozzy 1834</td><td className="border p-2">2</td><td className="border p-2">₹8000 / 11 hrs , ₹10000 / 22 hrs</td><td className="border p-2">12</td></tr>
                                <tr><td className="border p-2">Dozzy 1772</td><td className="border p-2">5</td><td className="border p-2">₹8000 / 11 hrs , ₹10000 / 22 hrs</td><td className="border p-2">25</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className='py-2'>We also allow you to include additional guests beyond the listed capacity at ₹400 per person, making it easier for larger groups to enjoy the farmhouse together.</p>

                    <p className='font-bold text-lg py-2'>Why To Book with Dozzy</p>
                    <ul className='list-disc pl-5'>
                        <li>A wide list of farmhouses in and around Vikarabad</li>
                        <li>Clear filters for budget, amenities, and group size</li>
                        <li>Verified listings with real pictures and verified amenities</li>
                        <li>A simple, secure, and fast booking process</li>
                        <li>Options for both small gatherings and large groups</li>
                        <li>24/7 customer support</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Farmhouses for Event-Specific Uses</p>
                    <ul className='list-disc pl-5'>
                        <li>Birthday celebrations with music, pools, BBQ setups, and outdoor dining</li>
                        <li>Corporate team outings with big lawns, indoor games, and peaceful surroundings</li>
                        <li>Family gatherings with safe play areas for kids and private pools</li>
                        <li>Couple-friendly farm stays for quiet weekends in nature</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Frequently Asked Questions about Farmhouse in Vikarabad</p>

                    <p className='font-bold text-md py-2'>1. What is the price range for a farmhouse in Vikarabad?</p>
                    <p>Dozzy listings start from cheap farm house for rent in Hyderabad under ₹5000, and prices go higher depending on amenities, size, and guest capacity.</p>

                    <p className='font-bold text-md py-2'>2. Can I book a farmhouse in Vikarabad for one day?</p>
                    <p>Yes, flexible booking options allow you to rent for 11 hours, 22 hours, or overnight stays depending on your plan.</p>

                    <p className='font-bold text-md py-2'>3. Which is better for a birthday party – Moinabad or Vikarabad?</p>
                    <p>Both are popular, but Vikarabad stands out with its scenic hills, greener landscapes, and cooler climate for outdoor parties.</p>

                    <p className='font-bold text-md py-2'>4. Are farmhouses in Vikarabad safe for families and kids?</p>
                    <p>Absolutely. Most farmhouses come with secure boundaries, private pools, spacious lawns, and verified facilities suitable for families.</p>

                    <p className='font-bold text-md py-2'>5. How far is Vikarabad from Hyderabad city?</p>
                    <p>It’s around 70 km (about 1.5 hours by road), making it a convenient weekend or day-trip destination.</p>

                    <p className='font-bold text-md py-2'>6. Do farmhouses in Vikarabad include private pools?</p>
                    <p>Yes, many listings feature private swimming pools, along with lawns, indoor games, and BBQ setups.</p>

                    <p className='font-bold text-md py-2'>7. Are farmhouses in Vikarabad good for corporate team outings?</p>
                    <p>Yes, large properties here have lawns, seating areas, and open spaces perfect for team activities and bonding sessions.</p>

                    <p className='font-bold text-md py-2'>8. Can I bring outside food and drinks to a farmhouse in Vikarabad?</p>
                    <p>Yes, most farmhouses allow outside catering, food, and drinks. Some also permit alcohol, but it’s best to confirm while booking.</p>

                    <p className='font-bold text-md py-2'>9. Do budget farmhouses in Vikarabad also have good amenities?</p>
                    <p>Yes, even budget-friendly options often include pools, lawns, indoor games, and music setups for small groups.</p>

                    <p className='font-bold text-md py-2'>10. How do I book a farmhouse in Vikarabad with Dozzy?</p>
                    <p>Just visit the Dozzy app or website, enter your date, group size, and budget, compare listings with real photos, and book instantly.</p>

                    <p className='font-bold text-lg py-2'>Book Your Farmhouse in Vikarabad Today</p>
                    <p>Escape to a farmhouse in Hyderabad for under ₹5000. With Dozzy, book verified stays with pools, lawns, BBQ, and music setups. Perfect for parties, family time, or corporate outings. Easy, budget-friendly, and stress-free. Book now for your next getaway!</p>

                    <p>For Dozzy Farmhouses, download the app from the <Link className='text-blue-700 underline' href='https://play.google.com/store/apps/details?id=com.dozzy_customer'>Play Store</Link> or <Link className='text-blue-700 underline' href='https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530'>App Store</Link>, or visit the website: <a href="https://www.dozzy.com" className='text-blue-500 underline'>https://www.dozzy.com</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default Vikarabad;

export async function getServerSideProps({ req }) {
    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-vikarabad'
        : 'https://www.dozzy.com/farmhouse-rentals-in-vikarabad';

    return {
        props: {
            canonicalUrl: canonicalUrl,
        }
    };
}
