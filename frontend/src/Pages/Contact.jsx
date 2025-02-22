import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetter from '../Components/NewsLetter'

const Contact = () => {
  return (
    <div>
      <div className='grid place-items-center mt-10'>
            <div className='flex gap-1 items-center '>
                  <h1 className='text-gray-600 sm:text-3xl text-2xl font-light items-center'>CONTACT
                      <span className='text-gray-900 ml-2 font-semibold'>
                          US
                      </span></h1>
                  <div className='bg-gray-900 h-[2px] w-[50px]'></div>
                  </div>
            </div>
      
            <div className='flex lg:gap-20 flex-col md:flex-col lg:flex-row items-center lg:px-50 my-10 lg:my-20'>
              <img className='w-[500px]' src={assets.contact_img} alt="" />
              <div className='lg:w-1/2 md:w-full text-gray-500 py-10'>
                <p className='font-bold text-black'>Our Store</p>
                <p className='pt-2'>54709 Willims Station</p>
      
                <p>Suite 350, Washington, IN</p>
                <p className='pt-6'>Tel:+91 1234567890</p>
                <p>Email:admin@forever.com</p>

                <p className='py-5 text-black font-bold'>Careers at Forever</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <button className='border mt-8 px-5 rounded-md font-bold text-black py-2 cursor-pointer hover:bg-black hover:text-white transition-colors'>Explore Jobs</button>
              </div>
              
      
            </div>

            <div>
              <NewsLetter/>
            </div>
    </div>
  )
}

export default Contact