import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/cartwidget';
import './NavBar.css';


function Navbar() {
    return(
        <ul className='linavbar'>
            <p className='logo'><Link to="/">Ubuy</Link></p>
            <CartWidget/>
            <li className='linavbar'><Link to="/">Home</Link></li>
            <li className='linavbar'><a href="news.asp">News</a></li>
            <li className='linavbar'><a href="contact.asp">Contact</a></li>
            <li ><a href="about.asp">About</a></li>
        </ul>
    )
}

export default Navbar