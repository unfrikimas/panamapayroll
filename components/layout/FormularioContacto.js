import React, { useState } from "react";
import IconOficina from "../../components/icons/contacto/oficina";
import IconAtencion from "../../components/icons/contacto/atencion";
import IconEmail from "../../components/icons/contacto/email";
import emailjs from 'emailjs-com';

const FormularioContacto = () => {

  const [ campoOculto, setCampoOculto ] = useState("")
  const [ haEnviadoMensaje, setHaEnviadoMensaje ] = useState(false)
  const [ nombre, setNombre ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ empresa, setEmpresa ] = useState("")
  const [ cargo, setCargo ] = useState("")
  const [ telefono, setTelefono ] = useState("")
  const [ asunto, setAsunto ] = useState("")
  const [ mensaje, setMensaje ] = useState("")

  function sendEmail(e) {
      e.preventDefault();
      if(!campoOculto) {        
        emailjs.sendForm('gmail mochilaimagen', 'template_7gffn3h', e.target, 'user_e74h3czWTnvUXYmi18RgJ')
            .then((result) => {
                setHaEnviadoMensaje(true)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
      }
  }

  return (
    <>
    <div className="z-0 max-w-7xl mx-auto px-5 pt-12 lg:pt-0 pb-4">
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
            fortalezcan la relación con sus colaboradores.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border rounded-lg">
        <div className="hidden lg:block bg-primario-hover md:col-span-4 p-10 text-white rounded-bl-lg rounded-tl-lg">
          <p className="mt-4 text-sm leading-7 tracking-normal font-regular uppercase mb-4">
            Siempre estamos listos
          </p>
          <div className="flex items-center mt-5">
            <IconAtencion width={30} height={30} fill={"#fff"} />
            <span className="text-sm pl-2">(507) 263-5441</span>
          </div>
          <p className="text-sm ml-10">Lunes a Viernes: 8:00am - 5:00pm</p>
          <div className="flex items-center mt-5">
            <IconEmail width={30} height={30} fill={"#fff"} />
            <span className="text-sm pl-2">info@stratego-consulting.com</span>
          </div>
          <div className="flex items-center mt-6">
            <IconOficina width={45} height={45} fill={"#fff"} />
            <span className="text-sm pl-2">
              Plaza Morica calle 50 y 71, San Francisco Piso 11 oficina 1103
            </span>
          </div>
          <div className="w-full mt-12 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15763.108019030124!2d-79.5083557!3d8.992656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8547c43209415b69!2sP.H.%20Plaza%20Morica!5e0!3m2!1ses-419!2ses!4v1611156265201!5m2!1ses-419!2ses"
              width="100%"
              height="420"
              frameBorder="0"
              allowFullscreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

        { haEnviadoMensaje ?         
          <div className="grid col-span-full lg:col-span-8 place-items-center my-5 px-5">
            <p className="w-full py-3 text-center text-lg sm:text-2xl text-medium bg-green-500 text-white rounded-lg">Su mensaje se ha enviado correctamente.</p>
          </div>
        :
        <form 
            className="md:col-span-8 py-10 px-4 lg:p-10"
            onSubmit={sendEmail}
            autoComplete="off"
        >
          <input 
            type="hidden" 
            name="panama"
            value={campoOculto}
            onChange={e => setCampoOculto(e.target.value)}
          />
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
                <span className="text-red-500"> *</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="nombre"
                type="text"
                placeholder=""
                value={nombre}
                onChange={e => setNombre(e.target.value)}
              />
              {/* <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
            </div>
            <div className="w-full md:w-1/2 px-3 mt-5 sm:mt-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email
                <span className="text-red-500"> *</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="email"
                type="email"
                placeholder="********@*****.**"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-5 mt-5">
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Empresa
                <span className="text-red-500"> *</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="empresa"
                type="text"
                placeholder=""
                value={empresa}
                onChange={e => setEmpresa(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-5 mt-5 sm:mt-0">
            <div className="w-full md:w-1/2 lg:pr-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Cargo
                <span className="text-red-500"> *</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="cargo"
                type="text"
                placeholder=""
                value={cargo}
                onChange={e => setCargo(e.target.value)}
              />
              {/* <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
            </div>
            <div className="w-full md:w-1/2 lg:pl-3 mt-5 sm:mt-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Teléfono
                <span className="text-red-500"> *</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="telefono"
                type="text"
                placeholder=""
                value={telefono}
                onChange={e => setTelefono(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-5 mt-5 sm:mt-0">
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Asunto
                <span className="text-red-500"> *</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="asunto"
                type="text"
                placeholder=""
                value={asunto}
                onChange={e => setAsunto(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-5 mt-5 sm:mt-0">
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Mensaje
                <span className="text-red-500"> *</span>
              </label>
              <textarea
                rows="10"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="mensaje"
                value={mensaje}
                onChange={e => setMensaje(e.target.value)}
              ></textarea>
            </div>
            { nombre.trim() === "" || email.trim() === "" || empresa.trim() === "" || cargo.trim() === "" || telefono.trim() === "" || asunto.trim() === "" || mensaje.trim() === "" 
            ?
            <div className="flex justify-between w-full pt-6">
              <button
                className="w-full flex items-center justify-center px-8 py-3 border border-red-500 text-base font-medium rounded-md text-red-500 cursor-not-allowed md:py-4 md:text-lg md:px-10"
                disabled
              >
                Enviar mensaje (faltan datos)
              </button>
            </div>
            : 
            <div className="flex justify-between w-full pt-6">
              <button
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primario hover:bg-primario-hover md:py-4 md:text-lg md:px-10"
                type="submit"
              >
                Enviar mensaje
              </button>
            </div>
            }
          </div>
        </form>
        }
      </div>
    </div>
    <div className="px-5 pb-16">
      <div className="w-full sm:hidden mt-12 rounded-lg overflow-hidden">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15763.108019030124!2d-79.5083557!3d8.992656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8547c43209415b69!2sP.H.%20Plaza%20Morica!5e0!3m2!1ses-419!2ses!4v1611156265201!5m2!1ses-419!2ses"
              width="100%"
              height="420"
              frameBorder="0"
              allowFullscreen=""
              aria-hidden="false"
              tabIndex="0"
          ></iframe>
      </div>
    </div>
    </>
  );
};

export default FormularioContacto;
