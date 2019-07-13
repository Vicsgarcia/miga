import React from 'react';
import Carousel from './Carousel';
import Philosophy from './Philosophy';
import Tiendas from './Tiendas';
import ProductList from '../prod/ProductsList';





function Home() {
    return (
        <div>
            <div>
                
                <Carousel />
            </div>
            <h2 className="home-text">Nuestra filosofía</h2>
            <div className=''>
                <Philosophy />
            </div>
            <div className="">
                <h2 className="home-text">Nuestros Productos</h2>
                <ProductList />
            </div>
            <h2 className="home-text">Conoce nuestras tiendas</h2>
            <div className=''>
                <Tiendas />
            </div>
        </div>
    )
};


export default Home

