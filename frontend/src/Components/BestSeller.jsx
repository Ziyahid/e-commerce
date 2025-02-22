import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ProductCard from './ProductCard'

const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestSeller , setBestSeller] = useState([]);

    useEffect(()=>{

        const bestProduct = products.filter((item)=>(item.bestSeller));
        setBestSeller(bestProduct.slice(0,5));

    } , [products])
  return (
    <div>
         <div className='flex flex-col items-center gap-2'>
            <div className='flex gap-1 items-center'>
            <h1 className='text-gray-600 sm:text-3xl text-2xl font-light items-center'>BEST
                <span className='text-gray-900 font-semibold'>
                    SELLER
                </span></h1>
            <div className='bg-gray-900 h-[2px] w-[50px]'></div>
            </div>
            <p className='text-sm sm:text-base text-gray-600 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quasi doloremque accusamus eos exercitationem debitis!Dignissimos, ipsam?
            </p>
        </div>
        <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item , index)=>{
                    return <ProductCard key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
                })
            }

        </div>
    </div>
  )
}

export default BestSeller