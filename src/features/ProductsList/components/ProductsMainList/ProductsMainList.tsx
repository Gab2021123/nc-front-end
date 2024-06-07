import { getProducts } from "../../../../services/api/products.api";


import { useState, useEffect } from "react";
=======
import { useState, useEffect, BaseSyntheticEvent } from "react";
import { FaHeart, FaStar } from "react-icons/fa";

import { IoPricetagOutline } from "react-icons/io5";


import Modal from "../ModalDetail/Modal";
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
  published?: boolean;
  cartItems: CartItem[];
};

const ProductsMainList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const handleClikcClose = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    console.log(e.target);
    setOpen(!open);
  };
  const getFoods = async () => {
    const foods = await getProducts();
    setProducts(foods);
  };
  useEffect(() => {
    getFoods();
  }, []);
  const styleIcon = "";
  return (
    <div className="flex flex-col justify-center w-full">
      {products.map((product: Product) => {
        return (

          <Link key={product.id} to={`/productdetail/${product.id}`}>
            <div>
              <h1>Nombre: {product.nombre}</h1>
              <h3>Precio: ${product.precio}</h3>
          <div
            key={product.id}
            className="text-[#25282A] max-w-[78.125rem] w-full mx-auto py-2 border-4 rounded-3xl"
          >
            <div
              className="flex flex-wrap md:flex-nowrap gap-6 items-center w-full"
              id="cardview"
            >
              <Link to="" onClick={handleClikcClose}>
                <img
                  src="/Hamburguesa.jpg"
                  className="w-full h-full rounded-lg object-cover md:max-w-[11.25rem] md:max-h-[11.25rem] max-h-[112px] aspect-auto"
                  alt="Imagen 1"
                />
              </Link>
              <Link
                to={`/productdetail/${product.id}`}
                className="w-full max-w-[63.75rem] flex justify-between"
              >
                <div id="cardview-content">
                  <div
                    className="flex flex-col gap-3 max-w-[35rem] w-full"
                    id="content-left"
                  >
                    {/**Title and description */}
                    <div className="flex items-center md:gap-4 gap-2">
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

                  <div
                    className="flex flex-col justify-between md:text-[1.125rem] text-[1rem] font-semibold"
                    id="content-right"
                  >
                    <p className=" flex gap-2 items-center justify-end md:h-full md:max-h-[3rem]">
                      <span>4</span>
                      <FaStar className={`${styleIcon} text-[#1DC84D]`} />
                    </p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        );
      })}

      <Link to="/principal">
        <button className="text-center absolute left-1/2 -translate-x-1/2 bg-orange-600 p-4 text-neutral-300 font-semibold rounded-xl hover:bg-orange-500">
          Volver al inicio
        </button>
      </Link>
      {open ? <Modal handleClikcClose={handleClikcClose} /> : <span>{""}</span>}
    </div>
  );
};

export default ProductsMainList;
