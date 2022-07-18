import React from 'react'
import './cartwidget.css'
import { FiShoppingCart } from 'react-icons/fi';
import { useContext } from 'react';
import { CartShop } from '../../context/cartProvider';

function CartWidget() {
const {cart} = useContext(CartShop)

    return(<>
    {cart.length !==0?

        <div className='cart'>
            <div ><FiShoppingCart  size={30}/></div>
            {cart.length && <span>({cart.length})</span>}
        </div>
    : <></>
    }
    
    
    </>
    )
}
    



export default CartWidget