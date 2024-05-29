import create from "zustand";

interface AppState {
  count: number;
}

export const useAppStore = create<AppState>(() => ({
  count: 10,
}));
