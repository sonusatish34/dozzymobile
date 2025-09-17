import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import mathikereImage from '../../public/blogimg/mathikere.webp'; // Replace this with your actual image
import NearByFarm from '../components/NearByFarm';

function Mathikere({ canonicalUrl }) {
    return (
        <div className='bg-white'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Farmhouse Rentals in Mathikere – Party Venues in Bangalore</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Book private farmhouses in Mathikere for parties, family get-togethers, and weekend escapes. Spacious lawns, private pools, and event-ready venues near Bangalore." />
                <meta property="og:title" content="Farmhouse Rentals in Mathikere – Party Venues in Bangalore" />
                <meta name="og:description" content="Book private farmhouses in Mathikere for parties, family get-togethers, and weekend escapes. Spacious lawns, private pools, and event-ready venues near Bangalore." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className='text-black leading-9 lg:leading-10 pt-4 lg:pt-16'>
                <h1 className='font-bold text-xl lg:text-3xl py-2 lg:px-20 px-4'>Farmhouse for Rent in Mathikere, Bangalore</h1>

                <div>
                    <Image
                        src={mathikereImage}
                        height={2000}
                        width={2000}
                        className='py-3 object-cover w-full'
                        alt="Farmhouse for rent in Mathikere near Bangalore"
                        loading='lazy'
                    />
                </div>

                <div className='lg:px-20 px-4'>
                    <NearByFarm lat={'13.0334'} lon={'77.5640'} loc={'Mathikere '} />

                    <p>Mathikere is a unique part of North Bangalore—where you’ll find a mix of scenic lakes, top educational institutions like IISc, and spiritual sites like ISKCON Temple. Whether you're planning a weekend getaway or a special event, the area offers a blend of greenery and urban convenience.</p>

                    <p>With places like Hebbal Lake, Sankey Tank, and Orion Mall just minutes away, Mathikere makes for a smart and central location for short breaks. That’s why Dozzy1877 farmhouse near Mathikere has become a top choice for everything from birthday parties to corporate meetups.</p>

                    <p className='font-bold text-lg py-2'>Why Farmhouses in Mathikere Are in Demand</p>
                    <ul className='list-disc pl-6'>
                        <li><strong>Privacy:</strong> Your own space—no shared halls, no interruptions.</li>
                        <li><strong>Freedom:</strong> Cook, dance, or chill—no rules like hotels.</li>
                        <li><strong>Space:</strong> Lawns, pools, indoor lounges—perfect for any group.</li>
                        <li><strong>Budget Options:</strong> From affordable spots to luxurious villas.</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Top-Rated Farmhouse – DOZZY 1877</p>
                    <p>Among all the farmhouse rentals in and around Mathikere, DOZZY 1877 stands out for its spacious setting, affordability, and event-friendly design.</p>
                    <ul className='list-disc pl-6'>
                        <li><strong>Capacity:</strong> Up to 20 people</li>
                        <li><strong>Bedrooms:</strong> 5 BHK</li>
                        <li><strong>Price:</strong> ₹15,000 for 22 hours</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Amenities at DOZZY 1877</p>
                    <ul className='list-disc pl-6'>
                        <li>Private swimming pool</li>
                        <li>Large green lawn for games and events</li>
                        <li>Outdoor BBQ and dining setup</li>
                        <li>AC bedrooms with TV</li>
                        <li>Fully equipped kitchen with fridge and utensils</li>
                        <li>Indoor seating and dining area</li>
                        <li>Power backup</li>
                        <li>Music system for parties</li>
                        <li>Ample parking space</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Perfect for All Occasions</p>
                    <ul className='list-disc pl-6'>
                        <li>Birthday parties</li>
                        <li>Pre-wedding celebrations & engagement events</li>
                        <li>Family get-togethers & reunions</li>
                        <li>Weekend trips with friends</li>
                        <li>Corporate outings</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>Nearby Attractions in and Around Mathikere</p>
                    <ul className='list-disc pl-6'>
                        <li><strong>Hebbal Lake:</strong> Ideal for a peaceful morning walk or boating.</li>
                        <li><strong>Orion Mall:</strong> Popular for shopping, movies, and restaurants.</li>
                        <li><strong>Lumbini Gardens:</strong> Perfect for kids and families—rides and water activities.</li>
                        <li><strong>ISKCON Temple:</strong> One of Bangalore’s major spiritual landmarks.</li>
                    </ul>

                    <p className='font-bold text-lg py-2'>FAQs – Farmhouse Rentals in and Around Mathikere</p>
                    <p><strong>Q: What makes Mathikere ideal for farmhouses?</strong><br />
                        Mathikere combines serene lakes like Mathikere Lake with parks such as JP Park (85+ acres) and is near top colleges and temples, making it balanced and peaceful.</p>

                    <p><strong>Q: Is it easy to reach Mathikere?</strong><br />
                        Yes. It's well-connected by BMTC buses, metro stations like Yeshwanthpur & Sandal Soap Factory, and ride-hailing services.</p>

                    <p><strong>Q: Is Mathikere family-friendly?</strong><br />
                        Absolutely. Schools, hospitals, parks, and a peaceful layout make it one of the best neighborhoods for families in Bangalore.</p>

                    <p><strong>Q: Are there parks and nature spots nearby?</strong><br />
                        Yes. JP Park, Mathikere Lake, Lalbagh Botanical Garden, and Hebbal Lake are all nearby for recreation and relaxation.</p>

                    <p className='font-bold text-lg py-2'>Final Word</p>
                    <p>If you're looking for a blend of comfort, space, and easy access to Bangalore’s top destinations, book DOZZY 1877 in Mathikere today.</p>

                    <p>Download the Dozzy app on the <Link className='text-blue-700 underline' href='https://play.google.com/store/apps/details?id=com.dozzy_customer'>Play Store</Link> or <Link className='text-blue-700 underline' href='https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530'>App Store</Link>, or visit the website: <a href="https://www.dozzy.com" className='text-blue-500 underline'>https://www.dozzy.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Mathikere;

export async function getServerSideProps({ req }) {
    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
        ? 'https://www.dozzy.in/bangalore/farmhouse-rentals-in-and-around-mathikere'
        : 'https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-mathikere';

    return {
        props: {
            canonicalUrl,
        }
    };
}
