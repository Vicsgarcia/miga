import React from 'react';
import { Link } from 'react-router-dom'




function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light header-color ">
            <img src="/logo.png" class="header-logo"/>  
            <div class=" header-buttons" id="navbarText">
                <span class=" ">
                    <ul class="navbar-nav ">
                        <li class=" ">
                            <Link class="header-text mr-4" to="/">HOME </Link>
                        </li>
                        <li class="">
                            <Link class="header-text mr-4" to="/productos">PRODUCTOS</Link>
                        </li>
                        <li class="">
                            <Link class="header-text mr-4" to="/tiendas">TIENDAS</Link>
                        </li>
                        <li class="">
                            <Link class="header-text mr-4" to="/Login">LOGIN</Link>
                        </li>
                        <li class="">
                            <Link class="header-text mr-4" to="/register">REGISTRO</Link>
                        </li>
                    </ul>
                </span>
            </div>
        </nav>
    )
};


export default Header