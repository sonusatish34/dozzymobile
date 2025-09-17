import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { MdOutlineCancel } from 'react-icons/md'
import Link from 'next/link'
import handleStoreRedirect from '@/utils/redirectUtils' // Adjust the import path as necessary

const PopUp = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isVisibleLoc, setIsVisibleLoc] = useState(false)

  // Show location popup after 6 seconds for first-time visitors
  useEffect(() => {
    const hasVisited = localStorage.getItem("firstvisit")

    if (!hasVisited) {
      const locationTimer = setTimeout(() => {
        setIsVisibleLoc(true)
        setIsVisible(false) // Close offer popup if open
        localStorage.setItem("firstvisit", "yes")
      }, 6000)

      return () => clearTimeout(locationTimer)
    }
  }, [])

  // Show offer popup after 60 seconds
  useEffect(() => {
    const offerTimer = setTimeout(() => {
      setIsVisible(true)
      setIsVisibleLoc(false) // Close location popup if open
    }, 60000)

    return () => clearTimeout(offerTimer)
  }, [])

  // Disable scrolling when any popup is visible
  useEffect(() => {
    if (isVisible || isVisibleLoc) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isVisible, isVisibleLoc])

  return (
    <div>
      {/* Offer Popup */}
      {isVisible && (
        <>
          <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20' />
          <div
            className='fixed lg:top-5 mxs:top-10 top-20 z-50 left-1/2 transform -translate-x-1/2 w-5/6 h-fit max-w-sm p-3 lg:p-8 bg-white pt-10 rounded-lg shadow-xl text-black transition-opacity duration-500 flex'
          >
            <Image
              src={"/offers/newuserdozzy2.webp"}
              alt={` for rent`}
              width={525}
              height={634}
              className='lg:w-[525px] lg:h-[634px] h-[450px] mxs:h-[520px] object-cover rounded-md'
              fetchPriority='high'
              onClick={() => { handleStoreRedirect() }}
            />

            <button
              onClick={() => setIsVisible(false)}
              className='absolute top-0 right-0 p-2 bg-transparent focus:outline-none flex items-center justify-center z-40 pt-4 pr-4'
            >
              <span className='text-lg w-6 h-6 rounded-full relative hover:scale-105 bottom-1 flex justify-center items-center'>
                <MdOutlineCancel size={30} />
              </span>
            </button>
          </div>
        </>
      )}

      {/* Location Popup */}
      {isVisibleLoc && (
        <>
          <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20' />
          <div
            className='fixed lg:top-5 mxs:top-10 top-20 z-50 left-1/2 transform -translate-x-1/2 w-5/6 h-fit max-w-sm p-3 lg:p-8 bg-white pt-10 rounded-lg shadow-xl text-black transition-opacity duration-500 flex'
          >
            <div className='p-3'>
              <p className='capitalize font-bold text-xl'>please select your preferred location</p>
              <ul className='pt-8 flex items-center justify-center gap-x-3'>
                <li>
                  <Link href={'/'} className='flex flex-col gap-y-2 border-2 p-2 rounded-md shadow-md'>
                    <Image
                      src={"/htydanim.webp"}
                      alt={`Hyderabad`}
                      width={525}
                      height={634}
                      fetchPriority='high'
                      loading='eager'
                      className='w-24 h-28'
                      onClick={() => setIsVisibleLoc(false)}
                    />
                    <p>Hyderabad</p>
                  </Link>
                </li>
                <li>
                  <Link href={'/bangalore'} className='flex flex-col gap-y-2 border-2 p-2 rounded-md shadow-md'>
                    <Image
                      src={"/bangalorelogo2.webp"}
                       fetchPriority='high'
                      loading='eager'
                      alt={`Bangalore`}
                      width={525}
                      height={634}
                      className='w-24 h-28'
                      onClick={() => setIsVisibleLoc(false)}
                    />
                    <p>Bangalore</p>
                  </Link>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setIsVisibleLoc(false)}
              className='absolute top-0 right-0 p-2 bg-transparent focus:outline-none flex items-center justify-center z-40 pt-4 pr-4'
            >
              <span className='text-lg w-6 h-6 rounded-full relative hover:scale-105 bottom-1 flex justify-center items-center'>
                <MdOutlineCancel size={30} />
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default PopUp
