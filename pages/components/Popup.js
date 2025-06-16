import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { MdOutlineCancel } from 'react-icons/md'

const PopUp = props => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 60000)

    return () => clearTimeout(timer)
  }, [])


  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isVisible])

  const handleStoreRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Redirect to App Store if iOS
      window.open(
        "https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530",
        "_blank"
      );
    } else if (/android/i.test(userAgent)) {
      // Redirect to Play Store if Android
      window.open(
        "https://play.google.com/store/apps/details?id=com.dozzy_customer",
        "_blank"
      );
    } else {
      // Optional: Provide a message for non-mobile devices
      alert("App is available only on mobile devices.");
    }
  };


  return (
    <div>
      {isVisible && (
        <>
          <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20' />
          <div
            className='fixed lg:top-5 mxs:top-10 top-20 z-50 left-1/2 transform -translate-x-1/2 w-5/6 h-fit max-w-sm p-3 lg:p-8 bg-white pt-10 rounded-lg shadow-xl text-black transition-opacity duration-500 flex'
            style={{ opacity: isVisible ? 1 : 0 }}

          >
            <Image
              src={"/offers/newuserdozzy2.webp"}
              alt={` for rent`}
              width={525}
              height={634}
              className='lg:w-[525px] lg:h-[634px] h-[450px] mxs:h-[520px] object-cover rounded-md'
              priority
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

    </div>
  )
}

export default PopUp
