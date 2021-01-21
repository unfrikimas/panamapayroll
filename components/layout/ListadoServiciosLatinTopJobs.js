import React from "react";
import IconInforme from '../icons/servicios/informes';

const ListadoServiciosLatinTopJobs = () => {
  return (
    <>
    <section class="max-w-7xl mx-auto text-gray-600 body-font">
        <div className="flex flex-col px-5">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-primario"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 lg:mb-6">
            <h2 className="sm:w-3/5 text-gray-700 font-bold title-font text-xl lg:text-2xl sm:text-3xl sm:mb-0">
              Qué ofrecemos
            </h2>
            {/* <p className="sm:w-2/5 leading-relaxed text-base sm:pl-10 pl-0 xl:text-right">
                Servicio de Selección de Personal. "Confíe su mejor recurso a nuestra experiencia"
            </p> */}
          </div>
        </div>
      <div class="px-5 lg:pb-12 mx-auto">
        {/* <div class="lg:text-center mb-8">
          <h1 class="sm:text-3xl text-xl lg:text-2xl font-bold lg:text-center title-font text-gray-700 mb-4">
            Administración de Planilla
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-1/2 mx-auto">
            Servicio Personalizado para su gestión de Planillas. Podemos actuar como patrono o simplemente como administrador de la nómina, dependiendo de sus necesidades.
          </p>
        </div> */}
        <div class="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-primario w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">
                Verificación de extensa base de datos.
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-primario w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">
                Publicación en medios de comunicación y redes sociales de las vacantes.
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-primario w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span 
                class="title-font font-medium">
                    Aplicación de pruebas sicológicas.
                </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-primario w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">
                Entrevistas a candidatos que aprueben las pruebas sicológicas.
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-primario w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">Verificación de referencias.</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-primario w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">Aplicación de pruebas de honestidad.</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-primario w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">Verificación de referencias en la APC.</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-primario w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">Presentación de terna al cliente.</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-primario w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">Garantía de 3 meses sobre el candidato, ya sea porque se va voluntariamente o la empresa no desee continuar la relación durante los primeros 3 meses.</span>
            </div>
          </div>
        </div>
        {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button> */}
      </div>
    </section>
    <section class="max-w-7xl mx-auto text-gray-600 body-font">
      <div class="px-5 lg:pb-12 mx-auto">
        <div className="lg:w-4/5 flex flex-col mx-auto pt-16 lg:pt-8">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-primario"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 lg:mb-6">
                <h2 className="sm:w-3/5 text-gray-700 font-bold title-font text-xl lg:text-2xl sm:text-3xl mb-2 sm:mb-0">
                Aplicación de Pruebas Sicológicas
                </h2>
            </div>
        </div>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <span className="flex-shrink-0">
                <IconInforme width={30} height={30} fill={"#125e90"}/>
                </span>
              <span class="title-font font-medium ml-4">
                Aplicación de diferentes pruebas de acuerdo al nivel de la posición a ser reclutada.
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <span className="flex-shrink-0">
                <IconInforme width={30} height={30} fill={"#125e90"}/>
                </span>
              <span class="title-font font-medium ml-4">
                También le aplicamos baterías de pruebas sicológicas a colaboradores de las empresas para tener una medición independiente.
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <span className="flex-shrink-0">
                <IconInforme width={30} height={30} fill={"#125e90"}/>
                </span>
                <span 
                class="title-font font-medium ml-4">
                Aplicación de prueba Betsinger, que es una prueba de estilo de pensamiento. Prueba de alto nivel sugerida para personal a nivel ejecutivo.
                </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <span className="flex-shrink-0">
                <IconInforme width={30} height={30} fill={"#125e90"}/>
                </span>
              <span class="title-font font-medium ml-4">
                Con el Betsinger, también se pueden medir las aptitudes de los jóvenes que están por ingresar a la universidad, lo que resulta una excelente orientación y un beneficio para los colaboradores si se le aplica a jóvenes pre graduandos.
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <span className="flex-shrink-0">
                <IconInforme width={30} height={30} fill={"#125e90"}/>
                </span>
                <span 
                class="title-font font-medium ml-4">
                Pruebas de Honestidad, como el AMITAI, que mide 6 categorías y es totalmente parametrizable.
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ListadoServiciosLatinTopJobs;
