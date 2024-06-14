import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
interface Props extends HTMLAttributes<HTMLElement> {}
const Footer = (props: Props) => {
  return (
    <footer
      {...props}
      className={`${props.className} bg-orange-500 grid grid-flow-row place-content-center place-items-center  col-span-full sm:grid sm:grid-flow-col sm:max-w-full sm:w-full font-semibold `}
    >
      <nav className="grid sm:col-span-full  place-items-start place-content-start gap-y-5 content-center grid-flow-row sm:grid sm:grid-flow-col sm:w-full p-8 ">
        <Link className=" text-white " to="">
          ¿Quienes somos?
        </Link>
        <Link className=" text-white " to="">
          Privacidad
        </Link>
        <Link className=" text-white " to="">
          Top comidas
        </Link>
        <Link className=" text-white " to="">
          Top ciudades
        </Link>
        <Link className=" text-white " to="">
          Resgistra tu negocio
        </Link>
        <Link className=" text-white " to="">
          Se parte de FlashFood
        </Link>
      </nav>
      <hr className=" border-t border-white w-full  " />
      <div className="text-center grid col-span-full place-content-between grid-flow-row sm:grid-flow-col gap-4 px-8 py-4  w-full">
        <div className="grid grid-flow-row gap-[25px] items-center justify-center">
          <h3 className="text-white">Te arrepentiste de la compra?</h3>
          <button className="bg-white text-orange-500 px-4 py-2 rounded">
            Boton de arrepentimiento
          </button>
        </div>
        <div className="text-white grid grid-flow-row place-content-center place-items-center content-center text-left gap-2">
          <p>
            Delivery hero E-commerce S.A. Cuit 30-42930149-6 | Av. Libertador
            7330, piso 14, ciudad
          </p>
          <p>Autonoma de Buenos Aires | contacto.ar@flashfood.com</p>
          <span>FlashFood@2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
