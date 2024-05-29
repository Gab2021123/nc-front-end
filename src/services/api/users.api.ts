/* import { AxiosError, AxiosResponse } from "axios";

import { baseUrl } from "./base.api";
import {
  userEndpoint,
  userLoginEndpoint,
  usersEndpoint,
} from "./endpoint/users.endpoint";
import { Login, User } from "@/interfaces";

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const res: AxiosResponse<User[]> = await baseUrl.get(usersEndpoint);
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Ocurrio un error");
  }
};

export const postUser = async (user: User): Promise<any> => {
  try {
    const res = await baseUrl.post(userEndpoint, user);
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      throw new Error(error.response?.data.detail);
    }
    throw new Error("Ocurrio un error");
  }
};

export const postUserLogin = async (user: Login): Promise<any> => {
  try {
    const params = new URLSearchParams();
    params.append("username", user.username);
    params.append("password", user.password);

    const res = await baseUrl.post(userLoginEndpoint, params);
    return res.data;
  } catch (error) {
    if (error) {
      console.log("hay error");
      console.log(error);
      const err = error as AxiosError;

      const status = err.response?.statusText;
      console.log(status);

      if (status === "Not Found") {
        throw new Error("El usuario no existe");
      }
      if (status === "Unauthorized") {
        throw new Error("la contraseña o correo no son validos");
      }
    }

    throw new Error("Ocurrio un error en el servidor");
  }
};
 */
