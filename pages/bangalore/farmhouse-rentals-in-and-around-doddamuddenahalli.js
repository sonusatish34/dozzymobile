import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NearByFarm from '../components/NearByFarm';

export default function Doddamuddenahalli({ canonicalUrl }) {
    return (
        <div className="lg:leading-9 leading-8">
            <Head>
                <title>Farmhouse Rentals in Doddamuddenahalli, Bangalore | Dozzy</title>
                <meta
                    name="description"
                    content="Farmhouse rentals in and around Doddamuddenahalli with pools, lawns, BBQ setups, and modern amenities. Perfect for birthdays, weddings, family get-togethers, and corporate outings."
                />
                {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            </Head>

            <div className="containe py-8">
                <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:px-16 px-2">
                    Farmhouse Rentals in and Around Doddamuddenahalli
                </h1>

                <div>
                    <Image
                        src={'/blogimg/doddamuddenahalli.webp'}
                        height={2000}
                        width={2000}
                        className="py-3 object-cover w-full"
                        alt="Farmhouse Rentals in Doddamuddenahalli"
                        loading="lazy"
                    />
                </div>

                <div className="lg:px-16 px-2">
                    <NearByFarm lat={'13.322175341514473'} lon={'77.77102592024212'} loc={'Doddamuddenahalli'} />
                    {/* ---- INTRO ---- */}
                    <div className="text-lg max-w-none mb-8 lg:leading-9 leading-8">
                        <h2 className="text-2xl font-bold mb-4">Farm House for Rent in Doddamuddenahalli, Bangalore with Pet Friendly Options</h2>
                        <p>
                            Doddamuddenahalli is a small and quiet village near Bangalore. It is full of green trees and open fields,
                            which makes it a peaceful place. The roads are good, so you can easily travel there from the city.
                        </p>
                        <p>
                            What makes this village special is that it feels calm like the countryside, but also has modern farmhouses where people can stay.
                            The air is fresh, the surroundings are quiet, and the big farmhouses are perfect for parties or family get-togethers.
                            That’s why many families, friends, and office groups like to go there for fun and celebrations.
                        </p>
                        <p>
                            Even if you’re looking for a farmhouse near Bangalore to host a birthday party, searching online for
                            farmhouses near me for a last-minute weekend plan, or planning a corporate team outing,
                            Doddamuddenahalli has something to fit your style and budget.
                        </p>
                    </div>

                    {/* ---- WHY CHOOSE ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose a Farmhouse in Doddamuddenahalli?</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Lots of Space, No Big Crowds: Unlike busy tourist spots, here you get open fields and peaceful views all to yourself.</li>
                            <li>Fresh Air & Green Everywhere – Trees, wind, and a calm atmosphere make it the perfect place to relax and play.</li>
                            <li>Perfect for Celebrations: Birthdays, family get-togethers, school trips, or team games—it’s a great spot for parties and fun.</li>
                            <li>Super Close to Bangalore: Just about an hour’s drive away, so you don’t have to sit in the car forever.</li>
                        </ul>
                    </section>

                    {/* ---- FARMHOUSE DETAILS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Dozzy 1778 at a Glance</h2>
                        <table className="w-full border border-gray-300 mb-6 text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2">Farmhouse</th>
                                    <th className="border px-4 py-2">Capacity (People)</th>
                                    <th className="border px-4 py-2">Bedrooms</th>
                                    <th className="border px-4 py-2">Price per Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">Dozzy 1778</td>
                                    <td className="border px-4 py-2">20</td>
                                    <td className="border px-4 py-2">4 AC rooms</td>
                                    <td className="border px-4 py-2">₹18,000 / 22 hrs</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="text-xl font-semibold mb-4">Amenities:</h3>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Private swimming pool</li>
                            <li>Large lawn for cricket, football, or casual parties</li>
                            <li>Fully equipped kitchen (fridge, utensils, stove)</li>
                            <li>Indoor dining & seating area</li>
                            <li>Outdoor BBQ setup</li>
                            <li>Parking & power backup</li>
                        </ul>
                        <p>If you’re planning a birthday bash, pool party with friends, or a relaxed family get-together, Dozzy 1778 covers it all.</p>
                    </section>

                    {/* ---- PRICE GUIDE ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Price Guide: Farmhouses in Doddamuddenahalli</h2>
                        <p className="mb-4">
                            • Farmhouse under ₹10,000 – Great for families or groups of 10–15 looking for a quick one-day trip.
                        </p>
                        <p>This range makes Doddamuddenahalli perfect for anyone typing <em>farmhouses near me under 10000</em> or searching for a farmhouse near Bangalore that balances affordability and comfort.</p>
                    </section>

                    {/* ---- EVENTS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Events You Can Host Here</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Birthday & Anniversary Parties</li>
                            <li>Pre-Wedding Functions</li>
                            <li>Weekend Family Retreats</li>
                            <li>Corporate Team Outings</li>
                            <li>Spiritual & Cultural Visits</li>
                        </ul>
                    </section>

                    {/* ---- ATTRACTIONS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Nearby Attractions Around Doddamuddenahalli</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Nandi Hills (40–45 min drive).</li>
                            <li>Gauribidanur Temples.</li>
                            <li>Village Markets.</li>
                            <li>Nature Trails & Lakes.</li>
                        </ul>
                    </section>

                    {/* ---- FAQ ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">FAQs – Farmhouse Rentals in and around Doddamuddenahalli</h2>
                        <div className="space-y-6">
                            <div><h3 className="text-xl font-semibold mb-2">Q: What is the average price of a farmhouse in Doddamuddenahalli?</h3><p>A: ₹9,000–₹18,000 depending on size and amenities.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are there farmhouses with swimming pools?</h3><p>A: Yes, many including Dozzy 1778 have private pools.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can I book a farmhouse for under ₹10,000?</h3><p>A: Yes</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are these suitable for corporate team outings?</h3><p>A: Definitely. Lawns and open areas are perfect for team games and activities.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: How far is Doddamuddenahalli from Bangalore?</h3><p>A: Around 60–70 minutes by road, depending on traffic.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Do farmhouses allow alcohol?</h3><p>A: Many do, but always check with the property before booking.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are pets allowed?</h3><p>A: Some farmhouses are pet-friendly. Check individual listings.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: What amenities are common in Doddamuddenahalli farmhouses?</h3><p>A: Pools, lawns, kitchens, BBQ setups, music systems, indoor seating, and parking.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can I book a farmhouse online?</h3><p>A: Yes, most farmhouses including Dozzy 1778 can be booked online.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Which farmhouse is best for a birthday party?</h3><p>A: Dozzy 1778 is highly recommended for pool parties and celebrations.</p></div>
                        </div>
                    </section>

                    {/* ---- CTA ---- */}
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Book Dozzy 1778 Farmhouse in Doddamuddenahalli Today</h3>
                        <p className="mb-4">
                            Experience why more people searching for a farmhouse near Bangalore or quick <em>farmhouses near me</em> are finding this hidden spot perfect for parties, family outings, and team getaways.
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
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-doddamuddenahalli'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-doddamuddenahalli';

    return {
        props: {
            canonicalUrl,
        }
    }
}
