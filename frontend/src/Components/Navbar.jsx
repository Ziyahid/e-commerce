import React, { useContext, useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import {Link, NavLink} from "react-router-dom"
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const [visible , setVisible] = useState(false);
  const {setShowSearch , getCartCount , navigate , token , setToken ,setCart} = useContext(ShopContext)

  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("")
    setCart({})
    navigate("/login")
  }










  return (
    <div className='flex justify-between items-center py-5 font-medium'>
        
            <Link to="/"><img className='w-36' src={assets.logo} alt="" /></Link>
        
        <ul className='hidden sm:flex  gap-5 text-sm text-gray-700'>
            <NavLink to="/" className="flex flex-col items-center gap-1 ">  
              <p>Home</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to="/collection" className="flex flex-col items-center  ">  
              <p>Collection</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center  ">  
              <p>About</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
            </NavLink>
            <NavLink to="/contact" className="flex flex-col items-center  ">  
              <p>Contact</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
          <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
          <div className='group relative'>
            <img onClick={()=>token ? null : navigate("/login")} src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
            {
              token && <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500'>
                <p className='hover:text-black cursor-pointer '>My Profile</p>
                <p onClick={()=>navigate("/orders")} className='hover:text-black cursor-pointer '>Orders</p>
                <p onClick={logout} className='hover:text-black cursor-pointer '>Logout</p>

              </div>

            </div>
            }
          </div>

          <Link to="/cart" className='relative'>
          <img src={assets.cart_icon} className='w-5 cursor-pointer min-w-5' alt="" />
          <p className='absolute right-[-5px] bg-black text-white w-4 rounded-full leading-4 aspect-square bottom-0 text-center  text-[8px]'>{getCartCount()}</p>
          </Link>
          
            <img onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" />
      

        </div>
        {/* Sidebar menu for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
          <div onClick={()=>setVisible(false)} className='flex gap-2 items-center p-3 text-gray-500 border-b border-gray-200'>
            <img src={assets.dropdown_icon} className='rotate-180 h-4' alt="" />
            <p>Back</p>
          </div>
          <ul className='flex flex-col'>
           <NavLink onClick={()=>setVisible(false)} to="/" className="border-b border-gray-400 p-3 cursor-pointer text-gray-600 hover:text-black">Home</NavLink>
           <NavLink onClick={()=>setVisible(false)} to="/collection" className="border-b border-gray-400 p-3 cursor-pointer text-gray-600 hover:text-black">Collection</NavLink>
           <NavLink onClick={()=>setVisible(false)}  to="/about" className="border-b border-gray-400 p-3 cursor-pointer text-gray-600 hover:text-black">About</NavLink>
           <NavLink onClick={()=>setVisible(false)} to="/contact" className="border-b border-gray-400 p-3 cursor-pointer text-gray-600 hover:text-black">Contact</NavLink>
          </ul>

        </div>
    </div>
  )
}

export default Navbar