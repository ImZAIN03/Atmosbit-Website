import React from 'react';

const Info = () => {
  return (
    <div className='flex items-center'>
      <div className='w-1/2 mx-auto pl-10'>
        <h1 className='font-bold'>AtmosBit Software House</h1>
        <div className='pt-4 text-gray-500 font-medium'>
            <p className='my-3'>Welcome to Our Website!</p>
            <p className='my-3'>AtmosBit is one of the best software houses in Peshawar, founded in 2018 and one of the Top 10 leading Web Service Providers and IT Training Centers in Peshawar in just 4 years. With ERP expertise and a team of profound Developers, imaginative Graphic Designers, Digital Marketing Experts, compelling SEOs, and ingenious Desktop and Mobile Application Architects.</p>
            <p className='my-3'>We are a prominent team based in Peshawar, Pakistan, and widely recognized as a leading web service provider and IT training center on the international level as well. In just four years, AtmosBit has established itself as one of the top IT companies in Peshawar.</p>
            <p className='my-3'>The company specializes in providing software solutions and services with expertise in Enterprise Resource Planning (ERP). With a team of skilled and experienced professionals, including developers, graphic designers, digital marketing experts, SEO specialists, and application architects for both desktop and mobile platforms, AtmosBit offers a comprehensive range of services.</p>
        </div>
      </div>    
      <div className='w-1/2 mx-auto p-3'>
        <img src='https://atmosbit.com/wp-content/uploads/2023/05/websit_development-atmosbit.png' alt='atmosbit-info' className='w-full object-fill' />
      </div>
    </div>
  );
}

export default Info;
