import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NearByFarm from '../components/NearByFarm';

export default function Tumakuru({ canonicalUrl }) {
    return (
        <div className='lg:leading-9 leading-8'>
            <Head>
                <title>Farmhouse Rentals in Tumakuru, Bangalore | Dozzy</title>
                <meta
                    name="description"
                    content="Find the best farmhouse rentals in and around Tumakuru with pools, lawns, and event-ready spaces. Perfect for birthdays, weddings, corporate outings, and family trips."
                />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <div className="containe py-8">
                <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:px-16 px-2">
                    Farmhouse Rentals in and Around Tumakuru
                </h1>
                <div>
                    <Image
                        src={'/blogimg/tumakuru.webp'}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouse Rentals in Tumakuru"
                        loading='lazy'
                    />
                </div>
                <div className='lg:px-16 px-2'>
                    <NearByFarm lat={'13.337874005159192'} lon={'77.12096603457887'} loc={'Tumakuru '} />

                    <div className="text-lg max-w-none mb-8 lg:leading-9 leading-8">
                        <h2 className="text-2xl font-bold mb-4">Best Farmhouse in Tumakuru, Bangalore</h2>
                        <p>
                            Looking for the perfect weekend vacation? Farmhouse rentals in and around Tumakuru offer the ideal mix of privacy, comfort, and nature.
                            These farmhouses are great for birthday parties, office trips, or family gatherings. With lots of open space, private pools, play areas, and scenic views,
                            they make every stay enjoyable. Located close to the city, Tumakuru farmhouses are just a short drive away.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose Farmhouse Rentals in Tumakuru?</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li><strong>Easy Accessibility:</strong> Well-connected by highways and public transport.</li>
                            <li><strong>Amazing Locations:</strong> Lakes, hills, and temples around the area.</li>
                            <li><strong>Event Friendly:</strong> Perfect for parties, corporate functions, and family celebrations.</li>
                            <li><strong>Budget to Luxury Options:</strong> Choices to suit every need and price range, including budget farmhouse rentals near Tumakuru.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Top Farmhouses in Bangalore for Rent</h2>
                        <table className="w-full border border-gray-300 mb-6 text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2">Farmhouse Name</th>
                                    <th className="border px-4 py-2">Capacity</th>
                                    <th className="border px-4 py-2">Price (24 hrs)</th>
                                    <th className="border px-4 py-2">Key Amenities</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">DOZZY 1882 (Top Choice), 3BHK</td>
                                    <td className="border px-4 py-2">25</td>
                                    <td className="border px-4 py-2">₹15,000</td>
                                    <td className="border px-4 py-2">Pool, BBQ, Music, AC Rooms</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Amenities You Can Expect</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Private Swimming Pools</li>
                            <li>Wide Green Lawns for Events</li>
                            <li>Indoor & Outdoor Seating Areas</li>
                            <li>Music & Party Setup</li>
                            <li>Fully Equipped Kitchens</li>
                            <li>Parking & Security</li>
                            <li>Wi-Fi in Selected Properties</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Events You Can Host at These Farmhouses</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Birthday parties</li>
                            <li>Engagements & Pre-wedding Functions</li>
                            <li>Wedding Anniversaries</li>
                            <li>Corporate Team Outings</li>
                            <li>Weekend Family Retreats</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Nearby Attractions Around Tumakuru</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Devarayanadurga Hills – Famous for temples</li>
                            <li>Goravanahalli Mahalakshmi Temple – Spiritual hotspot</li>
                            <li>Pavagada Fort – Historic landmark</li>
                            <li>Madhugiri Fort – Asia’s second-largest monolith</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">FAQs on Farmhouse Rentals in and Around Tumakuru</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">1. What’s the booking process like?</h3>
                                <p>You can book online or by contacting the property directly—either via WhatsApp or phone. Once booked, you’ll usually receive a confirmation message.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">2. When can I check in and check out?</h3>
                                <p>Check-in options often include flexible slots like morning or evening (e.g., 10 AM or 10 PM), depending on the farmhouse policy. Check-out is typically by late afternoon or evening.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">3. Can I bring my own food or drinks? Is alcohol allowed?</h3>
                                <p>Several properties allow guests to bring their own food, with kitchen facilities available or third-party catering permitted. Alcohol policies differ—some allow it if done responsibly; others may restrict it or require a license.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">4. Are there decoration or event services available?</h3>
                                <p>Yes—many farmhouses facilitate event decorations (e.g., floral, balloon themes) and provide tailored packages.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">5. Is there a security deposit or advance payment required?</h3>
                                <p>Some farmhouses may ask for a refundable security deposit—e.g., ₹20,000 refundable after inspection—or require 100% advance payment at the time of booking.</p>
                            </div>
                        </div>
                    </section>

                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Book DOZZY 1882 Today</h3>
                        <p className="mb-4">
                            Book DOZZY 1882 today for a premium Tumakuru farmhouse for rent experience. Enjoy privacy, modern amenities, and beautiful surroundings at an affordable price.
                        </p>
                        <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                            Book Now
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-tumakuru'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-tumakuru'

    return {
        props: {
            canonicalUrl,
        }
    }
}
