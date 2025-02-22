import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../Components/CartTotal';

const Cart = () => {
  const {products , cart , currency , updateQuantity , navigate } = useContext(ShopContext);
  const [cartData , setCartData] = useState([]);


  useEffect(()=>{
    if(products.length > 0){
      const tempData = []
    for(const items in cart){
      for(const item in cart[items]){
        if(cart[items][item]>0){
          tempData.push({
            _id:items,
            size:item,
            quantity:cart[items][item]
          })
        }
      }
    }
    setCartData(tempData)
      
    }
    
  } , [cart , products]);

  return (
    <div className='border-t pt-14'>
      <div className='flex gap-1 items-center'>
            <h1 className='text-gray-600 sm:text-3xl text-2xl font-light items-center'>YOUR 
                <span className='text-gray-900 font-semibold'>
                    CART
                </span></h1>
            <div className='bg-gray-900 h-[2px] w-[50px]'></div>
            </div>
       <div>
        {
          cartData.map(((item , index)=>{
            const productData = products.find((product=>product._id === item._id));
            return(
              <div key={index} className='py-4 border-t border-b border-gray-300 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 '>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-3'>
                      <p>{currency}{productData.price}</p>
                      <p className='bg-gray-100 border-gray-300 border px-3 py-1 '>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e)=>e.target.value === "" || e.target.value === "0" ? null : updateQuantity(item._id , item.size , Number(e.target.value))} className='border border-gray-400 max-w-10 sm:max-w-20 px-2 sm:px-2 py-1' type="number" defaultValue={item.quantity} min={1} />
                <img onClick={()=>updateQuantity(item._id , item.size , 0)} className='w-4 cursor-pointer' src={assets.bin_icon} alt="" />

              </div>
            )
          }))
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='text-end w-full'>
            <button onClick={()=>navigate("/placeorder")} className='bg-black text-white px-4 py-2 mt-4 border-0 rounded-md text-sm cursor-pointer'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>     

    </div>
  )
}

export default Cart