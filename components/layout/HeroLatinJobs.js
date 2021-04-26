import React from "react";
import Link from "next/link";

const HeroLatinTopJobs = () => {
  return (
    <section className="text-gray-600 body-font max-w-7xl mx-auto pt-8 lg:pt-0">
      <div className="mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="w-full lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-lg"
            alt="servicios financieros"
            src="/images/home/recursos-humanos-panama-payroll-management-1.jpg"
            />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
          <h1 className="text-left title-font sm:text-4xl text-2xl mb-4 font-bold text-gray-900">
            Latin Top Jobs
          </h1>
          <p className="mb-8 leading-relaxed">
          Servicio de Selección de Personal. Conectamos el  mejor candidato con la mejor empresa en la posición correcta. "Confíe su mejor recurso a nuestra experiencia".
          </p>
          <div className="flex w-full lg:w-1/2 space-x-4">
            <Link href="/contacto">
              <a className="w-full flex items-center justify-center px-2 border border-transparent text-base font-medium rounded-lg text-white bg-primario hover:bg-primario-hover md:py-4 md:text-lg md:px-2 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Contactar
              </a>
            </Link>
            <Link href="/#servicios">
              <a className="w-full flex items-center justify-center px-2 py-4 border border-primario text-base font-medium rounded-md text-primario hover:text-primario-hover md:py-4 md:text-lg md:px-2 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Más servicios
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLatinTopJobs;