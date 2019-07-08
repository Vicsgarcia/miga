import React from 'react';


function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light header-color ">
            <img src="/logo.png" class="header-logo"/>  
            <div class="collapse navbar-collapse header-buttons" id="navbarText">
                <span class=" ">
                    <ul class="navbar-nav ">
                        <li class="nav-item active ">
                            <a class="header-text mr-4" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="header-text mr-4" href="#">Tiendas</a>
                        </li>
                        <li class="nav-item">
                            <a class="header-text mr-4" href="#">Productos</a>
                        </li>
                    </ul>
                </span>
            </div>
        </nav>
    )
};


export default Header