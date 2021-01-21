import React from "react";
import IconInforme from '../icons/servicios/informes';

const ListadoServicios = () => {
  return (
    <>
    <section class="max-w-7xl mx-auto text-gray-600 body-font">
        <div className="flex flex-col px-5">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-primario"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 lg:mb-6">
            <h2 className="sm:w-3/5 text-gray-700 font-bold title-font text-xl lg:text-2xl sm:text-3xl mb-2 sm:mb-0">
              Qué ofrecemos
            </h2>
            {/* <p className="sm:w-2/5 leading-relaxed text-base sm:pl-10 pl-0 xl:text-right">
                Servicio Personalizado para su gestión de Planillas. Podemos actuar como patrono o simplemente como administrador de la nómina, dependiendo de sus necesidades.
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
                Procesamiento de planillas o nóminas regulares, extraordinarias, (bonos, aguinaldos, y otros), XIII mes, vacaciones y liquidaciones.
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
                Pago a colaboradores preferiblemente a través de ACH, y con cheques por excepción.
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
                    Descuentos de acreedores de los colaboradores.
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
                Pago a acreedores de los colaboradores y recolección de los correspondientes recibos o comprobantes de pago.
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
              <span class="title-font font-medium">Retiro de las fichas de la Caja de Seguro Social y su envío a los colaboradores.</span>
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
              <span class="title-font font-medium">Emisión de cartas de trabajo y carta de ingresos anuales.</span>
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
                Preparación de Informes Mensuales
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
                Salarios pagados (incluyendo deducciones legales).
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <span className="flex-shrink-0">
                <IconInforme width={30} height={30} fill={"#125e90"}/>
                </span>
              <span class="title-font font-medium ml-4">
                Acumulados de salarios.
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
                Análisis de horas extras.
                </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <span className="flex-shrink-0">
                <IconInforme width={30} height={30} fill={"#125e90"}/>
                </span>
              <span class="title-font font-medium ml-4">
                Ausencias del personal.
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
                Fondo de incapacidad disponible.
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
                Control de deudas por colaborador.
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
                Disponibilidad de endeudamiento por colaborador.
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
                Listado de acreedores.
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
                Otros servicios especiales como pago de viáticos.
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
                Pago y control de anticipo de gastos de viaje y reembolsos.
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
                Reembolsos por uso de celular.
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
                Reembolso por gastos de transporte.
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
                Confección y registro de los contratos en el Ministerio de Trabajo.
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
                Administración de Beneficios (Seguro de Vida y Salud).
                </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <span className="flex-shrink-0">
                <IconInforme width={30} height={30} fill={"#125e90"}/>
                </span>
                <span class="title-font font-medium ml-4">
                Preparación de la planilla Pre-elaborada de la Caja de Seguro Social, incluyendo la presentación y retiro de la misma.
                </span>
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
                Orientación al Cliente
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
                Preparación del Anexo 03 del Impuesto sobre la Renta.
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <span className="flex-shrink-0">
                <IconInforme width={30} height={30} fill={"#125e90"}/>
                </span>
              <span class="title-font font-medium ml-4">
                Acumulados de salarios.
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
                    Cálculo del aporte al fondo de cesantía trimestralmente.
                </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <span className="flex-shrink-0">
                <IconInforme width={30} height={30} fill={"#125e90"}/>
                </span>
              <span class="title-font font-medium ml-4">
                Garantía de doble revisión de planillas. A solicitud del cliente si desea, se envía para una revisión preliminar.
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
                    Manejo confidencial de su información.
                </span>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section class="max-w-7xl mx-auto text-gray-600 body-font">
      <div class="px-5 pb-8 lg:pb-12 mx-auto">
        <div className="lg:w-4/5 flex flex-col mx-auto pt-16 lg:pt-8">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-primario"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 lg:mb-6">
                <h2 className="sm:w-3/5 text-gray-700 font-bold title-font text-xl lg:text-2xl sm:text-3xl mb-2 sm:mb-0">
                Servicios Adicionales
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
                Confección y registro de los contratos de trabajo en el ministerio de Trabajo.
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <span className="flex-shrink-0">
                <IconInforme width={30} height={30} fill={"#125e90"}/>
                </span>
              <span class="title-font font-medium ml-4">
                Administración de Beneficios (seguros de vida, salud, etc.)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ListadoServicios;
