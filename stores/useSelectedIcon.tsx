import { Home } from "lucide-react-native";
import { ElementType } from "react";
import { create } from "zustand";

interface IconStoreProps {
  icon: ElementType,
  onSetIconCategory: (icon: ElementType) => void
}

export const useIconCategoryStore = create<IconStoreProps>((set) => ({
  icon: Home,
  onSetIconCategory: (icon : ElementType) => set((state) => ( { icon: icon }))
}))