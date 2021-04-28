import React from "react";
import Image from "next/image";

const SeccionExperiencia = () => {
  return (
    <section className="text-gray-600 body-font max-w-7xl mx-auto">
      <div className="px-5 py-24 md:py-28 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src="/images/home/panama-payroll-management-home-5.jpg"
            // width={724}
            // height={800}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left">
          <div className="flex flex-col mb-10 mt-8 md:mt-0 lg:items-start">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primario-hover mb-5">
              <svg
                fill="currentColor"
                stroke="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="none"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M9.5 5.5C10.6 5.5 11.5 4.6 11.5 3.5C11.5 2.4 10.6 1.5 9.5 1.5C8.4 1.5 7.5 2.4 7.5 3.5C7.5 4.6 8.4 5.5 9.5 5.5ZM5.75 8.9L3 23H5.1L6.85 15L9 17V23H11V15.45L8.95 13.4L9.55 10.4C10.85 12 12.8 13 15 13V11C13.15 11 11.55 10 10.65 8.55L9.7 6.95C9.35 6.35 8.7 6 8 6C7.75 6 7.5 6.05 7.25 6.15L2 8.3V13H4V9.65L5.75 8.9ZM13 2V9H16.75V23H18.25V9H22V2H13ZM18.01 8V6.25H14.5V4.75H18.01V3L20.5 5.5L18.01 8Z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Misión
              </h2>
              <p className="leading-relaxed text-base">
                Proporcionar servicios de tercerización a las empresas
                multinacionales y nacionales de alto prestigio, logrando
                alianzas estratégicas para que las empresas se enfoquen en el
                corazón de su negocio.
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-8 md:mt-0 mb-10 lg:items-start">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primario-hover mb-5">
              <svg
                fill="currentColor"
                stroke="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="none"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M7 10C4.79 10 3 11.79 3 14C3 16.21 4.79 18 7 18C9.21 18 11 16.21 11 14C11 11.79 9.21 10 7 10ZM7 16C5.9 16 5 15.1 5 14C5 12.9 5.9 12 7 12C8.1 12 9 12.9 9 14C9 15.1 8.1 16 7 16ZM15.01 15C13.36 15 12.01 16.35 12.01 18C12.01 19.65 13.36 21 15.01 21C16.66 21 18.01 19.65 18.01 18C18.01 16.35 16.66 15 15.01 15ZM15.01 19C14.46 19 14.01 18.55 14.01 18C14.01 17.45 14.46 17 15.01 17C15.56 17 16.01 17.45 16.01 18C16.01 18.55 15.56 19 15.01 19ZM16.5 3C13.47 3 11 5.47 11 8.5C11 11.53 13.47 14 16.5 14C19.53 14 22 11.53 22 8.5C22 5.47 19.53 3 16.5 3ZM16.5 12C14.57 12 13 10.43 13 8.5C13 6.57 14.57 5 16.5 5C18.43 5 20 6.57 20 8.5C20 10.43 18.43 12 16.5 12Z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Gestión y Recursos
              </h2>
              <p className="leading-relaxed text-base">
                Direccionar la gestión administrativa hacia la eficacia
                obteniendo los resultados que nuestros clientes esperan.
                Optimizar al máximo los recursos para que la gestión
                administrativa sea eficaz por medio de la eficiencia.
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-8 md:mt-0 mb-10 lg:items-start">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primario-hover mb-5">
              <svg
                fill="currentColor"
                stroke="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="none"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 6C15.79 6 19.17 8.13 20.82 11.5C19.17 14.87 15.79 17 12 17C8.21 17 4.83 14.87 3.18 11.5C4.83 8.13 8.21 6 12 6ZM12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 9C13.38 9 14.5 10.12 14.5 11.5C14.5 12.88 13.38 14 12 14C10.62 14 9.5 12.88 9.5 11.5C9.5 10.12 10.62 9 12 9ZM12 7C9.52 7 7.5 9.02 7.5 11.5C7.5 13.98 9.52 16 12 16C14.48 16 16.5 13.98 16.5 11.5C16.5 9.02 14.48 7 12 7Z"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Transparencia
              </h2>
              <p className="leading-relaxed text-base">
                Velamos y mantenemos transparencia en la administración todos
                los recursos propios y los procedentes de los clientes con la
                mayor y más absoluta honestidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionExperiencia;
