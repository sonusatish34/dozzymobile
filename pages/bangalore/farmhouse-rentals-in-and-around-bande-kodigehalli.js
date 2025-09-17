import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NearByFarm from '../components/NearByFarm';


export default function BandeKodigehalli({ canonicalUrl }) {
    return (
        <div className="lg:leading-9 leading-8">
            <Head>
                <title>Farmhouse Rentals in Bande Kodigehalli, Bangalore | Dozzy</title>
                <meta
                    name="description"
                    content="Farmhouse rentals in and around Bande Kodigehalli with pools, lawns, BBQ setups, and modern amenities. Perfect for birthdays, family retreats, weddings, and corporate outings."
                />
                {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            </Head>

            <div className="containe py-8">
                <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:px-16 px-2">
                    Farmhouse Rentals in and Around Bande Kodigehalli
                </h1>

                <div>
                    <Image
                        src={'/blogimg/kodigehalli.webp'}
                        height={2000}
                        width={2000}
                        className="py-3 object-cover w-full"
                        alt="Farmhouse Rentals in Bande Kodigehalli"
                        loading="lazy"
                    />
                </div>

                <div className="lg:px-16 px-2">
                    {/* ---- INTRO ---- */}
                    <NearByFarm lat={'13.070098935922406'} lon={'77.57882268005079'} loc={'Kodigehalli'} />
                    <div className="text-lg max-w-none mb-8 lg:leading-9 leading-8">
                        <h2 className="text-2xl font-bold mb-4">Farm House for Rent in Kodigehalli with Private Swimming Pool</h2>
                        <p>
                            Bande Kodigehalli is a quiet place in the north part of Bangalore. It is close to Yelahanka, Devanahalli,
                            and not very far from the airport. The area has green farms, small lakes, and wide roads. Unlike the busy city,
                            this place is calm and peaceful. Families, friends, and office groups can come here to relax without loud
                            noise or traffic.
                        </p>
                        <p>
                            If you are looking for farmhouse rentals in and around Bande Kodigehalli, there are farmhouses where people
                            can relax and enjoy nature. Some have swimming pools, big grassy lawns, and spaces for parties. You can use them
                            for birthdays, office trips, or just a fun weekend. One farmhouse, called <strong>DOZZY 1781</strong>, is very
                            popular because it is calm, has modern things you need, and does not cost too much.
                        </p>
                    </div>

                    {/* ---- WHY CHOOSE ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose a Farmhouse in Bande Kodigehalli?</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Great connectivity: Easy access from Yelahanka, Devanahalli, and the airport.</li>
                            <li>Calm surroundings: Open lands, lakes and greenery for a stress-free stay.</li>
                            <li>Budget Flexibility: From cheap farmhouses near Bande Kodigehalli under ₹10,000 to luxury villas, there’s something for every budget.</li>
                        </ul>
                    </section>

                    {/* ---- FARMHOUSE DETAILS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Farmhouse Option: DOZZY 1781</h2>
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
                                    <td className="border px-4 py-2">DOZZY 1781</td>
                                    <td className="border px-4 py-2">16</td>
                                    <td className="border px-4 py-2">4</td>
                                    <td className="border px-4 py-2">₹12,000 / 22 hrs</td>
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
                            <li>Kids’ play area and gardens</li>
                        </ul>
                        <p>This farmhouse is perfect for family picnics, birthday celebrations, or a relaxed weekend with friends.</p>
                    </section>

                    {/* ---- ATTRACTIONS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Nearby Attractions Around Bande Kodigehalli</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Yelahanka Lake – Great for birdwatching and evening walks.</li>
                            <li>Nandi Hills – Just a short drive away, perfect for sunrise trips.</li>
                            <li>Devanahalli Fort – A heritage spot to explore local history.</li>
                            <li>Local Markets – Try regional food and shop for handmade crafts.</li>
                        </ul>
                    </section>

                    {/* ---- FAQ ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">FAQs – Farmhouse Rentals in Bande Kodigehalli, Bangalore</h2>
                        <div className="space-y-6">
                            <div><h3 className="text-xl font-semibold mb-2">Q: What is the average price of a farmhouse in Bande Kodigehalli?</h3><p>A: Prices usually range from ₹8,000 to ₹20,000 per day depending on amenities and capacity.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are there farmhouses with swimming pools?</h3><p>A: Yes, many rentals, including DOZZY 1781, have private pools.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can I book a farmhouse for a birthday party or corporate event?</h3><p>A: Absolutely. Most farmhouses here are designed for both family events and team outings.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: How far is Bande Kodigehalli from Bangalore city center?</h3><p>A: Around 25–30 km, with smooth connectivity via Yelahanka and airport roads.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are budget-friendly farmhouse options available?</h3><p>A: Yes, you can find options under ₹10,000 for smaller groups and day rentals.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can I rent a farmhouse in Bande Kodigehalli for a day outing only?</h3><p>A: Yes, many farmhouses offer flexible packages for half-day or full-day events.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Do farmhouses near Bande Kodigehalli allow alcohol and music systems?</h3><p>A: Yes, several farmhouses allow music setups and alcohol, but it’s always best to confirm while booking.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are farmhouses here suitable for corporate team outings?</h3><p>A: Yes, Bande Kodigehalli has spacious rentals with lawns, seating, and activity spaces that work well for office groups.</p></div>
                        </div>
                    </section>

                    {/* ---- CTA ---- */}
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Book DOZZY 1781 Farmhouse Today</h3>
                        <p className="mb-4">
                            Ready to book your stay? Call now or check availability online at DOZZY 1781.
                            It’s the perfect place to enjoy nature and feel cozy too.
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
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-bande-kodigehalli'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-bande-kodigehalli';

    return {
        props: {
            canonicalUrl,
        }
    }
}
