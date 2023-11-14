import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center container mx-auto py-2">
        <div className="flex items-center">
          <img src='https://atmosbit.com/wp-content/uploads/2023/06/atmosbit-logo-1.png' alt='Atmosbit' className='w-20 h-20' />
          <div className='ml-4 flex items-center font-semibold'>
            <div className='mx-4'>HOME</div>
            <div className='mx-4'>SERVICES</div>
            <div className='mx-4'>BLOG</div>
            <div className='mx-4'>APPLY</div>
            <div className='mx-4'>ABOUT</div>
            <div className='mx-4'>CONTACT US</div>
          </div>
        </div>
        <div><BsSearch /></div>
      </div>
    </div>
  );
}

export default Navbar;
