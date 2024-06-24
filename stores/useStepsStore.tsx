import { create } from "zustand";

interface StepProps {
  currentStep: number;
  onSetCurrentStep: (step: number) => void;
}

export const useStepsStores = create<StepProps>((set) => ({
  currentStep: 0,
  onSetCurrentStep: (step: number) => set((store) => ({ currentStep: step })),
}));
