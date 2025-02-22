import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {
  const {productId} = useParams();
  const {products , currency , addToCart} = useContext(ShopContext);
  const [productData , setProductData] = useState(false);
  const [image , setImage] = useState('')
  const [size , setSize] = useState('')

  const fetchProductData = async ()=>{
    products.map((item)=>{

      if(item._id=== productId){
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })



  }

  useEffect(()=>{
    fetchProductData()
  },[productId , products])
 
  return productData ?  (
    <div className='border-t-2 border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product image */}
        <div className='flex gap-2 flex-1'>
          <div className='w-25 flex flex-col gap-1'>
            {
              productData.image.map((item , index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} cla/>
              ))
            }
          </div>
          <div className='w-[410px]'>
            <img className='w-full object-cover' src={image} alt="" />
          </div>

        </div>
        {console.log(productData)}
        <div>
          <h2 className='font-bold text-2xl'>{productData.name}</h2>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5'  alt="" />
            <img src={assets.star_icon} className='w-3 5'  alt="" />
            <img src={assets.star_icon} className='w-3 5'  alt="" />
            <img src={assets.star_dull_icon} className='w-3 5'  alt="" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='font-medium text-3xl mt-5'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item , index)=>(
                  <button onClick={()=>setSize(item)} className={`bg-gray-200 py-2 px-4 border border-gray-300 cursor-pointer ${item === size ? "border-orange-300":""}` } key={index}>{item}</button>
                ))
              }


            </div>

          </div>
          <button onClick={()=>addToCart(productData._id , size)} className='bg-black text-white px-8 cursor-pointer text-sm active:bg-gray-700 py-3'>Add To Cart</button>
          <hr className='mt-8 sm:w-4/5 text-gray-200' />

          <div className='mt-3 text-sm text-gray-600 leading-6'>
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>

      </div>
      <div className='mt-20'>
        <div className='flex'>
          <p className='border border-gray-400 px-5 py-3 text-sm'>Description</p>
          <p className='border border-gray-400 px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='border border-gray-400 px-8 py-6 text-gray-500'>
          <p>An e-commerce websites is an online platform that facilitates the buying and selling of products or services over the internet.it serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibilty, and the global reach they offer. </p>
          <p className='mt-5'>E-commerce websites typically display products or services along with detailed description , images , prices, and any available variable variants (e.g,. sizes , colors). Each product usually has its own dedicated page with relevant information</p>
        </div>
      </div>

      <div>
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
      </div>

    </div>
  ): <div className='opacity-0'></div>
}

export default Product