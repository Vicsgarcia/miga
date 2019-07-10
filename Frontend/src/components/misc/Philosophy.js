import React from 'react';



function Philosophy() {
    return (
        <div className="philosophy">
            <div className="philosophy-block">
                <div className="philosophy-first-column">
                    <img src="https://i.ibb.co/MfCYMXC/pan.png" className="our-philosophy-photo" alt="Miga breads" />
                </div>
                <div className="philosophy-second-column">
                    <h3 className="philosophy-title">Todos nuestros productos se hacen de forma artesanal</h3>
                    <div className="philosophy-texts">
                        <div className="philosophy-column">
                            <div className="philosophy-box">
                                <h5 className="philosophy-subsubtitle">Hornos propios</h5>
                                <p className="philosophy-text">Queremos devolver a nuestros clientes a años atrás y que puedan degustar panes con múltiples aromas, sabores, formas y tonalidades.</p>
                            </div>
                            <div className="philosophy-box">
                                <h5 className="philosophy-subsubtitle">Los mejores ingredientes</h5>
                                <p className="philosophy-text">En nuestro obrador a la vista trabajamos una a una las masas con los mejores ingredientes naturales.</p>
                            </div>
                        </div>
                        <div className="philosophy-column">
                            <div className="philosophy-box">
                                <h5 className="philosophy-subsubtitle"></h5>
                                <p className="philosophy-text">Todo ello cocido en horno refractario de solera, dando a cada pan un sabor y textura que nos devuelve a sensaciones del pasado.</p>
                            </div>
                            <div className="philosophy-box">
                                <h5 className="philosophy-subsubtitle"></h5>
                                <p className="philosophy-text">Solo utilizamos masas madres propias, con largas fermentaciones y reposos sobre las telas de nilo. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Philosophy

