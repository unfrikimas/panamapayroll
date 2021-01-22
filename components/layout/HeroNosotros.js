import React from "react";

const HeroNosotros = () => {
  return (
    <div className=" bg-white mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:space-x-8 sm:flex-row sm:items-center">
        <div className="sm:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src="/images/home/panama-payroll-management-home-5.jpg"
            // width={724}
            // height={800} 
          />
        </div>
        <div className="sm:w-1/2">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular tracking-wide">
            NOSOTROS
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Quiénes<span className="text-primario"> Somos</span>
          </h3>

          <div className="mt-10">
            <ul className="">
              <li className="my-10 md:mt-0">
                <div className="flex">

                  <div className="">
                    <h4 className="text-lg leading-6 font-medium text-gray-700">
                      Panama Payroll Management
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                        Es una empresa especializada en servicios financieros y recursos humanos.
                    </p>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                        Desde  el año 2000 y bajo la dirección del Lic. Ellis Cano Plata se estableció Panamá Payroll Management junto con Latin Top Jobs y trabajan en los servicios de selección y reclutamiento de personal, administración y/o outsourcing de planillas, definición de perfiles sicológicos, pruebas de honestidad,  así como en la prestación de asesoría y servicios financieros.
                    </p>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                        Con relación a servicios financieros, Panamá Payroll Management tiene como especialidad la estructuración de emisiones de valores, a ser colocados ya sea a través de la Bolsa de Valores de Panamá o bien privadamente.  Estructuración de valores Emisiones de valores, asesoramiento para el financiamiento de negocios, y otros aspectos relacionados.
                    </p>
                  </div>
                </div>
              </li>
              <li className="my-10 md:mt-0">
                <div className="flex">
                  <div className="">
                    <h4 className="text-lg leading-6 font-medium text-gray-700">
                      Latin Top Jobs
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                        Conectamos el  mejor candidato con la mejor empresa en la posición correcta.
                    </p>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                        Somos una empresa dedicada al manejo integral de los Recursos Humanos de su empresa, fundada hace ya 25 años, y con presencia regional en todos los países de Centro América.  
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroNosotros;
