import Head from 'next/head';

export default function TermsAndConditions() {
    return (
        <>
            <Head>
                <title>Shipping And Delivery</title>
                <meta name="description" content="Terms and Conditions for our website" />
                <link rel="icon" href="/favicon.ico" />
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
