import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { getCart, deleteCart } from "../../../../services/api/cart.api";
import { getProduct } from "../../../../services/api/products.api";
import { useAuthStore } from "../../../../store/appStore";
import Wave from "../Wave/Wave";

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
};

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const { perfil } = useAuthStore();
  const [products, setProducts] = useState<Array<Product>>([]);
  const [productDetails, setProductDetails] = useState<Array<ProductDetails>>(
    []
  );

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
    fetchCart();
  }, []);

  useEffect(() => {
    if (products.length) {
      fetchProductDetails();
    }
  }, [products]);

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
  const uniqueProductDetails = productDetails.filter(
    (detail, index, self) => index === self.findIndex((t) => t.id === detail.id)
  );

  //* eliminar del carrito

  const handleClick = async (e: any) => {
    let id = Number(e.target.value);
    console.log("id del product" + id);
    await setLoading(true);
    const response = await deleteCart(id, perfil.sub);
    if (response === "success") {
      // Actualizar el estado de manera inmutable
      await fetchCart();

      console.log(products);
    }
  };

  if (loading) {
    return <div>Cargando...</div>; // Mostrar un mensaje o spinner de carga
  }
  return (
    <div>
      <Wave className="absolute top-0 left-0" />
      {uniqueProductDetails.map((detail) => {
        // Obtener la cantidad total del objeto productQuantities
        const { quantity } = productQuantities[detail.id];

        // Encuentra el primer producto que coincida con el productId actual
        const productToDelete = products.find(
          (product) => product.productId === detail.id
        );

        return (
          <div key={detail.id}>
            <ProductCard
              nombre={detail.nombre}
              precio={detail.precio}
              cantidad={quantity} // Pasa la cantidad total sumada
            />
            {/* Renderizar un solo botón de eliminar para el productId */}
            {productToDelete && (
              <button value={productToDelete.id} onClick={handleClick}>
                eliminar
              </button>
            )}
          </div>
        );
      })}
      {/* Renderizar el precio total */}
      <div>Total a pagar: ${totalPrice}.00</div>
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
      <Wave className="absolute left-0  bottom-0" />
    </div>
  );
};

export default ProductList;
