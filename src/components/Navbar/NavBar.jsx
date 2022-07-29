import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartWidget from '../CartWidget/cartwidget';
import './NavBar.css';


function Navbar() {
const navigate = useNavigate()
    const handleGoCart = () =>{
    navigate("/cart")
    }
    return(
        <ul className='linavbar'>
            <p className='logo'><Link to="/">Ubuy</Link></p>
            {/* <CartWidget/> */}
            <button onClick={handleGoCart} className="li"><CartWidget/></button>
            <li className='linkNavbar'><Link to="/">Home</Link></li>
            <li className='linkNavbar'><Link to="/category/jewelery">Jewelery</Link></li>
            <li className='linkNavbar'><Link to="/category/electronics">Electronics</Link></li>
            <li className='linkNavbar'><Link to="/category/men's clothing">Men's clothing</Link></li>
            <li className='linkNavbar'><Link to="/category/women's clothing">Women's clothing</Link></li>
        </ul>
    )
}

export default Navbar