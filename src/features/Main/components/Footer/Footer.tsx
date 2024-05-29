import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-orange-500  col-start-1 col-end-13">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex space-x-4">
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
        </div>
        <hr className="my-3 border-t border-white w-6 mx-auto" />
        <div className="text-center">
          <div className="mb-2">
            <h3 className="text-white">Te arrepentiste de la compra?</h3>
            <button className="bg-white text-orange-500 px-4 py-2 rounded">
              Boton de arrepentimiento
            </button>
          </div>
          <div className="text-white">
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
