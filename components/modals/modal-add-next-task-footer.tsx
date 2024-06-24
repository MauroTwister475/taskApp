import { View } from "react-native";
import { colors } from "@/styles/colors";
import { useModalFormStore } from "@/stores/useCurrentFormModal";
import { ButtonSave } from "@/components/buttons/button-save";
import { Flag, SendHorizonal, Tag } from "lucide-react-native";
import { AdditionalButtonTask } from "@/components/buttons/button-additional-icon-task";
import { ButtonSaveUpdate } from "@/components/buttons/button-save-update";
import { useModalStore } from "@/stores/useModalStore";
import { useTaskStore } from "@/stores/useTaskInfoStore";

export function ModalAddNewTaskFooter() {
  const { currentForm, onSetCurrentForm, onSetCurrentFormTitle } =
    useModalFormStore();
  const { isEditing } = useModalStore();
  const { task } = useTaskStore();

  function changeForm() {
    if (!task.name || !task.description) {
      alert("Todos os campos são obrigatórios!");
      return;
    } else {
      if (currentForm !== undefined) {
        if (currentForm < 2 && currentForm < currentForm + 1) {
          onSetCurrentForm(currentForm + 1);
        }
        if (currentForm === 0 || currentForm === 2) {
          onSetCurrentFormTitle("Categoria");
        } else if (currentForm === 1) {
          onSetCurrentFormTitle("Prioridade");
        }
      }
    }
  }

  return (
    <View className="w-full mt-4 flex-row items-center justify-between ">
      <View className="items-center flex-row justify-center gap-4">
        <AdditionalButtonTask>
          <Tag
            size={20}
            color={currentForm === 1 ? colors.violet[500] : colors.white}
          />
        </AdditionalButtonTask>
        <AdditionalButtonTask>
          <Flag
            size={20}
            color={currentForm === 2 ? colors.violet[500] : colors.white}
          />
        </AdditionalButtonTask>
      </View>
      <AdditionalButtonTask onPress={changeForm}>
        {currentForm !== 2 ? (
          <SendHorizonal
            size={25}
            className="mr-2"
            color={colors.violet[500]}
          />
        ) : !isEditing ? (
          <ButtonSave />
        ) : (
          <ButtonSaveUpdate />
        )}
      </AdditionalButtonTask>
    </View>
  );
}