import React, { useEffect, useState } from 'react'
import axios from "axios"
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({setToken}) => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("")
     const onSubmitHandler = async (e)=>{
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + "/api/user/admin"  , {email , password});
            if(response.data.success){

                setToken(response.data.token)
                toast.success("Succesfully Loged In")

            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        }


    }

    
  return (
    <div className='bg-slate-50 flex justify-center items-center h-[100vh]'>
        <form onSubmit={onSubmitHandler} className='bg-white flex flex-col p-5 rounded-md w-[400px] shadow-lg'>
            <h1 className='font-bold text-2xl'>Admin Panel</h1>
            <label value={email} className='mt-3'>Email Address</label>
            <input onChange={(e)=>setEmail(e.target.value)} required className='outline-0 border rounded-sm p-2' type="email" placeholder='your@forever.com' />
            <label className='mt-3'>Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)}  required className='outline-0 border rounded-sm p-2' type="password" placeholder='Enter your password' />
            <button className='bg-black cursor-pointer text-white rounded-sm mt-5 py-1'>Login</button>
        </form>
    </div>
  )
}

export default Login