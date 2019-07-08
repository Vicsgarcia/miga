import React from 'react';


function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light header-color ">
            <h1 class="header-text">Miga Bakery</h1>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <span class="header-text">
                    <ul class="navbar-nav">
                        <li class="nav-item active ">
                            <a class="header-text mr-4" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="header-text mr-4" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="header-text mr-4" href="#">Pricing</a>
                        </li>
                    </ul>
                </span>
            </div>
        </nav>
    )
};


export default Header