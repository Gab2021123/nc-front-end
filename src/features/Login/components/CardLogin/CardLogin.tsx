import React, { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import InputField from "../InputField/InputField";
import LabelField from "../LabelField/LabelField";
import { MdEmail, MdAlternateEmail } from "react-icons/md";
import InputSubmit from "../../../../components/InputSubmit/InputSubmit";

function CardLogin(): ReactElement<HTMLDivElement> {
  const [data, setData] = useState({});
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(event.target);
    console.log(data);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    const name = event.target.name;
    setData({ ...data, [name]: value });
  }

  return (
    <React.Fragment>
      <div className="sm:w-[390px] sm:h-[390px] flex justify-center items-center p-2 flex-col  max-w-[385px]">
        <form
          className="flex justify-center items-center p-2 flex-col gap-[35px]"
          action=""
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold opacity-75 text-[29px]">Bienvenidos</h1>
          <p>Descubre los mejores platos de comida</p>
          <div className="relative flex flex-row gap-x-[45px] items-center w-full">
            <MdEmail className="absolute right-0" />
            <InputField
              onChange={handleChange}
              name="email"
              id="email"
              type="text"
              placeholder="email"
            />
            <LabelField htmlFor="email">Correo</LabelField>
          </div>
          <div className="relative flex flex-row gap-x-[45px] items-center w-full">
            <MdAlternateEmail className="absolute right-0" />
            <InputField
              onChange={handleChange}
              name="password"
              id="password"
              type="password"
              placeholder="Contraseña"
            />
            <LabelField htmlFor="password">Contraseña</LabelField>
          </div>
          <InputSubmit
            className="p-2 bg-orange-500 text-neutral-100 rounded-xl "
            type="submit"
          />
          <a className="text-[12px] cursor-pointer text-neutral-500">
            ¿Olvido su contraseña?
          </a>
        </form>
      </div>
    </React.Fragment>
  );
}

export default CardLogin;
