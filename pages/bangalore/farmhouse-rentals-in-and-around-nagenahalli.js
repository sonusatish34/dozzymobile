import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NearByFarm from '../components/NearByFarm';

export default function Nagenahalli({ canonicalUrl }) {
    return (
        <div className='lg:leading-9 leading-8'>
            <Head>
                <title>Farmhouse Rentals in Nagenahalli, Bangalore | Dozzy</title>
                <meta
                    name="description"
                    content="Farmhouse rentals in and around Nagenahalli with pools, lawns, and event-ready setups. Perfect for birthdays, pre-wedding shoots, corporate outings, and weekend getaways."
                />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <div className="containe py-8">
                <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:px-16 px-2">
                    Farmhouse Rentals in and Around Nagenahalli
                </h1>
                <div>
                    <Image
                        src={'/blogimg/nagenahalli.webp'}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouse Rentals in Nagenahalli"
                        loading='lazy'
                    />
                </div>
                <div className='lg:px-16 px-2'>

                    <div className="text-lg max-w-none mb-8 lg:leading-9 leading-8">
                        <NearByFarm lat={'13.130902721830678'} lon={'77.57403803769334'} loc={'Nagenahalli '} />
                        <h2 className="text-2xl font-bold mb-4">Best Farmhouse in Nagenahalli for Birthday Parties</h2>
                        <p>
                            Nagenahalli is a calm place close to Bangalore, and not many people know about it.
                            It has lots of trees, quiet roads, and open lands. You can enjoy nature, but it is still close to the city.
                            Families like to come here because it is peaceful. Young people and office groups come here to celebrate in private, away from busy places.
                            It is special because it feels like a village, but also has nice things like private pools, lawns and event spaces.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose Farmhouse Rentals in Nagenahalli?</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li><strong>Privacy & Space:</strong> Entire farmhouse rental for your group without outside disturbance.</li>
                            <li><strong>Budget-Friendly Options:</strong> Prices start from ₹5,000 to ₹20,000 depending on size and features.</li>
                            <li><strong>Event-Friendly Venues:</strong> Lawns, swimming pools, and party areas for every occasion.</li>
                            <li><strong>Nature with Comfort:</strong> Fresh air, greenery, and modern amenities like Wi-Fi, AC bedrooms, and projectors.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Top Farmhouses in Nagenahalli (Bangalore)</h2>
                        <table className="w-full border border-gray-300 mb-6 text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2">Farmhouse Name</th>
                                    <th className="border px-4 py-2">Capacity</th>
                                    <th className="border px-4 py-2">Bedrooms</th>
                                    <th className="border px-4 py-2">Price per Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">Dozzy 1791</td>
                                    <td className="border px-4 py-2">20 People</td>
                                    <td className="border px-4 py-2">2 BHK</td>
                                    <td className="border px-4 py-2">₹12,000 / 22 hrs</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Amenities You Can Expect</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <ul className="list-disc pl-6">
                                <li>Private swimming pool</li>
                                <li>Wide green lawn for parties & games</li>
                                <li>AC bedrooms with TV</li>
                                <li>Spacious indoor seating & dining area</li>
                                <li>Fully equipped kitchen (utensils, fridge)</li>
                            </ul>
                            <ul className="list-disc pl-6">
                                <li>Outdoor BBQ setup</li>
                                <li>Kids’ play area</li>
                                <li>Power backup</li>
                                <li>Ample parking space</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Best Occasions for a Nagenahalli Farmhouse</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Birthday parties & anniversaries</li>
                            <li>Pre-wedding photoshoots & engagement events</li>
                            <li>Corporate team outings & reunions</li>
                            <li>Pool parties & bachelor nights</li>
                            <li>Family get-togethers & weekend escapes</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Nearby Attractions in and Around Nagenahalli</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Nature trails and lakes: great for morning walks, cycling or picnics.</li>
                            <li>Temples & Cultural Spots: For those who enjoy spirituality or culture.</li>
                            <li>Local Markets: Try regional snacks, shop for fresh produce, or enjoy street food.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Unique Facts About Nagenahalli</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li><strong>Historical Roots:</strong> Old temples and village shrines that locals still visit for festivals and rituals.</li>
                            <li><strong>Fresh Air & Green Cover:</strong> Cleaner air, wide open fields, and calm village roads compared to Bangalore city.</li>
                            <li><strong>Quick Getaway:</strong> Just a short drive away, yet the difference in environment is huge.</li>
                        </ul>
                        <p>
                            This combination of tradition, greenery, and modern amenities makes Nagenahalli a perfect farmhouse rental destination near Bangalore.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">FAQs – Farmhouse Rentals in and Around Nagenahalli</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: What is the average price of a farmhouse in Nagenahalli?</h3>
                                <p>A: Prices range between ₹5,000 and ₹20,000 depending on the farmhouse size and facilities.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Are there farmhouses with private pools?</h3>
                                <p>A: Yes, many farmhouses including Dozzy 1791 offer private swimming pools.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Can I book a farmhouse rental in and around Nagenahalli for under ₹10,000?</h3>
                                <p>A: Absolutely.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Do farmhouses allow birthday parties or corporate events?</h3>
                                <p>A: Yes, most rentals are event-friendly with lawns, party halls, and sound systems.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Are there pet-friendly farmhouses in Nagenahalli?</h3>
                                <p>A: Select farmhouses allow pets. Always confirm before booking.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: How far is Nagenahalli from Bangalore city?</h3>
                                <p>A: Depending on the route, it’s easily reachable within a short drive from Bangalore.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Can I bring my own food and drinks?</h3>
                                <p>A: Yes, most farmhouses allow outside food and drinks, and many also permit alcohol.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Do farmhouses in Nagenahalli have Wi-Fi?</h3>
                                <p>A: Several rentals, including premium ones, provide Wi-Fi and Bluetooth speakers.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: How can I book Dozzy 1791 farmhouse rental in and around Nagenahalli?</h3>
                                <p>A: You can check availability online and confirm bookings with flexible packages.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Nagenahalli is Perfect for Your Next Trip</h2>
                        <p>
                            What makes farmhouse rentals in and around Nagenahalli so appealing is the mix of peace, nature, and comfort.
                        </p>
                    </section>

                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Book Dozzy 1791 Farmhouse Today</h3>
                        <p className="mb-4">
                            Ready to plan your trip? Book Dozzy 1791 today and make your weekend unforgettable.
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
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-nagenahalli'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-nagenahalli'

    return {
        props: {
            canonicalUrl,
        }
    }
}
