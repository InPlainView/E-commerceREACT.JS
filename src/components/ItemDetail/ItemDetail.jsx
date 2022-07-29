import React from 'react'
import { useContext , useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { CartShop } from '../../context/cartProvider'
import ClickCounter from '../ClickCounter/click'
import "./ItemDetail.css"

const ItemDetail = ({product}) => {

  const navigate = useNavigate()
  const [cantAdded , setCantAdded] = useState(0)
  const {addItem} = useContext(CartShop)

  const handleAdd = (qty) =>{
    setCantAdded(qty)
  }
    console.log(cantAdded)

  const handleTerminate = () =>{
    addItem(product , cantAdded)
    navigate("/cart")
  }
  console.log(cantAdded)
  return (
    <div className='containbox'>
        <h3 className='titlebox'>{product.title}</h3>
        <img className='imgbox' src={product.image} alt=""></img>
        <div className='detailbox'>
            <p className='descriptionbox'>{product.description}</p>
            <p className='pricebox'>Price: ${product.price}</p>
            <div className='btnDiv'>
                 {!cantAdded ?
                 <ClickCounter onAdd={handleAdd} initial={1} stock={product.stock}/>
                 : <button className='terminateBtn' onClick={handleTerminate}>Terminar compra</button>}
        </div></div>
        
    </div>

  )
}

export default ItemDetail