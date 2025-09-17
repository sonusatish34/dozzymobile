import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NearByFarm from '../components/NearByFarm';

export default function Kadusonnapanahalli({ canonicalUrl }) {
    return (
        <div className="lg:leading-9 leading-8">
            <Head>
                <title>Farmhouse Rentals in Kadusonnapanahalli, Bangalore | Dozzy</title>
                <meta
                    name="description"
                    content="Farmhouse rentals in and around Kadusonnapanahalli with pools, lawns, and modern amenities. Perfect for birthdays, reunions, corporate outings, and family getaways."
                />
                {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            </Head>

            <div className="containe py-8">
                <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:px-16 px-2">
                    Farmhouse Rentals in and Around Kadusonnapanahalli
                </h1>

                <div>
                    <Image
                        src={'/blogimg/kadusonnapanahalli.webp'}
                        height={2000}
                        width={2000}
                        className="py-3 object-cover w-full"
                        alt="Farmhouse Rentals in Kadusonnapanahalli"
                        loading="lazy"
                    />
                </div>

                <div className="lg:px-16 px-2">
                    {/* ---- INTRO ---- */}
                    <NearByFarm lat={'13.09738209053874'} lon={'77.66152084597232'} loc={'Kadusonnapanahalli '} /> 
                    <div className="text-lg max-w-none mb-8 lg:leading-9 leading-8">
                        <h2 className="text-2xl font-bold mb-4">Farm House for Rent in Kadusonnapanahalli for Friends’ Reunion</h2>
                        <p>
                            Kadusonnapanahalli is a calm and green locality on the outskirts of Bangalore, located just about 25 km from the city centre. 
                            Close to Kempe Gowda International Airport and connected by good roads, this area is becoming a favourite spot for families, 
                            friends, and corporate groups who want privacy and open space without driving too far.
                        </p>
                        <p>
                            Surrounded by lush landscapes and village charm, farmhouse rentals give you the best of both worlds — fresh air, scenic views, 
                            and modern comforts.
                        </p>
                        <p>
                            Whether you are planning a birthday celebration, a weekend trip with friends, or team outing with colleagues, farmhouse rentals 
                            in Kadusonnapanahalli offer plenty of options. From budget farmhouses with lawns to premium villas with swimming pools, 
                            you’ll find something for every budget.
                        </p>
                    </div>

                    {/* ---- WHY CHOOSE ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose Farmhouse Rentals in Kadusonnapanahalli?</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Close to Bangalore airport: Only 20–25 minutes from Kempe Gowda International Airport.</li>
                            <li>Privacy and space: Perfect for private parties, reunions, and family time.</li>
                            <li>Budget and flexibility: From ₹8,000 farm stays to luxury villas above ₹20,000.</li>
                        </ul>
                    </section>

                    {/* ---- FEATURED CHOICE ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Featured Choice: DOZZY 1799 Farmhouse, Kadusonnapanahalli</h2>
                        <table className="w-full border border-gray-300 mb-6 text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2">Farmhouse</th>
                                    <th className="border px-4 py-2">Capacity</th>
                                    <th className="border px-4 py-2">Bedrooms</th>
                                    <th className="border px-4 py-2">Price (per day)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">DOZZY 1799</td>
                                    <td className="border px-4 py-2">30+ guests</td>
                                    <td className="border px-4 py-2">7 AC bedrooms with TV</td>
                                    <td className="border px-4 py-2">₹18,000 (22 hours)</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <ul className="list-disc pl-6">
                                <li>Private swimming pool</li>
                                <li>Large lawn for games & parties</li>
                                <li>Spacious indoor seating & dining hall</li>
                                <li>Fully equipped kitchen (fridge, utensils)</li>
                            </ul>
                            <ul className="list-disc pl-6">
                                <li>Outdoor BBQ setup</li>
                                <li>Power backup</li>
                                <li>Ample parking</li>
                            </ul>
                        </div>
                    </section>

                    {/* ---- OCCASIONS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Farmhouse Rentals in Kadusonnapanahalli for Every Occasion</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li><strong>Birthday Party Farmhouses in Kadusonnapanahalli:</strong> Have fun with your loved ones in private grass, poolside setups, and big private halls.</li>
                            <li><strong>Farmhouses with Swimming Pools:</strong> Perfect for summer weekends, pool parties, and family and friends’ get-togethers.</li>
                            <li><strong>Budget Farmhouses in Kadusonnapanahalli:</strong> Best options for groups looking for farm stays under ₹10,000.</li>
                        </ul>
                    </section>

                    {/* ---- ATTRACTIONS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Nearby Attractions Around Kadusonnapanahalli</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Nandi Hills: just 30 min away, best known for sunrise view.</li>
                            <li>Local Lakes & Parks: Perfect for morning walks and taking pictures.</li>
                            <li>Village Temples & Cultural Spots: Add a divine and cultural touch to your trip.</li>
                        </ul>
                    </section>

                    {/* ---- FAQ ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">FAQs – Farmhouse Rentals in and Around Kadusonnapanahalli</h2>
                        <div className="space-y-6">
                            <div><h3 className="text-xl font-semibold mb-2">Q: What is the average price of a farmhouse in Kadusonnapanahalli?</h3><p>A: Prices range between ₹8,000 and ₹20,000 per day, depending on capacity and facilities.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are there farmhouses with swimming pools?</h3><p>A: Yes, popular options like DOZZY 1799 and Lakeview Villa come with private pools.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can I book a farmhouse for a birthday or pre-wedding function?</h3><p>A: Absolutely. Many rentals here are event-ready with lawns, indoor seating, and sound systems.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are there farmhouses under ₹10,000?</h3><p>A: Yes.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can I bring my own food and drinks?</h3><p>A: Most farmhouses allow outside food and drinks. Some even have BBQ setups.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are pets allowed at farmhouses here?</h3><p>A: A few pet-friendly farmhouses are available. Always confirm while booking.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: How far is Kadusonnapanahalli from Bangalore city?</h3><p>A: Around 25 km, making it less than an hour’s drive.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can alcohol be carried to the farmhouse?</h3><p>A: Many farmhouses allow it, but it’s best to check individual property rules.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: How do I book a farmhouse here?</h3><p>A: You can book online through trusted rental platforms or directly with hosts.</p></div>
                        </div>
                    </section>

                    {/* ---- CTA ---- */}
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Book DOZZY 1799 Farmhouse Today</h3>
                        <p className="mb-4">
                            Looking for the perfect farmhouse getaway? Book DOZZY 1799 in Kadusonnapanahalli today and enjoy a mix of greenery, privacy, and modern amenities for your next event.
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
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-kadusonnapanahalli'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-kadusonnapanahalli';

    return {
        props: {
            canonicalUrl,
        }
    }
}
