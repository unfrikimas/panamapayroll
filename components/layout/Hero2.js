import React, { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

const HeroDos = () => {
  //Estado para el dropdown
  const [menuDropDown, setMenuDropDown] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <div className="relative bg-white overflow-hidden mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-4 px-4 sm:px-6 lg:px-8 lg:pt-8">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link href="/">
                    <a>
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-16 w-auto sm:h-24"
                        src="/images/PPMlogo300.png"
                      />
                    </a>
                  </Link>

                  
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primario"
                      id="main-menu"
                      aria-haspopup="true"
                      onClick={() => setMenuMobile(!menuMobile)}
                      onBlur={() => setMenuMobile(false)}
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg
                        className="h-8 w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="hidden relative md:block md:ml-10 md:pr-4 md:space-x-8 pt-2">
                  {/* <div class=""> */}
                  {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                  <button
                    type="button"
                    className="text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                    onClick={() => setMenuDropDown(!menuDropDown)}
                    onBlur={() => setMenuDropDown(false)}
                  >
                    <span>Servicios</span>
                    {/* Item active: "text-gray-600", Item inactive: "text-gray-400" */}
                    <svg
                      className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <Transition
                    show={menuDropDown}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    {(ref) => (
                      <div
                        ref={ref}
                        className="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      >
                        <div className="rounded-lg shadow-lg">
                          <div className="rounded-lg shadow-xs overflow-hidden">
                            <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              <Link href="/planilla">
                              <a
                                className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                              >
                                <svg
                                  className="flex-shrink-0 h-6 w-6 text-primario"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                  />
                                </svg>
                                <div className="space-y-1">
                                  <p className="text-base leading-6 font-medium text-gray-900">
                                    Administración de Planilla
                                  </p>
                                  <p className="text-sm leading-5 text-gray-500">
                                    Servicio personalizado para su gestión de
                                    planilla.
                                  </p>
                                </div>
                              </a>
                              </Link>
                              <Link href="/latintopjobs">
                              <a
                                className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                              >
                                <svg
                                  className="flex-shrink-0 h-6 w-6 text-primario"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                  />
                                </svg>
                                <div className="space-y-1">
                                  <p className="text-base leading-6 font-medium text-gray-900">
                                    Latin Top Jobs
                                  </p>
                                  <p className="text-sm leading-5 text-gray-500">
                                    Gestión de selección y evaluación del
                                    capital humano.
                                  </p>
                                </div>
                              </a>
                              </Link>
                              <Link href="/serviciosfinancieros">
                              <a
                                className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                              >
                                <svg
                                  className="flex-shrink-0 h-6 w-6 text-primario"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                  />
                                </svg>
                                <div className="space-y-1">
                                  <p className="text-base leading-6 font-medium text-gray-900">
                                    Servicios Financieros
                                  </p>
                                  <p className="text-sm leading-5 text-gray-500">
                                    Servicio completo de emisiones de valores y
                                    otros.
                                  </p>
                                </div>
                              </a>
                              </Link>
                            </div>
                            <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              {/* <div className="flow-root">
                                <a
                                  href="#"
                                  className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                                >
                                  <svg
                                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <span>Watch Demo</span>
                                </a>
                              </div> */}
                              <div className="flow-root">
                                <Link href="/contacto">
                                <a
                                  className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                                >
                                  <svg
                                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                  </svg>
                                  <span>Contactar</span>
                                </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Transition>
                  {/* </div> */}
                  <Link href="/nosotros">
                  <a
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Nosotros
                  </a>
                  </Link>
                  <Link href="/contacto">
                  <a
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Contacto
                  </a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          {/* 
                Mobile menu, show/hide based on menu open state.
        
                Entering: "duration-150 ease-out"
                  From: "opacity-0 scale-95"
                  To: "opacity-100 scale-100"
                Leaving: "duration-100 ease-in"
                  From: "opacity-100 scale-100"
                  To: "opacity-0 scale-95" */}

          
          <Transition
            show={menuMobile}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            {(refm) => (

          <div 
            ref={refm}
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg bg-white ring-1 ring-primario ring-opacity-6 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-12 w-auto"
                    src="/images/PPMlogo300.png"
                    alt="Logo Panama Payroll Management"
                  />
                </div>
                <div className="-mr-2">
                  { menuMobile && (
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primario"
                      onClick={() => setMenuMobile(!menuMobile)}
                      onBlur={() => setMenuMobile(false)}
                    >
                      <span className="sr-only">Close main menu</span>
                      <svg
                        className="h-8 w-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <div
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                  <div>
                    <div>
                      <a
                        className="inline-block mx-3 py-2 text-base font-medium text-gray-500 border-b-2 border-gray-200"
                        // role="menuitem"
                      >
                        Servicios
                      </a>
                    </div>
                    <div className="ml-4">
                      <Link href="/planilla">
                      <a
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                        role="menuitem"
                      >
                        Administración de Planilla
                      </a>
                      </Link>
                      <Link href="/latintopjobs">
                      <a
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                        role="menuitem"
                      >
                        Latin Top Jobs
                      </a>
                      </Link>
                      <Link href="/serviciosfinancieros">
                      <a
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                        role="menuitem"
                      >
                        Servicios Financieros
                      </a>
                      </Link>
                    </div>
                  </div>
                  <Link href="/nosotros">
                  <a
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    role="menuitem"
                  >
                    Nosotros
                  </a>
                  </Link>
                </div>
                <div role="none">
                  <Link href="/contacto">
                    <a
                      className="block w-full px-5 py-3 text-center font-medium text-primario bg-gray-50 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Contactar
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          )}
          </Transition>

          <main className="mt-10 mx-auto max-w-7xl px-4 mb-4 sm:pb-0 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-primario font-medium text-xl lg:text-2xl pb-2 lg:pb-4 tracking-tight">Panamá Payroll Management</h1>
              <h2 className="text-6xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl pr-3 sm:pr-0">
                {/* <span className="block sm:inline"> */}
                  Soluciones que hacen crecer su{" "}
                {/* </span> */}
                <span className=" text-primario tracking-wide">negocio</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Somos una empresa dedicada al manejo integral de Recursos
                Humanos, Servicios Financieros, Administración y Procesamiento
                de Planilla. Fundada hace 25 años, y con presencia regional en
                todos los países de Centro América.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/contacto">
                    <a
                      className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-xl font-medium rounded-md text-white bg-primario hover:bg-primario-hover md:py-4 md:text-lg md:px-10 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out tracking-wide"
                    >
                      Contactar
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/#servicios">
                  <a
                    className="w-full flex items-center justify-center px-8 py-4 border border-primario text-xl font-medium rounded-md text-primario hover:text-primario-hover md:py-4 md:text-lg md:px-10 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out tracking-wide"
                  >
                    Servicios
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 px-5 lg:px-0 rounded-lg overflow-hidden lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full rounded-lg object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/images/home/panama-payroll-management-home-1.jpg"
          alt="Panama Payroll Management"
        />
      </div>
    </div>
  );
};

export default HeroDos;
