import React from 'react';



function Tiendas() {
    return (
        <div>
            <p className="texto tienda-parrafo">Ven a visitarnos siempre que quieras y disfruta de un gran momento con amigos o en familia</p>
            <div className="tienda-rows">
                <div className="tienda-first-row">
                    <img className="tienda-image" src="https://www.madridcoolblog.com/wp-content/uploads/2014/01/MIGA-BAKERY-MADRID-COOL-BLOG-interior-local.jpg" alt="Miga esencia"/>
                </div>
                <div className="tienda-second-row">
                    <img className="tienda-image" src="https://www.madridcoolblog.com/wp-content/uploads/2014/01/MIGA-BAKERY-MADRID-COOL-BLOG-interior-local.jpg" alt="Miga esencia"/>
                </div>
            </div>
            
            <div className="shop-div">
            <div className="shop-box">
                <h3 className="texto shop-title" >Miga Julián Romea</h3>
                <p className="texto shop-text" >C/Julián Romea, 8</p>
                <p className="texto shop-text" >Lunes a viernes de 8h a 21h</p>
                <p className="texto shop-text" >Sábados, domingos y festivos de 9h a 21h</p>
            </div>
            <hr className="shop-line"/>
            <div className="shop-box">
                <h3 className="texto shop-title" >Miga Raimundo Fernández Villaverde</h3>
                <p className="texto shop-text" >C/Raimundo Fernández Villaverde, 49</p>
                <p className="texto shop-text" >Lunes a viernes de 8h a 21h</p>
                <p className="texto shop-text" >Sábados, domingos y festivos de 9h a 21h</p>
            </div>
            <hr className="shop-line"/>
            <div className="shop-box">
                <h3 className="texto shop-title" >Miga Glorieta de Bilbao</h3>
                <p className="texto shop-text" >Glorieta de Bilbao, 5</p>
                <p className="texto shop-text" >Lunes a viernes de 8h a 21h</p>
                <p className="texto shop-text" >Sábados, domingos y festivos de 9h a 21h</p>
            </div>
            </div>
        </div>
    )
};


export default Tiendas