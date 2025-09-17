import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NearByFarm from '../components/NearByFarm';

export default function Nidamakanahalli({ canonicalUrl }) {
    return (
        <div className="lg:leading-9 leading-8">
            <Head>
                <title>Farmhouse Rentals in Nidamakanahalli, Bangalore | Dozzy</title>
                <meta
                    name="description"
                    content="Farmhouse rentals in and around Nidamakanahalli with fully equipped kitchens, pools, lawns, and modern amenities. Perfect for birthdays, family gatherings, corporate events, and weekend escapes."
                />
                {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            </Head>

            <div className="containe py-8">
                <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:px-16 px-2">
                    Farmhouse Rentals in and Around Nidamakanahalli
                </h1>
                <div>
                    <Image
                        src={'/blogimg/nidamakanahalli.webp'}
                        height={2000}
                        width={2000}
                        className="py-3 object-cover w-full"
                        alt="Farmhouse Rentals in Nidamakanahalli"
                        loading="lazy"
                    />
                </div>

                <div className="lg:px-16 px-2">
                    {/* ---- INTRO ---- */}
                     <NearByFarm lat={'12.86434460531312'} lon={'78.07739242439234'} loc={'Nidamakanahalli '} />
                    <div className="text-lg max-w-none mb-8 lg:leading-9 leading-8">
                        <h2 className="text-2xl font-bold mb-4">Farm House for Rent in Nidamakanahalli, Bangalore with Fully Equipped Kitchen</h2>
                        <p>
                            Nidamakanahalli is a quiet place with lots of trees, open skies, and peaceful roads. It may not be very famous, but that makes it even more special.
                            Families, friends, and even office groups like to come here to relax and spend time away from the busy city.
                        </p>
                        <p>
                            The best thing about farmhouses in Nidamakanahalli is that they are quiet and peaceful like the countryside, but also have all the nice, modern things needed.
                            You can celebrate birthdays, have fun with your office team, or just relax with your family and friends on the weekends.
                            There are many places to choose from, and they fit both how you feel and how much money you want to spend.
                        </p>
                    </div>

                    {/* ---- WHY CHOOSE ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose Farmhouse Rentals in Nidamakanahalli?</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Privacy and Space – Perfect for families, office groups, and friends who want a place to themselves.</li>
                            <li>Budget Flexibility – From affordable farm stays to premium villas, there’s something for every pocket.</li>
                            <li>Event-Ready Venues – Lawns, pools, and open seating areas make celebrations stress-free.</li>
                            <li>Easy Connectivity – Good road links mean it’s accessible for guests traveling from nearby towns or cities.</li>
                        </ul>
                        <p>So, whether it is a birthday party farmhouse in Nidamakanahalli or a budget farmhouse with a swimming pool, you will have plenty of options.</p>
                    </section>

                    {/* ---- FARMHOUSE DETAILS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Dozzy 1893 – The Highlight Farmhouse in Nidamakanahalli</h2>
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
                                    <td className="border px-4 py-2">Dozzy 1893</td>
                                    <td className="border px-4 py-2">25</td>
                                    <td className="border px-4 py-2">7</td>
                                    <td className="border px-4 py-2">₹26,000 / 22 hrs</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="text-xl font-semibold mb-4">Amenities at Dozzy 1893:</h3>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Private swimming pool</li>
                            <li>Wide green lawn for parties & outdoor games</li>
                            <li>Fully equipped kitchen with fridge, utensils, and cooking setup</li>
                            <li>AC bedrooms with TVs</li>
                            <li>Outdoor BBQ and dining space</li>
                            <li>Kids’ play area</li>
                            <li>Spacious indoor seating & dining areas</li>
                            <li>Parking for multiple vehicles</li>
                            <li>Power backup for uninterrupted stays</li>
                        </ul>
                        <p>It’s perfect for everything from intimate birthday celebrations to large group outings.</p>
                    </section>

                    {/* ---- EVENTS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Events You Can Host in Farmhouses</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Birthday parties & anniversaries</li>
                            <li>Pre-wedding photoshoots & engagement events</li>
                            <li>Corporate team outings & reunions</li>
                        </ul>
                    </section>

                    {/* ---- ATTRACTIONS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Nearby Attractions in and Around Nidamakanahalli</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Nature Parks & Lakes – Walk in the morning or picnic with family.</li>
                            <li>Temples & Spiritual Spots – Peaceful places for prayer and meditation.</li>
                            <li>Short Drives to Nearby Towns – Shop, eat, or explore new places.</li>
                        </ul>
                    </section>

                    {/* ---- WHY DOZZY ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why DOZZY is Perfect for a Farmhouse Experience</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>There are many farmhouses you can choose from DOZZY</li>
                            <li>They have big lawns, swimming pools, and space for parties.</li>
                            <li>The place is very peaceful, so you don’t hear the loud noise.</li>
                            <li>It is easy for people to travel there by road from Bangalore, Tumkur, or nearby towns.</li>
                            <li>The farmhouses are close to nature, but still have all the things you need to feel comfortable.</li>
                        </ul>
                    </section>

                    {/* ---- FAQ ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">FAQs – Farmhouse Rentals in and around Nidamakanahalli</h2>
                        <div className="space-y-6">
                            <div><h3 className="text-xl font-semibold mb-2">Q: What is the price range of farmhouses in Nidamakanahalli?</h3><p>A: Most farmhouses range between ₹10,000 to ₹20,000 per day, depending on size and amenities.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Do all farmhouses here have swimming pools?</h3><p>A: Not all, but Dozzy 1893 and several nearby options include private pools.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can I rent a farmhouse for a birthday party?</h3><p>A: Yes, most are party-ready with lawns, sound systems, and seating setups.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: How do I book Dozzy 1893 Farmhouse?</h3><p>A: You can book directly online or through local farmhouse rental services.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are there farmhouses under ₹10,000?</h3><p>A: Yes</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Is Nidamakanahalli well connected by road?</h3><p>A: Yes, it’s easily accessible from Bangalore and nearby towns via main highways.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can farmhouses host corporate team outings?</h3><p>A: Absolutely, many groups book them for team-building games, pool activities, and meetings.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: What amenities are included?</h3><p>A: Pools, lawns, kitchens, BBQ setups, play areas, and parking are common.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are kids-friendly farmhouses available?</h3><p>A: Yes, many come with kids’ pools and play zones.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can I find a farmhouse near Nidamakanahalli that is also suitable for families?</h3><p>A: Yes</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Which is the best farmhouse near Bangalore for weekend getaways?</h3><p>A: Dozzy 1893 in Nidamakanahalli is one of the best options, as it’s close to Bangalore and designed for both small celebrations and large group stays.</p></div>
                        </div>
                    </section>

                    {/* ---- CTA ---- */}
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Book Dozzy 1893 Farmhouse in Nidamakanahalli Today</h3>
                        <p className="mb-4">Make your celebration one to remember. Whether small or big, Dozzy 1893 has the space and amenities for all.</p>
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
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-nidamakanahalli'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-nidamakanahalli';

    return {
        props: {
            canonicalUrl,
        }
    }
}
