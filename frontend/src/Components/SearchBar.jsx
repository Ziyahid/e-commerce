import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const {search , setSearch , showSearch , setShowSearch} = useContext(ShopContext);
    const location = useLocation();
    const [visible , setVisible] = useState(false)

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true)
        }else{
            setVisible(false)
        }
        
    } , [location])
  return showSearch && visible ? (
    <div className='border-t flex items-center justify-center gap-3 border-b bg-slate-50 border-gray-300 py-6 mb-5'>
        <div className='flex md:w-1/2 lg:w-1/2 items-center rounded-full px-5 text-sm border  border-gray-400 py-3'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)}  className='flex-1 outline-0' type="text" placeholder='Search' />
            <img className='w-5 cursor-pointer' src={assets.search_icon} alt="" />
            
        </div>
        <img onClick={()=>setShowSearch(false)} className='w-4 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ):null
}

export default SearchBar