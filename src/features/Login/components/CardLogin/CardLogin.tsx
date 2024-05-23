import React, { ReactElement } from "react";

function CardLogin(): ReactElement<HTMLDivElement> {
  return (
    <React.Fragment>
      <div className="sm:w-[390px] sm:h-[390px] flex justify-center items-start p-2 flex-col gap-[25px] max-w-[385px]">
        <h1 className="font-bold opacity-75">Bienvenidos</h1>
        <p>Descubre las mejores Comidas</p>
      </div>
    </React.Fragment>
  );
}

export default CardLogin;
