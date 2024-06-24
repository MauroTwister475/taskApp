import { create } from "zustand";

interface ModalStoreProps {
  isOpen: boolean;
  onSetIsOpen: (isOpen: boolean) => void;
  isEditing: boolean;
  onSetIsEditing: (isEditing: boolean) => void;
}

export const useModalStore = create<ModalStoreProps>((set) => ({
  isOpen: false,
  isEditing: false,
  onSetIsOpen: (isOpen: boolean) => set((store) => ({ isOpen: isOpen })),
  onSetIsEditing: (isEditing: boolean) => set((store) => ({ isEditing: isEditing })),
}));
