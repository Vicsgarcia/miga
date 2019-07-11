import React from 'react';
import { Link } from 'react-router-dom'




function Header() {
    return (
        <nav className="navbar header-color header">
            <div className="logo-box">
                <Link className="header-text " to="/"> <img src="https://i.ibb.co/k269vzR/whitelogo.png" className="header-logo" alt="logo miga bakery" /> </Link>
            </div>
            <div className=" header-buttons" id="navbarText">
                <ul className="nav-menu">
                    <li className="nav-menu">
                        <Link className="header-text  " to="/">HOME </Link>
                    </li>
                    <li className="nav-menu">
                        <Link className="header-text  " to="/productos">PRODUCTOS</Link>
                    </li>
                    <li className="nav-menu">
                        <Link className="header-text  " to="/tiendas">TIENDAS</Link>
                    </li>
                    <li className="nav-menu">
                        <Link className="header-text  " to="/Login">LOGIN</Link>
                    </li>
                    <li className="nav-menu">
                        <Link className="header-text  " to="/register">REGISTRO</Link>
                    </li>
                    <li className="nav-menu">
                        <Link className="header-text  " to="/carrito">CARRITO</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};


export default Header