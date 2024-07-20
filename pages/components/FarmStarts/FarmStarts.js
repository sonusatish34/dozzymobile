import React from 'react'
import Image from 'next/image';
import grpfarm from '../../images/farmgroup.svg'
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
const FarmStarts = () => {
    return (
        <div className='py-6 px-4 md:px-12'>
            <p className='pb-2 font-bold text-2xl md:pb-7'>Farmhouses Starts At 13,000/day</p>
            <div className='flex'>
                <div >
                    <Image
                        src={grpfarm}
                        alt='farmhouse'
                        className=''
                    />
                </div>
                <div className='w-2/3'>
                    <p className='text-[11px] font-semibold pl-3 md:text-xl '>Dozzy Has 10,000+ Attached
                        Farmhouses From Basic - Luxury
                        It's Just Starting At 13,000/day
                        Only To View More</p>
                    <div className='flex gap-1 text-white pt-3 md:pt-6 pl-4'>
                        <button className='bg-green-500 rounded-full py-1 px-2 md:px-4 md:py-2'>
                            <Link href="https://api.whatsapp.com/send?phone=+9666677405&text=Hi%21" target='_blank'>
                                <p className=' flex gap-1 items-center text-[10px]'><span><FaWhatsapp size={10} /></span> <span>Whatsapp</span></p>
                            </Link>
                        </button>
                        <button className='bg-blue-500 rounded-full py-1 px-2 w-16'>
                            <Link href="tel:9666677405" target='_blank'>
                                <p className='flex gap-1 items-center text-[10px]'><span><BiPhoneCall size={10} /></span> <span>Call Us</span></p>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FarmStarts;