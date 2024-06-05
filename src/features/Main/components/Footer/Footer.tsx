import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-orange-500  col-start-1 col-end-13">
      <div className="container mx-auto px-6 py-3 flex flex-col justify-between items-center font-semibold">
        <nav className="flex space-x-4 justify-between w-full p-[10px] ">
          <Link className="flex justify-center items-center text-white " to="">
            Quienes somos
          </Link>
          <Link className="flex justify-center items-center text-white " to="">
            Privacidad
          </Link>
          <Link className="flex justify-center items-center text-white " to="">
            Top comidas
          </Link>
          <Link className="flex justify-center items-center text-white " to="">
            Top ciudades
          </Link>
          <Link className="flex justify-center items-center text-white " to="">
            Resgistra tu negocio
          </Link>
          <Link className="flex justify-center items-center text-white " to="">
            Se parte de FlashFood
          </Link>
        </nav>
        <hr className="my-3 border-t border-white w-full mx-auto" />
        <div className="text-center flex justify-evenly items-center w-full">
          <div className="flex flex-row gap-[25px] items-center justify-center">
            <h3 className="text-white">Te arrepentiste de la compra?</h3>
            <button className="bg-white text-orange-500 px-4 py-2 rounded">
              Boton de arrepentimiento
            </button>
          </div>
          <div className="text-white text-left flex flex-col gap-2">
            <p>
              Delivery hero E-commerce S.A. Cuit 30-42930149-6 | Av. Libertador
              7330, piso 14, ciudad
            </p>
            <p>Autonoma de Buenos Aires | contacto.ar@flashfood.com</p>
            <span>FlashFood@2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
