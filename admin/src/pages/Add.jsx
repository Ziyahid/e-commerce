import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {
  const [image1 , setImage1] = useState(false)
  const [image2 , setImage2] = useState(false)
  const [image3 , setImage3] = useState(false)
  const [image4 , setImage4] = useState(false)

  const [name , setName] = useState("");
  const [description , setDescripton] = useState("");
  const [price , setPrice] = useState("");
  const [category , setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestSeller , setBestSeller] = useState(false);
  const [sizes , setSizes] = useState([]);


  const onSubmitHandler =async (e)=>{

    e.preventDefault()

    try {
      const formData = new FormData();
      formData.append("name" , name)
      formData.append("description" , description)
      formData.append("price" , price)
      formData.append("category" , category)
      formData.append("subCategory" , subCategory)
      formData.append("bestSeller" , bestSeller)
      formData.append("sizes" , JSON.stringify(sizes))
      image1 && formData.append("image1" , image1)
      image2 && formData.append("image2" , image2)
      image3 && formData.append("image3" , image3)
      image4 && formData.append("image4" , image4)

      const response = await axios.post(backendUrl + "/api/product/add" , formData , {headers:{token}})
      console.log(response.data)

      if(response.data.success){
        toast.success(response.data.message)
        setName("")
        setDescripton("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice("")
      }else{
        toast.error(response.data.message)
      }
      


    } catch (error) {

      console.log(error)
      toast.error(error.message)
      
    }

  }
  return (
    <div>
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5'>
        <div>
          <p>Upload Image</p>
          <div className='flex gap-2'>
            <label htmlFor="image1">
              <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
              <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' hidden />
            </label>
            <label htmlFor="image2">
              <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
              <input onChange={(e)=>setImage2(e.target.files[0])}  type="file" id='image2' hidden />
            </label>
            <label htmlFor="image3">
              <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
              <input  onChange={(e)=>setImage3(e.target.files[0])} type="file" id='image3' hidden />
            </label>
            <label htmlFor="image4">
              <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
              <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden />
            </label>
          </div>
        </div>
        <div className='flex flex-col'>
          <label>Product Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} required className='bg-white p-2 border border-gray-400 rounded-md max-w-[500px] outline-0' type="text" placeholder='Type here' />
        </div>

        <div className='flex flex-col'>
          <label>Product description</label>
          <textarea value={description} onChange={(e)=>setDescripton(e.target.value)} className='bg-white p-2 border border-gray-400 rounded-md max-w-[500px] outline-0' type="text" placeholder='Type here' />
        </div>
        <div className='flex gap-10 items-center'>

        <div>
          <p>Product Category</p>
          <select value={category} onChange={(e)=>setCategory(e.target.value)} className='bg-white p-2 border border-gray-400 rounded-md max-w-[500px] outline-0' >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p>Product Subcategory</p>
          <select value={subCategory} onChange={(e)=>setSubCategory(e.target.value)} className='bg-white p-2 border border-gray-400 rounded-md max-w-[500px] outline-0' >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p>Product Price</p>
          <input value={price} onChange={(e)=>setPrice(e.target.value)} className='bg-white p-2 border border-gray-400 rounded-md max-w-[100px] outline-0' type="Number" placeholder='25' />
        </div>
      </div>

      <div>
        <p>Product Sizes</p>
        <div className='flex gap-6 mt-3'>
          <div onClick={()=>setSizes(prev=>prev.includes("S")?prev.filter((item)=>item!== "S"):[...prev , "S"])} className={`bg-gray-3 cursor-pointer px-4 py-2  ${sizes.includes("S")?"bg-pink-100 ":"bg-slate-200"}`} >
            <p>S</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("M")?prev.filter((item)=>item!== "M"):[...prev , "M"])} className={`bg-gray-3 cursor-pointer px-4 py-2  ${sizes.includes("M")?"bg-pink-100 ":"bg-slate-200"}`}>
            <p>M</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("L")?prev.filter((item)=>item!== "L"):[...prev , "L"])} className={`bg-gray-3 cursor-pointer px-4 py-2  ${sizes.includes("L")?"bg-pink-100 ":"bg-slate-200"}`}>
            <p>L</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("XL")?prev.filter((item)=>item!== "XL"):[...prev , "XL"])} className={`bg-gray-3 cursor-pointer px-4 py-2  ${sizes.includes("XL")?"bg-pink-100 ":"bg-slate-200"}`}>
            <p>XL</p>
          </div> 
          <div onClick={()=>setSizes(prev=>prev.includes("XXL")?prev.filter((item)=>item!== "XXL"):[...prev , "XXL"])} className={`bg-gray-3 cursor-pointer px-4 py-2  ${sizes.includes("XXL")?"bg-pink-100 ":"bg-slate-200"}`}>
            <p>XXL</p>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <input onChange={(e)=>setBestSeller(prev=>!prev)} checked={bestSeller} type="checkbox"/>
        <p>Add to bestseller</p>
      </div>
      <div>
      <button className='bg-black text-white px-10 py-3 cursor-pointer'>ADD</button>
      </div>
      
      </form>
    </div>
  )
}

export default Add