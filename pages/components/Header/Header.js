import React from 'react'
import Link from 'next/link';
const  Header = () => {
  return (
    <div className='font-bold text-lg px-5 md:px-12 lg:px-20 py-4 flex justify-between items-center'>
      <Link href={'/'}><h2 className='text-3xl lg:text-5xl text-[#556EE6]'>Dozzy</h2></Link>
      <p className='lg:text-3xl'>9111-9111-62</p>
    </div>
  )
}

export default Header;