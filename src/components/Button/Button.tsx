import React, { ReactElement } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
//Componente Reutilizable
import { IButton } from "../../interfaces/IButton";
function ButtonPrimary({
  props,
}: {
  props: IButton;
}): ReactElement<HTMLButtonElement> {
  return (
    <React.Fragment>
      <button {...props} onClick={props.click} className={props.className}>
        {props.left ?? <FaArrowLeft />} {props.children}
        {props.right ?? <FaArrowRight />}
      </button>
    </React.Fragment>
  );
}
export default ButtonPrimary;
