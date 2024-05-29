import axios from "axios";

const baseURLNoCountry = process.env.API_ENDPOINT_URL;

if (!baseURLNoCountry) {
  throw new Error("Not found URL");
}

export const baseUrl = axios.create({
  baseURL: baseURLNoCountry,
  timeout: 10000,
});
