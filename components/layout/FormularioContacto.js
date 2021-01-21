import React from "react";
import IconOficina from "../../components/icons/contacto/oficina";
import IconAtencion from "../../components/icons/contacto/atencion";
import IconEmail from "../../components/icons/contacto/email";
import emailjs from 'emailjs-com';

const FormularioContacto = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail mochilaimagen', 'template_7gffn3h', e.target, 'user_e74h3czWTnvUXYmi18RgJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

  return (
    <>
    <div className="z-0 max-w-7xl mx-auto px-5 py-4">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-primario"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 lg:mb-12">
          <h2 className="sm:w-3/5 text-gray-900 font-bold title-font text-2xl sm:text-3xl mb-2 sm:mb-0">
            Contáctenos
          </h2>
          <p className="sm:w-2/5 leading-relaxed text-base sm:pl-10 pl-0 xl:text-right">
            Nuestro objetivo es brindar a nuestros clientes, servicios que
            fortalezcan la relación con sus colaboradores
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 border rounded-lg">
        <div class="hidden lg:block bg-primario-hover md:col-span-4 p-10 text-white rounded-bl-lg rounded-tl-lg">
          <p class="mt-4 text-sm leading-7 tracking-normal font-regular uppercase mb-4">
            Siempre estamos listos
          </p>
          <div class="flex items-center mt-5">
            <IconAtencion width={30} height={30} fill={"#fff"} />
            <span class="text-sm pl-2">(507) 263-5441</span>
          </div>
          <p class="text-sm ml-10">Lunes a Viernes: 8:00am - 5:00pm</p>
          <div class="flex items-center mt-5">
            <IconEmail width={30} height={30} fill={"#fff"} />
            <span class="text-sm pl-2">info@stratego-consulting.com</span>
          </div>
          <div class="flex items-center mt-6">
            <IconOficina width={45} height={45} fill={"#fff"} />
            <span class="text-sm pl-2">
              Plaza Morica calle 50 y 71, San Francisco Piso 11 oficina 1103
            </span>
          </div>
          <div className="w-full mt-12 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15763.108019030124!2d-79.5083557!3d8.992656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8547c43209415b69!2sP.H.%20Plaza%20Morica!5e0!3m2!1ses-419!2ses!4v1611156265201!5m2!1ses-419!2ses"
              width="100%"
              height="420"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
        <form 
            class="md:col-span-8 py-10 px-4 lg:p-10"
            onSubmit={sendEmail}
        >
          <div class="flex flex-wrap -mx-3">
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Nombre
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                name="nombre"
                type="text"
                placeholder=""
              />
              {/* <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
            </div>
            <div class="w-full md:w-1/2 px-3 mt-5 sm:mt-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="email"
                type="email"
                placeholder="********@*****.**"
              />
            </div>
          </div>
          <div class="mb-5 mt-5">
            <div class="w-full">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Empresa
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="empresa"
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <div class="flex flex-wrap mb-5 mt-5 sm:mt-0">
            <div class="w-full md:w-1/2 lg:pr-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Cargo
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                name="cargo"
                type="text"
                placeholder=""
              />
              {/* <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
            </div>
            <div class="w-full md:w-1/2 lg:pl-3 mt-5 sm:mt-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Teléfono
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="telefono"
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <div class="mb-5 mt-5 sm:mt-0">
            <div class="w-full">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Asunto
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="asunto"
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <div class="mb-5 mt-5 sm:mt-0">
            <div class="w-full">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Mensaje
              </label>
              <textarea
                rows="10"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="mensaje"
              ></textarea>
            </div>
            <div class="flex justify-between w-full pt-6">
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
    <div className="px-5">
    <div className="w-full sm:hidden mt-12 rounded-lg overflow-hidden">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15763.108019030124!2d-79.5083557!3d8.992656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8547c43209415b69!2sP.H.%20Plaza%20Morica!5e0!3m2!1ses-419!2ses!4v1611156265201!5m2!1ses-419!2ses"
            width="100%"
            height="420"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
        ></iframe>
    </div>
    </div>
    </>
  );
};

export default FormularioContacto;
