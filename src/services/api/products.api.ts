import { baseUrl } from "./base.api";

export const getProduct = async (productId: number) => {
  try {
    const res = await baseUrl.get(`/products/${productId}/`);
    return res.data;
  } catch (error) {}
};

export const getProducts = async () => {
  try {
    const res = await baseUrl.get(`/products`);
    return res.data;
  } catch (error) {}
};

export const postProduct = async (product: any, image: File) => {
  try {
    const formData = new FormData();
    formData.append("data", JSON.stringify(product));
    formData.append("image", image);

    const res = await baseUrl.post("/products/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res) {
      window.alert("Producto creado correctamente");
    } else {
      throw new Error("error al crear el producto");
    }
  } catch (error) {
    console.log(error);
  }
};
