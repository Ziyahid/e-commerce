import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const CartTotal = () => {
    const {currency , getCartAmount , delivery_fee} = useContext(ShopContext)
  return (
    <div>
        <div className='flex gap-1 items-center '>
            <h1 className='text-gray-600 sm:text-3xl text-2xl font-light items-center'>CART
                <span className='text-gray-900 font-semibold'>
                    TOTALS
                </span></h1>
            <div className='bg-gray-900 h-[2px] w-[50px]'></div>
            </div>
            <div className='flex justify-between border-b border-gray-300 py-2'>
                <p>Subtotal</p>
                <p>{currency}{getCartAmount()}.00</p>
            </div>
            <div className='flex justify-between border-b border-gray-300 py-2'>
                <p>Shipping Fee</p>
                <p>{currency}{delivery_fee}.00</p>
            </div>
            <div className='flex justify-between border-b border-gray-300 py-2 font-bold'>
                <p>Total</p>
                <p>{currency} {getCartAmount() === 0 ? "0" : getCartAmount() + delivery_fee}.00</p>
            </div>
    </div>
  )
}

export default CartTotal