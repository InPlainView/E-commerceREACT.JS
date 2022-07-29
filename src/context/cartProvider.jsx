import React, { createContext } from 'react'
import { useState } from 'react'

export const CartShop = createContext()

const CartProvider = ({children}) => {
  
  const [cart , setCart] = useState([])
  const [totalPrice , setTotalPrice] = useState(0)
  const [totalQuantities , setTotalQuantities] = useState(0)
  
  
  const addItem = (producto , cantidad) => {
    const productoRepetido = isInCart(producto);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + producto.price*producto.quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + (producto.quantity += cantidad))
    
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
    
    const getTotal = () =>{
      const totaldetodo = cart.reduce((acc, product) => acc + product.price*product.quantity , 0)
      return <p>totaldetodo</p>
    }
   
    
    return (
      <CartShop.Provider value={{ getTotal , addItem, cart, clearAll, removeItem, totalQuantities, setTotalQuantities}}>
        {children}
    </CartShop.Provider>
  )
}

export default CartProvider