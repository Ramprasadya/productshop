import React, { useState } from 'react'
import ShopContext from './context'

const ShoppingContext = ({children}) => {
    const [Count, setCount] = useState(0)
  return (
    <ShopContext.Provider value={{Count,setCount}} >
     {children}
    </ShopContext.Provider>
  )
}

export default ShoppingContext