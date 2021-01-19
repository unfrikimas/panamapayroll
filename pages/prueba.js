import React from 'react';
import Link from 'next/link';

const Prueba = () => {
    return (  

        <Link href="/#footer">
            <a
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primario hover:bg-primario-hover md:py-4 md:text-lg md:px-10"
            >
            Contactar
            </a>
        </Link>

    );
}
 
export default Prueba;