import React from 'react'
import { useContext } from 'react'
import { CartShop } from '../../context/cartProvider'
import './cart.css'



const Cart = () => {
  const {cart} = useContext(CartShop)
  const {clearAll} = useContext(CartShop)
  const {removeItem} = useContext(CartShop)
 
 
console.log(cart)
  return (
    <div>
      <ul >
      <button onClick={clearAll}>CANCELAR</button>
      {cart.map(producto => {
        return <li className='liProductosComprados' key={producto.id}>
                   <img className='proCompradoImg' src={producto.image} alt={producto.title}/>
                   <p>{producto.title}</p>
                   <button onClick={removeItem}>Cancelar</button>
              </li>}
      )}
     </ul>
    </div>
  )
}

export default Cart