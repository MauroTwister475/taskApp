import { create } from "zustand";

interface SelectedPriorityProps {
  currentPriotity: number;
  onSetSelectedPriority: (currentPriotity: number) => void;
}

export const useSelectedPriority = create<SelectedPriorityProps>()((set) => ({
  currentPriotity: 0,
  onSetSelectedPriority: (currentPriotity: number) => set((state) => ({ currentPriotity: currentPriotity }))
}));
