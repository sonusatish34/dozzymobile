import React from 'react';
import dynamic from 'next/dynamic';
const HomeBanner = dynamic(() => import('./components/HomeBanner.js/HomeBanner'));
const ComponentName = (props) => {
    return (
        <div>
            <div className='text-black bg-white pt-7 px-2 py-2'>
                <div className='bg-white text-black lg:text-lg text-sm lg:leading-9 leading-7 lg:pt-2 pt-'>
                    <p className='font-bold lg:text-4xl text-3xl py-4 lg:px-16 px-2'>Welcome to Dozzy Farmhouse - Your Ultimate Place for Nature-Inspired Premium Stays</p>
                    <HomeBanner />
                    <div className='lg:px-16 px-2 pt-4'>
                        <p>Dozzy Farmhouse is your go-to solution for the ultimate nature-inspired stays. Whether you're planning a family getaway, a honeymoon, or simply seeking relaxation amidst nature, Dozzy is here to offer you unparalleled experiences. With over 1000 farmhouses affiliated with us, we ensure a diverse range of accommodations that fit your needs and budget.</p>
                        <p>Located in serene and peaceful surroundings, our farmhouses offer the ideal retreat for every type of traveler. From weekend getaways to long vacations, we have the perfect property waiting for you. Experience spacious rooms, lush greenery, barbeque nights, and poolside enjoyment for an unforgettable stay.</p>
                        <p>If you are planning a corporate event, our farmhouses provide the perfect atmosphere for team-building activities and workshops. For weddings, our farmhouses offer picturesque locations with beautiful interiors, making your special day even more memorable. And don’t worry, our farmhouses are affordable without compromising on quality, ensuring a delightful experience for every occasion.</p>
                        <p>For those looking for a fun-filled weekend or a relaxing family trip, our farmhouses are perfect for hosting parties, family events, or even pre-wedding shoots. With expansive open spaces, you can enjoy various activities while creating memories with your loved ones.</p>
                        <p className='py-4 font-bold lg:text-3xl'>Unbeatable Deals on Farmhouse Bookings</p>
                        <p>Take advantage of the amazing deals we offer at Dozzy Farmhouse:</p>
                        <ul>
                            <li><strong>Special Offers:</strong> Book your first visit to Dozzy Farmhouse and enjoy a 20% discount on the quoted price.</li>
                            <li><strong>Variety of Accommodations:</strong> From cozy cottages to large estates, find the perfect farmhouse for any occasion.</li>
                            <li><strong>Highly Rated Properties:</strong> Book through the Dozzy Farmhouse app to avail of exclusive offers on highly rated farmhouses.</li>
                        </ul>

                        <p className='py-4 font-bold lg:text-3xl'>Effortless Booking</p>
                        <p>Select your ideal farmhouse and reserve it in just a few simple steps. Our easy-to-use platform lets you browse listings, view images, and read reviews, ensuring a seamless booking process.</p>

                        <p className='py-4 font-bold lg:text-3xl'>Comprehensive Search Functionality</p>
                        <p>Our advanced search feature helps you locate your perfect farmhouse based on amenities, cost, location, and more, allowing you to narrow down your options effortlessly.</p>

                        <p className='py-4 font-bold lg:text-3xl'>Dozzy Offers: Available Every Day</p>
                        <p>We bring you amazing offers every day, including:</p>
                        <ul>
                            <li><strong>Always Active:</strong> Enjoy great deals for your stay, whether it's a weekday or weekend.</li>
                            <li><strong>No Security Deposit:</strong> Enjoy hassle-free booking with no security deposit required.</li>
                            <li><strong>Unlimited Guests:</strong> Invite as many friends and family as you want—our farmhouses are perfect for large groups.</li>
                        </ul>

                        <p className='py-4 font-bold lg:text-3xl'>Special Booking Perks</p>
                        <p>We offer special booking perks to make your stay even more rewarding:</p>
                        <ul>
                            <li><strong>24-Hour Stay Offer:</strong> Enjoy a ₹2000 discount on 24-hour bookings for a quick getaway.</li>
                            <li><strong>Discount for 12-Hour Stay:</strong> Get ₹1000 off on 12-hour bookings for a short, rejuvenating break.</li>
                        </ul>

                        <p className='py-4 font-bold lg:text-3xl'>Exclusive Amenities</p>
                        <p>Our farmhouses are equipped with top-notch amenities to enhance your stay:</p>
                        <ul>
                            <li><strong>Private Swimming Pool:</strong> Relax in your very own private pool.</li>
                            <li><strong>Private Kitchen:</strong> Cook your favorite meals in the fully equipped kitchen.</li>
                            <li><strong>Barbeque and Bonfire:</strong> Enjoy evenings by the bonfire with barbeque facilities at select properties.</li>
                            <li><strong>Entertainment:</strong> Enjoy music, movies, and games like cricket, carom, and chess.</li>
                            <li><strong>Wi-Fi Connection:</strong> Stay connected with free, fast internet throughout your visit.</li>
                            <li><strong>Power Backup:</strong> Never worry about power outages with our reliable backup systems.</li>
                            <li><strong>Water Purifier:</strong> Drink safe and pure water with built-in water purifiers.</li>
                            <li><strong>Geyser:</strong> Enjoy hot showers with reliable geyser facilities.</li>
                            <li><strong>Indoor and Outdoor Games:</strong> Play games like cricket and rounders or unwind with indoor games for a complete experience.</li>
                        </ul>

                        <p className='py-4 font-bold lg:text-3xl'>Booking Guidelines</p>
                        <p>We have simple guidelines to ensure a safe and pleasant experience for everyone:</p>
                        <ul>
                            <li><strong>ID Requirement:</strong> A clear Aadhar photo is required for all bookings.</li>
                            <li><strong>Punctual Checkout:</strong> Please respect the checkout time to ensure smooth transitions between guests.</li>
                            <li><strong>Damage Policy:</strong> Any damages to the property must be compensated by the guest.</li>
                            <li><strong>Prohibited Items:</strong> No narcotics, hookah pipes, or harmful substances allowed on the premises.</li>
                        </ul>

                        <p className='py-4 font-bold lg:text-3xl'>Check-in and Check-out Details</p>
                        <p>We offer flexible check-in and check-out options:</p>
                        <ul>
                            <li><strong>One-Day Stay:</strong> Check-in at 1 PM and checkout at 11 AM.</li>
                            <li><strong>Early/Late Options:</strong> Early check-ins or late checkouts are possible, based on availability.</li>
                            <li><strong>12-Hour Stay:</strong> Available after 1 PM on the day of booking. Cannot be pre-booked.</li>
                        </ul>

                        <p className='py-4 font-bold lg:text-3xl'>Why Choose Dozzy Farmhouse?</p>
                        <p>Here’s why Dozzy Farmhouse is the best choice for your stay:</p>
                        <ul>
                            <li><strong>Reliable and Secure:</strong> Our properties are safe and well-maintained for your peace of mind.</li>
                            <li><strong>24/7 Support:</strong> Our customer service team is available anytime to assist you before, during, and after your stay.</li>
                        </ul>

                        <p className='py-4 font-bold lg:text-3xl'>Getting Started with Dozzy Farmhouse</p>
                        <p>Ready to book your stay? Follow these easy steps:</p>
                        <ul>
                            <li><strong>Download the App:</strong> Get the Dozzy Farmhouse app from the App Store or Google Play.</li>
                            <li><strong>Sign Up:</strong> Create an account for access to exclusive farmhouses and deals.</li>
                            <li><strong>Search and Book:</strong> Find your perfect farmhouse and book in just a few clicks.</li>
                            <li><strong>Enjoy and Stay:</strong> Relax, enjoy the activities, and create unforgettable memories with loved ones.</li>
                        </ul>

                        <p className='py-4 font-bold lg:text-3xl'>Join the Dozzy Farmhouse Community</p>
                        <p>Stay updated on the latest offers, travel ideas, and tips by following us on social media. Download the Dozzy Farmhouse app today and start planning your next unforgettable trip!</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ComponentName;