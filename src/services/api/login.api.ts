import { AxiosError /* , AxiosResponse  */ } from "axios";
import { loginEndpoint } from "./endpoint/login.endpoint";
import { baseUrl } from "./base.api";
import { User } from "../../interfaces/IUser";

export const postUser = async (user: User | undefined): Promise<any> => {
  try {
    const res = await baseUrl.post(loginEndpoint, user);

    console.log(res.data);
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      throw new Error(error.response?.data.detail);
    }
    throw new Error("Ocurrio un error");
  }
};
