import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NearByFarm from '../components/NearByFarm';

export default function Rajanukunte({ canonicalUrl }) {
    return (
        <div className="lg:leading-9 leading-8">
            <Head>
                <title>Farmhouse Rentals in Rajanukunte, Bangalore | Dozzy</title>
                <meta
                    name="description"
                    content="Farmhouse rentals in and around Rajanukunte with pools, lawns, BBQ setups, and modern amenities. Perfect for birthdays, weddings, family retreats, and corporate outings."
                />
                {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            </Head>

            <div className="containe py-8">
                <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:px-16 px-2">
                    Farmhouse Rentals in and Around Rajanukunte
                </h1>

                <div>
                    <Image
                        src={'/blogimg/rajanukunte.webp'}
                        height={2000}
                        width={2000}
                        className="py-3 object-cover w-full"
                        alt="Farmhouse Rentals in Rajanukunte"
                        loading="lazy"
                    />
                </div>

                <div className="lg:px-16 px-2">
                    {/* ---- INTRO ---- */}
                    <NearByFarm lat={'13.175656589894823'} lon={'77.5515939151008'} loc={'Rajanukunte '} />
                    <div className="text-lg max-w-none mb-8 lg:leading-9 leading-8">
                        <h2 className="text-2xl font-bold mb-4">Farmhouse in Rajanukunte with BBQ Setup</h2>
                        <p>
                            Rajanukunte is a pretty place near north Bangalore where people like to visit on weekends to relax and have fun. 
                            It is not too far from the city, and you can drive there quickly using big roads like NH44 and the airport road.
                        </p>
                        <p>
                            Rajanukunte has lots of green trees, open fields, and peaceful surroundings that make it feel quiet and calm.
                        </p>
                        <p>
                            Many families and friends choose to stay in farmhouses here because they are individual and comfortable, 
                            but still let you feel close to nature. One popular farmhouse is called <strong>DOZZY 1809</strong>, which has big lawns 
                            to play or picnic and does not cost too much money.
                        </p>
                        <p>
                            Rajanukunte is a special place where you can enjoy the countryside and relax, even though it’s very close to the busy city.
                        </p>
                    </div>

                    {/* ---- WHY CHOOSE ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose a Farmhouse in Rajanukunte?</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Privacy & Space – Enjoy open grasslands, big indoor halls, and a peaceful situation.</li>
                            <li>Budget-Friendly Choices – From affordable farmhouses to premium stays.</li>
                            <li>Event-Ready – Ideal for birthdays, engagements, pre-weddings, and office outings.</li>
                        </ul>
                    </section>

                    {/* ---- FARMHOUSE DETAILS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Farmhouses in Rajanukunte for Rent</h2>
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
                                    <td className="border px-4 py-2">DOZZY 1809</td>
                                    <td className="border px-4 py-2">15</td>
                                    <td className="border px-4 py-2">5 BHK</td>
                                    <td className="border px-4 py-2">₹20,000 / 22 hrs</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="mb-4"><strong>Key Features:</strong> Pool, Lawn, BBQ, AC rooms</p>
                    </section>

                    {/* ---- PRICE OPTIONS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Farmhouse Prices in Rajanukunte – Options for Every Budget</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Budget farmhouse near Rajanukunte under ₹10,000 – Perfect for small family gatherings.</li>
                            <li>Mid-range farmhouse rentals (₹12,000 – ₹16,000) – Great for group parties and celebrations.</li>
                            <li>Luxury farmhouses (₹18,000+) – Best for weddings, large events, and corporate retreats.</li>
                        </ul>
                    </section>

                    {/* ---- EVENTS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Events You Can Host in Rajanukunte Farmhouses</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Birthday parties & anniversaries</li>
                            <li>Pre-wedding photoshoots & engagement events</li>
                            <li>Corporate team outings & reunions</li>
                        </ul>
                    </section>

                    {/* ---- AMENITIES ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Amenities You Can Expect</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <ul className="list-disc pl-6">
                                <li>Private swimming pools</li>
                                <li>AC bedrooms with TVs</li>
                                <li>Fully equipped kitchens</li>
                                <li>Wide lawns for games & parties</li>
                            </ul>
                            <ul className="list-disc pl-6">
                                <li>Indoor seating & dining space</li>
                                <li>Outdoor BBQ setups</li>
                                <li>Kids’ play areas</li>
                                <li>Ample parking & power backup</li>
                            </ul>
                        </div>
                    </section>

                    {/* ---- ATTRACTIONS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Nearby Attractions Around Rajanukunte</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Yelahanka Lake: Great for morning walks and photography</li>
                            <li>Nandi Hills: A short drive for sunrise view and trekking</li>
                            <li>Devanahalli Fort – A cultural spot near the airport</li>
                        </ul>
                    </section>

                    {/* ---- FAQ ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">FAQs – Farmhouse Rentals in and Around Rajanukunte</h2>
                        <div className="space-y-6">
                            <div><h3 className="text-xl font-semibold mb-2">Q: What is the average price of a farmhouse in Rajanukunte?</h3><p>A: Prices range from ₹8,000 to ₹20,000 per day depending on size and amenities.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are there farmhouses with swimming pools?</h3><p>A: Yes, many options including DOZZY 1809 feature private pools.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can I book a farmhouse for a corporate outing?</h3><p>A: Absolutely. Rajanukunte is popular for corporate retreats with spacious lawns and team activity setups.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are budget-friendly farmhouses available?</h3><p>A: Yes, you can find farmhouses near Rajanukunte under ₹10,000 that are ideal for small groups.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: How far is Rajanukunte from Bangalore airport?</h3><p>A: Only 18 km, making it convenient for outstation guests.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Do farmhouses in Rajanukunte allow alcohol and music?</h3><p>A: Most farmhouses do, but it’s best to confirm during booking.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can I book a farmhouse online?</h3><p>A: Yes, most farmhouses including DOZZY 1809 can be booked online with flexible packages.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: What makes Rajanukunte farmhouses unique compared to Yelahanka or Devanahalli?</h3><p>A: Rajanukunte offers more greenery, open spaces, and larger farm plots, making it quieter and more private.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are there luxury farmhouses in Rajanukunte for weddings?</h3><p>A: Yes, several large villas and estates are available with pools, big lawns, and banquet setups.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Is there a farmhouse for rent in Rajanukunte under ₹5,000?</h3><p>A: While rare, you can sometimes find smaller cottages or day-use options near Rajanukunte.</p></div>
                        </div>
                    </section>

                    {/* ---- CTA ---- */}
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Book DOZZY 1809 Farmhouse Today</h3>
                        <p className="mb-4">
                            Ready to celebrate? Book your DOZZY farmhouse in Rajanukunte today and enjoy the best mix of privacy, comfort, and nature, just a short drive from Bangalore city.
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
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-rajanukunte'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-rajanukunte';

    return {
        props: {
            canonicalUrl,
        }
    }
}
