import React from "react";

const Footer = () => {
  return (
    <footer class="text-gray-600 body-font">

      <div class="bg-gray-50 py-8">
        <div class="w-full flex lg:max-w-7xl mx-auto px-4 sm:px-6  text-gray-800 flex-wrap md:justify-between">
          <div class="p-5 lg:p-0">
            <img
              className="h-12 w-auto sm:h-12"
              src="/images/PPMlogo300.png"
            />
          </div>
          <div class="p-5">
            <div class="text-xs uppercase text-gray-500 font-medium">
              Servicios
            </div>
            <a class="my-3 block" href="/#">
              Administración de Planilla <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Latin Top Jobs <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Servicios Financieros <span class="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div class="p-5">
            <div class="text-xs uppercase text-gray-500 font-medium">
              Soporte
            </div>
            <a class="my-3 block" href="/#">
              Help Center <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Privacy Policy <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Conditions <span class="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div class="p-5">
            <div class="text-xs uppercase text-gray-500 font-medium">
              Contáctenos
            </div>
            <a class="my-3 block" href="/#">
              Plaza Morica calle 50 y 71, San Francisco Piso 11 oficina 1103{" "}
              <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              (507) 263-5441
              Lunes a Viernes: 8:00am - 5:00pm{" "}
              <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              info@stratego-consulting.com{" "}
              <span class="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
        </div>
      </div>

      <div class="bg-gray-100 pt-5 pb-8 lg:py-2">
        <div class="max-w-7xl px-4 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span class="ml-2 text-normal mt-2">Panamá Payroll Management</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-2 sm:mt-2 mt-4">
            © 2021
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-6 h-6"
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
