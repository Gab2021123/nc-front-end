import { ChangeEvent, FormEvent, useState } from "react";
import InputSubmit from "../../../components/InputSubmit/InputSubmit";
import { postProduct } from "../../../services/api/products.api";
import { Link } from "react-router-dom";
import Polygn from "../../Main/components/Polygn/Polygn";

import Header from "../../Main/components/Header/Header";

type Product = {
  nombre: string;
  precio: number;
  published: boolean;
  categoryId: number;
};

/* type Product = {}; */
const PostProductForm = () => {
  /*  const [product, setProduct] = useState(); */

  const [product, setProduct] = useState<Product>({
    nombre: "",
    precio: 0,
    published: false,
    categoryId: 1,
  });
  const [image, setImage] = useState<File | null>(null);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void {
    const { name, value } = event.target;
    if (name === "categoryId") {
      setProduct({ ...product, [name]: Number(value) });
    } else {
      setProduct({ ...product, [name]: value });
    }
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    try {
      if (image) {
        await postProduct(product, image);
      } else {
        throw new Error("Debes seleccionar una imagen");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen w-screen relative ">
        <Polygn />

        <div className="container z-20 mx-auto max-w-sm p-4 bg-white rounded-lg shadow-md flex flex-col">
          <h2 className="text-lg font-medium text-center mb-4">
            Registrar Producto
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                Nombre del producto
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre del producto"
                value={product.nombre}
                onChange={handleChange}
                className="w-full border rounded p-2.5 text-sm text-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="precio"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                Precio: $
              </label>
              <input
                type="number"
                id="precio"
                name="precio"
                placeholder="Precio"
                value={product.precio}
                onChange={handleChange}
                className="w-full border rounded p-2.5 text-sm text-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="published"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                Categoria
              </label>
              <select
                id="categoryId"
                name="categoryId"
                value={product.categoryId}
                onChange={handleChange}
                className="w-full border rounded p-2.5 text-sm text-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              >
                <option value="" disabled hidden>
                  Categoria
                </option>
                <option value="1">Hamburguesa</option>
                <option value="3">Pizza</option>
                <option value="2">Pollo</option>
                <option value="4">Carne</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="published"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                Publicar
              </label>
              <select
                id="published"
                name="published"
                value={product.published ? "true" : "false"}
                onChange={handleChange}
                className="w-full border rounded p-2.5 text-sm text-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              >
                <option value="" disabled hidden>
                  Publicar
                </option>
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="imagen"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                Subir imagen del producto
              </label>
              <input
                type="file"
                id="imagen"
                name="imagen"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border rounded p-2.5 text-sm text-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="flex justify-between">
              <InputSubmit
                className="p-2 bg-orange-500 text-neutral-100 rounded-xl cursor-pointer transition-all hover:bg-orange-700 self-center"
                type="submit"
                value="Crear Producto"
              />
              <Link to="/principal">
                <button className="p-2 bg-gray-300 text-gray-700 rounded-xl cursor-pointer transition-all hover:bg-gray-400 hover:text-gray-800 self-center">
                  Volver al inicio
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostProductForm;
