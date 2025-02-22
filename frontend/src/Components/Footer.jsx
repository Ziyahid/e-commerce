import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <>
    <div className='flex sm:flex-col flex-col lg:flex-row md:flex-row justify-between mt-20'>
        <div className='w-[350px] lg:w-[400px] md:w-[400px]'>
            <img className='w-36' src={assets.logo} alt="" />
            <p className='text-justify text-gray-600 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci harum quos reprehenderit. Excepturi, magnam sit exercitationem molestiae voluptatum quia vero. Expedita perferendis eos optio ullam vitae est dignissimos voluptates. Repellat!

            </p>
        </div>
        <div>
            <h3 className='font-bold text-2xl'>Company</h3>
            <ul className='text-gray-700 mt-3'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <h3 className='font-bold text-2xl'>Get in Touch</h3>
            <p className='text-gray-700 mt-3'>+91 1234567890</p>
            <p className='text-gray-700'>contact@forever.com</p>
        </div>

        
        
    </div>
    <p className='text-center text-sm lg:text-base mt-10 py-3 text-gray-700 border-t border-gray-400'>Copyright 2025 &copy; forever.com  - All Right Reserved</p>
    </>
  )
}

export default Footer