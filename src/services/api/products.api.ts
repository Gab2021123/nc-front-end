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

export const postProduct = async (product: any) => {
  try {
    const res = await baseUrl.post(`/products/`, product);
    if (res) {
      window.alert("Producto creado correctamente");
    } else {
      throw new Error("error al crear el producto");
    }
  } catch (error) {
    window.alert(error);
  }
};
