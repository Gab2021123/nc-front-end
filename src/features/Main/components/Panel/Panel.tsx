import InputSearch from "../InputSearch/InputSearch";
import React, { useState } from "react";
import ProductFind from "../../../ProductFind/pages/ProductFind";

function Panel() {
  const [showProductFind, setShowProductFind] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    // Mostrar ProductFind si el input no está vacío
    let valor = event.target.value;
    setShowProductFind(event.target.value !== "");
    setInputValue(valor);
  };
  return (
    <article className=" z-10  w-[390px]  h-[131.3px] grid  col-span-full place-content-center  bg-orange-50  items-center justify-between p-[15px] rounded-[30px] tablet:w-[810px] tablet:h-[242px] tablet:place-content-center ">
      <h2 className="text-orange-500 font-bold text-[24.5px] sm:text-[48px]">
        Delicias a la velocidad de la luz
      </h2>
      <p className="text-neutral-400 text-[16px]">Teletransportar tu pasión</p>
      <InputSearch
        id="inputSearch"
        type="search"
        className="rounded-[120px] flex justify-center items-center relative "
        placeholder="ej.Calle Alcalá, 48, Madrid"
        onChange={handleInputChange}
      />
      {showProductFind && (
        <div className=" z-100 flex items-center justify-center h-30%">
          <ProductFind value={inputValue} />
        </div>
      )}
    </article>
  );
}

export default Panel;
