import React from 'react';

const Hero = () => {
  return (
    <div className="flex items-center text-white bg-gradient-to-tr from-purple-800 to-cyan-700 px-8 py-10">
      <div className="flex-1 pl-[35px]">
        <p className='text-[3rem] font-semibold '>AtmosBit Best Software House in Peshawar</p>
        <p className='font-medium px-4'>Web Development, Digital Marketing, Graphic Designing, SEO, Shopify Dropshipping, E-Commerce, Amazon, eBay</p>
        <button>Get Started</button>
      </div>
      <div className="flex-1">
        <img src='https://atmosbit.com/wp-content/uploads/2021/11/2.png' alt='atmosbit' className='w-1/2 mx-auto d-inline-block' />
      </div>
    </div>
  );
}

export default Hero;
