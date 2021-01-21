import React from 'react';
import BarraNavegacion from '../components/layout/BarraNavegacion';
import HeroServicios from '../components/layout/HeroServicios';
import ListadoServicios from '../components/layout/ListadoServiciosFinancieros';
import Cta from '../components/layout/Cta';
import Footer from '../components/layout/Footer';

const ServiciosFinancieros = () => {
    return (  

        <div className="relative bg-white overflow-hidden">
            <BarraNavegacion />
            <div className="mb-12 lg:mb-24">
                <HeroServicios />
            </div>
            <div className="pt-8 lg:pt-0">
                <ListadoServicios />
            </div>
            <div className="border-t border-gray-100 mt-8">
                <Cta />
            </div>
            <Footer />
        </div>

    );
}
 
export default ServiciosFinancieros;