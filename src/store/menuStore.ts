import { create } from "zustand";

interface MenuState {
  selectedMenuItem: string | null;
  setSelectedMenuItem: (menuId: string | null) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  selectedMenuItem: null,
  setSelectedMenuItem: (menuId) => set({ selectedMenuItem: menuId }),
}));