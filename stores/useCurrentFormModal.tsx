import { create } from "zustand";


type CurrentTitleType = | "Categoria" | "Prioridade" | "Adicionar Tarefa"

interface modalFormProps {
  currentForm: number;
  currentFormTitle: CurrentTitleType;
  onSetCurrentFormTitle: (title: CurrentTitleType) => void;
  onSetCurrentForm: (currentForm: number) => void;
}

export const useModalFormStore = create<modalFormProps>()((set) => ({
  currentForm: 0,
  currentFormTitle: "Categoria",
  onSetCurrentFormTitle: (title: CurrentTitleType) => set((state) => ({ currentFormTitle: title })),
  onSetCurrentForm: (currentForm: number) => set((state) => ({ currentForm: currentForm }))
}));
