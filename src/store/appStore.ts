import create from "zustand";
import { persist } from "zustand/middleware";

type AppState = {
  accessToken: string;
  perfil: any;
  isAuth: boolean;
};
type Actions = {
  setToken: (accessToken: string) => void;
  setPerfil: (perfil: any) => void;
  logOut: () => void;
};

export const useAuthStore = create(
  persist<AppState & Actions>(
    (set) => ({
      accessToken: "",
      perfil: null,
      isAuth: false,
      logOut: () =>
        set((_state) => ({
          accessToken: "",
          perfil: null,
          isAuth: false,
        })),
      setToken: (accessToken: string) =>
        set((_state) => ({
          accessToken,
          isAuth: true,
        })),
      setPerfil: (perfil: any) =>
        set((_state) => ({
          perfil,
        })),
    }),
    {
      name: "auth",
    }
  )
);
