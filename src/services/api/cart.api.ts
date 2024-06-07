/* import { AxiosError, AxiosResponse } from "axios"; */
import { baseUrl } from "./base.api";

// export const addItemCart = async () => {
//   try {
//     const res = await baseUrl.post("/cart/:clientId/add/:produtId/:quantity");
//     if (res) {
//       return "success";
//     }
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       console.log(error.message);
//       throw new Error(error.response?.data.detail);
//     }
//     throw new Error("Ocurrio un error");
//   }
// };

export const getCart = async (clientId: number): Promise<any> => {
  try {
    console.log("Client id " + clientId);

    const res = await baseUrl.get(`/cart/${clientId}/`);


    if (res) {
      return res.data;
    } else {
      throw new Error("imposible cargar el carrito");
    }
  } catch (error) {
    window.alert(error);

  }
};

export const deleteCart = async (itemCarId: number, clientId: number) => {
  try {
    await baseUrl.delete(`/cart/product/${itemCarId}/client/${clientId}`);
    return "success";
  } catch (error) {}
};

export const addCart = async (clientId: number, productId: number) => {
  try {
    const res = await baseUrl.post(`/cart/${clientId}/add/${productId}/1`);
    if (res) {
      return { success: true };
    }
  } catch (error) {}
};
