import React from 'react';
import './NavBar.css';


function Navbar() {
    return(
        <ul>
            <p className='logo'>Ubuy</p>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
        </ul>
    )
}

export default Navbar