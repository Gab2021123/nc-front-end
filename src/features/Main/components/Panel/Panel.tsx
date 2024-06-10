import InputSearch from "../InputSearch/InputSearch";

function Panel() {
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
      />
    </article>
  );
}

export default Panel;
