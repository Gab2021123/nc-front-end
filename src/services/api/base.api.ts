import axios from "axios";

const baseURLNoCountry = process.env.NEXT_PUBLIC_BASE_URL_ALTICSA;

if (!baseURLNoCountry) {
  throw new Error("Not found URL");
}

export const baseUrl = axios.create({
  baseURL: baseURLNoCountry,
  timeout: 10000,
});
