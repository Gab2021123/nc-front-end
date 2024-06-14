import React, { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import InputField from "../InputField/InputField";
import LabelField from "../LabelField/LabelField";
import { MdEmail } from "react-icons/md";
import InputSubmit from "../../../../components/InputSubmit/InputSubmit";
import { CiUser } from "react-icons/ci";
import { postUserRegister } from "../../../../services/api/register.api";
import { UserRegister } from "../../../../interfaces/IUserRegister";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
function CardRegister(): ReactElement<HTMLDivElement> {
  const [data, setData] = useState<UserRegister>();
  const navigate = useNavigate();

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    try {
      event.preventDefault();
      await postUserRegister(data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  }

  return (
    <React.Fragment>
      <div className="sm:w-[390px] sm:h-[390px] flex justify-center items-start p-2 flex-col gap-[25px] max-w-[385px]">
        <form
          action="register"
          className="flex flex-col gap-[35px]"
          method="POST"
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold opacity-75 text-[29px]">!Hola</h1>
          <p>Registrate para ser parte de FlashFood</p>
          <div className="relative flex flex-row gap-x-[45px] items-center w-full">
            <CiUser className="absolute right-0" />
            <InputField
              onChange={handleChange}
              id="nombre"
              name="nombre"
              type="text"
              placeholder="nombre"
            />
            <LabelField htmlFor="email">Nombre</LabelField>
          </div>
          <div className="relative flex flex-row gap-x-[45px] items-center w-full">
            <MdEmail className="absolute right-0" />
            <InputField
              onChange={handleChange}
              id="email"
              type="text"
              name="email"
              placeholder="email"
            />
            <LabelField htmlFor="email">Correo</LabelField>
          </div>
          <div className="relative flex flex-row gap-x-[45px] items-center w-full">
            <RiLockPasswordFill className="absolute right-0" />
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
            className="p-2 bg-orange-500 rounded-full text-neutral-100 "
            type="submit"
            value="Registrar"
          />
          <a className="text-[12px] text-neutral-700 cursor-pointer ">
            ¿Olvido su contraseña?
          </a>
        </form>
      </div>
    </React.Fragment>
  );
}

export default CardRegister;
