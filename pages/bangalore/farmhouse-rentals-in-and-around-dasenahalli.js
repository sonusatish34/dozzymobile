import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NearByFarm from '../components/NearByFarm';

export default function Dasenahalli({ canonicalUrl }) {
    return (
        <div className="lg:leading-9 leading-8">
            <Head>
                <title>Farmhouse Rentals in Dasenahalli, Bangalore | Dozzy</title>
                <meta
                    name="description"
                    content="Book farmhouse rentals in and around Dasenahalli with private pools, lawns, and modern amenities. Perfect for birthdays, anniversaries, family reunions, and corporate outings."
                />
                {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            </Head>

            <div className="containe py-8">
                <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:px-16 px-2">
                    Farmhouse Rentals in and Around Dasenahalli
                </h1>

                <div>
                    <Image
                        src={'/blogimg/dasanahalli.webp'}
                        height={2000}
                        width={2000}
                        className="py-3 object-cover w-full"
                        alt="Farmhouse Rentals in Dasenahalli"
                        loading="lazy"
                    />
                </div>

                <div className="lg:px-16 px-2">
                    <NearByFarm lat={'13.265928023066294'} lon={'77.28319499250892'} loc={'Dasenahalli'} />
                    {/* ---- INTRO ---- */}
                    <div className="text-lg max-w-none mb-8 lg:leading-9 leading-8">
                        <h2 className="text-2xl font-bold mb-4">
                            Best Private Farmhouses for Rent Near Dasenahalli, Bangalore
                        </h2>
                        <p>
                            Dasenahalli is a perfect vacation spot located in the outskirt of Bangalore, about 32 km from the city centre.
                            Connected through highways and local roads, the drive here is quick and easy, making it a popular weekend escape
                            for families, friends, and office groups.
                        </p>
                        <p>
                            Unlike the crowded city limits, Dasenahalli is known for its fresh air, wide open lands and calm surroundings,
                            giving you the perfect balance of nature and comfort.
                        </p>
                        <p>
                            Farmhouse rentals in and around Dasenahalli are designed for all kinds of occasions from simple family picnic to
                            poolside birthday celebration or even a large corporate outing. Most farmhouses here come with modern amenities
                            such as private swimming pools, AC bedrooms, lawns for games, and indoor party spaces, so you can enjoy the
                            attraction of the landscape without missing the luxuries of the city.
                        </p>
                        <p>
                            Whether you are searching for a budget farmhouse for a day trip, a private farmhouse with a pool for a birthday
                            party, or a luxury retreat for big gatherings, Dasenahalli offers choices that fit every plan.
                        </p>
                    </div>

                    {/* ---- WHY CHOOSE ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose Farmhouse Rentals in Dasenahalli?</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Privacy and space: perfect for parties or family reunion</li>
                            <li>Budget flexibility: Choices range from affordable day-rentals to luxury stays.</li>
                            <li>Event ready: Farmhouses are designed for birthday, anniversary, and even corporate outings.</li>
                        </ul>
                    </section>

                    {/* ---- TABLE ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Farmhouse Picks in Dasenahalli</h2>
                        <table className="w-full border border-gray-300 mb-6 text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2">Farmhouse Name</th>
                                    <th className="border px-4 py-2">Capacity (People)</th>
                                    <th className="border px-4 py-2">Bedrooms</th>
                                    <th className="border px-4 py-2">Price per Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">DOZZY 1776</td>
                                    <td className="border px-4 py-2">20</td>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2">₹15,000/22hrs</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    {/* ---- THINGS TO DO ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Things to Do in and Around Dasenahalli</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Nature walks and lakes: great spots for morning walks, cycling, and photography.</li>
                            <li>Local Food & Markets: Try local dishes or shop for farm-fresh produce nearby.</li>
                            <li>Road Trips: Easy access to nearby towns and beautiful landscape drives.</li>
                        </ul>
                    </section>

                    {/* ---- EVENTS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Events You Can Host at Farmhouses in Dasenahalli</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Birthday parties & anniversaries</li>
                            <li>Pre-wedding photoshoots & engagement events</li>
                            <li>Corporate team outings & reunions</li>
                        </ul>
                    </section>

                    {/* ---- FAQ ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">FAQs – Farmhouse Rentals in and Around Dasenahalli</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: What is the average price of a farmhouse in Dasenahalli?</h3>
                                <p>A: Prices usually range between ₹7,000 to ₹20,000 depending on size and amenities.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Are there farmhouses with swimming pools in Dasenahalli?</h3>
                                <p>A: Yes, DOZZY 1776, had private swimming pools.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Can I book a farmhouse for a birthday party?</h3>
                                <p>A: Absolutely, most farmhouses here are event-ready with lawns, seating, and music systems.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: How far is Dasenahalli from Bangalore city?</h3>
                                <p>A: It’s about 32 km from the city centre, making it a quick and easy drive for a weekend getaway.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Do farmhouses in Dasenahalli allow alcohol?</h3>
                                <p>A: Yes, many farmhouses permit guests to bring their own food and drinks, including alcohol.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Are there budget-friendly farmhouses under ₹10,000?</h3>
                                <p>A: Yes, DOZZY 1776 are excellent budget and mid-range options.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Is parking available for large groups?</h3>
                                <p>A: Most farmhouses mainly DOZZY offer ample secure parking.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Are there pet-friendly farmhouses in Dasenahalli?</h3>
                                <p>A: Yes, some rentals allow pets — it’s best to confirm while booking.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Can I book farmhouses online?</h3>
                                <p>A: Yes, farmhouses like DOZZY 1776 can be booked online with flexible options.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Which farmhouse is best for corporate outings?</h3>
                                <p>A: DOZZY 1776, top picks for team activities and group events.</p>
                            </div>
                        </div>
                    </section>

                    {/* ---- CTA ---- */}
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Book DOZZY 1776 Today</h3>
                        <p className="mb-4">
                            Looking for a private farmhouse for rent in Dasenahalli? Book DOZZY 1776 today and enjoy a perfect
                            combination of nature, comfort, and celebration.
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
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-dasenahalli'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-dasenahalli';

    return {
        props: {
            canonicalUrl,
        }
    }
}
