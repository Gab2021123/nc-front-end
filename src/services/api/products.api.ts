import { baseUrl } from "./base.api";

export const getProduct = async (productId: number) => {
  try {
    const res = await baseUrl.get(`/products/${productId}/`);
    return res.data;
  } catch (error) {}
};
