import React from 'react';
import BarraNavegacion from '../components/layout/BarraNavegacion';
import HeroNosotros from '../components/layout/HeroNosotros';
import Cta from '../components/layout/Cta';
import Footer from '../components/layout/Footer';

const Nosotros = () => {
    return (  

        <div className="relative bg-white overflow-hidden">
            <BarraNavegacion />
            <div className="mb-12 lg:mb-24 mt-12 lg:mt-0">
                <HeroNosotros />
            </div>
            <div className="border-t border-gray-100 mt-8">
                <Cta />
            </div>
            <Footer />
        </div>

    );
}
 
export default Nosotros;