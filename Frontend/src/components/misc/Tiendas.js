import React from 'react';



function Tiendas() {
    return (
        <div>
            
            <p className="texto tienda-parrafo">Lorem Ipsum is simply dummy texting Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <div className="tienda-rows">
                <div className="tienda-first-row">
                    <img className="tienda-image" src="https://www.madridcoolblog.com/wp-content/uploads/2014/01/MIGA-BAKERY-MADRID-COOL-BLOG-interior-local.jpg" alt="Miga esencia"/>
                </div>
                <div className="tienda-second-row">
                    <img className="tienda-image" src="https://www.madridcoolblog.com/wp-content/uploads/2014/01/MIGA-BAKERY-MADRID-COOL-BLOG-interior-local.jpg" alt="Miga esencia"/>
                </div>
            </div>
            <hr />

            <div className="shop-box">
                <h3 className="texto shop-title" >Miga Julián Romea</h3>
                <p className="texto shop-text" >C/Julián Romea, 8</p>
                <p className="texto shop-text" >Lunes a viernes de 8h a 21h</p>
                <p className="texto shop-text" >Sábados, domingos y festivos de 9h a 21h</p>
            </div>
            <hr />
            <div className="shop-box">
                <h3 className="texto shop-title" >Miga Raimundo Fernández Villaverde</h3>
                <p className="texto shop-text" >C/Raimundo Fernández Villaverde, 49</p>
                <p className="texto shop-text" >Lunes a viernes de 8h a 21h</p>
                <p className="texto shop-text" >Sábados, domingos y festivos de 9h a 21h</p>
            </div>
            <hr />
            <div className="shop-box">
                <h3 className="texto shop-title" >Miga Glorieta de Bilbao</h3>
                <p className="texto shop-text" >Glorieta de Bilbao, 5</p>
                <p className="texto shop-text" >Lunes a viernes de 8h a 21h</p>
                <p className="texto shop-text" >Sábados, domingos y festivos de 9h a 21h</p>
            </div>
            <hr />
        </div>
    )
};


export default Tiendas