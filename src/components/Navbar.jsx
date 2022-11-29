import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-white w-full py-4 flex items-center'>
      <h1 className='font-bold text-2xl pl-10'>logohere</h1>
      <div className='  w-full pr-8'>
        <ul className='w-full font-bold justify-end flex items-center jsutify-end'>
          <li className='p-3'>Home</li>
          <li className='p-3'>About</li>
          <li className='p-3'>Services</li>
          <li className='p-3'>Testimonials</li>
          <li className='p-3'>Success Stories</li>
          <li className='p-3'>Join Us</li>
          <li className='p-3'>Blog</li>
          <li className='p-3'><button className='bg-blue-900 text-white px-3 py-2 font-bold'>Talk to Us&nbsp;</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;