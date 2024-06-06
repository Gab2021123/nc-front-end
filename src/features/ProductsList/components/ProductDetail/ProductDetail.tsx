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
  const [detail, setDetail] = useState<DetailProduct | any>();

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
    <div>
      {detail ? (
        <div>
          <h1>Nombre: {detail.nombre}</h1>
          <h3>Precio: {detail.precio}</h3>
        </div>
      ) : (
        <p>No hay detalle del producto</p>
      )}

      <button onClick={handleClick}>Agregar al carrito</button>
      <Link to="/productlist">
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default ProductDetail;
