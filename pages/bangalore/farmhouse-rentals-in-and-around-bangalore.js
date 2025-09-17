import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NearByFarm from '../components/NearByFarm';

export default function BangaloreFarmhouses({ canonicalUrl }) {
    return (
        <div className='lg:leading-9 leading-8'>
            <Head>
                <title>Farmhouse Rentals in and Around Bengaluru | Dozzy</title>
                <meta
                    name="description"
                    content="Explore budget-friendly and luxury farmhouse rentals in and around Bengaluru. Great for birthdays, family parties, office outings, and weekend getaways with pools and event spaces."
                />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className="containe py-8">
                <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:px-16 px-2">
                    Farmhouse Rentals in and Around Bengaluru
                </h1>

                <div>
                    <Image
                        src={'/blogimg/farmbengaluru.webp'}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouse Rentals in Bengaluru"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-16 px-2'>
                    <NearByFarm lat={'12.9716'} lon={'77.5946'} loc={'Bengaluru'} />

                    <section className="text-lg mb-8">
                        <p>
                            Bengaluru is often called the Garden City of India – thanks to its beautiful weather, greenery, and rich culture. Just outside the city's hustle, there are stunning farmhouse rentals where people come to relax, party, and celebrate. Whether it's a birthday bash, corporate outing, or a peaceful family gathering, you’ll find the perfect spot in and around Bengaluru.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose a Farmhouse in Bengaluru?</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Privacy & Space:</strong> No outside disturbances—ideal for groups.</li>
                            <li><strong>Budget Flexibility:</strong> From budget to luxury, options for every need.</li>
                            <li><strong>Event-Friendly:</strong> Designed for birthdays, weddings, or office parties.</li>
                            <li><strong>Green & Modern:</strong> Enjoy fresh air without giving up comfort.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Top Farmhouse Listings in Bengaluru</h2>
                        <table className="w-full border border-gray-300 text-left mb-6">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2">Farmhouse Name</th>
                                    <th className="border px-4 py-2">Capacity</th>
                                    <th className="border px-4 py-2">Bedrooms</th>
                                    <th className="border px-4 py-2">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">Dozzy 1847</td>
                                    <td className="border px-4 py-2">25</td>
                                    <td className="border px-4 py-2">2</td>
                                    <td className="border px-4 py-2">₹10,000</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Dozzy 1821</td>
                                    <td className="border px-4 py-2">20</td>
                                    <td className="border px-4 py-2">4</td>
                                    <td className="border px-4 py-2">₹20,000</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Dozzy 1787</td>
                                    <td className="border px-4 py-2">20</td>
                                    <td className="border px-4 py-2">4</td>
                                    <td className="border px-4 py-2">₹16,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Farmhouse Rentals by Budget</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Under ₹5,000:</strong> Small 1BHK cottages or day-use rentals for 8–10 people.</li>
                            <li><strong>Under ₹10,000:</strong> Dozzy 1847 is a great choice for budget-conscious groups.</li>
                            <li><strong>₹15,000–₹20,000:</strong> Dozzy 1821 and 1787 offer premium pools and lawns.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Nearby Attractions</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Lalbagh Botanical Garden – Perfect for nature lovers and photography.</li>
                            <li>Cubbon Park – Green haven ideal for morning walks and relaxing time.</li>
                            <li>Nandi Hills – Great for sunrise treks and quick weekend drives.</li>
                            <li>KR Market & VV Puram – Discover Bengaluru’s vibrant food and flower markets.</li>
                            <li>City Attractions – Vidhana Soudha, Bangalore Palace, MG Road for shopping.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Perfect Events to Host</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Birthday parties & family get-togethers</li>
                            <li>Engagements & pre-wedding celebrations</li>
                            <li>Corporate team outings & reunions</li>
                            <li>Weekend escapes with friends or family</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">FAQs – Farmhouse Rentals in Bengaluru</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: What is the average price of a farmhouse rental?</h3>
                                <p>A: Between ₹8,000 and ₹25,000 depending on capacity and features.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Are there farmhouses with pools?</h3>
                                <p>A: Yes. Dozzy 1847, 1821, and 1787 include private pools.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Any rentals under ₹5,000?</h3>
                                <p>A: Yes, for smaller groups or day-time use cottages.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Are pets allowed?</h3>
                                <p>A: Some farmhouses are pet-friendly. Confirm before booking.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Can we play music and drink alcohol?</h3>
                                <p>A: Most allow music systems and alcohol – based on house rules.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Which farmhouse is best for birthday parties?</h3>
                                <p>A: Dozzy 1821 and Dozzy 1847 are top picks for celebrations.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: How do I book a farmhouse?</h3>
                                <p>A: Book online via Dozzy or trusted local rental services.</p>
                            </div>
                        </div>
                    </section>

                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Book Your Dozzy Farmhouse Today</h3>
                        <p className="mb-4">
                            Plan your event or getaway now – these farmhouses are in high demand.
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
    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-bengaluru'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-bengaluru';

    return {
        props: {
            canonicalUrl,
        }
    }
}
