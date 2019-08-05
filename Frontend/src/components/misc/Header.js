import React from 'react';
import { Link } from 'react-router-dom'
import {withAuthConsumer } from '../../contexts/AuthStore';




function Header(props) {
    const isAuthenticated = props.isAuthenticated()
    return (
        <nav className="navbar header-color header">
            <div className="logo-box">
                <Link className="header-text" to="/"> NeedanIron </Link>
            </div>
            <div className=" header-buttons" id="navbarText">
                <ul className="nav-menu">
                    <li className="nav-menu">
                        <Link className="header-text  " to="/">HOME </Link>
                    </li>
                    <li className="nav-menu">
                        <Link className="header-text  " to="/productos">PRODUCTOS</Link>
                    </li>
                    {!isAuthenticated && (
                        <li className="nav-menu">
                            <Link className="header-text  " to="/Login">LOGIN</Link>
                        </li>
                    )}
                    {/*!isAuthenticated && (
                    <li className="nav-menu">
                        <Link className="header-text  " to="/register">REGISTRO</Link>
                    </li>
                    )*/}
                    {isAuthenticated && (
                    <li className="nav-menu">
                        <Link className="header-text  " to="/carrito">CARRITO</Link>
                    </li>
                    )}

                    {isAuthenticated && (
                    <li className="nav-menu">
                        <Link className="header-text  " to="/cuenta">CUENTA</Link>
                    </li>
                    )}
                    

                    
                </ul>
            </div>
        </nav>
    )
};


export default withAuthConsumer(Header)