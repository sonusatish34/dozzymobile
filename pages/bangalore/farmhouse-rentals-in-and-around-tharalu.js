import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NearByFarm from '../components/NearByFarm';

export default function Tharalu({ canonicalUrl }) {
    return (
        <div className='lg:leading-9 leading-8'>
            <Head>
                <title>Farmhouse Rentals in Tharalu, Bangalore | Dozzy</title>
                <meta
                    name="description"
                    content="Farmhouse rentals in and around Tharalu with pools, lawns, and modern amenities. Perfect for weekend family trips, birthdays, weddings, and corporate outings."
                />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <div className="containe py-8">
                <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:px-16 px-2">
                    Farmhouse Rentals in and Around Tharalu
                </h1>
                <div>
                    <Image
                        src={'/blogimg/tharalu.webp'}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouse Rentals in Tharalu"
                        loading='lazy'
                    />
                </div>
                <div className='lg:px-16 px-2'>
                    <NearByFarm lat={'12.786592219241196'} lon={'77.52994496552877'} loc={'Tharalu '} />

                    <div className="text-lg max-w-none mb-8 lg:leading-9 leading-8">
                        <h2 className="text-2xl font-bold mb-4">Farm house near Tharalu for Weekend Family Trip</h2>
                        <p>
                            Tharalu is a small place outside the big city of Bangalore. It is special because it has lots of trees, is very quiet, and looks very beautiful.
                            From Tharalu, you can easily visit places like a forest, a zoo and park full of animals, and a peaceful meditation centre.
                            That means you get both fun with nature and rest for your mind.
                        </p>
                        <p>
                            Many people like going to Tharalu on weekends. Families go there for picnics, and office groups go there for short trips.
                            They like it because it is calm and easy to reach. In Tharalu, people can do fun outdoor activities, join peaceful prayer or meditation camps,
                            and also take calm walks near the lake—all in the same area.
                        </p>
                        <p>
                            For those looking for the best farmhouse rentals in and around Tharalu, options like <strong>Dozzy 1765</strong> provide the perfect setting for celebrations and peaceful stays.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose Dozzy 1765 Farmhouse in Tharalu</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li><strong>Privacy:</strong> No shared spaces or noisy crowds.</li>
                            <li><strong>Freedom:</strong> Cook, decorate, and celebrate your way.</li>
                            <li><strong>Spacious Surroundings:</strong> Perfect for indoor parties or open-air events.</li>
                            <li><strong>Budget-Friendly Packages:</strong> Options for small groups or large gatherings.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Dozzy 1765 Farmhouse – Pricing and Capacity</h2>
                        <table className="w-full border border-gray-300 mb-6 text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2">Farmhouse</th>
                                    <th className="border px-4 py-2">Capacity (Persons)</th>
                                    <th className="border px-4 py-2">Bedrooms</th>
                                    <th className="border px-4 py-2">Price per Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">Dozzy 1765</td>
                                    <td className="border px-4 py-2">20</td>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2">₹15,000 (22 Hours)</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Whether you’re planning a weekend family trip or a corporate day outing, Dozzy 1765 has the right space for you.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Amenities at Dozzy 1765</h2>
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
                        <p>
                            These facilities make it one of the best farmhouses near Tharalu for all kinds of celebrations.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Nearby Attractions in and Around Tharalu</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Turahalli Forest: Perfect for trekking and nature walks.</li>
                            <li>Bannerghatta National Park: A popular spot for families and kids.</li>
                            <li>Art of Living International Center: Ideal for spiritual retreats.</li>
                            <li>Local Temples and Scenic Lakes: For peaceful evening visits.</li>
                        </ul>
                        <p>
                            Staying at Dozzy 1765 also gives you access to several popular tourist spots around Tharalu.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Tharalu is Perfect for Farmhouse Rentals</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Peaceful environment: Away from the city noise, perfect for relaxation.</li>
                            <li>Good connectivity: Easily accessible by car, cabs, and public transport.</li>
                            <li>Natural beauty: Surrounded by greenery and open landscapes.</li>
                        </ul>
                        <p>
                            All these factors make Tharalu one of the most sought-after locations for farmhouse rentals near Bangalore.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">FAQs – Farmhouse Rentals in and Around Tharalu</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: What is the price of Dozzy 1765 farmhouse?</h3>
                                <p>A: The farmhouse is available at ₹15,000 for 22 hours with full amenities.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Can I book the farmhouse for birthday parties or weddings?</h3>
                                <p>A: Yes, Dozzy 1765 is perfect for birthdays, weddings, corporate events, and family reunions.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Are there attractions near Tharalu for sightseeing?</h3>
                                <p>A: Yes, places like Turahalli Forest and Bannerghatta National Park are close by.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Which is the best option for farmhouse rentals in Tharalu for a weekend getaway?</h3>
                                <p>A: Dozzy 1765 farmhouse is one of the top-rated choices for weekend vacation with spacious amenities and a peaceful environment.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Is parking available at the farmhouse?</h3>
                                <p>A: Yes, ample parking space is provided for all guests.</p>
                            </div>
                        </div>
                    </section>

                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Book Dozzy 1765 Farmhouse Today</h3>
                        <p className="mb-4">
                            Plan your weekend at Dozzy 1765 farmhouse in Tharalu. Enjoy privacy, modern amenities, and beautiful surroundings—all at an affordable price.
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
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-tharalu'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-tharalu'

    return {
        props: {
            canonicalUrl,
        }
    }
}
