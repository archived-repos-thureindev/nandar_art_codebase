import React, { useRef } from 'react';
import { FiInstagram } from 'react-icons/fi';
import { SiArtstation, SiBuymeacoffee } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import '../assets/styles/NavBar.css';

const Navbar = () => {
    const overlayRef = useRef();
    const navbarNavRef = useRef();

    const toggleNavbar = () => {
        overlayRef.current.style.display = overlayRef.current.style.display === 'flex' ? 'none' : 'flex';
        navbarNavRef.current.classList.toggle('show');
    }

    const closeNavbar = () => {
        overlayRef.current.style.display = 'none';
        navbarNavRef.current.classList.remove('show');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <span className="navbar-brand">Nandar</span>

            <button
                className="navbar-toggler"
                onClick={toggleNavbar}
                type="button" 
                // data-bs-toggle="collapse" 
                // data-bs-target="#navbarNav" 
                // aria-controls="navbarNav" 
                // aria-expanded="false" 
                // aria-label="Toggle navigation"
                >

                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

                <ul className="navbar-nav">

                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>

            <div className="social-links d-none d-lg-flex"> {/* d-none hides the div on all screens, and d-lg-flex displays it as flex on large screens and up */}

                <a href={import.meta.env.VITE_INSTAGRAM_LINK} className="social-link" target="_blank" rel="noopener noreferrer">
                    <FiInstagram /></a>
                <a href={import.meta.env.VITE_ART_STATION_LINK} className="social-link" target="_blank" rel="noopener noreferrer">
                    <SiArtstation /></a>
                <a href={import.meta.env.VITE_BUY_COFFEE_LINK} className="social-link" target="_blank" rel="noopener noreferrer">
                    <SiBuymeacoffee /></a>
            </div>


            <div ref={overlayRef} className="fullscreen-overlay" onClick={closeNavbar}>
                <div className="navbar-dropdown">

                    <ul className="navbar-nav nav-dropdown">

                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;