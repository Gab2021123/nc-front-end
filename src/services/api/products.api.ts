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
