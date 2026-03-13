import { create } from 'zustand'; // Ou use Context API se preferir

interface LoadingState {
  isGlobalLoading: boolean;
  setIsGlobalLoading: (state: boolean) => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isGlobalLoading: false,
  setIsGlobalLoading: (state) => set({ isGlobalLoading: state }),
}));