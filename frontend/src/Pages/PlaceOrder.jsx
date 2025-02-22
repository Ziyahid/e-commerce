import React, { useContext, useState } from 'react'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../Context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const {navigate , backendUrl , token , cart , products , setCart , getCartAmount , delivery_fee , currency} = useContext(ShopContext)

  const [method , setMethod] = useState("cod")
  const [formData , setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setFormData(data=>({...data, [name]:value}))

  }

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    try {
      let orderItems = []
      for(const items in cart){
        for(const item in cart[items]){
          if (cart[items][item]>0) {
            const itemInfo = structuredClone(products.find(product=>product._id === items))
            if(itemInfo){
              itemInfo.size  = item
              itemInfo.quantity = cart[items][item]
              orderItems.push(itemInfo)
            }
            
          }
        }
      }
      let orderData = {
        address:formData,
        items:orderItems,
        amount:getCartAmount() + delivery_fee,

      }
      switch(method){
        case "cod":
          const response = await axios.post(backendUrl + "/api/order/place", orderData , {headers:{token}})
          if (response.data.success) {
            setCart({})
            navigate("/orders")
          }else{
            toast.error(response.data.message)
          }
        break;

        case "stripe":
          const responseStripe = await axios.post(backendUrl + "/api/order/stripe", orderData , {headers:{token}})
          if (responseStripe.data.success) {
            const {session_url} = responseStripe.data
            window.location.replace(session_url)
          }
            else{
              toast.error(responseStripe.data.message)
            }


        
       

        default:
        break
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }

  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row py-20 justify-between gap-10'>
      <div>
      <div className='flex gap-1 items-center'>
            <h1 className='text-gray-600 sm:text-3xl text-2xl font-light items-center'>DELIVERY 
                <span className='text-gray-900 font-semibold'>
                  INFORMATIONS
                </span></h1>
            <div className='bg-gray-900 h-[2px] w-[50px]'></div>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex gap-2 mt-4'>
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded-sm px-2 py-1 w-full' type="text" placeholder='First name' />
          <input onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded-sm px-2 py-1 w-full' type="text" placeholder='Last name' />
        </div>
        <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded-sm px-2 py-1 w-full' type="text" placeholder='Email address'/>
        <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded-sm px-2 py-1 w-full' type="text" placeholder='Street'/>
        <div className='flex gap-2'>
          <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded-sm px-2 py-1 w-full' type="text" placeholder='City' />
          <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded-sm px-2 py-1 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-2'>
          <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded-sm px-2 py-1 w-full' type="text" placeholder='Zipcode' />
          <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded-sm px-2 py-1 w-full' type="text" placeholder='Country' />
        </div>
        <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded-sm px-2 py-1 w-full' type="text" placeholder='Phone' />
      </div>
    </div>
    <div className=' flex flex-col w-full sm:w-[450px]'>
      <div className='w-full '>
        <CartTotal/>
      </div>
      <div className='mt-10'>
      <div className='flex gap-1 items-center'>
            <h1 className='text-gray-600 sm:text-lg text-sm font-light items-center'>PAYMENT
                <span className='text-gray-900 font-semibold'>
                  METHODS
                </span></h1>
            <div className='bg-gray-900 h-[2px] w-[50px]'></div>
      </div>
      <div className='flex items-center justify-between mt-5'>
       <div onClick={()=>setMethod("stripe")} className={`flex items-center border p-2 gap-4 border-gray-200 rounded-sm cursor-pointer `}>
        <p className={`rounded-full border min-w-3.5 h-3.5 border-gray-300 ${method === "stripe" ? "bg-green-400" : ""}`}></p>
        <img className='w-10' src={assets.stripe_logo} alt="" />
       </div>
       <div onClick={()=>setMethod("razor")} className={`flex items-center border p-2 gap-4 border-gray-200 rounded-sm cursor-pointer `}>
       <p className={`rounded-full border min-w-3.5 h-3.5 border-gray-300 ${method === "razor" ? "bg-green-400" : ""}`}></p>
        <img className='w-20' src={assets.razorpay_logo} alt="" />
       </div>
       <div onClick={()=>setMethod("cod")} className={`flex items-center border p-2 gap-4 border-gray-200 rounded-sm cursor-pointer }`}>
       <p className={`rounded-full border min-w-3.5 h-3.5 border-gray-300 ${method === "cod" ? "bg-green-400" : ""}`}></p>
        <p className='text-xs sm:text-sm font-medium text-gray-600 w-full'>CASH ON DELIVERY</p>
       </div>
      </div>

      </div>
      <div className='text-end mt-5 '>
      <button type='submit' className='bg-black cursor-pointer text-white px-5 rounded-sm py-1 text-sm w-1/2 '>Place Order</button>
    </div>
    </div> 
   

    </form>
  )
}

export default PlaceOrder