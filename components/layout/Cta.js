import React from 'react';
import Link from 'next/link';

const Cta = () => {
    return (  

        <div class="max-w-7xl pt-8 pb-12 mx-auto">
            <div class="lg:w-4/5 mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex justify-center lg:items-center lg:justify-between text-center">
                <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                ¿Listo para hacer crecer su{" "}
                <span class="text-primario">Negocio?</span>
                </h2>
                <div class="mt-8 flex justify-center lg:justify-start lg:flex-shrink-0 lg:mt-0">
                <div class="inline-flex rounded-md">
                    <Link href="/contacto">
                    <a class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primario hover:bg-primario-hover focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                    Contactar
                    </a>
                    </Link>
                </div>
                <div class="ml-3 inline-flex rounded-md">
                    <Link href="/#servicios">
                    <a class="inline-flex items-center justify-center px-5 py-3 border border-primario text-base leading-6 font-medium rounded-md text-primario bg-white hover:text-primario-hover focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                    Más servicios
                    </a>
                    </Link>
                </div>
                </div>
            </div>
        </div>


    );
}
 
export default Cta;