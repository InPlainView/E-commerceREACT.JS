import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Inicio.css'


const Inicio = () => {
    const navigate = useNavigate()
    const productsPage = () =>{
        navigate("/products")
    }
  return (
    <div className='inicioContainer'>
        <div className='divGris'>
            <p>
                Tienda de cosas.<br></br>Lo querés, lo comprás.<br></br>100% real, rápido y fácil.
            </p>
            <img src='https://cdn5.vectorstock.com/i/1000x1000/51/34/mobile-phone-online-store-concept-vector-2515134.jpg'></img>
        </div>
        <div className='divBlanco'>
            <button className='divBlancoBtn' onClick={productsPage}>Ver productos</button>
        </div>
    </div>
  )
}

export default Inicio