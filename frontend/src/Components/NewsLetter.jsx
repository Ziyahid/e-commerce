import React from 'react'

const NewsLetter = () => {

    const submitHandler = (e)=>{
        e.preventDefault()

    }
  return (
    <div className=' flex flex-col items-center py-15 gap-5'>
        <p className='font-semibold text-xl'>Subscribe now & get 20% off</p>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eveniet.

        </p>
        <form onSubmit={submitHandler} className='flex items-center w-full sm:w-1/2 mx-auto my-6'>
        <input className="outline-0 sm:flex-1 px-3 py-3 w-full border border-gray-400" type="text" placeholder='Enter your email'  />
        <button className='bg-black cursor-pointer text-white text-xs px-10 py-4 '>Subscribe</button>
        </form>
        
        
    </div>
  )
}

export default NewsLetter