import { AxiosError /* , AxiosResponse  */ } from "axios";
import { registerEndpoint } from "./endpoint/register.endpoint";
import { baseUrl } from "./base.api";
import { UserRegister } from "../../interfaces/IUserRegister";
export const postUserRegister = async (
  user: UserRegister | undefined
): Promise<any> => {
  try {
    const res = await baseUrl.post(registerEndpoint, user);
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      throw new Error(error.response?.data.detail);
    }
    throw new Error("Ocurrio un error");
  }
};
