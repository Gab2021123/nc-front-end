import create from "zustand";
import { persist } from "zustand/middleware";

type State = {
  email: string;
  name: string;
};

type Action = {
  setEmail: (email: string) => void;
  setName: (name: string) => void;
};

export const useContactStore = create(
  persist<State & Action>(
    (set) => ({
      email: "",
      name: "",
      setEmail: (email) => set(() => ({ email: email })),
      setName: (name) => set(() => ({ name: name })),
    }),
    {
      name: "contact",
    }
  )
);
