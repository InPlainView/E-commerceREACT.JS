import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartShop } from '../../context/cartProvider'
import './cart.css'


const Cart = () => {
  const [precioTotal, setPrecioTotal] = useState()
  const {cart} = useContext(CartShop)
  const {clearAll} = useContext(CartShop)
  const {removeItem} = useContext(CartShop)

 const navigate = useNavigate()
 const handleBackToBuy = ()=>{
  navigate("/")
}

console.log(cart)
  return (
    <div>{cart.length !== 0?
      <button onClick={clearAll} className="clearList">Cancelar lista</button>
      : <></>
      }
      
        <ul>
        {cart.map(producto => {
          return <li className='liProductosComprados' key={producto.id}>
                    <img className='proCompradoImg' src={producto.image} alt={producto.title}/>
                    <p className='titlecontent'>{producto.title}</p>
                    <p className='priceqty'>{"X "}{producto.quantity}{" = $"}{Math.round(producto.quantity*producto.price)}</p>
                    <button onClick={()=> removeItem (producto.id)} className="cancelItem">Cancelar</button>
                </li>
                }
                )
                
              }
        </ul>{cart.length !== 0? <></>
        : <button className='btnGoShop' onClick={handleBackToBuy}>Ir a comprar</button>
        }
       
        {/* <div>{cart.map(producto =>{
        let summPrice = (producto.quantity*producto.price);
        let totalPrice = summPrice += summPrice;
        setPrecioTotal(totalPrice);
        return <p>{setPrecioTotal}</p>
        })}</div>
      */}
      </div>
  )
}

export default Cart