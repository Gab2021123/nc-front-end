import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import {
  getCart,
  deleteCart,
  removeCart,
} from "../../../../services/api/cart.api";
import { getProduct } from "../../../../services/api/products.api";
import { useAuthStore } from "../../../../store/appStore";

import Navigation from "../../../Main/components/Navigation/Navigation";

type Product = {
  clientId: number;
  id: number;
  productId: number;
  quantity: number;
};

type ProductDetails = {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
};

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const { perfil } = useAuthStore();
  const [products, setProducts] = useState<Array<Product>>([]);
  const [productDetails, setProductDetails] = useState<Array<ProductDetails>>(
    []
  );
  const [refreshCart, setRefreshCart] = useState(false);

  const [uniqueProductDetails, setUniqueProductDetails] = useState<
    Array<ProductDetails>
  >([]);

  const fetchCart = async () => {
    setLoading(true); // Iniciar la carga
    const cart = await getCart(perfil.sub);
    setProducts(cart);
    setLoading(false); // Finalizar la carga
  };
  const fetchProductDetails = async () => {
    const details = await Promise.all(
      products.map(async (product) => {
        const detail = await getProduct(product.productId);
        return detail;
      })
    );
    setProductDetails(details);
  };

  useEffect(() => {
    setLoading(true);
    fetchCart();
  }, [refreshCart]);

  useEffect(() => {
    if (products.length) {
      fetchProductDetails();
    }

    setLoading(false); // Finalizar la carga
  }, [products]);
  useEffect(() => {
    // Esta actualización depende de productDetails, no de products directamente
    setUniqueProductDetails(
      productDetails.filter(
        (detail, index, self) =>
          index === self.findIndex((t) => t.id === detail.id)
      )
    );
  }, [productDetails]);

  // Crear un objeto que mapea productId a la cantidad total y al precio
  const productQuantities = products.reduce((acc, product) => {
    if (acc[product.productId]) {
      acc[product.productId].quantity += product.quantity;
    } else {
      // Encuentra el precio del producto usando productDetails
      const productPrice =
        productDetails.find((detail) => detail.id === product.productId)
          ?.precio || 0;
      acc[product.productId] = {
        quantity: product.quantity,
        price: productPrice,
      };
    }
    return acc;
  }, {} as { [key: number]: { quantity: number; price: number } });

  // Calcular el precio total de todos los productos
  const totalPrice = Object.values(productQuantities).reduce(
    (total, { quantity, price }) => {
      return total + quantity * price;
    },
    0
  );

  // Filtrar detalles de productos para incluir solo una entrada por productId
  // const uniqueProductDetails = productDetails.filter(
  //   (detail, index, self) => index === self.findIndex((t) => t.id === detail.id)
  // );

  //* eliminar del carrito

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const response = await removeCart(perfil.sub);

      if (response === "success") {
        window.alert("Compra realizada");
        setRefreshCart((prev) => !prev);
      } else {
        throw new Error("Error al comprar");
      }

      setLoading(false);
    } catch (error: any) {
      console.log("Error al comprar" + error.message);

      setLoading(false);
    }
  };

  const handleClick = async (e: any) => {
    let id = Number(e.target.value);

    setLoading(true);

    try {
      const response = await deleteCart(id, perfil.sub);
      if (response === "success") {
        // Actualizar el estado de manera inmutable
        setProducts((currentProducts) =>
          currentProducts.filter((product) => product.productId !== id)
        );
        // Esperar a que se actualice el estado de products
        await new Promise((resolve) => setImmediate(resolve));
        // Ahora puedes llamar a fetchCart o realizar otras operaciones necesarias
        await fetchCart();
      } else {
        // Manejar la respuesta fallida
        console.error("Error al eliminar el producto:", response);
      }
    } catch (error) {
      // Manejar el error de la API
      console.error("Error al llamar a deleteCart:", error);
    } finally {
      // Solo establecer loading a false después de que todas las operaciones asíncronas hayan terminado
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Cargando...</div>; // Mostrar un mensaje o spinner de carga
  }
  if (products.length < 1) {
    return (
      <>
        <Navigation></Navigation>
        <h1 className=" text-center text-4xl text-orange-500 font-bold py-12">
          No hay productos en el carrito...
        </h1>

        <Link to="/principal">
          <button className="text-center absolute left-1/2 -translate-x-1/2 bg-orange-600 p-4 text-neutral-300 font-semibold rounded-xl hover:bg-orange-500">
            Volver al inicio
          </button>
        </Link>
      </>
    );
  }
  return (
    <>
      <Navigation></Navigation>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* <Wave className="absolute top-0 left-0" /> */}
        {uniqueProductDetails.map((detail, index) => {
          // Obtener la cantidad total del objeto productQuantities
          if (!productQuantities[detail.id]) {
            return null;
          }
          const { quantity } = productQuantities[detail.id];

          // Encuentra el primer producto que coincida con el productId actual

          return (
            <div
              key={detail.id}
              className={`grid col-span-${index} row-span-${
                index + 1
              } justify-center  p-4 m-2  `}
            >
              {/* items-center border border-gray-500 p-4 m-2 bg-orange-200 shadow-lg rounded-lg max-w-[250px] */}
              <ProductCard
                nombre={detail.nombre}
                precio={detail.precio}
                cantidad={quantity} // Pasa la cantidad total sumada
                imagen={`${import.meta.env.VITE_API_ENDPOINT_URL}/${
                  detail.imagen
                }`}
              />
              {/* Renderizar un solo botón de eliminar para el productId */}
              {detail.id && (
                <button value={detail.id} onClick={handleClick}>
                  eliminar
                </button>
              )}
            </div>
          );
        })}
        {/* Renderizar el precio total */}
        {/* <Wave className="absolute left-0  bottom-0" /> */}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          Total a pagar: ${totalPrice}.00
        </div>
        <div className="flex items-center justify-between flex-row w-1/4 h-[100px]">
          <Link to="/principal">
            <button className="text-center   bg-orange-600 p-4 text-neutral-300 font-semibold rounded-xl hover:bg-orange-500">
              Volver al inicio
            </button>
          </Link>
          <button
            onClick={handlePurchase}
            className="text-center    bg-orange-600 p-4 text-neutral-300 font-semibold rounded-xl hover:bg-orange-500"
          >
            Comprar
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
