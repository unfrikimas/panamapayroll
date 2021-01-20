import React from "react";
import IconOficina from '../components/icons/contacto/oficina';
import IconAtencion from '../components/icons/contacto/atencion';
import IconEmail from '../components/icons/contacto/email';

const Contacto = () => {
  return (
    <>
      <div class="max-w-7xl mx-auto p-5">
        <div class="grid grid-cols-1 md:grid-cols-12 border">
          <div class="bg-primario-hover md:col-span-4 p-10 text-white">
            <p class="mt-4 text-sm leading-7 tracking-normal font-regular uppercase mb-4">Siempre estamos listos</p>
            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-normal">
              Contáctenos
            </h3>
            <p class="mt-4 xl:pb-4 leading-7 text-gray-200">
                Nuestro objetivo es brindar a nuestros clientes, servicios que fortalezcan la relación con sus colaboradores.
            </p>

            <div class="flex items-center mt-5">
                <IconOficina width={55} height={55} fill={"#fff"}/>
              <span class="text-sm pl-2">
                Plaza Morica calle 50 y 71, San Francisco Piso 11 oficina 1103
              </span>
            </div>
            <div class="flex items-center mt-5">
                <IconAtencion width={30} height={30} fill={"#fff"}/>
              <span class="text-sm pl-2">(507) 263-5441</span>
            </div>
            <p class="text-sm ml-10">Lunes a Viernes: 8:00am - 5:00pm</p>
            <div class="flex items-center mt-5">
                <IconEmail width={30} height={30} fill={"#fff"}/>
              <span class="text-sm pl-2">info@stratego-consulting.com</span>
            </div>
          </div>
          <form class="md:col-span-8 p-10">
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Nombre
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                {/* <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
              </div>
              <div class="w-full md:w-1/2 px-3">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >
                            Email
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email"
                        type="email"
                        placeholder="********@*****.**"
                    />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                    >
                        Empresa
                    </label>
                    <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                    />
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Cargo
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                {/* <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
              </div>
              <div class="w-full md:w-1/2 px-3">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >
                            Teléfono
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email"
                        type="email"
                        placeholder=""
                    />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-10">
                <div class="w-full px-3">
                    <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                    >
                        Asunto
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                    />
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Mensaje
                </label>
                <textarea
                  rows="10"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
              <div class="flex justify-between w-full px-3 pt-6">
                {/* <div class="md:flex md:items-center">
                  <label class="block text-gray-500 font-bold">
                    <input class="mr-2 leading-tight" type="checkbox" />
                    <span class="text-sm">Send me your newsletter!</span>
                  </label>
                </div> */}
                <button
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primario hover:bg-primario-hover md:py-4 md:text-lg md:px-10"
                  type="submit"
                >
                  Enviar mensaje
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacto;
