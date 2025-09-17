import React, { useState } from 'react';

const FAQComponent = ({ city }) => {
    const faqData = [
        {
            question: 'What is Dozzy and how does it help with farmhouse rentals in Hyderabad?',
            answer: "<p>Dozzy is a digital platform that makes it easy to find and book a farmhouse in Hyderabad or a farmhouse in Bangalore. It provides real photos, pricing, and availability for different farmhouse rental options.</p>"
        },
        {
            question: 'What kinds of farmhouses for rent are available and what are the prices?',
            answer: "<p>Dozzy offers different categories of rental farmhouses including Basic farmhouses under ₹6,000, Premium under ₹10,000, and Luxury under ₹20,000. Whether you need a farmhouse in Hyderabad for a party or a farmhouse in Bangalore for a getaway, Dozzy provides transparent pricing and real photos.</p>"
        },
        {
            question: 'What amenities do Dozzy’s rental farmhouses in Hyderabad include?',
            answer: "<p>Most farmhouses for rent through Dozzy include private swimming pools, music systems, barbecues, home theaters, gardens, and sports setups. These farmhouse rentals in Hyderabad and Bangalore are designed for parties, events, and family gatherings.</p>"
        },
        {
            question: 'Are there discounts available on farmhouse rentals in Hyderabad?',
            answer: "<p>Yes, Dozzy often provides discounts. Seasonal offers are available on selected farmhouse rentals in Hyderabad and farmhouse rentals in Bangalore.</p>"
        },
        {
            question: 'What is the cancellation or refund policy for farmhouse rental bookings?',
            answer: "<p>Once booked, farmhouse rentals are non-refundable. However, customers can visit the farmhouse in Hyderabad or farmhouse in Bangalore one hour before booking time to confirm facilities before use.</p>"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="p-4 w-full mx-auto">
            <p className="uppercase p-2 mb-4 text-center text-black font-bold text-2xl sm:text-3xl lg:text-3xl">
                Frequently asked questions
            </p>
            {faqData.map((item, index) => (
                <div key={index} className="border-b-2 border-gray-300 rounded mb-4 text-black">
                    <div
                        className="flex justify-between items-center px-4 py-3 cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="text-sm sm:text-base lg:text-lg font-semibold capitalize">{item.question}</span>
                        <svg
                            className={`w-6 h-6 rounded bg-[#660066] text-white transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div
                        className={`transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}
                    >
                        <div className="px-4 text-xs sm:text-sm lg:text-base leading-6 lg:leading-9" dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQComponent;
