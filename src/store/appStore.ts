import create from "zustand";
import { persist } from "zustand/middleware";

type AppState = {
  accessToken: string;
  perfil: any;
};

type Actions = {
  setToken: (accessToken: string) => void;
  setPerfil: (perfil: any) => void;
};

export const useAuthStore = create(
  persist<AppState & Actions>(
    (set) => ({
      accessToken: "",
      perfil: null,
      setToken: (accessToken: string) =>
        set((_state) => ({
          accessToken,
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
