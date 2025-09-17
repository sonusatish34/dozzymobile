import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NearByFarm from '../components/NearByFarm';

export default function KarahalliAmanikere({ canonicalUrl }) {
    return (
        <div className="lg:leading-9 leading-8">
            <Head>
                <title>Farmhouse Rentals in Karahalli Amanikere, Bangalore | Dozzy</title>
                <meta
                    name="description"
                    content="Find the best farmhouse rentals in Karahalli Amanikere with big lawns, pools, and event-ready spaces. Perfect for birthdays, corporate outings, family get-togethers, and weekend escapes."
                />
                {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            </Head>

            <div className="containe py-8">
                <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:px-16 px-2">
                    Farmhouse Rentals in and Around Karahalli Amanikere
                </h1>

                <div>
                    <Image
                        src={'/blogimg/karahalliamanikere.webp'}
                        height={2000}
                        width={2000}
                        className="py-3 object-cover w-full"
                        alt="Farmhouse Rentals in Karahalli Amanikere"
                        loading="lazy"
                    />
                </div>

                <div className="lg:px-16 px-2">
                    <NearByFarm lat={'13.327218994890355'} lon={'77.68627901914142'} loc={'Karahalli Amanikere '} /> 
                    {/* ---- INTRO ---- */}
                    <div className="text-lg max-w-none mb-8 lg:leading-9 leading-8">
                        <h2 className="text-2xl font-bold mb-4">Farm Houses for Rent in Karahalli Amanikere with Big Lawn for Cricket and Badminton</h2>
                        <p>
                            Karahalli Amanikere is a hidden gem on the outskirts of Bangalore, known for its calm lake, open grass, and 
                            easy road connectivity. This peaceful spot has become a favourite for families, friends, and office 
                            groups who want to escape the city rush without travelling too far.
                        </p>
                        <p>
                            What makes it special is the combination of nature and comfort—you can enjoy fresh air, wide lawns, and 
                            quiet evenings. The best farmhouse rentals in Karahalli Amanikere give you swimming pools, lawns, and 
                            event-friendly spaces at prices that fit every budget. It is the perfect destination for birthdays, weekend 
                            trips and group celebrations.
                        </p>
                        <p>
                            At Dozzy 1808, we make booking a farmhouse in Karahalli Amanikere easy and budget-friendly, whether 
                            you are planning a day outing or a night-long celebration.
                        </p>
                    </div>

                    {/* ---- WHY CHOOSE ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose Karahalli Amanikere for Your Farmhouse Stay?</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Great connectivity: Just a short drive from Bangalore, making it comfortable for families and office teams.</li>
                            <li>Calm and nature: With the lake and green surroundings, it is the ideal escape from the city noise.</li>
                            <li>Farmhouse for every budget: From budget-friendly farmhouses under ₹10,000 to premium villas with pools, you’ll find options for all group sizes.</li>
                            <li>Nearby Attractions: Temples, nature spots, and food joints make the trip even more enjoyable.</li>
                        </ul>
                    </section>

                    {/* ---- FARMHOUSE DETAILS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Dozzy 1808 – The Top Choice in Karahalli Amanikere</h2>
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
                                    <td className="border px-4 py-2">Dozzy 1808</td>
                                    <td className="border px-4 py-2">16</td>
                                    <td className="border px-4 py-2">5 BHK</td>
                                    <td className="border px-4 py-2">₹15,000 / 22 hrs</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="text-xl font-semibold mb-4">What You Get at Dozzy 1808:</h3>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Private swimming pool with party deck</li>
                            <li>Big lawn for cricket, badminton, or evening events</li>
                            <li>AC bedrooms with TV and clean interiors</li>
                            <li>Indoor seating with spacious dining area</li>
                            <li>Fully equipped kitchen (fridge, stove, utensils)</li>
                            <li>Outdoor BBQ and music-friendly space</li>
                        </ul>
                        <p>Perfect for: Birthday parties, pool parties with friends, family reunions, corporate outings, and pre-wedding functions.</p>
                    </section>

                    {/* ---- EXPLORE BEYOND ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Explore Beyond Karahalli Amanikere</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Devanahalli – Spacious villas near the airport.</li>
                            <li>Chikkaballapur – Scenic views and peaceful landscapes.</li>
                            <li>Hoskote – Affordable options for day-long celebrations.</li>
                        </ul>
                    </section>

                    {/* ---- LOCAL ATTRACTIONS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Local Attractions Around Karahalli Amanikere</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Amanikere Lake – Great for photography and calm evening walks.</li>
                            <li>Local Temples – Traditional architecture and a quiet atmosphere.</li>
                            <li>Village Food Joints – Try authentic Karnataka snacks and meals.</li>
                        </ul>
                    </section>

                    {/* ---- FAQ ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">FAQs – Farmhouse Rentals in and around Karahalli Amanikere</h2>
                        <div className="space-y-6">
                            <div><h3 className="text-xl font-semibold mb-2">Q: What is the average price of a farmhouse in Karahalli Amanikere?</h3><p>A: Prices range from ₹8,000 to ₹25,000 per day depending on size, amenities, and capacity.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are swimming pools available?</h3><p>A: Yes, many farmhouses including Dozzy 1808 have private pools.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can I book just for the day without staying overnight?</h3><p>A: Yes, day packages are available for birthdays, office outings, and pool parties.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Is Karahalli Amanikere good for corporate outings?</h3><p>A: Absolutely. With large lawns and private areas, it’s a great spot for team games, bonding, and celebrations.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Which are the best farmhouse rentals in Karahalli Amanikere for family gatherings?</h3><p>A: Farmhouses like Dozzy 1808 are considered the best farmhouse rentals in Karahalli Amanikere for families.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: How do I book Dozzy 1808?</h3><p>A: You can book directly online through Dozzy with flexible payment options.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are there farmhouses under ₹10,000 here?</h3><p>A: Yes, budget-friendly farmhouses are available for smaller groups and quick day trips.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: What events are farmhouses here suitable for?</h3><p>A: From birthdays and anniversaries to pre-wedding shoots and corporate parties, you’ll find the best farmhouse rentals in Karahalli Amanikere suitable for every occasion.</p></div>
                        </div>
                    </section>

                    {/* ---- CTA ---- */}
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Book Dozzy 1808 Today</h3>
                        <p className="mb-4">
                            Make your next gathering unforgettable with the best farmhouse in Karahalli Amanikere. Enjoy privacy, comfort, and event-ready amenities all in one place.
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
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-karahalli-amanikere'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-karahalli-amanikere';

    return {
        props: {
            canonicalUrl,
        }
    }
}
