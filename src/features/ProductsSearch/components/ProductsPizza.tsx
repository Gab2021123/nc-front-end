import { getProducts } from "../../../services/api/products.api";

import { useState, useEffect } from "react";
import { FaHeart, FaStar } from "react-icons/fa";

import { IoPricetagOutline } from "react-icons/io5";

import { Link, useLocation } from "react-router-dom";
import Navigation from "../../Main/components/Navigation/Navigation";

type CartItem = {
  id: number;
  productId: number;
  clientId: number;
  quantity: number;
};
type Product = {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  restaurantId: null;
  categoryId: number;
  published?: boolean;
  cartItems: CartItem[];
};
const ProductsMainList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const location = useLocation().pathname;
  const path = location.split("/")[location.split("/").length - 1];
  const getFoods = async () => {
    const foods = await getProducts();
    const filterFoods = foods.filter((food: any) => food.categoryId === 3);
    setProducts(filterFoods);
  };
  useEffect(() => {
    getFoods();
  }, []);

  if (path !== "pizza") {
    return null; // No renderiza nada si location es diferente de "beef"
  }
  if (products.length < 1) {
    return (
      <>
        <Navigation />
        <div>
          <h1 className="text-center text-4xl text-orange-500 font-bold py-12">
            No hay productos...
          </h1>
          <Link to="/principal">
            <button className="text-center absolute left-1/2 -translate-x-1/2 bg-orange-600 p-4 text-neutral-300 font-semibold rounded-xl hover:bg-orange-500">
              Volver al inicio
            </button>
          </Link>
        </div>
      </>
    );
  }
  const styleIcon = "";
  return (
    <>
      <Navigation />
      <div className="flex flex-col justify-center w-full">
        {products.map((product: Product) => {
          return (
            <div
              key={product.id}
              className="text-[#25282A] max-w-[65rem] w-full mx-auto py-2 border-4 rounded-3xl"
            >
              <Link
                to={`/productdetail/${product.id}`}
                className="w-full max-w-[63.75rem] flex flex-row justify-between"
              >
                <div
                  className="flex flex-row  md:flex-nowrap gap-6 items-center w-full"
                  id="cardview"
                >
                  <img
                    src={`${import.meta.env.VITE_API_ENDPOINT_URL}/${
                      product.imagen
                    }`}
                    className="w-full h-full justify-between rounded-lg object-cover md:max-w-[11.25rem] md:max-h-[11.25rem] max-h-[112px] aspect-auto"
                    alt={product.nombre}
                  />

                  <div
                    id="cardview-content"
                    className=" flex  justify-between w-full"
                  >
                    <div
                      className="flex flex-col gap-3 max-w-[35rem] w-full"
                      id="content-left"
                    >
                      {/**Title and description */}
                      <div className="flex  items-center md:gap-4 gap-2">
                        <h5 className="font-semibold text-[1.125rem] md:text-[2.5rem]">
                          {product.nombre.replace(
                            product.nombre.split("")[0],
                            product.nombre.split("")[0].toUpperCase()
                          )}
                        </h5>

                        <span className="cursor-pointer transition-transform ease-in hover:scale-90">
                          <FaHeart className={`${styleIcon} text-[#1DC84D]`} />
                        </span>
                      </div>
                      <div
                        className="flex flex-col md:gap-4 gap-2 md:text-[1.125rem] text-[1rem]"
                        id="content-left-botton"
                      >
                        <span className="flex items-center gap-3">
                          <IoPricetagOutline className={styleIcon} />
                          <span className="">{product.precio}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between md:text-[1.125rem] text-[1rem] font-semibold">
                      <p className=" flex gap-2 items-center justify-end md:h-full md:max-h-[3rem]">
                        <span>4</span>
                        <FaStar className={`${styleIcon} text-[#1DC84D]`} />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}

        <Link to="/principal">
          <button className="text-center absolute left-1/2 -translate-x-1/2 bg-orange-600 p-4 text-neutral-300 font-semibold rounded-xl hover:bg-orange-500">
            Volver al inicio
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductsMainList;
