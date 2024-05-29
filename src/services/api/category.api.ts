/* import { AxiosResponse } from "axios";

import { ICategory } from "@/interfaces";
import { baseUrl, categoriesEndpoint } from ".";

export const getAllCategories = async () => {
  try {
    const res: AxiosResponse<ICategory[]> = await baseUrl.get(
      categoriesEndpoint
    );
    return res.data;
  } catch (error) {
    let errorMsg = "ocurrio un error";
    if (error instanceof Error) {
      throw new Error(errorMsg + error.message);
    }
  }
};
 */
