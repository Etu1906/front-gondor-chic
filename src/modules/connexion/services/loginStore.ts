import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserData } from "../types/connexion";

type User = Omit<UserData, "mot_de_passe">;

interface LoginState {
  isLoginModalOpen: boolean;
  user: User | null;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  setUser: (user: User | null) => void;
}

export const useLoginStore = create<LoginState>()(
  persist(
    (set) => ({
      isLoginModalOpen: false,
      user: null,
      openLoginModal: () => set({ isLoginModalOpen: true }),
      closeLoginModal: () => set({ isLoginModalOpen: false }),
      setUser: (user) => set({ user }),
    }),
    {
      name: "login-storage",
    }
  )
);
