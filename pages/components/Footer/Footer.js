import React from 'react'
import Image from 'next/image'
// import foot from '../../images/foot.jpg'
import phone from '../../images/phone1.png'
import gplay from '../../images/googleplay.png'
import appstore from '../../images/applestore.png'
const Footer = () => {
    return (
        <div className='... bg-[url("/footer.svg")] bg-cover'>
            <div className='flex items-center text-white'>
                <Image
                    src={phone}
                    width={100}
                    height={100}
                    className='pb-2'
                />
                <div>
                    <ul className='text-xs'>
                        <li className='text-lg'>Your All-In-One App  Dozzy</li>
                        <li>Head Office:</li>
                        <li className='w-[70%]'>Dozzy Private Limited 5th Floor, Sigma Tech Park Whitefield, Bangalore</li>
                        <li>9111-9111-62</li>
                        <li className='text-red-400 font-semibold'>App Launching Soon</li>
                        <li className='flex gap-2 pt-2'>
                            <Image
                                src={gplay}
                                width={80}
                                height={80}
                                className='w-10 h-4'
                            />
                            <Image
                                src={appstore}
                                width={100}
                                height={100}
                                className='w-10 h-4'
                            />

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer