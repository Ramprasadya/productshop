import React from 'react'

const ProductCard = ({data , addToCart }) => {
  return (
    <div className=" w-[300px] h-auto m-5 border rounded-lg  "   > 
       <img className='w-fit h-[250px] rounded-[20px] '  src={data.images[0]} alt="not"  />
       <p>{data.title}</p>
       <p>{data.description}</p>
       <p>${data.price}</p>
       <button className='py-[12px] px-[14px] border border-red-400 rounded-[15px] bg-gray-500 text-white mt-2  ' onClick={()=>addToCart(data)}  >Add to Cart </button>
       </div>
  )
}

export default ProductCard