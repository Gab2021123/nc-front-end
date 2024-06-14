import { HTMLAttributes, HTMLInputTypeAttribute } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  type: HTMLInputTypeAttribute | undefined;
  id: HTMLInputTypeAttribute | undefined;
  placeholder: HTMLInputTypeAttribute | undefined;
}
function InputSearch(props: Props) {
  return (
    <label {...props} htmlFor={props.id}>
      <input
        //Desestructuracion de propiedades
        id={props.id}
        type={props.type}
        className="p-4 sm:px-16 rounded-[120px] relative top-0  outline-none border-[1px] w-[350px] h-[65px]  sm:w-[710px]  sm:h-[65px] border-neutral-500 "
        placeholder={props.placeholder}
      />
      {/*  <button className="absolute right-[8px] sm:right-[5px] bg-orange-500 transition-all hover:bg-orange-300 text-neutral-200 w-[125px] h-[55px] sm:w-[200px] sm:h-[55px] tablet:w-[150px] rounded-[100px]">
        Buscar Restaurantes
      </button> */}
    </label>
  );
}
export default InputSearch;
