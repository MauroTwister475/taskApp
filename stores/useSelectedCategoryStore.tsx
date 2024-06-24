import { create } from "zustand";

export type CategoryType =
  | "Casa"
  | "Video"
  | "Programação"
  | "Saúde"
  | "Comida"
  | "Social"
  | "Design"
  | "Escola"
  | "Trabalho"
  | "Jogos";

interface SelectedCategoryProps {
  currentCategory: CategoryType;
  onSetCurrentCategory: (currentCategory: CategoryType) => void;
}

export const useSelectedCategory = create<SelectedCategoryProps>()((set) => ({
  currentCategory: "Casa",
  onSetCurrentCategory: (currentCategory: CategoryType) =>
    set((state) => ({ currentCategory: currentCategory })),
}));
