import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-orange-500  col-start-1 col-end-13">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex space-x-2">
          <Link to="/home">link</Link>
          <a href="" className="text-white">
            Quienes somos?
          </a>
          <a href="" className="text-white">
            Privacidad
          </a>
          <a href="" className="text-white">
            Top comidas
          </a>
          <a href="" className="text-white">
            Top ciudades
          </a>
          <a href="" className="text-white">
            Registra tu negocio
          </a>
          <p>Se parte de flashfood</p>
        </div>
        <hr className="my-3 border-t border-white w-4/5 mx-auto" />
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
