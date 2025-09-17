import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NearByFarm from '../components/NearByFarm';

export default function Keeranagere({ canonicalUrl }) {
    return (
        <div className='lg:leading-9 leading-8'>
            <Head>
                <title>Farmhouse Rentals in Keeranagere, Bangalore | Dozzy</title>
                <meta
                    name="description"
                    content="Find premium yet budget-friendly farmhouses in Keeranagere near Bangalore. Perfect for birthday parties, weddings, reunions, and corporate outings with pools, lawns, and event spaces."
                />
                {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            </Head>
            <div className="containe py-8">
                <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:px-16 px-2">
                    Farmhouse in Keeranagere, Bangalore for Birthday Parties & Getaways
                </h1>
                <div>
                    <Image
                        src={'/blogimg/keeranagere.webp'}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Private Farmhouse for Rent in Keeranagere"
                        loading='lazy'
                    />
                </div>
                <div className='lg:px-16 px-2'>
                    <NearByFarm lat={'12.652932755347623'} lon={'77.45972834722161'} loc={'Keeranagere '} />
                    <div className="text-lg max-w-none mb-8 lg:leading-9 leading-8">
                        <p>
                            Are you searching for a nice farmhouse rental in Keeranagere to spend the weekend,
                            host a{" "}
                            <Link href="/blog/posts/how-we-surprised-our-best-friend-with-a-midnight-birthday-bash-at-a-farmhouse" className="text-blue-600 hover:underline">
                                birthday party
                            </Link>, or celebrate with your family?
                            <strong> DOZZY 1800</strong> offers premium yet budget farmhouse rentals in Keeranagere with
                            modern amenities, beautiful green spaces, and full privacy.
                        </p>
                        <p>
                            Whether you want a{" "}
                            <Link href="/blog/posts/plan-the-perfect-family-reunion-at-our-spacious-farmhouse-rentals" className="text-blue-600 hover:underline">
                                family retreat
                            </Link>, or{" "}
                            <Link href="/blog/posts/wedding-engagement-in-farmhouse-rentals-hyderabad" className="text-blue-600 hover:underline">
                                an event-friendly wedding venue
                            </Link>, our farmhouses provide the ideal setting to relax, celebrate, and
                            make lasting memories.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose Farmhouse Rentals in Keeranagere?</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li className="mb-2"><strong>Privacy:</strong> No crowded resorts—just your group enjoying the property.</li>
                            <li className="mb-2"><strong>Space:</strong> Wide lawns, indoor lounges, swimming pools, and event areas.</li>
                            <li className="mb-2"><strong>Custom Events:</strong> Perfect for{" "}
                                <Link href="/blog/posts/farmhouse-for-bride-to-be-events" className="text-blue-600 hover:underline">
                                    pre-wedding functions
                                </Link>, birthdays, reunions, and corporate retreats.
                            </li>
                            <li className="mb-2"><strong>Budget-Friendly:</strong> From affordable farmhouses to luxury villas, there’s something for every group size.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">DOZZY 1800 – Your Top Choice in Keeranagere</h2>
                        <p className="mb-4">
                            <strong>DOZZY 1800 farmhouse</strong> in Keeranagere combines comfort, affordability, and top-class facilities.
                            Whether it’s a{" "}
                            <Link href="/bangalore" className="text-blue-600 hover:underline">
                                family farmhouse rental near Bangalore
                            </Link> or a big celebration, this venue has you covered.
                        </p>
                        <table className="w-full border border-gray-300 mb-6 text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2">Farmhouse Name</th>
                                    <th className="border px-4 py-2">Capacity (Persons)</th>
                                    <th className="border px-4 py-2">Bedrooms</th>
                                    <th className="border px-4 py-2">Price (Per Day)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">DOZZY 1800 Premium</td>
                                    <td className="border px-4 py-2">20</td>
                                    <td className="border px-4 py-2">5</td>
                                    <td className="border px-4 py-2">₹15,000 / 24 hrs</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="mb-4">Amenities you’ll love at DOZZY 1800:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <ul className="list-disc pl-6">
                                <li>Private swimming pool & kids’ pool</li>
                                <li>Wide green lawn for parties and games</li>
                                <li>Outdoor BBQ setup and party speakers</li>
                                <li>AC bedrooms with TV & modern bathrooms</li>
                            </ul>
                            <ul className="list-disc pl-6">
                                <li>Kitchen with fridge, oven & utensils</li>
                                <li>Indoor dining area & event space</li>
                                <li>Ample parking area</li>
                                <li>Perfect for{" "}
                                    <Link href="/blog/posts/a-weekend-that-changed-our-team-our-corporate-retreat-at-a-farmhouse-near-hyderabad" className="text-blue-600 hover:underline">
                                        corporate outings
                                    </Link> or intimate family gatherings
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Nearby Attractions Around Keeranagere</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Keeranagere Lake: Morning walk & boating</li>
                            <li>Temples nearby for spiritual & cultural visits</li>
                            <li>Local markets: fresh produce & handicrafts</li>
                            <li>Nature trails: perfect for trekking & photography</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Events You Can Host at DOZZY 1800</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Birthday parties</li>
                            <li>Engagements & pre-wedding functions</li>
                            <li>Wedding anniversaries</li>
                            <li>Corporate team outings</li>
                            <li>Weekend family retreats</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions about Farmhouses in Keeranagere</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">1. What is the guest capacity for typical farmhouses?</h3>
                                <p>
                                    Farmhouses range from small venues for 50–100 guests to{" "}
                                    <Link href="/blog/posts/our-wildest-weekend-a-bachelor-pool-party-at-a-farmhouse-in-bangalore" className="text-blue-600 hover:underline">
                                        large venues hosting hundreds
                                    </Link>.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">2. What are the typical price ranges for farmhouse rentals?</h3>
                                <table className="w-full border border-gray-300 mb-4 text-left">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border px-4 py-2">Farmhouse Size</th>
                                            <th className="border px-4 py-2">Approx. Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 py-2">Small (1–2 rooms)</td>
                                            <td className="border px-4 py-2">₹5,000 – ₹10,000/day</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Medium (3–4 rooms)</td>
                                            <td className="border px-4 py-2">₹10,000 – ₹20,000/day</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Large (5+ rooms)</td>
                                            <td className="border px-4 py-2">₹20,000 – ₹50,000/day</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Luxury estates</td>
                                            <td className="border px-4 py-2">₹50,000+ per day</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">3. What should I consider before booking?</h3>
                                <p>
                                    Check accessibility, confirm amenities like kitchen & rooms, and safety features
                                    (electricity, water, internet). Tips from{" "}
                                    <Link href="/blog/posts/how-to-plan-a-pool-party-at-a-farmhouse-in-hyderabad" className="text-blue-600 hover:underline">
                                        farmhouse party planning guides
                                    </Link> apply here too.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">4. Do these rentals offer site tours?</h3>
                                <p>
                                    Yes, many listings offer{" "}
                                    <Link href="/blog/posts/why-couples-are-choosing-farmhouses-for-pre-wedding-photoshoots" className="text-blue-600 hover:underline">
                                        virtual tours & 360° previews
                                    </Link>{" "}before booking.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Book Your Keeranagere Farmhouse?</h3>
                        <p className="mb-4">
                            Experience the perfect mix of privacy, celebration, and comfort with our{" "}
                            <Link href="/bangalore" className="text-blue-600 hover:underline">
                                Bangalore farmhouse rentals
                            </Link>.
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
    const host = req?.headers?.host || 'www.dozzy.com';
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-keeranagere'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-keeranagere';

    return {
        props: {
            canonicalUrl,
        }
    }
}
