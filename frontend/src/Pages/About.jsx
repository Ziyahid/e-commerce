import React from 'react'
import {assets} from "../assets/frontend_assets/assets"
import NewsLetter from "../Components/NewsLetter"

const About = () => {
  return (
    <div >
      
      <div className='grid place-items-center mt-10'>
      <div className='flex gap-1 items-center '>
            <h1 className='text-gray-600 sm:text-3xl text-2xl font-light items-center'>ABOUT
                <span className='text-gray-900 ml-2 font-semibold'>
                    US
                </span></h1>
            <div className='bg-gray-900 h-[2px] w-[50px]'></div>
            </div>
      </div>

      <div className='flex gap-20 flex-col md:flex-col lg:flex-row items-center '>
        <img className='w-[500px]'  src={assets.about_img} alt="" />
        <div className='lg:w-1/2 text-gray-500 py-10'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum modi nobis, dolore natus temporibus accusamus commodi! Eveniet, officiis laboriosam vero perferendis vel non quam recusandae error sequi libero mollitia nulla nobis animi repellendus dolorum accusamus repudiandae quos dolores quaerat, eaque, cumque odit ducimus est ut. Perferendis amet vel mollitia.</p>
          <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia ullam atque. Harum reiciendis, dolorum quo dolor eaque quibusdam pariatur alias repellendus ratione est, omnis quis quos, deleniti saepe at unde porro odit dolore cupiditate?</p>

          <p className='font-bold text-black'>Our Mission</p>
          <p className='py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum architecto voluptatibus necessitatibus cum consequuntur aperiam aliquid obcaecati quia ex et aliquam molestias fugit, iure tempora odio reprehenderit, consequatur nam! Non?</p>
        </div>
        

      </div>

      <div className='py-20'>

      <div className='flex gap-1 items-center'>
            <h1 className='text-gray-600 sm:text-3xl text-2xl font-light items-center'>WHY
                <span className='text-gray-900 ml-2 font-semibold'>
                    CHOOSE US
                </span></h1>
            <div className='bg-gray-900 h-[2px] w-[50px]'></div>
      </div>

      <div className='flex flex-col items-center lg:flex-row mt-10'>
        <div className='border border-gray-400 flex flex-col px-20 justify-center  sm:w-[600px] h-[300px]'>
        <p className='font-bold mb-2'>Quality Assurance:</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quas alias accusantium magnam impedit obcaecati sapiente recusandae aut quis quos?</p>
        </div>
        <div className='border border-gray-400 flex flex-col px-20 justify-center sm:w-[600px] h-[300px]'>
          <p className='font-bold mb-2'>Convenience:</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quas alias accusantium magnam impedit obcaecati sapiente recusandae aut quis quos?</p>
        </div>
        <div className='border border-gray-400 flex flex-col px-20 justify-center sm:w-[600px] h-[300px]'>
          <p className='font-bold mb-2'>Exceptional Customer Service:</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quas alias accusantium magnam impedit obcaecati sapiente recusandae aut quis quos?</p>
        </div>
      </div>

      <div>
        <NewsLetter/>
      </div>

      </div>

    </div>
  )
}

export default About