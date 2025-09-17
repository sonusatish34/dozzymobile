import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NearByFarm from '../components/NearByFarm';

export default function Alakabelalu({ canonicalUrl }) {
    return (
        <div className='lg:leading-9 leading-8'>
            <Head>
                <title>Farmhouse Rentals in Alakabelalu, Bangalore | Dozzy</title>
                <meta
                    name="description"
                    content="Farmhouse rentals in and around Alakabelalu with pools, lawns, and event-ready spaces. Perfect for pre-wedding shoots, birthdays, anniversaries, and family retreats."
                />
                <link rel="canonical" href={canonicalUrl} />

            </Head>
            <div className="containe py-8">
                <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:px-16 px-2">
                    Farmhouse Rentals in and Around Alakabelalu
                </h1>
                <div>
                    <Image
                        src={'/blogimg/alakabelalu.webp'}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouse Rentals in Alakabelalu"
                        loading='lazy'
                    />
                </div>
                <div className='lg:px-16 px-2'>
                    <NearByFarm lat={'12.779123013029244'} lon={'77.52633615456749'} loc={'Alakabelalu'} />

                    <div className="text-lg max-w-none mb-8 lg:leading-9 leading-8">
                        <h2 className="text-2xl font-bold mb-4">Farmhouse near Alakabelalu for a Pre-Wedding Shoot</h2>
                        <p>
                            Alakabelalu is a special place that many people don’t know about it. Farmhouse Rentals in and Around Alakabelalu has lots of green plants, pretty places and amazing traditions.
                            This calm place gives visitors both beautiful nature and nice, comfortable things like in a city.
                            It is easy to travel from here to other towns and fun places. That makes it great for families, office groups, and people who want to plan parties.
                            This place has peace, easy travel and many ways to enjoy it.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose Farmhouse Rentals in Alakabelalu?</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Privacy & Space</li>
                            <li>Budget Flexibility</li>
                            <li>Event-Friendly</li>
                            <li>Nature Meets Comfort</li>
                        </ul>
                        <p>
                            Whether you want a <strong>birthday party farmhouse in Alakabelalu</strong> or a budget farmhouse with a swimming pool, you’ll find the perfect choice here.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Top Choice: Green Valley Farmhouse, Alakabelalu</h2>
                        <p className="mb-4">
                            For guests looking for the best farmhouse near Alakabelalu, Green Valley Farmhouse stands out for its excellent amenities, peaceful environment, and affordable pricing.
                        </p>
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
                                    <td className="border px-4 py-2">Dozzy 1816</td>
                                    <td className="border px-4 py-2">25</td>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2">₹15,000/22hrs</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="text-xl font-semibold mb-4">Amenities at Green Valley Farmhouse</h3>
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
                            Farmhouses in Alakabelalu provide for every type of event:
                        </p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Engagements & pre-wedding functions</li>
                            <li>Wedding anniversaries</li>
                            <li>Corporate team outings</li>
                            <li>Weekend family retreats</li>
                        </ul>
                        <p>
                            With flexible booking options, you can choose a farmhouse near Alakabelalu that suits your event size and budget.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Nearby Attractions Around Alakabelalu</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Nature Parks & Lakes: Ideal for morning walks, picnics, or photography.</li>
                            <li>Temples & Cultural Spots: Experience the spiritual side of Alakabelalu.</li>
                            <li>Local Markets: Perfect for trying regional cuisine and shopping.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose Alakabelalu for Your Farmhouse Experience?</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>In Alakabelalu, there are many farmhouses to choose from. You can pick the one you like best to stay in. DOZZY offers you the best farm stay experience.</li>
                            <li>The place is full of trees, plants, and open land. It is very quiet and calm, so you can relax without noise.</li>
                            <li>The farmhouse here has nice things like swimming pool, big yards, and party spaces. You can enjoy with your family and friends.</li>
                            <li>Alakabelalu has good roads, so it is easy to travel there from nearby towns or cities.</li>
                            <li>There are temples, educational spots and cultural spots, and fun places to visit.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">FAQs – Farmhouse Rentals in Alakabelalu</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: What is the average price of a farmhouse in Alakabelalu?</h3>
                                <p>A: Prices range from ₹8,000 to ₹20,000 per day depending on amenities and capacity.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Are there farmhouses with swimming pools?</h3>
                                <p>A: Yes, several options, including Green Valley Farmhouse, offer private swimming pools.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Can I book a farmhouse for a birthday party?</h3>
                                <p>A: Absolutely! Many farmhouses are event-ready with lawns, seating areas, and music systems.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: How can I book a farmhouse in Alakabelalu?</h3>
                                <p>A: Most bookings can be made online or via local rental services with flexible pricing options.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Q: Are budget-friendly options available?</h3>
                                <p>A: Yes, you can find budget farmhouse rentals in Alakabelalu for smaller groups or day events.</p>
                            </div>
                        </div>
                    </section>

                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Book DOZZY 1800 Farmhouse in Alakabelalu Today</h3>
                        <p className="mb-4">
                            Experience the perfect farmhouse stay in Alakabelalu with Dozzy. Choose comfort, privacy, and celebration for your next event.
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
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-alakabelalu'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-alakabelalu.';

    return {
        props: {
            canonicalUrl,
        }
    };
}