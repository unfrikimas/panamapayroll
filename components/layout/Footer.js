import React from "react"
import Link from 'next/link'
import IconOficina from '../icons/contacto/oficina'
import IconAtencion from '../icons/contacto/atencion'
import IconEmail from '../icons/contacto/email'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-50 py-8">
        <div className="w-full flex lg:max-w-7xl mx-auto px-4 sm:px-6  text-gray-800 flex-wrap md:justify-between">
          <div className="w-full lg:w-1/5 p-5 lg:p-0">
            <img className="h-12 w-auto sm:h-12" src="/images/PPMlogo300.png" />
          </div>
          <div className="p-5">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Servicios
            </div>
            <Link href="/planilla">
            <a className="my-3 block">
              Administración de Planilla
            </a>
            </Link>
            <Link href="/latintopjobs">
            <a className="my-3 block">
              Latin Top Jobs
            </a>
            </Link>
            <Link href="/serviciosfinancieros">
            <a className="my-3 block">
              Servicios Financieros
            </a>
            </Link>
          </div>
          <div className="p-5">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Legal
            </div>
            <a className="my-3 block">
              Política de Cookies <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block">
              Política de Privacidad <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block">
              Aviso Legal <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Contáctenos
            </div>
            <div className="flex items-center pt-3">
              <div className="flex-shrink-0">
                <IconOficina width={20} height={20} fill={"#125e90"} />             
              </div>
              <p className="pl-1">
                Plaza Morica calle 50 y 71, San Francisco Piso 11 oficina 1103
              </p>
            </div>
            <div className="flex flex-shrink-0 items-center pt-3">
              <div className="flex-shrink-0">
                <IconAtencion width={20} height={20} fill={"#125e90"} />  
              </div>
              <p className="pl-1 flex flex-col sm:flex-row">
                <span className="pr-1">(507) 263-5441</span>
                <span>Lunes a Viernes: 8:00am - 5:00pm</span>
              </p>
            </div>
            <div className="flex flex-shrink-0 items-center pt-3">
              <div className="flex-shrink-0">
                <IconEmail width={20} height={20} fill={"#125e90"} />  
              </div>
              <p className="pl-1">
                info@stratego-consulting.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-5 pb-8 lg:py-2">
        <div className="max-w-7xl px-4 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-2 text-normal mt-2">Panamá Payroll Management</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-2 sm:mt-2 mt-4">© 2021</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
