import React from 'react'
import {assets} from "../assets/assets"
const Navbar = ({setToken}) => {
  return (
   <div className='flex justify-between px-20 py-5 items-center'>
    <img className='w-40' src={assets.logo} alt="" />
    <button onClick={()=>setToken("")} className='bg-black cursor-pointer text-white px-6 py-2 rounded-full text-sm'>Logout</button>
   </div>
  )
}

export default Navbar