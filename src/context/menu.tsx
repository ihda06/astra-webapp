import { create } from "zustand";
export interface InitialModalState {
    isOpen: boolean;
  }
  
  export interface InitialModalAction {
    showMenu(): void;
    hideMenu(): void;
    toggleMenu(): void;
  }

type MenuState = {
  isOpen: boolean;
  showMenu(): void;
  hideMenu(): void;
  toggleMenu: (isOpen: boolean)=>void;
};

export const useMenu = create<MenuState & InitialModalAction>()(set => ({
    isOpen: false,
    showMenu: () => set({ isOpen: true }),
    hideMenu: () => set({ isOpen: false }),
    toggleMenu: () => set(prev => ({ isOpen: !prev.isOpen }))
  }));