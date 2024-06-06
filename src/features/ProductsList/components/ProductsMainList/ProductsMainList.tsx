import { getProducts } from "../../../../services/api/products.api";

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

  return (
    <div>
      {products.map((product: any) => {
        return (
          <Link key={product.id} to={`/productdetail/${product.id}`}>
            <div>
              <h1>Nombre: {product.nombre}</h1>
              <h3>Precio: ${product.precio}</h3>
            </div>
          </Link>
        );
      })}

      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};

export default ProductsMainList;
