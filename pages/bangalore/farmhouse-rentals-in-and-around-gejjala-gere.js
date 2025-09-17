import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NearByFarm from '../components/NearByFarm';

export default function GejjalaGere({ canonicalUrl }) {
    return (
        <div className="lg:leading-9 leading-8">
            <Head>
                <title>Farmhouse Rentals in Gejjala Gere, Bangalore | Dozzy</title>
                <meta
                    name="description"
                    content="Farmhouse rentals in and around Gejjala Gere with pools, lawns, and modern amenities. Perfect for birthdays, pre-wedding shoots, family retreats, and corporate outings."
                />
                {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            </Head>

            <div className="containe py-8">
                <h1 className="lg:text-4xl text-xl font-bold mb-4 lg:px-16 px-2">
                    Farmhouse Rentals in and Around Gejjala Gere, Bangalore
                </h1>

                <div>
                    <Image
                        src={'/blogimg/gejjalagere.webp'}
                        height={2000}
                        width={2000}
                        className="py-3 object-cover w-full"
                        alt="Farmhouse Rentals in Gejjala Gere"
                        loading="lazy"
                    />
                </div>

                <div className="lg:px-16 px-2">
                    {/* ---- INTRO ---- */},
                    <NearByFarm lat={'12.569918807608392'} lon={'76.99923382888936'} loc={'Gejjala Gere'} />
                    <div className="text-lg max-w-none mb-8 lg:leading-9 leading-8">
                        <h2 className="text-2xl font-bold mb-4">Best Farm House in Gejjala Gere for Weekend Family Retreat</h2>
                        <p>
                            This place feels peaceful and not noisy. When people visit, they can relax and enjoy the calm air away 
                            from busy roads and crowds. Gejjala Gere is only 28 kilometres away from Bangalore, so it does not take 
                            long to travel there by car. It is also close to Mysore Road, which makes it easy for people to reach.
                        </p>
                        <p>
                            There is a pretty lake in Gejjala Gere. The lake has lots of green plants around it and big open skies, 
                            making it look beautiful and fresh.
                        </p>
                        <p>
                            Many weekend places are crowded, but Gejjala Gere still feels clean, open, and not packed with people. 
                            People who want comfort and privacy choose to rent farmhouses here. These farmhouses give families and 
                            groups their own space to relax, play and have fun.
                        </p>
                        <p>
                            At night, the lawns are open and people set up lights. Everyone gathers to listen to music, cook barbecue, 
                            and laugh together with friends and family.
                        </p>
                        <p>
                            For anyone searching for a farmhouse rental in and around Gejjala Gere, Gejjala Gere is a smart choice 
                            because it balances nature and event-ready spaces.
                        </p>
                    </div>

                    {/* ---- WHY CHOOSE ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why Choose a Farmhouse in Gejjala Gere?</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Privacy and Exclusivity: Full property for your group only.</li>
                            <li>Budget friendly options: Farmhouses start from ₹8,000 to ₹30,000 per day.</li>
                            <li>Event ready: Lawns, pools, indoor halls, and BBQ setups perfect for parties and outings.</li>
                            <li>Easy Access: Located close to Mysore Road and connected to the city within an hour’s drive.</li>
                        </ul>
                    </section>

                    {/* ---- TABLE ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Farmhouse Rentals in Gejjala Gere</h2>
                        <table className="w-full border border-gray-300 mb-6 text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2">Farmhouse Name</th>
                                    <th className="border px-4 py-2">Capacity</th>
                                    <th className="border px-4 py-2">Bedrooms</th>
                                    <th className="border px-4 py-2">Price (per day)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">DOZZY 1886</td>
                                    <td className="border px-4 py-2">20</td>
                                    <td className="border px-4 py-2">5</td>
                                    <td className="border px-4 py-2">₹15,500</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="mb-4"><strong>Key Features:</strong> Private pool, large lawn, BBQ, modern interiors</p>
                        <p><strong>Pro Tip:</strong> For budget bookings, weekdays are cheaper than weekends.</p>
                    </section>

                    {/* ---- EVENTS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Farmhouses in Gejjala Gere for Every Occasion</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li><strong>Birthday Parties:</strong> Celebrate with lawns decorated in lights, music system, and private pools. Perfect for both family gatherings and birthdays.</li>
                            <li><strong>Corporate Team Outings:</strong> Break away from office life with pool activities, outdoor games, and open lawns that encourage team bonding.</li>
                            <li><strong>Pre-Wedding & Engagements:</strong> Beautiful backgrounds, party grasses, and indoor halls make Gejjala Gere a popular choice for pre-wedding functions and photoshoots.</li>
                        </ul>
                    </section>

                    {/* ---- ATTRACTIONS ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Nearby Attractions Around Gejjala Gere</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Manchanabele Dam – Great for photography, picnics, and boating.</li>
                            <li>Dodda Alada Mara (Big Banyan Tree): A 400 years old big tree spread over 3 acres.</li>
                            <li>Wonderla Amusement Park – Just a short drive away, perfect for thrill-seekers.</li>
                            <li>Mysore Road Adventure Spots – Go-karting, paintball, and adventure camps nearby.</li>
                        </ul>
                    </section>

                    {/* ---- FAQ ---- */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">FAQs – Farmhouse Rentals in and Around Gejjala Gere</h2>
                        <div className="space-y-6">
                            <div><h3 className="text-xl font-semibold mb-2">Q: What is the average price of a farmhouse in Gejjala Gere?</h3><p>A: Prices range between ₹8,500 to ₹30,000 per day depending on amenities and group size. Most farmhouse rentals in Gejjala Gere are budget-friendly compared to other farmhouse rentals in Bangalore.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are there budget farmhouses under ₹10,000?</h3><p>A: Yes, DOZZY farmhouses are under ₹10,000. These are ideal if you’re searching for a budget farmhouse in Gejjala Gere or a farmhouse near Bangalore with pool at an affordable rate.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Do farmhouses here have swimming pools?</h3><p>A: Many do, DOZZY 1886. If you’re looking for a farmhouse with pool in Gejjala Gere or planning a birthday party farmhouse in Bangalore, these are the best choices.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: How far is Gejjala Gere from Bangalore city?</h3><p>A: It’s about 28 km, which takes 45–50 minutes by road.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are these farmhouses pet-friendly?</h3><p>A: Some allow pets, but it’s best to confirm before booking.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can I book for just a day outing?</h3><p>A: Yes, several farmhouses allow 12-hour or 22-hour bookings.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Are there options for large groups above 40 people?</h3><p>A: Yes.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Is alcohol allowed inside the farmhouses?</h3><p>A: Most allow it, but a few have restrictions. Always check beforehand.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Do they provide catering services?</h3><p>A: Some do, while others allow you to bring your own food or hire outside catering.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: What safety features are available?</h3><p>A: Properties usually include CCTV, secure parking, and staff on-site.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: Can we play music at night?</h3><p>A: Yes, but volume limits may apply depending on location rules.</p></div>
                            <div><h3 className="text-xl font-semibold mb-2">Q: How can I book a farmhouse in Gejjala Gere?</h3><p>A: Bookings can be made online or directly with owners. DOZZY 1886 offers secure booking options.</p></div>
                        </div>
                    </section>

                    {/* ---- CTA ---- */}
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Book DOZZY 1886 Today</h3>
                        <p className="mb-4">
                            Don’t wait too long—weekend slots fill up fast. Book DOZZY 1886 today and make your Gejjala Gere celebration unforgettable.
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
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-gejjala-gere'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-gejjala-gere';

    return {
        props: {
            canonicalUrl,
        }
    }
}
