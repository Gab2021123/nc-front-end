/* import React, { ReactElement } from "react";
import InputField from "../InputField/InputField";
import LabelField from "../LabelField/LabelField";
import { MdEmail, MdAlternateEmail } from "react-icons/md";
import ButtonPrimary from "../../../../components/Button/Button";
interface PropsCard {
  placeholder: string;
  id: string;
  title?: string;
  parráfo?: string;
  typeCard: "login" | "Register";
}
function Card({ props }: { props: PropsCard }): ReactElement<HTMLDivElement> {
  return (
    <React.Fragment>
      <div className="sm:w-[390px] sm:h-[390px] flex justify-center items-start p-2 flex-col gap-[25px] max-w-[385px]">
        <h1 className="font-bold opacity-75 text-[29px]">{props.title}</h1>
        <p>{props.parráfo}</p>

        <div className="relative flex flex-row gap-x-[45px] items-center w-full">
          <MdEmail className="absolute right-0" />
          <InputField id={props.id} type="text" placeholder={props.id} />
          <LabelField htmlFor={props.id}>Correo</LabelField>
        </div>
        <div className="relative flex flex-row gap-x-[45px] items-center w-full">
          <MdAlternateEmail className="absolute right-0" />
          <InputField id={props.id} type="password" placeholder="Contraseña" />
          <LabelField htmlFor="password">Contraseña</LabelField>
        </div>
       <input type="text"  />
      </div>
    </React.Fragment>
  );
}

export default Card;
 */
