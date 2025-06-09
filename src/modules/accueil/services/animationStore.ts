import { create } from "zustand";

interface AnimationState {
  isDataLoaded: boolean;
  setDataLoaded: (isLoaded: boolean) => void;
}

export const useAnimationStore = create<AnimationState>((set) => ({
  isDataLoaded: false,
  setDataLoaded: (isLoaded) => set({ isDataLoaded: isLoaded }),
}));
