import React, { ReactElement } from "react";
import InputField from "../InputField/InputField";
import LabelField from "../LabelField/LabelField";
import { MdEmail, MdAlternateEmail } from "react-icons/md";
import InputSubmit from "../../../../components/InputSubmit/InputSubmit";

function CardLogin(): ReactElement<HTMLDivElement> {
  return (
    <React.Fragment>
      <div className="sm:w-[390px] sm:h-[390px] flex justify-center items-center p-2 flex-col gap-[25px] max-w-[385px]">
        <h1 className="font-bold opacity-75 text-[29px]">Bienvenidos</h1>
        <p>Descubre los mejores platos de comida</p>
        <div className="relative flex flex-row gap-x-[45px] items-center w-full">
          <MdEmail className="absolute right-0" />
          <InputField id="email" type="text" placeholder="email" />
          <LabelField htmlFor="email">Correo</LabelField>
        </div>
        <div className="relative flex flex-row gap-x-[45px] items-center w-full">
          <MdAlternateEmail className="absolute right-0" />
          <InputField id="password" type="password" placeholder="Contraseña" />
          <LabelField htmlFor="password">Contraseña</LabelField>
        </div>
        <InputSubmit
          className="p-2 bg-orange-500 text-neutral-100 rounded-xl "
          type="submit"
        />
        <a className="text-[12px]">¿Olvido su contraseña? cursor-pointer </a>
      </div>
    </React.Fragment>
  );
}

export default CardLogin;
