import { create } from "zustand";

type TwitterState = {
  telegramAccount: string;

  setTelegramAccount: (telegramAccount: string) => void;
};

export const useTwitter = create<TwitterState>((set) => ({
  telegramAccount: "",

  setTelegramAccount: (telegramAccount) => set({ telegramAccount }),
}));
