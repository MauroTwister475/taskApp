import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useModalStore } from "@/stores/useModalStore";
import { useSelectedCategory } from "@/stores/useSelectedCategoryStore";
import { useSelectedPriority } from "@/stores/useSelectedPriority";
import { colors } from "@/styles/colors";
import { useTaskStore } from "@/stores/useTaskInfoStore";
import { useToast } from "@/components/ui/Toast";
import { useTaskDatabase } from "@/database/useTaskDatabase";
import { TaskData } from "@/types/TaskType";
import { useResetAllData } from "@/utils/ResetAllData";
import { useRouter } from "expo-router";

export function ButtonSave() {
  const { toast } = useToast();
  const router = useRouter();
  const { onSetIsOpen } = useModalStore();
  const resetAllData = useResetAllData();

  const { currentCategory } = useSelectedCategory();
  const { currentPriotity } = useSelectedPriority();
  const { task } = useTaskStore();
  const { create } = useTaskDatabase();

  async function onCreateTask() {
    onSetIsOpen(false);
    try {
      const fullTask: Omit<TaskData, "id"> = {
        task: task.name,
        description: task.description,
        category: currentCategory,
        priority: (currentPriotity + 1).toString(),
      };
      await create(fullTask);

      resetAllData();
      router.navigate("/(tabs)");
      toast(`Tarefa adicionada com sucesso!`, "info", 1700);

    } catch (err) {
      toast("Ocorreu um erro ao criar a tarefa", "info", 1700);
    }
  }

  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.violet[500],
        paddingHorizontal: 28,
        paddingVertical: 12,
        borderRadius: 4,
      }}
      activeOpacity={0.8}
      onPress={onCreateTask}
    >
      <Text className="text-white font-semibold">Guardar</Text>
    </TouchableOpacity>
  );
}
