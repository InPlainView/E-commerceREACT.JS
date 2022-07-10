import React, { createContext } from 'react'
import { useState } from 'react'

export const CartShop = createContext()

const CartContext = ({children}) => {

    const [estadoCero , setEstadoCero] = useState()

  return (
    <CartShop.Provider value={{estadoCero , setEstadoCero}}>
        {children}
    </CartShop.Provider>
  )
}

export default CartContext