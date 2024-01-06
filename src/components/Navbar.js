import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({handleShow ,quantity}) => {
  return (
    <div>
        <nav className=' p-[30px] bg-blue-500 text-white '   >
            <ul className= " flex justify-around  " >
                <li className='hover:font-extrabold text-[20px]' onClick={()=> handleShow(true) } ><Link to="/" >Home</Link></li>
                <li className='hover:font-extrabold text-[20px]' onClick={()=> handleShow(false) } >Cart <span>{quantity}</span> </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar