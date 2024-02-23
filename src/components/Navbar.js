import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({handleShow ,quantity}) => {
 const navigate = useNavigate()
  const handleLogOut =()=>{
    localStorage.removeItem("user_token")
    navigate("/login")
  }
  return (
    <div>
        <nav className=' p-[30px] bg-blue-500 text-white '   >

            <ul className= " flex justify-around  " >
                <li className='hover:font-extrabold text-[20px]' onClick={()=> handleShow(true) } ><Link to="/" >Shop</Link></li>
                <li className='hover:font-extrabold text-[20px]' onClick={()=> handleShow(false) } >Cart <span>{quantity > 0 ? quantity : ""}</span> </li>
               
            </ul>
        </nav>
        <button className='bg-red-500 py-[12px] px-[15px] text-white rounded-xl absolute right-8 top-[4.5rem] sm:top-[22px] ' onClick={handleLogOut}  >Logout</button>
    </div>
  )
}

export default Navbar