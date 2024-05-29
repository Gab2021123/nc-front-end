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
        className="px-16 rounded-[120px] relative top-0  outline-none border-[1px] w-[710px] h-[65px] border-neutral-500 "
        placeholder={props.placeholder}
      />
      <button className="absolute right-[5px] bg-orange-500 text-neutral-200 w-[200px] h-[55px] rounded-[100px]">
        Buscar Restaurantes
      </button>
    </label>
  );
}
export default InputSearch;
