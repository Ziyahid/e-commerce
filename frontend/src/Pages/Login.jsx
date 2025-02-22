import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState , setCurrentState] = useState("Login") ;
  const {token , setToken , navigate , backendUrl} = useContext(ShopContext)
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("")

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    try {
      if(currentState === "Sign up"){
        const response = await axios.post(backendUrl + "/api/user/register" , {name , email , password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem("token" , response.data.token)
        }else{
          toast.error(response.data.message)
        }
        
      }else{
        const response = await axios.post(backendUrl + "/api/user/login" , {email , password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem("token" , response.data.token)
        }else{
          toast.error(response.data.message)
        }

      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }

  }


  useEffect(()=>{
    if(token){
      navigate("/")
    }
  },[token])
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col justify-center items-center py-40'>
      <div className='inline-flex items-center gap-2'>
        <p className='font-prata text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-700' />
      </div>
      <div className='flex flex-col gap-2 mt-5 lg:w-1/4 md:w-2/4 w-full'>
        {currentState === "Sign up" ? <input value={name} onChange={(e)=>setName(e.target.value)} required className='w-full border border-gray-400 px-3 py-2 outline-0' type="text" placeholder='Name' />:""}
        <input value={email} onChange={(e)=>setEmail(e.target.value)}  required className='w-full border border-gray-400 px-3 py-2 outline-0' type="text" placeholder='Email' />
        <input value={password} onChange={(e)=>setPassword(e.target.value)}  required className='w-full border border-gray-400 px-3 py-2 outline-0' type="password" placeholder='Password' />
      </div>
      <div className='flex justify-between lg:w-1/4 md:w-2/4 text-sm mt-2 w-full'>
        <p>Forgot your Password ?</p>
        {currentState === "Sign up" ?<p className='cursor-pointer' onClick={()=>setCurrentState("Login")}>Login here</p>:
        <p className='cursor-pointer' onClick={()=>setCurrentState("Sign up")}>Create account</p>}
      </div>
      <button className='bg-black text-white px-20 cursor-pointer mt-5 py-2'>{currentState}</button>
    </form>
  )
}

export default Login