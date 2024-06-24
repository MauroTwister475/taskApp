import { useRouter } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { useTaskDatabase } from "@/database/useTaskDatabase";
import { useCurrentTaskStore } from "@/stores/useCurrentTask";
import { useModalStore } from "@/stores/useModalStore";
import { useTaskStore } from "@/stores/useTaskInfoStore";
import { useSelectedCategory } from "@/stores/useSelectedCategoryStore";
import { useSelectedPriority } from "@/stores/useSelectedPriority";
import { useResetAllData } from "@/utils/ResetAllData";
import { useToast } from "@/components/ui/Toast";
import { colors } from "@/styles/colors";

export function ButtonSaveUpdate() {
  const { toast } = useToast();
  const router = useRouter();
  const { onSetIsOpen, onSetIsEditing } = useModalStore();
  const resetAllData = useResetAllData();

  const { task } = useTaskStore();
  const { currentTask } = useCurrentTaskStore();
  const { currentCategory } = useSelectedCategory();
  const { currentPriotity } = useSelectedPriority();
  const { updateTask } = useTaskDatabase();

  async function handleEditTask() {
    try {
      await updateTask({
        id: currentTask.id,
        task: task.name,
        description: task.description,
        category: currentCategory,
        priority: (currentPriotity+1).toString(),
        status: currentTask.status,
      });
      
      onSetIsOpen(false);
      onSetIsEditing(false);
      router.navigate("/(tabs)");
      resetAllData();

      toast("Tarefa actualizada com sucesso!", "info", 1700);
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
      onPress={handleEditTask}
    >
      <Text className="text-white font-semibold">Actualizar</Text>
    </TouchableOpacity>
  );
}
