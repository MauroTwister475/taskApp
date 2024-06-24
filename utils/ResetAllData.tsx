import { useModalFormStore } from "@/stores/useCurrentFormModal";
import { useModalStore } from "@/stores/useModalStore";
import { useSelectedCategory } from "@/stores/useSelectedCategoryStore";
import { useSelectedPriority } from "@/stores/useSelectedPriority";
import { useStepsStores } from "@/stores/useStepsStore";

export function useResetAllData() {
  const { onSetIsOpen, onSetIsEditing } = useModalStore();
  const { onSetCurrentForm, onSetCurrentFormTitle } = useModalFormStore();
  const { onSetCurrentCategory } = useSelectedCategory();
  const { onSetSelectedPriority } = useSelectedPriority();
  const { onSetCurrentStep } = useStepsStores();

  function resetAllModalData() {
    onSetIsOpen(false);
    onSetIsEditing(false);
    onSetCurrentForm(0);
    onSetCurrentStep(0);
    onSetSelectedPriority(0);
    onSetCurrentCategory("Casa");
    onSetCurrentFormTitle("Categoria");
  }

  return resetAllModalData;
}