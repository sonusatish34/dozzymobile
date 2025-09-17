import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NearByFarm from '../components/NearByFarm';

export default function Mugenahalli({ canonicalUrl }) {
    return (
        <div className="lg:leading-9 leading-8">
            <Head>
                <title>Farmhouse Rentals in Mugenahalli, Bangalore | Dozzy</title>
                <meta
                    name="description"
                    content="Farmhouse rentals in and around Mugenahalli with pools, lawns, bonfire facilities, and modern amenities. Perfect for birthdays, weddings, family retreats, and corporate outings."
                />
                {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            </Head>

            <div className="containe py-8">
                <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:px-16 px-2">
                    Farmhouse Rentals in and Around Mugenahalli
                </h1>

                <div>
                    <Image
                        src={'/blogimg/mugenahalli.webp'}
                        height={2000}
                        width={2000}
                        className="py-3 object-cover w-full"
                        alt="Farmhouse Rentals in Mugenahalli"
                        loading="lazy"
                    />
                </div>

                <div className="lg:px-16 px-2">
                    {/* ---- INTRO ---- */}
                    13.276992060759094, 77.39304359098351
                    <NearByFarm lat={'13.276992060759094'} lon={'77.39304359098351'} loc={'Mugenahalli '} />
                    <div className="text-lg max-w-none mb-8 lg:leading-9 leading-8">
                        <h2 className="text-2xl font-bold mb-4">Farm Houses for Rent in Mugenahalli, Bangalore with Bonfire Facility</h2>
                        <p>
                            Mugenahalli is a small, quiet village near Devanhalli in north Bangalore. It is very close to the airport
                            (just 15 minutes away) and not too far from the main city. Because it has lots of green fields and fresh air,
                            but is still easy to reach from the city, people like to go there on weekends to stay in farmhouses and relax.
                        </p>
                        <p>
                            With farmlands, lakes, and silent surroundings, farmhouse rentals in and around Mugenahalli, Bangalore are now the
                            first choice for birthday parties, weddings, reunions, and corporate outings.
                        </p>
                        <p>
                            Among the many options <strong>DOZZY 1774</strong> is a favourite for its private pool, big lawns, and lots of amenities.
                            Whether you are looking for a budget stay or a luxury farmhouse with a pool, Mugenahalli has something for every group size and budget.
                        </p>
                    </div>

                    {/* ---- WHY CHOOSE ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose a Farmhouse in Mugenahalli?</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Privacy & Comfort</li>
                            <li>Easy Access</li>
                            <li>Budget-Friendly</li>
                            <li>Perfect for Events</li>
                            <li>Nature Meets Modern Living</li>
                        </ul>
                    </section>

                    {/* ---- FARMHOUSE DETAILS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Farmhouse in Mugenahalli</h2>
                        <table className="w-full border border-gray-300 mb-6 text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2">Farmhouse Name</th>
                                    <th className="border px-4 py-2">Capacity (People)</th>
                                    <th className="border px-4 py-2">Bedrooms</th>
                                    <th className="border px-4 py-2">Price per Day</th>
                                    <th className="border px-4 py-2">Key Amenities</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">DOZZY 1774</td>
                                    <td className="border px-4 py-2">20</td>
                                    <td className="border px-4 py-2">3 BHK</td>
                                    <td className="border px-4 py-2">₹14,000</td>
                                    <td className="border px-4 py-2">Private pool, big lawn, BBQ, AC rooms</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    {/* ---- AMENITIES ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Amenities You Can Expect</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Private swimming pool</li>
                            <li>Lawns for cricket, football, and outdoor games</li>
                            <li>Fully equipped kitchen with fridge, oven, utensils</li>
                            <li>AC bedrooms with TVs</li>
                            <li>Indoor dining and seating areas</li>
                            <li>Outdoor BBQ setup</li>
                            <li>Music system and projector (in some farmhouses)</li>
                            <li>Power backup and parking</li>
                        </ul>
                    </section>

                    {/* ---- EVENTS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Events You Can Host</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Birthday Parties</li>
                            <li>Pre-Wedding Functions & Photoshoots</li>
                            <li>Anniversaries & Family Reunions</li>
                            <li>Corporate Team Outings</li>
                        </ul>
                    </section>

                    {/* ---- ATTRACTIONS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Nearby Attractions Around Mugenahalli</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Devanahalli Fort</li>
                            <li>Nandi Hills</li>
                            <li>Bhoga Nandeeshwara Temple</li>
                            <li>Local Vineyards in Chikkaballapur</li>
                        </ul>
                    </section>

                    {/* ---- FAQ ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">FAQs – Farmhouse Rentals in and Around Mugenahalli</h2>
                        <div className="space-y-6">
                            <div><h3 className="text-xl font-semibold mb-2">Q: What is the average price of a farmhouse in Mugenahalli?</h3><p>A: Rentals usually cost between ₹8,000 and ₹25,000 per day depending on size and amenities.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are there farmhouses with swimming pools in Mugenahalli?</h3><p>A: Yes, options like DOZZY 1774 come with private swimming pools and lawns.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can I rent a farmhouse in Mugenahalli under ₹10,000?</h3><p>A: Yes, several budget-friendly options are available.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Which farmhouse is best for a birthday party?</h3><p>A: DOZZY 1774 is event-ready with a pool, lawn, and music system for parties.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Do farmhouses here allow alcohol and music?</h3><p>A: Many do, but confirm with the property before booking.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: How far is Mugenahalli from Bangalore city?</h3><p>A: Around 40 km, or about an hour’s drive.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are farmhouses safe for families with kids?</h3><p>A: Yes, most have kids’ play areas, gardens, and secured premises.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can I book a farmhouse online?</h3><p>A: Yes, booking can be done easily through platforms like DOZZY.</p></div>
                        </div>
                    </section>

                    {/* ---- CTA ---- */}
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Book DOZZY 1774 Farmhouse Today</h3>
                        <p className="mb-4">
                            Whether it’s a big celebration or a quiet retreat, DOZZY 1774 in Mugenahalli is one of the best choices for a farmhouse near Bangalore.
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
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-mugenahalli'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-mugenahalli';

    return {
        props: {
            canonicalUrl,
        }
    }
}
