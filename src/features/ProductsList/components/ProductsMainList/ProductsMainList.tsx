import { getProducts } from "../../../../services/api/products.api";
import { addCart } from "../../../../services/api/cart.api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductsMainList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getFoods = async () => {
      const foods = await getProducts();
      await setProducts(foods);
    };

    getFoods();
  }, []);

  const handleClick = async (e: any) => {
    let productId = Number(e.target.value);

    try {
      const res = await addCart(1, productId);
      if (res) {
        window.alert("agregado al carrito");
      }
    } catch (error) {}
  };
  return (
    <div>
      {products.map((product: any) => {
        return (
          <div>
            <h1>Nombre: {product.nombre}</h1>
            <h3>Precio: ${product.precio}</h3>
            <button value={product.id} onClick={handleClick}>
              Agregar al carrito
            </button>
          </div>
        );
      })}

      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};

export default ProductsMainList;
