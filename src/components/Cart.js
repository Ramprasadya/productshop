import React, { useEffect, useState } from 'react'

const Cart = ({cart}) => {
  const [Cart, setCart] = useState([])
  useEffect(()=>{
    setCart(cart)
  },[cart])
  return (
    <div>
      {Cart.length > 0  ? ( <div className='flex flex-wrap' >
      {
        Cart.map((cartItem)=>{
        return  <div className=" w-[300px] h-auto m-5 "   > 
       <img className='w-fit h-[250px] rounded-[20px] '  src={cartItem.images[0]} alt="not"  />
       <p>{cartItem.title}</p>
      <div className='flex' >
      <p>{cartItem.quantity}</p>
      </div>
       <p>${cartItem.price * cartItem.quantity }</p>
       {/* <button className='py-[12px] px-[14px] border border-red-400  ' onClick={()=>addToCart(data)}  >Add to Cart</button> */}
       </div>
        })
      }
      </div> ) :(
        <p>Nothing Have to Dispaly</p>
      )}
      SubTotal: $
      {
        Cart.map((item)=> item.price * item.quantity ).reduce((total,value)=> total + value ,0 )
      }
    </div>
  )
}

export default Cart