import InputSearch from "../InputSearch/InputSearch";

function Panel() {
  return (
    <article className="sm:w-[810px] sm:h-[242px]  w-[540px]  h-[131.3px]   col-start-4 col-end-9 -z-10 bg-orange-50 flex flex-col items-center justify-between p-[15px] rounded-[30px] ">
      <h1 className="text-orange-500 font-bold text-[48px]">
        Delicias a la velocidad de la luz
      </h1>
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
