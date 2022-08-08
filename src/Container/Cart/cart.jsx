import React,  { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import OrderForm from '../../components/Register/register'
import { CartShop } from '../../context/cartProvider'
import guardarOrden from '../../utils/guardarOrden'
import orderCreated from '../../utils/ordenCreada'
import './cart.css'


const Cart = () => {
  const {cart , clearAll, removeItem, total} = useContext(CartShop)
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate()
  const openModal = () => setShowForm(true);
  const closeModal = () => setShowForm(false);

  const confirmOrder = async (orderBuyer) => {
    const orden = orderCreated(orderBuyer , cart, total);
    guardarOrden(cart, orden);
    setShowForm(false);
    clearAll();
  }
  
 const handleBackToBuy = ()=>{
  navigate("/")
}

return (
  <div>
    <div className="wantCancelBox">
    {cart.length !== 0? <button onClick={openModal} className="btnQuiero">Buy it!</button>
    :<></>}
      {cart.length !== 0?
        <button onClick={clearAll} className="clearList">Cancel shop</button>
        : <></>}
    </div>
        <ul>
        {cart.map(producto => {
          return <li className='liProductosComprados' key={producto.id}>
                    <img className='proCompradoImg' src={producto.image} alt={producto.title}/>
                    <p className='titlecontent'>{producto.title}</p>
                    <p className='priceqty'>{"X "}{producto.quantity}{" = $"}{Math.round(producto.quantity * producto.price)}</p>
                    <button onClick={()=> removeItem (producto.id)} className="cancelItem">X</button>
                </li>
                })}
        </ul>{cart.length !== 0? <></>
        : <div className="btnGoShopBox">
          <p className='Uy'>Uy!  El carrito esta vacio.</p>
          <button className='btnGoShop' onClick={handleBackToBuy}>Ir a comprar</button>
        </div>}
        {cart.length !== 0?
        <div className='divTotal'>Total price: ${total}</div>: <></>}
        {showForm && (<OrderForm closeModal={closeModal} confirmOrder={confirmOrder}></OrderForm>)}
      </div>
  )
}

export default Cart