import { ReactNode } from "react";
import { useModalFormStore } from "@/stores/useCurrentFormModal";
import { CategoryForm } from "./category-form";
import { PriorityForm } from "./priority-form";
import { FormInputs } from "./input-form";
import Animated from "react-native-reanimated";

export function FormNewTask() {
  const { currentForm } = useModalFormStore();

  const FORMS: ReactNode[] = [
    <FormInputs />,
    <CategoryForm />,
    <PriorityForm />,
  ]

  return (
    <Animated.View className="w-full flex-col gap-3">
      {FORMS[currentForm]}
    </Animated.View>
  );
}

