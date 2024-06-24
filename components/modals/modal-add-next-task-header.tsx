import { View } from "react-native";
import { ButtonCloseModal } from "@/components/buttons/button-close-modal";
import { AdditionalButtonTask } from "@/components/buttons/button-additional-icon-task";
import { Title } from "@/components/title";
import { useModalFormStore } from "@/stores/useCurrentFormModal";
import { ArrowLeft, X } from "lucide-react-native";


export function ModalAdNewTaskHeader({ title }: { title: string }) {
  const { currentForm, onSetCurrentForm, onSetCurrentFormTitle } =
    useModalFormStore();

  function handleBackForm() {
    if (currentForm !== undefined) {
      if (currentForm > 0) {
        onSetCurrentForm(currentForm - 1);
      } 
      if (currentForm === 0 || currentForm === 2) {
        onSetCurrentFormTitle("Categoria");
      } else if (currentForm === 1) {
        onSetCurrentFormTitle("Prioridade");
      }
    }
  }

  return (
    <View className="w-full items-center flex-row py-3">
      <AdditionalButtonTask headerModal onPress={handleBackForm}>
        <ArrowLeft size={25} color="#fff" />
      </AdditionalButtonTask>
      <ButtonCloseModal headerModal>
        <X size={25} color="#fff" />
      </ButtonCloseModal>
      <Title size="md" title={title} onHeader />
    </View>
  );
}