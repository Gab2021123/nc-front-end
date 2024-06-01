import React, { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import InputField from "../InputField/InputField";
import LabelField from "../LabelField/LabelField";
import { MdEmail, MdAlternateEmail } from "react-icons/md";
import InputSubmit from "../../../../components/InputSubmit/InputSubmit";
import { postUser } from "../../../../services/api";
import { User } from "../../../../interfaces/IUser";
import { useAuthStore } from "../../../../store/appStore";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
function CardLogin(): ReactElement<HTMLDivElement> {
  const [data, setData] = useState<User | undefined>();
  const setToken = useAuthStore((state) => state.setToken);
  const setPerfil = useAuthStore((state) => state.setPerfil);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const token = await postUser(data);
    console.log(jwtDecode(String(token.access_token)));
    console.log(token.access_token);
    setToken(token.access_token);
    setPerfil(jwtDecode(token, { header: true }));
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    const name = event.target.name;
    setData({ ...data, [name]: value });
  }

  return (
    <React.Fragment>
      <div className="sm:w-[390px] sm:h-[390px] w-full h-full flex justify-center items-center p-2 flex-col  max-w-[385px]">
        <form
          className="flex justify-center items-center p-2 flex-col gap-[35px]"
          action="login"
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
          <div className="flex flex-row gap-[30px]">
            <InputSubmit
              className="p-2 bg-orange-500 text-neutral-100 rounded-xl cursor-pointer transition-all hover:bg-orange-700"
              type="submit"
              value="Iniciar Sesion"
            />
            <Link
              className="p-2 bg-orange-500 flex justify-center items-center text-neutral-100 transition-all hover:bg-orange-700 rounded-xl"
              to="/register"
            >
              Registrar
            </Link>
          </div>

          <Link
            to="/forgotPassword"
            className="text-[12px] cursor-pointer text-neutral-500"
          >
            ¿Olvido su contraseña?
          </Link>
        </form>
      </div>
    </React.Fragment>
  );
}

export default CardLogin;
