import React from "react";
import Link from 'next/link';

const Servicios = () => {
  return (
    <section className="text-gray-600 max-w-7xl mx-auto body-font">
      <div className="px-5 pt-12 pb-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-primario"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h2 className="sm:w-3/5 text-gray-900 font-bold title-font text-2xl sm:text-3xl mb-2 sm:mb-0">
              Nuestros Servicios
            </h2>
            <p className="sm:w-2/5 leading-relaxed text-base sm:pl-10 pl-0 xl:text-right">
              Nuestro objetivo es brindar a nuestros clientes, servicios que
              fortalezcan la relación con sus colaboradores
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/images/home/administracion-planilla-panama-payroll-management-1.jpg"
                // width={899}
                // height={600}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Administración de Planilla
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Servicio Personalizado para su gestión de Planillas. Podemos
              actuar como patrono o simplemente como administrador de la nómina,
              dependiendo de las necesidades del cliente.
            </p>
            <Link href="/planilla">
            <a className="text-primario inline-flex items-center mt-3 cursor-pointer hover:underline">
              Leer más
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            </Link>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/images/home/recursos-humanos-panama-payroll-management-1.jpg"
                // width={900}
                // height={600}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Latin Top Jobs
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Latin Top Jobs se basa en una experiencia acumulada en más de 20
              años partiendo de Contrata pasando por Preselección Empresarial
              hasta convertirse en Latin Top Jobs como una alternativa a la
              gestión de Selección y Evaluación del Capital Humano.
            </p>
            <Link href="/latintopjobs">
            <a className="text-primario inline-flex items-center mt-3 cursor-pointer hover:underline">
              Leer más
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            </Link>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/images/home/servicios-financieros-panama-payroll-management-1.jpg"
                // width={899}
                // height={600}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Servicios Financieros
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Nuestra relación con diferentes puestos de bolsa, firmas de
              abogados, contadores públicos autorizados y fiduciarias nos
              permiten ofrecerle el servicio completo de estructuración de
              emisiones de valores y otros.
            </p>
            <Link href="/serviciosfinancieros">
            <a className="text-primario inline-flex items-center mt-3 cursor-pointer hover:underline">
              Leer más
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
