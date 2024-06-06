import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { getCart, deleteCart } from "../../../../services/api/cart.api";
import { getProduct } from "../../../../services/api/products.api";
import { useAuthStore } from "../../../../store/appStore";

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
    await setProducts(cart);
    setLoading(false); // Finalizar la carga
  };
  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const details = await Promise.all(
        products.map(async (product) => {
          const detail = await getProduct(product.productId);
          return detail;
        })
      );
      setProductDetails(details);
    };

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
    setLoading(true);
    const response = await deleteCart(id, perfil.sub);
    if (response === "success") {
      // Obtener una copia actualizada del carrito sin el producto eliminado
      const updatedCart = products.filter(
        (product) => product.productId !== id
      );
      // Actualizar el estado con la nueva lista de productos
      setProducts(updatedCart);
      // No es necesario llamar a fetchCart si actualizas el estado aquí
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Cargando...</div>; // Mostrar un mensaje o spinner de carga
  }
  return (
    <div>
      {uniqueProductDetails.map((detail) => {
        // Obtener la cantidad total del objeto productQuantities
        const productQuantity = productQuantities[detail.id];
        const quantity = productQuantity ? productQuantity.quantity : 0;
        // Encuentra el primer producto que coincida con el productId actual

        if (quantity === 0) {
          return <p>No hay productos en el carrito</p>;
        }

        return (
          <div key={detail.id}>
            <ProductCard
              nombre={detail.nombre}
              precio={detail.precio}
              cantidad={quantity} // Pasa la cantidad total sumada
            />
            <button value={detail.id} onClick={handleClick}>
              eliminar
            </button>
          </div>
        );
      })}
      {/* Renderizar el precio total */}
      <div>Total a pagar: ${totalPrice}.00</div>
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};

export default ProductList;
