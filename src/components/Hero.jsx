import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className="flex items-center text-white bg-gradient-to-tr from-purple-800 to-cyan-700 px-10 py-10">
      <div className="flex-1 pl-20 ">
        <p className='text-[50px] font-semibold pb-5'>AtmosBit <br/>Best Software House <br/>in Peshawar</p>
        <p className='font-semibold'>Web Development, Digital Marketing, Graphic Designing, SEO,<br/> Shopify Dropshipping, E-Commerce, Amazon, eBay</p>
        <div className='flex gap-5 mt-5'>
            <button className='bg-white text-black px-12 py-4 rounded-lg font-semibold'>Get Started</button>
            <button className='bg-white text-black rounded-full px-5'><BsFillPlayFill/></button>
        </div>
      </div>
      <div className="flex-1 pr-20">
        <img src='https://atmosbit.com/wp-content/uploads/2021/11/2.png' alt='atmosbit' className='w-1/2 mx-auto d-inline-block' />
      </div>
    </div>
  );
}

export default Hero;
