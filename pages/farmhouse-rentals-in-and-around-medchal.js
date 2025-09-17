import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import medchal from '@/public/hyddozzy/Medchal.webp'
import NearByFarm from './components/NearByFarm'

/* Exact Medchal content taken verbatim from your DOCX: :contentReference[oaicite:1]{index=1} */

function Medchal({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Farmhouse Rentals in and Around Medchal, Hyderabad</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Medchal has grown into one of the most popular weekend destinations near Hyderabad. Book private farmhouses with pools, lawns, and box cricket setups." />
                <meta property="og:title" content="Farmhouse Rentals in and Around Medchal, Hyderabad" />
                <meta property="og:description" content="Medchal has grown into one of the most popular weekend destinations near Hyderabad. Book private farmhouses with pools, lawns, and box cricket setups." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <div className='lg:px-20 px-4'>
                    <h1 className='font-bold text-lg lg:text-2xl py-2'>
                        Farm house with Box Cricket in Hyderabad, Medchal Area
                    </h1>
                </div>

                <div>
                    <Image
                        src={medchal}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouses in Medchal with box cricket and pool"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'17.63267218131924'} lon={'78.48045610709845'} loc={"Medchal"} />

                    <p>
                        Medchal has grown into one of the most popular weekend destinations near Hyderabad. Known for its peaceful lakes, green cover, and proximity to National Highway 44, it offers quick access while giving you a refreshing escape from the city. Attractions like Medchal Lake, local temples, and forest patches make it an ideal spot for those looking to combine relaxation with scenic surroundings. Whether you want a quick getaway or a space to celebrate with friends and family, Medchal has the right mix of comfort and nature. With Dozzy, you can easily book a private farmhouse in Hyderabad under 10000, with pools, lawns, and all the amenities for a private outing.
                    </p>

                    <p className='font-bold text-lg py-2'>Why Choose a Farmhouse in Medchal</p>
                    <p>
                        Medchal is perfect if you want open spaces, peaceful settings, and easy road access without traveling too far. It’s one of the top choices for a farm house near Hyderabad (Medchal area) because it combines accessibility with privacy. Whether you’re hosting a birthday, a family reunion, a bachelor party, or a weekend trip, you’ll find both premium villas and budget friendly farmhouses here.
                    </p>

                    <p>
                        Many farmhouses in Medchal come with private pools, lawns for games, BBQ setups, and sound systems for late-night music. Some even have indoor games and outdoor courts, making it a versatile location for gatherings of all types. With both affordable and premium options, Medchal has become one of the best spots for a farmhouse in Hyderabad.
                    </p>

                    <p className='font-bold text-lg py-2'>Top Farmhouses for Rent in Hyderabad (Medchal Area)</p>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-sm lg:text-base">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-2 text-left">Farmhouse Name</th>
                                    <th className="border p-2 text-left">No of Bedrooms</th>
                                    <th className="border p-2 text-left">Price</th>
                                    <th className="border p-2 text-left">No of People Allowed</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2">Dozzy 1727</td>
                                    <td className="border p-2">2</td>
                                    <td className="border p-2">6000 / 11 hrs; 7000 / 22 hrs</td>
                                    <td className="border p-2">10</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">Dozzy 1696</td>
                                    <td className="border p-2">2</td>
                                    <td className="border p-2">8000 / 11 hrs; 10000 / 22 hrs</td>
                                    <td className="border p-2">12</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">Dozzy 1854</td>
                                    <td className="border p-2">3</td>
                                    <td className="border p-2">8000 / 11 hrs; 10000 / 22 hrs</td>
                                    <td className="border p-2">12</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">Dozzy 1813</td>
                                    <td className="border p-2">6</td>
                                    <td className="border p-2">12000 / 11 hrs; 14000 / 22 hrs</td>
                                    <td className="border p-2">22</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">Dozzy 1632</td>
                                    <td className="border p-2">4</td>
                                    <td className="border p-2">15000 / 11 hrs; 16000 / 22 hrs</td>
                                    <td className="border p-2">20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className='py-2'>
                        We also allow you to include additional guests beyond the listed capacity at ₹400 per person, making it easier for larger groups to enjoy the farmhouse together.
                    </p>

                    <p className='font-bold text-lg py-2'>Why You Can Trust Dozzy</p>
                    <p>
                        Finding the right farmhouse online can be stressful, but Dozzy makes the process easy and transparent. Here’s what you get:
                    </p>
                    <ul className='list-disc pl-5'>
                        <li>Verified farmhouses in and around Medchal</li>
                        <li>Filters for price, amenities, and group size</li>
                        <li>Budget friendly farmhouses as well as premium stays</li>
                        <li>Secure bookings with no hidden charges</li>
                        <li>Real photos and detailed listings</li>
                        <li>Flexible 11-hour and 22-hour stay slots</li>
                        <li>Farmhouses with pools, BBQ setups, and indoor/outdoor games</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Event-Specific Farmhouse Uses</p>
                    <p>
                        With Dozzy, you can find a farmhouse in Medchal tailored for your event:
                    </p>
                    <ul className='list-disc pl-5'>
                        <li>Birthday parties with pool access and music setups</li>
                        <li>Corporate team outings with open lawns and activity areas</li>
                        <li>Family get-togethers with kid-friendly spaces and bonfires</li>
                        <li>Couple-friendly stays for a calm weekend escape</li>
                        <li>Bachelor and bachelorette parties with alcohol-permitted options and sound systems</li>
                        <li>Pre-Wedding Shoots – Scenic backdrops with greenery and pools</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Nearby Attractions of Medchal, Hyderabad</p>
                    <p>
                        Medchal is not just known for its peaceful farmhouses and green surroundings. The area is surrounded by a mix of cultural, spiritual, and natural attractions that make every trip more exciting:
                    </p>
                    <ul className='list-disc pl-5'>
                        <li>Medchal Sri Venkateswara Swamy Temple – A famous temple dedicated to Lord Venkateswara, attracting devotees from across the region.</li>
                        <li>Maisigandi Maisamma Temple – A unique open-air temple with a huge idol of Goddess Maisamma, offering a one-of-a-kind spiritual experience.</li>
                        <li>Shamirpet Lake – A scenic lake known for boating and birdwatching, perfect for evening getaways and picnics.</li>
                        <li>Shamirpet Deer Park – Located near the lake, this park is home to herds of deer and other wildlife, ideal for a family outing.</li>
                        <li>Durgam Cheruvu (a short drive) – Also called the “Secret Lake,” surrounded by rocks and greenery, a great place for relaxation and photography.</li>
                        <li>Snow World (Hyderabad side) – One of India’s largest snow-themed parks, just a drive away, offering fun rides and activities.</li>
                    </ul>

                    {/* FAQ Section */}
                    <div className="container py-6">
                        <p className="font-bold text-lg py-2">Frequently Asked Questions on Farmhouses in Medchal</p>

                        <div className="mb-4">
                            <p className="font-semibold">1. Can I book a farmhouse in Hyderabad under 10000 in Medchal?</p>
                            <p>Yes. Dozzy lists multiple farmhouses in Medchal priced under ₹10000, many with pools, lawns, and flexible booking options.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">2. What facilities do farmhouses in Medchal usually provide?</p>
                            <p>Most farmhouses include private pools, BBQ setups, lawns, parking, sound systems, indoor games, and outdoor sports areas.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">3. Is Medchal a good location for a farm house near Hyderabad?</p>
                            <p>Definitely. Medchal is known for its peaceful atmosphere, scenic greenery, and quick access from the highway, making it ideal for group getaways.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">4. Are there budget-friendly farmhouses in Medchal?</p>
                            <p>Yes. You’ll find affordable farmhouses starting around ₹7000, which are perfect for smaller groups and short trips.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">5. How do I book a farmhouse in Medchal with Dozzy?</p>
                            <p>Just enter your date, group size, and budget on the Dozzy app or website. You can compare listings, check real photos, and book instantly.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">6. How far is Medchal from central Hyderabad?</p>
                            <p>Medchal is about 30–35 km away and usually takes around 45 minutes to an hour by road.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">7. Do Medchal farmhouses allow alcohol and music systems?</p>
                            <p>Yes, many farmhouses permit alcohol and provide music setups for parties, but it’s best to confirm in the listing details.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">8. Are farmhouses in Medchal good for birthdays and corporate events?</p>
                            <p>Absolutely. Spacious lawns, pools, and open areas make them perfect for birthdays, anniversaries, and office outings.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">9. Do budget farmhouses in Medchal also have pools?</p>
                            <p>Yes, several affordable farmhouses under ₹10000 include private pools along with lawns and indoor entertainment.</p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold">10. Can I book a farmhouse in Medchal for a one-day trip?</p>
                            <p>Yes, most farmhouses offer flexible 11-hour and 22-hour packages, making them ideal for both day trips and overnight stays.</p>
                        </div>
                    </div>

                    <div className='pt-4'>
                        <p className='text-lg font-bold'>Conclusion</p>
                        <p>
                            If you’re planning a trip or celebration, Medchal is one of the best places to book a farmhouse in Hyderabad. From budget friendly farmhouses to premium villas, you’ll find everything from a farmhouse in Hyderabad under 10000 to luxury stays with pools and lawns. With Dozzy, booking your next getaway is simple, reliable, and affordable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Medchal

export async function getServerSideProps({ req }) {
    const host = req.headers.host
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/farmhouse-rentals-in-medchal'
        : 'https://www.dozzy.com/farmhouse-rentals-in-medchal'

    return {
        props: {
            canonicalUrl,
        }
    }
}
