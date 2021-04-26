import React from "react";
import Link from "next/link";

const Prueba = () => {
  return (
    <>
      <div className="relative w-full mx-auto h-screen bg-primario">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-red-500 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
      </div>
      <Link href="/#footer">
        <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primario hover:bg-primario-hover md:py-4 md:text-lg md:px-10">
          Contactar
        </a>
      </Link>
    </>
  );
};

export default Prueba;
