import React,  { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import ModalUser from '../../components/Modals/modalUser'
import { CartShop } from '../../context/cartProvider'
import guardarOrden from '../../utils/guardarOrden'
import orderCreated from '../../utils/ordenCreada'
import { useForm } from '../../utils/useForm'
import { useModal } from '../../utils/useModal'
import ContactForm from '../DatosUser/datosUser'
import './cart.css'


const Cart = () => {
  const {cart , clearAll, removeItem} = useContext(CartShop)
  const [isOpen, openModal , closeModal] = useModal(false)


  // const confirmOrder = async () => {
  //   const orden = orderCreated(`"Pablo", 155489515, "pablo@mail.com", "id" , "cadena", 455, 6556`);
  //   guardarOrden(cart, orden)
  // }
  
  const confirmOrder = async () => {
   
    const orden = orderCreated();
    console.log(orderCreated)
    guardarOrden(cart, orden)
  }

 const navigate = useNavigate()
 const handleBackToBuy = ()=>{
  navigate("/")
}

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
                    <p className='priceqty'>{"X "}{producto.quantity}{" = $"}{Math.round(producto.quantity * producto.price)}</p>
                    <button onClick={()=> removeItem (producto.id)} className="cancelItem">X</button>
                </li>
                })
                }
        </ul>{cart.length !== 0? <></>
        : <button className='btnGoShop' onClick={handleBackToBuy}>Ir a comprar</button>}
        <ModalUser isOpen={isOpen} closeModal={closeModal}>
          <ContactForm></ContactForm>
        </ModalUser>
       {<button onClick={openModal}>Confirmar</button>}
       <button onClick={confirmOrder} className="btnConfirmCompra">Esto despues!</button>
        <div>Total: ${
          cart.reduce((amount, product) => amount + Math.round(product.price*product.quantity) , 0)
          }</div>
      
      </div>
  )
}

export default Cart