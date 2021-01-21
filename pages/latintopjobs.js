import React from 'react';
import BarraNavegacion from '../components/layout/BarraNavegacion';
import HeroLatinTopJobs from '../components/layout/HeroLatinJobs';
import ListadoServicios from '../components/layout/ListadoServiciosLatinTopJobs';
import Cta from '../components/layout/Cta';
import Footer from '../components/layout/Footer';

const LatinTopJobs = () => {
    return (  

        <div className="relative bg-white overflow-hidden">
            <BarraNavegacion />
            <div className="mb-12 lg:mb-24">
                <HeroLatinTopJobs />
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
 
export default LatinTopJobs;