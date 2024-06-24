import { ReactNode } from "react";
import { View } from "react-native";
import { Title } from "@/components/title";
import { ModalAdNewTaskHeader } from "./modal-add-next-task-header";
import { useModalFormStore } from "@/stores/useCurrentFormModal";
import { ButtonCloseModal } from "../buttons/button-close-modal";
import { X } from "lucide-react-native";
import Modal from "react-native-modal";

interface ModalEditTaskTaskProps {
  children?: ReactNode;
  isOpen: boolean;
}

export function ModalEditTaskTask({ children, isOpen }: ModalEditTaskTaskProps) {
  const { currentForm, currentFormTitle } = useModalFormStore();

  return (
    <View className="flex-1 w-full h-full">
      <Modal isVisible={isOpen}>
        <View className="flex- bg-gray-501 w-full rounded-lg py-5 px-8     ">
          {currentForm > 0 && <ModalAdNewTaskHeader title={currentFormTitle} />}
          {currentForm === 0 && (
            <View className="w-full items-start">
              <Title size="md" title={"Edit Task"} />
              <ButtonCloseModal headerModal>
                <X size={25} color="#fff" />
              </ButtonCloseModal>
            </View>
          )}
          <>{children}</>
        </View>
      </Modal>
    </View>
  );
}
