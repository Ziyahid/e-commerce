import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className=" flex flex-col sm:flex-row border border-gray-400 ">
        {/* left side */}
        <div className='flex  justify-center items-center py-10 w-full'>
            <div className='text-gray-800 leading-10'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-gray-600'></p>
                    <p>OUR BESTSELLER</p>
                </div>
                <h1 className='font-prata text-4xl sm:text-5xl'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[2px] bg-gray-600'></p>
                </div>

            </div>
        </div>
        {/* Right Side */}
        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero