import React, { createContext } from 'react'
import { useState } from 'react'

export const CartShop = createContext()

const CartProvider = ({children}) => {

    const [estadoCero , setEstadoCero] = useState("Estado cero")
    const [cart , setCart] = useState([])


    const addItem = (producto , cantidad) => {
      console.log(producto , cantidad)
      const productoRepetido = isInCart(producto);
      console.log(productoRepetido)
      if (productoRepetido) {
        productoRepetido.quantity += cantidad
        setCart([...cart])
      }else{
        setCart([...cart , {...producto , quantity: cantidad}])
      }
    }

    const clearAll = () => {
     setCart([])
    }
  
    const removeItem = (id) => {
      const canceledItem = cart.filter((producto) => producto.id !== id)
      setCart(canceledItem)
    }

    const isInCart = (producto) => {
      return cart.find(elemento => elemento.id === producto.id)
    }
    

  return (
    <CartShop.Provider value={{estadoCero , setEstadoCero, addItem, cart, clearAll, removeItem}}>
        {children}
    </CartShop.Provider>
  )
}

export default CartProvider