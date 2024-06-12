import { addCart } from "../../../../services/api/cart.api";
import { useAuthStore } from "../../../../store/appStore";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProduct } from "../../../../services/api/products.api";
import { Link } from "react-router-dom";

type DetailProduct = {
  nombre: string;
  precio: number;
  published: boolean;
  id: number;
};

const ProductDetail = () => {
  const { perfil } = useAuthStore();
  const location = useLocation();
  const [detail, setDetail] = useState<DetailProduct>();

  const path = location.pathname.split("/");

  const productId = Number(path[path.length - 1]);

  const getDetail = async () => {
    const detalle = await getProduct(productId);
    setDetail(detalle);
    return detalle;
  };

  useEffect(() => {
    getDetail();
  }, []);

  const handleClick = async () => {
    try {
      const res = await addCart(perfil.sub, productId);
      if (res) {
        window.alert("agregado al carrito");
      }
    } catch (error) {}
  };
  return (
    <div className="max-w-[1350px] max-h-full flex flex-col sm:flex sm:flex-row gap-10  justify-center items-center ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <img
          className=" object-cover w-full h-[100vh] shadow-[0_25px_50px_-12px_rgb(0,0,0,0.25)]"
          src="/public/Pizza.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-4 w-[20vw]  h-[100vh] items-center justify-center text-center">
        {detail ? (
          <div className="flex flex-col gap-4">
            <h1> {detail.nombre}</h1>
            <h3> {detail.precio}</h3>
            {detail.published ? <h1></h1> : <p></p>}
          </div>
        ) : (
          <p>No hay detalle del producto</p>
        )}
        <div className="flex flex-row gap-4 items-center justify-center">
          <button
            className="bg-orange-600 hover:bg-orange-400 rounded-xl p-3 font-semibold text-neutral-300"
            onClick={handleClick}
          >
            Agregar al carrito
          </button>

          <Link
            className="bg-orange-600 hover:bg-orange-400 rounded-xl p-3 font-semibold text-neutral-300"
            to="/productlist"
          >
            <button>Volver a la lista de productos</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
