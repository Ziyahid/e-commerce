import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col gap-20 sm:flex-col lg:flex-row justify-between mx-20 py-30'>
        <div className='flex flex-col items-center gap-2'>
            <img className='w-13 lg:w-20 md:w-20 ' src={assets.exchange_icon} alt="" />
            <p className='font-bold'>Easy Exchange Policy</p>
            <p className='text-gray-600 text-sm md:text-base lg:text-base '>We offer hassle free exchange policy</p>
        </div>

        <div className='flex flex-col items-center gap-2' >
            <img className='w-13 lg:w-20 md:w-20 ' src={assets.quality_icon} alt="" />
            <p className='font-bold'>7 Days Return Policy</p>
            <p className='text-gray-600 text-sm md:text-base lg:text-base '>We provide 7days free return policy</p>
        </div>

        <div className='flex flex-col items-center gap-2'>
            <img className='w-13 lg:w-20 md:w-20' src={assets.support_img} alt="" />
            <p className='font-bold'>Best Customer Support</p>
            <p className='text-gray-600 text-sm md:text-base lg:text-base '>We provide 24/7 customer support</p>
        </div>

    </div>
  )
}

export default OurPolicy