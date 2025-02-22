import React, { useContext, useEffect, useState } from 'react'
import {assets} from "../assets/frontend_assets/assets"
import ProductCard from '../Components/ProductCard';
import { ShopContext } from '../Context/ShopContext';

const Collection = () => {
  const [visible , setVisible] = useState(false);
  const [filterProducts , setFilterProducts] = useState([]);
  const [category , setCategory] = useState([]);
  const [subCategory , setSubCategory] = useState([]);
  const [sortType , setSortType] = useState("relevant");
  const {products , search , showSearch} = useContext(ShopContext)

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item !== e.target.value))
      
    }else{
      setCategory(prev=> [...prev , e.target.value])
      
    }
  }

  const toggleSubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item !== e.target.value))
    }else{
      setSubCategory(prev=> [...prev , e.target.value])
    }
  }

  const applyFilter = ()=>{
    let productsCopy = products.slice();

    if(search && showSearch){
      productsCopy = productsCopy.filter((item=>item.name.toLowerCase().includes(search.toLowerCase())))
    }
    if(category.length > 0){

      productsCopy = productsCopy.filter(item=>category.includes(item.category))

    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
    
  }

  const sortProduct = ()=>{
    let filterCopy = filterProducts.slice();
    switch(sortType){
      case "low-high":
      setFilterProducts(filterCopy.sort((a, b)=>a.price - b.price));
      break;
      case "high-low":
      setFilterProducts(filterCopy.sort((a, b)=>b.price - a.price));
      break;
      default:
      applyFilter();
      break;
  
    }
  }





  useEffect(()=>{
    applyFilter()
  },[category , subCategory , search , showSearch , products])

  useEffect(()=>{
    sortProduct()
  } , [sortType])


  

  return (
    <div className='flex flex-col gap-10 sm:flex-col md:flex-row lg:flex-row'>
      {/* Left Side */}
      <div className='flex flex-col gap-7' >
        <h2 onClick={()=>setVisible(prev => !prev)} className='font-semibold text-lg inline-flex items-center gap-2 md:hidden lg:hidden '>FILTERS <img  className={`w-2 ${visible ? "rotate-90":""}`} src={assets.dropdown_icon}/></h2>
        <div className={`border border-gray-400 p-4 w-[200px] lg:block md:block ${visible ? " ":"hidden"}`} >
          <h3 className='font-semibold mb-2'>CATEGORIES</h3>
          <div className='flex items-center gap-1 text-gray-600  '>
            <input value={'Men'} type="checkbox" onChange={toggleCategory} />
            <p>Men</p>
          </div>
          <div  className='flex items-center gap-1 text-gray-600  '>
            <input value={'Women'} type="checkbox" onChange={toggleCategory} />
            <p>Women</p>
          </div>
          <div  className='flex items-center gap-1 text-gray-600 '>
            <input value={'Kids'} type="checkbox" onChange={toggleCategory} />
            <p>Kids</p>
          </div>
        </div>

        <div className={`border border-gray-400 p-4 w-[200px] lg:block md:block ${visible ? " ":"hidden"}`}>
          <h3 className='font-semibold mb-2'>TYPE</h3>
          <div className='flex items-center gap-1 text-gray-600 '>
            <input value={'Topwear'} onChange={toggleSubCategory} type="checkbox" />
            <p>Topwear</p>
          </div>
          <div  className='flex items-center gap-1 text-gray-600 '>
            <input value={'Bottomwear'} onChange={toggleSubCategory} type="checkbox" />
            <p>Bottomwear</p>
          </div>
          <div  className='flex items-center gap-1 text-gray-600 '>
            <input value={'Winterwear'} onChange={toggleSubCategory} type="checkbox" />
            <p>Winterwear</p>
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
        <div className='flex gap-1 items-center'>
            <h1 className='text-gray-600 sm:text-3xl text-lg font-light items-center'>ALL
                <span className='text-gray-900 font-semibold'>
                    COLLECTIONS
                </span></h1>
            <div className='bg-gray-900 h-[2px] lg:w-[50px] w-[30px]'></div>
            </div>
            <select onChange={(e)=>setSortType(e.target.value)} className='bg-slate-100 cursor-pointer outline-0 px-1 lg:px-3 py-2 border border-gray-300 text-sm' >
              <option value="high-low">Sort by: High to Low</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="relevant">Sort by: Relevant</option>
            </select>

        </div>

        {/* Products  */}

        <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                filterProducts.map((item , index)=>{
                    return <ProductCard key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
                })
            }

        </div>
      </div>

    </div>
  )
}

export default Collection