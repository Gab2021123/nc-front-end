import { BaseSyntheticEvent } from "react";

import {} from "react-icons";

export default function Modal({
  handleClikcClose,
}: {
  handleClikcClose: (e: BaseSyntheticEvent) => void;
}) {
  return (
    <article className="fixed z-50 left-0 top-0  p-0 m-0 box-border flex w-screen h-screen  bg-[#000000a2] text-semiWhiteColor  justify-center items-center">
      {/**Modal */}
      <div className="transition-all w-[356px] pad:w-[744px] pad:h-[518px] rounded-[26px] flex flex-col gap-y-[22px]  px-[28px] py-[30px] bg-neutral-300">
        <h1 className=" text-center text-blackColor font-semibold text-[18px]">
          Seleccione los días y el horario
        </h1>

        <section className="flex flex-row gap-x-[38px]">
          <div className="flex justify-center items-center gap-x-[8px]">
            <input
              type="checkbox"
              name="Abierto 24 horas"
              aria-label="Abierto 24 horas"
              id="open24Hours"
            />
            <label
              htmlFor="open24Hours"
              className="text-[14px] w-[144px] text-blackColor"
              aria-label="Abierto 24 horas"
            >
              Abierto las 24 horas
            </label>
          </div>
          <div className=" flex justify-center items-center gap-x-[8px]">
            <input
              type="checkbox"
              name="Cerrado"
              id="close"
              aria-label="Cerrado"
            />
            <label
              htmlFor="close"
              className="text-[14px] w-[65px]  text-blackColor"
            >
              Cerrado
            </label>
          </div>
        </section>
        <section className="flex flex-col w-full justify-center items-start px-[14px] gap-y-4">
          {/**horarios de apertura y cierre */}
          <div className="relative w-full"></div>
          <div className="relative w-full"></div>
          <div></div>
        </section>
        <section className="flex items-start">
          <button className="text-primary font-bold text-[14px]">
            Agregar Horario
          </button>
        </section>
        <section className="flex flex-row justify-center items-center gap-x-[48px]">
          <button
            onClick={handleClikcClose}
            className="text-blackColor font-semibold bg-transparent border-2 rounded-[6px] border-grayColor w-[100px] h-[44px] text-[12pt]  transition-all hover:bg-primary hover:text-semiWhiteColor"
          >
            Cancelar
          </button>
          <button className=" bg-primary font-semibold text-semiWhiteColor border-2 rounded-[6px]  w-[100px] h-[44px] text-[12pt]  transition-all hover:bg-transparent hover:text-blackColor hover:border-grayColor">
            Guardar
          </button>
        </section>
      </div>
    </article>
  );
}
