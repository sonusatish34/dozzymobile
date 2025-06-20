
import React from 'react';
import Link from 'next/link';
import { FiPhoneCall } from "react-icons/fi";
import LinkCall from '../LinkCall';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
const Header = (locname) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      buttonRef.current && !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (

    <div className="font-bold  text-lg pr-5 md:px-12 lg:px-20 py-4 flex justify-between lg:items-center border-b-2 border-gray-200">
      <Link href="/">
        <Image
          className="h-12 w-40 lg:scale-110 scale-75"
          src={"/Dozzy123.webp"}
          alt={"Dozzy App For Farmhouse Booking"}
          width={1000}
          height={1000}
        />
      </Link>
      <div className='lg:w-fit text-black lg:mt-2 xl:pl-56'>
        <div className={`${isOpen ? "hidden" : 'block'} hidden lg:block`}>
          <ul className='font-semibold xl:text-lg lg:text-base flex gap-8 xl:gap-12'>
            <li><Link className='hover:text-blue-400 hover:underline' href={`${locname?.length ? `/${locname}` : '/'}`}>Home</Link></li>
            <li><Link target='_blank' className='hover:text-blue-400 hover:underline' href={`${locname?.length ? `/blog` : 'blog'}`}>Blog</Link></li>
            <li><Link className='hover:text-blue-400 hover:underline' href="/about">About Us</Link></li>
            <li><Link className='hover:text-blue-400 hover:underline' href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <div className={`${isOpen ? "hidden" : 'block'} hidden lg:block py-2 text-black`}>
          <p className="lg:text-3xl text-sm text-[#556EE6]">For Booking help</p>
          <div
            onClick={(e) => LinkCall(e, "tel:9111911162")}
            className="lg:text-3xl lg:pt-2 pt-1 font-bold text-sm flex items-center gap-1 lg:gap-2 cursor-pointer"
          >
            <FiPhoneCall className="size-3 lg:size-6" />
            9111-9111-62
          </div>
        </div>
      </div>
      <div className='lg:hidden block pt-2'>
        <button
          ref={buttonRef}
          className="top-[2.5rem] right-5 z-40 text-[#556ee6] flex items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {!isOpen ? (
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.707 5.293a1 1 0 0 0-1.414 0L12 9.586 6.707 4.293a1 1 0 1 0-1.414 1.414L10.586 11l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 12.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 11l5.293-5.293a1 1 0 0 0 0-1.414z" />
            </svg>
          )}
        </button>
      </div>
      <nav
        ref={menuRef}
        className={`w-11/12 h-2/3 top-[80px] right-[1px] border border-gray-300 font absolute bg-white rounded-b-md p-2 pt-6 lg:pr-16 z-50 transition-transform duration-500 ease-out ${isOpen ? 'block' : 'hidden'}`}
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          left: isOpen ? 'auto' : '100%',
        }}
      >
        <Link href={'/'}>
          <div className='flex gap-3 cursor-pointer items-center pb-2'>
            <div className='w-48 text-black 2xl:w-full lg:w-96 lg:mt-2'>
              <p className='text-xl font-bold'>
                <Image
                  className="h-16 w-full lg:scale-125 scale-75 "
                  src={"/Dozzy123.webp"}
                  alt={"Dozzy App For Farmhouse Booking"}
                  width={1000}
                  height={1000}
                />
              </p>
            </div>
          </div>
        </Link>
        <ul className="pl-6 pt-1 pb-1 border-t-2 border-gray-200 font-semibold flex flex-col gap-2 items-start text-black">
          <li className="w-32 text-start"><Link href={'/'}>Home</Link></li>
          <li className="w-32 text-start"><Link href={'/contact-us'}>Contact Us</Link></li>
          <li className="w-32 text-start"><Link href={'/about'}>About Us</Link></li>
          <li className="w-32 text-start"><Link href={'/blog'} target='_blank'>Blog</Link></li>
        </ul>
        <div className="flex flex-col border-t-2 text-blue-500 border-gray-200 text-left gap-2 pl-6 pt-4 justify-center">
          <p className=' lg:text-3xl text-xl text-[#556EE6]'>For Booking Help Call</p>
          <div className="flex items-center">
            <ul>
              <li className="font-bold text-2xl text-black">
                <Link
                  onClick={(e) => LinkCall(e, "tel:9111911162")}
                  href="tel:9111911162" target='_blank'>9111-9111-62</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
