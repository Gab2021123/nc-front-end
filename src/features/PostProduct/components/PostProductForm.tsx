import React, { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import InputSubmit from "../../../components/InputSubmit/InputSubmit";
import PostProduct from "../pages/PostProduct";
import { postProduct } from "../../../services/api/products.api";

type Product = {
  nombre: string;
  precio: number;
  published: boolean;
};

const PostProductForm = () => {
  const [product, setProduct] = useState<Product>({
    nombre: "",
    precio: 0,
    published: false,
  });

  function handleChange(event: any): void {
    const value = event.target.value;
    const name = event.target.name;

    let typedValue: string | number | boolean = value;

    // Convertir el valor al tipo correcto
    if (name === "precio") {
      typedValue = Number(value);
    } else if (name === "published") {
      typedValue = value === "true";
    }
    setProduct({ ...product, [name]: typedValue });
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    try {
      await postProduct(product);
    } catch (error) {}
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del producto"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Precio: $</label>
          <input
            type="number"
            placeholder="Precio"
            name="precio"
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            name="published"
            id="publised"
            onChange={handleChange}
            required
          >
            <option value="" disabled selected hidden>
              Publicar
            </option>
            <option value="true">si</option>
            <option value="false">no</option>
          </select>
        </div>
        <InputSubmit
          className="p-2 bg-orange-500 text-neutral-100 rounded-xl cursor-pointer transition-all hover:bg-orange-700"
          type="submit"
          value="Crear Producto"
        />
      </form>
    </div>
  );
};

export default PostProductForm;
