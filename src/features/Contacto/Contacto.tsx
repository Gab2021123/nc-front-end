import React, { FormEvent } from "react";

/* import ImageComponents from "../Main/components/Images/ImageComponent"; */
import "./Contact.css";

import Header from "../Main/components/Header/Header";
import "./Contact.css";
import InputField from "../Login/components/InputField/InputField";
import LabelField from "../Login/components/LabelField/LabelField";
import Footer from "../Main/components/Footer/Footer";
import ImageComponents from "../Main/components/Images/ImageComponent";
/* import { images } from "../Main/utils/images"; */

function Contacto() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    console.log(event.target);
    throw new Error("Function not implemented.");
  }

  return (
    <React.Fragment>
      <section className=" relative w-full flex h-[100vh] flex-col justify-center items-center">
        <Header className="absolute top-0" />
        <img
          className="absolute object-cover w-full h-[350px] top-0  opacity-70 "
          src="/Parrilla.jpg"
          alt="contacto de la pagina"
        />
        <div className="grid grid-rows-2 sm:grid sm:grid-cols-2 absolute top-[39%]  w-full max-w-[1200px]">
          <article className="flex flex-row gap-3">
            <form
              action=""
              className="flex flex-col p-4 gap-4 absolute "
              onSubmit={handleSubmit}
            >
              <h2>
                Enviar sus <span> datos</span>
              </h2>
              <div className="relative">
                <InputField placeholder="email" id="email" />
                <LabelField htmlFor="email">Email</LabelField>
              </div>
              <div className="relative">
                <InputField placeholder="nombre y apellidos" id="name" />
                <LabelField htmlFor="name">Nombres y Apellidos</LabelField>
              </div>
              <div className="relative">
                <InputField placeholder="teléfono" id="teléfono" />
                <LabelField htmlFor="teléfono">Teléfono</LabelField>
              </div>

              <textarea
                className=" border border-orange-500 rounded-md p-3 focus:border focus:border-orange-700"
                rows={5}
                name="descripción"
                id="description"
              ></textarea>

              <input
                type="submit"
                value="Enviar Datos"
                className="bg-orange-500 rounded-lg text-neutral-300 p-2 font-semibold hover:bg-orange-700 transition-all cursor-pointer flex items-center justify-center w-[30%] "
              />
            </form>{" "}
          </article>
          <article className=" grid grid-rows-3 gap-3 place-content-center place-items-center">
            <span>Comparte </span>
            <span>Disfruta</span>
            <span>Convencete</span>
            <ImageComponents
              label=""
              contrast={150}
              saturate={150}
              source="/logo.png"
              title={""}
              to={""}
            />
          </article>
        </div>
        <Footer className=" absolute top-[100%]" />
      </section>
    </React.Fragment>
  );
}

export default Contacto;
