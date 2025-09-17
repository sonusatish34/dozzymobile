import Head from 'next/head';

export default function TermsAndConditions({ canonicalUrl }) {
    return (
        <>

            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>How Dozzy Delivers Farmhouse Stays to You</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="We make it easy to book and get your farmhouse. Everything is quick and simple, so you can relax and have fun on your trip." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="How Dozzy Delivers Farmhouse Stays to You" />
                <meta name="og:description" content="We make it easy to book and get your farmhouse. Everything is quick and simple, so you can relax and have fun on your trip." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className="min-h-screen bg-gray-100 py-8 px-4 text-black text">
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <p className="lg:text-3xl text-xl font-bold text-center text-[#556ee6] mb-6">Shipping And Delivery</p>
                    <p className="text-sm lg:text-lg mb-4  md:text-left">
                        Please review our Shipping and Delivery policies carefully before making your farmhouse booking.
                    </p>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-[#556ee6]">Cancellation & Refund Policy</h2>
                        <p className="text-sm lg:text-lg">
                            There is no refund for cancellation.
                        </p>

                        <h2 className="text-xl font-semibold text-[#556ee6]">Payment Policy</h2>
                        <p className="text-sm lg:text-lg">
                            Remaining due payment should be done before check-in time, else the gates will not be opened and the booking will be canceled.
                        </p>

                        <h2 className="text-xl font-semibold text-[#556ee6]">Prohibited Items</h2>
                        <p className="text-sm lg:text-lg">
                            Hookah, ganja, and drugs are not allowed.
                        </p>

                        <h2 className="text-xl font-semibold text-[#556ee6]">Customer Responsibility</h2>
                        <p className="text-sm lg:text-lg">
                            Customers should be responsible for their belongings in the house.
                        </p>

                        <h2 className="text-xl font-semibold text-[#556ee6]">Penalty and Fines</h2>
                        <p className="text-sm lg:text-lg">
                            A penalty of ₹2500 will be collected from the customer for misbehavior, and any damage amount will be collected as per the damage caused.
                        </p>
                        <p className="text-sm lg:text-lg">
                            A ₹500 fine will be collected for broken beer bottles.
                        </p>
                        <p className="text-sm lg:text-lg">
                            A ₹1500 fine will be charged for vomit cleaning.
                        </p>

                        <h2 className="text-xl font-semibold text-[#556ee6]">Alcohol Consumption</h2>
                        <p className="text-sm lg:text-lg">
                            Only individuals above 21 years of age are allowed to consume alcohol (limited).
                        </p>

                        <h2 className="text-xl font-semibold text-[#556ee6]">Alcohol Limitations</h2>
                        <p className="text-sm lg:text-lg">
                            Please note that only limited alcohol is allowed, specifically quantities below 6 liters. If you're booking an event, it's mandatory to obtain the necessary alcohol permit from the Excise Department.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps({ req, query, params }) {

    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
        ? `https://www.dozzy.in/shipping-and-delivery`
        : `https://www.dozzy.com/shipping-and-delivery`;

    return {
        props: {
            canonicalUrl: canonicalUrl,
        }
    };
} 