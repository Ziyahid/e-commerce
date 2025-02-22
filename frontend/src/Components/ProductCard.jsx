import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({id , name  , price  , image }) => {
  return (
    <NavLink className="w-full hover:scale-105 transition-all rounded-lg shadow-md flex flex-col" to={`/product/${id}`}>
        <img src={image[0]} alt="" />
        <div className='text-gray-700 p-4'>
            <p>{name}</p>
            <p>${price}</p>
        </div>
    </NavLink>
  )
}

export default ProductCard