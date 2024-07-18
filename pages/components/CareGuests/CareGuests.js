import React from 'react'
import Image from 'next/image'
import steps from '../../images/steps.svg'
import { SlCalender } from "react-icons/sl";
import { MdOutlineFindReplace } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

const CareGuests = () => {
    return (
        <div>
            <div className='pl-4 py-4'>
                <p className='font-bold pb-4'>How We Care About Our Guests</p>
                <ul className='flex'>
                    <li className='w-2/6 border-2 border-gray-200 rounded-md p-1'><p className='font-semibold text-[10px] text-[#556EE6]'>Zero Deposit</p>
                        <p className='text-[8px]'>Dozzy Didn't Collect Any Amount For Security Deposit</p>
                    </li>
                    <li className='w-2/6 border-2 border-gray-200 rounded-md p-1'><p className='font-semibold text-[10px] text-[#556EE6]'>Unlimited Persons </p>
                        <p className='text-[8px]'>Dozzy Will Kept Any People Limit, You Can Enjoy With Unlimited Persons </p>
                    </li>
                    <li className='w-2/6 border-2 border-gray-200 rounded-md p-1'><p className='font-semibold text-[10px] text-[#556EE6]'>Heavy Discounts </p>
                        <p className='text-[8px]'>Dozzy Provide Heavy Discounts For Weekend & Weekdays Also</p>
                    </li>
                </ul>
                <div className='py-6'>
                    <p className='font-bold pb-3'>Book With Just 3 Easy Steps</p>
                    <div className='flex'>
                        <Image
                            src={steps}
                            alt='steps'
                            width={130}
                            height={130}
                        />
                        <ul className='pl-2'>
                            <li className='flex items-center text-xs gap-2 p-1'><SlCalender className='bg-[#556EE6] text-white p-1 w-10 h-7 rounded'/><div> <p className='font-bold'>Pick Date</p> <p className='text-[10px]'>Pick Your Plan Dates In With Our User Friendly Interface</p></div></li>
                            <li className='flex items-center text-xs gap-2 p-1'><MdOutlineFindReplace className='bg-[#556EE6] text-white p-1 w-10 h-7 rounded'/><div> <p className='font-bold'>Choose Place & Pay</p> <p className='text-[10px]'>Pick Your Place And Pay Its That Simple As It Its</p></div></li>
                            <li className='flex items-center text-xs gap-2 p-1'><SiTicktick className='bg-[#556EE6] text-white p-1 w-8 h-7 rounded'/><div> <p className='font-bold'>Booking Confirmed</p> <p className='text-[10px]'>Congrats Your Booking Confirmed</p></div></li>
                            
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CareGuests