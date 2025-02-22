import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import axios from 'axios';
import { toast } from 'react-toastify';

const Orders = () => {
  const {backendUrl , token ,  currency} = useContext(ShopContext);

  const [orderData , setOrderData] = useState([]);

  const fetchOrderData = async ()=>{
    try {
      if(!token){
      
        return null
      }
      
      const response = await axios.post(backendUrl + "/api/order/userorders" , {} , {headers:{token}})
      if(response.data.success){
        let allOrdersItem = []
        
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item["status"] =order.status
            item["payment"] = order.payment
            item["paymenMethod"] = order.paymentMethod
            item["date"] = order.date
            allOrdersItem.push(item)

          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }
  }

  useEffect(()=>{
    fetchOrderData()
  } , [token])

   
  return (
    <div className='py-20'>
      <div className='flex gap-1 items-center'>
            <h1 className='text-gray-600 sm:text-2xl text-2xl font-light items-center'>MY 
                <span className='text-gray-900 font-semibold'>
                  ORDERS
                </span></h1>
            <div className='bg-gray-900 h-[2px] w-[50px]'></div>
      </div>
      <div >
        {
          orderData.map((item , index)=>(
            <div key={index} className='grid grid-cols-2 sm:grid-cols-[1fr_8fr_2fr_2fr] py-5 text-sm items-center gap-y-2 border-b border-gray-300'>
              <img className='w-20' src={item.image[0]} alt="" />
              <div className='flex flex-col gap-3'>
                <p className='font-medium'>{item.name}</p>
                <div className='flex gap-2'>
                  <p>{currency}{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size:{item.size}</p>
                </div>
                <p>Date:<span className='text-gray-500'>{new Date(item.date).toDateString()}</span></p>
                <p>Payment:<span className='text-gray-500'>{item.paymenMethod}</span></p>
              </div>
              <div className='flex items-center gap-2'>
                <p className='h-2 rounded-full w-2 bg-green-500'></p>
                <p>{item.status}</p>
              </div>
              <button onClick={fetchOrderData} className='border py-2 border-gray-200 hover:bg-gray-300 transition-all cursor-pointer'>Track order</button>              
            </div>
          ))
        }
      </div>

      
    </div>
  )
}

export default Orders