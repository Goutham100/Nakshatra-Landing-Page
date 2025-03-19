import React, { useState } from 'react';
import './Navbar.css'
import logo from "../assets/Front Pocket.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={isMenuOpen ? 'active' : ''}>
                <li>Home</li>
                <li>Services</li>
                <li>Demo</li>
                <li>Contact Us</li>
            </ul>
        </div>
    );
}

export default Navbar;