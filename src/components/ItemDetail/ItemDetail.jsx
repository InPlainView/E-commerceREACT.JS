import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClickCounter from '../ClickCounter/click'
import "./ItemDetail.css"

const ItemDetail = ({product}) => {

  const navigate = useNavigate()
  const [cantAdded , setCantAdded] = useState()

  const handleAdd = (qty) =>{
    setCantAdded(qty)
  }
    console.log(cantAdded)

  const handleTerminate = () =>{
    navigate("/cart")
  }

  return (
    <div className='containbox'>
        <h3 className='titlebox'>{product.title}</h3>
        <img className='imgbox' src={product.image} alt=""></img>
        <div className='detailbox'>
            <p className='descriptionbox'>{product.description}</p>
            <p className='pricebox'>Price: ${product.price}</p>
            <div className='btnDiv'>
                 {!cantAdded ?
                 <ClickCounter onAdd={handleAdd} initial={1} stock={20}/>
                 : <button className='terminateBtn' onClick={handleTerminate}>Terminar compra</button>}
        </div>   
        </div>
        
    </div>

  )
}

export default ItemDetail