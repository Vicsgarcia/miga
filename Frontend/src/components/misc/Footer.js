import React from 'react';
//import { Link } from 'react-router-dom'




function Footer() {
    return (
        <div className="footer">
            <div className="firt-row">
                <div>
                    <h1 className="footer-title">Nuestras tiendas</h1>
                    <h4 className="footer-text">Miga Raimundo</h4>
                    <h4 className="footer-text">Miga Bilbao</h4>
                    <h4 className="footer-text">Miga Julian romea</h4>
                </div>
                <div>
                    <img src="https://i.ibb.co/Bfr8ThF/whitelogo.png" className="footer-logo" alt="logo miga bakery"/>  
                </div>
                <div>
                    <h1 className="footer-title">Información de Interés</h1>
                    <h4 className="footer-text">Aviso legal</h4>
                    <h4 className="footer-text">Política privacidad</h4>
                    <h4 className="footer-text">Política de cookies</h4>
                </div>
            </div>
            <div className="second-row">
                <h2 className="footer-text">Síguenos en Redes</h2>
                <a target="_blank"  href="https://www.facebook.com/Migabakery" rel="noopener noreferrer" >
                  <img className="footer-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Facebook_Home_logo_old.svg/768px-Facebook_Home_logo_old.svg.png" alt=""/>
                </a>
                <a target="_blank"  href="https://www.instagram.com/Migabakery" rel="noopener noreferrer">
                  <img className="footer-img" src="http://www.stickpng.com/assets/thumbs/580b57fcd9996e24bc43c521.png" alt=""/>
                </a>
            </div>
        </div>
    )
};


export default Footer