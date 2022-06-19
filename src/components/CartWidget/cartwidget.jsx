import React from 'react'
import './cartwidget.css'
import { FiShoppingCart } from 'react-icons/fi';

function CartWidget() {
    return(
        <div className='cart'><FiShoppingCart  size={30}/></div>
    )
}
    



export default CartWidget