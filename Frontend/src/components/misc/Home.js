import React from 'react';
import Carousel from './Carousel';
import Philosophy from './Philosophy';
import ProductList from '../prod/ProductsList';





function Home() {
    return (
        <div>
            <div>
                <Carousel />
            </div>
            <h2 className="home-text">Nuestra filosofía</h2>
            <div className="philosophy">
                <Philosophy />
            </div>
            <div className="">
                <h2 className="home-text">Nuestros Productos</h2>
                <ProductList />
            </div>
        </div>
    )
};


export default Home

