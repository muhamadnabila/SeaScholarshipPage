import React from 'react';
import SeaLogo from '../assets/Slicing/Sea-Undergraduate-Logo.png'

function Navbar() {
    return (
        <div className="navbar-wrapper">
            <a className="sea-logo" href='#'> <img src={SeaLogo} /> </a>
            <ul className="navbar">
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>| Program</a>
                </li>
                <li>
                    <a href='#'>| Apply Here</a>
                </li>
                <li>
                    <a href='#'>| FAQ</a>
                </li>
            </ul>
            <i className="fas fa-bars"></i>
        </div>
    )
}
export default Navbar;