import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/cartwidget';
import './NavBar.css';


function Navbar() {
    return(
        <ul className='linavbar'>
            <p className='logo'><Link to="/">Ubuy</Link></p>
            <CartWidget/>
            <li className='linkNavbar'><Link to="/">Home</Link></li>
            <li className='linkNavbar'><Link to="/category/jewelery">Jewelery</Link></li>
            <li className='linkNavbar'><Link to="/category/electronics">Electronics</Link></li>
            <li className='linkNavbar'><Link to="/category/men's clothing">Men's clothing</Link></li>
            <li className='linkNavbar'><Link to="/category/women's clothing">Women's clothing</Link></li>
            {/* <li ><Link to="">About</Link></li> */}
        </ul>
    )
}

export default Navbar