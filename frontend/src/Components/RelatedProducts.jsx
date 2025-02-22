import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ProductCard from './ProductCard';

const RelatedProducts = ({category , subCategory}) => {

    const {products} = useContext(ShopContext);
    const [relatedProducts , setRelatedProducts] = useState([]);
    let productsCopy = products.slice()

    useEffect(()=>{

        productsCopy = productsCopy.filter((item=>item.category === category));
        productsCopy = productsCopy.filter((item=>item.subCategory === subCategory))
        setRelatedProducts(productsCopy.slice(0,5))

    } , [products])
  return (
    <>
    <div className='mt-20 flex justify-center'>
    <div className='flex gap-1 items-center'>
            <h1 className='text-gray-600 sm:text-3xl text-2xl font-light items-center'>RELATED
                <span className='text-gray-900 font-semibold'>
                    PRODUCTS
                </span></h1>
            <div className='bg-gray-900 h-[2px] w-[50px]'></div>
    </div>
    </div>
    <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                relatedProducts.map((item , index)=>{
                    return <ProductCard key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
                })
            }

        </div>
        </>
  )
}

export default RelatedProducts