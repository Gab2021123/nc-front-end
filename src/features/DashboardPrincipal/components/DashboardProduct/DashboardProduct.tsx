import { PiCheckSquareLight } from "react-icons/pi";
import InputField from "../../../Login/components/InputField/InputField";
import LabelField from "../../../Login/components/LabelField/LabelField";

import { ChangeEvent, useState } from "react";

const DashboardProduct = () => {
  const [check, setCheck] = useState(false);
  const handleClickCheck = () => {
    setCheck(!check);
  };
  const handleSubmit = ({ ...params }) => {
    console.log(params);
  };
  function changeInput(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void {
    console.log(event.preventDefault());
    const value = event.target.value;
    const name = event.target.name;

    console.log(value, name);
    /*  setBusinessData((prevData: any) => ({
      ...prevData,
      [name]: value,
    })); */
  }

  return (
    <article className="col-span-3 p-4 flex flex-col gap-y-[45px] ">
      <form action="" method="post" className="flex flex-col gap-y-[45px]">
        <h2 className="text-[25px] font-semibold"> Registro del producto</h2>
        <p className="">Crea un perfil con la información de tu negocio</p>
        <div className="flex flex-col gap-y-[45px]">
          {/**Primer Input */}
          <section className="relative flex flex-row gap-x-[45px] items-center w-full">
            <InputField
              placeholder="Nombre del producto"
              type="text"
              id="Nombre del producto"
            />
            <LabelField htmlFor="Nombre del producto">
              Nombre del producto
            </LabelField>
          </section>
          {/**Segundo Input */}
          <section className="relative flex flex-row gap-x-[45px] items-center w-full">
            <InputField placeholder="Precio" type="text" id="precio" />
            <LabelField htmlFor="precio">Precio ($)</LabelField>
          </section>
          {/**Tercer Input */}
          <section className="relative flex flex-row gap-x-[45px] items-center w-full">
            <select
              name="categoria"
              id="categoria"
              className="peer h-10 w-full border-y-gray-950 border-b-2  focus:outline-none focus:border-y-gray-300 focus:bg-neutral-400 transition-all placeholder:text-transparent  placeholder:text-[20px]  "
            >
              <option
                value=""
                disabled
                hidden
                className="text-neutral-700 text-2xl"
              >
                Categoria
              </option>
              <option value="burger">Hamburguesa</option>
              <option value="pizza">Pizza</option>
              <option value="pollo">Pollo</option>
              <option value="carne">Carne</option>
            </select>
            {/*   <LabelField htmlFor="categoria">Categoria</LabelField> */}
          </section>
        </div>

        <div className="flex flex-col w-full gap-y-[45px]">
          <section className="relative flex flex-row gap-x-[45px] items-center w-full">
            <InputField
              name="negocioDireccion"
              placeholder="Número celular"
              type="number"
              id="Número celular"
            />
            <LabelField htmlFor="Número celular">Número celular</LabelField>
            <PiCheckSquareLight
              className={
                check
                  ? "fill-green-500 scale-150 cursor-pointer w-[18px] h-[18px]"
                  : "fill-slate-800 scale-150 stroke-2 cursor-pointer w-[18px] h-[18px]"
              }
              onClick={handleClickCheck}
            />
          </section>
          <section className="relative flex flex-row gap-x-[45px] items-center w-full ">
            <InputField
              name="negocioDireccion"
              placeholder="Direccion"
              type="text"
              id="Direccion"
              onChange={changeInput}
            />
            <LabelField htmlFor="Direccion">Direccion</LabelField>
          </section>

          <div className="flex flex-row gap-x-[34px] justify-center">
            <button className="bg-red-600 rounded-xl text-white font-semibold p-2 hover:bg-red-500">
              Cancelar
            </button>
            <button
              className="bg-orange-600 rounded-xl text-white font-semibold p-2 hover:bg-orange-500"
              type="submit"
              onClick={handleSubmit}
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </article>
  );
};

export default DashboardProduct;
