import React from "react";

const Alianzas = () => {
  return (
    <>
    <section className="text-gray-600 body-font max-w-7xl mx-auto pt-24">
      <div className="px-5 pb-24 mx-auto">
        <div className="flex flex-col lg:text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
            Alianzas Estratégicas
          </h1>
          <p className="lg:w-1/3 mx-auto leading-relaxed text-base">
            Contamos con operaciones y presencia regional en todos los países de Centro América
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center items-center justify-items-center mx-auto">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="px-4 py-6">
              <img className="mx-auto w-2/3" src="/images/home/alianza1.jpg"/>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="px-4 py-6">
              <img className="mx-auto w-2/3" src="/images/home/alianza2.jpg"/>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="px-4 py-6">
              <img className="mx-auto w-2/3" src="/images/home/alianza3.jpg"/>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="px-4 py-6">
              <img className="mx-auto w-2/3" src="/images/home/alianza4.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <style jsx>
      {`
        alianza: {
          width: 100%;
          height: 144px;
        }
      `}
    </style>
    </>
  );
};

export default Alianzas;
