import React from 'react'
import './modalUser.css'
import guardarOrden from '../../utils/guardarOrden'
import orderCreated from '../../utils/ordenCreada'
import { useContext} from 'react'
import { CartShop } from '../../context/cartProvider'
import { useModal } from '../../utils/useModal'


const ModalUser = ({children, isOpen, closeModal}) => {
const {cart} = useContext(CartShop)
// const [openModal, closeModal] = useModal(false)

const confirmOrder = async () => {
    const orden = orderCreated("Pablo", 155489515, "pablo@mail.com", "dakkmsdkasd"  , "cadena", 455, 6556);
    guardarOrden(cart, orden)
    }

  return (
    <article className={`modal ${isOpen &&"is-open"}`}>
        <div className='modal-container'>
            <button className='modal-close' onClick={closeModal}>X</button>
            {children}
            <button onClick={confirmOrder} className="btnConfirmCompra">Listo!</button>
        </div>
    </article>
  )
}

export default ModalUser