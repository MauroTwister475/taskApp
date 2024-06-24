import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ModalAddNewTask } from "@/components/modals/modal-add-new-task";
import { useModalStore } from "@/stores/useModalStore";
import { FormNewTask } from "@/components/forms/form-new-task";
import { ModalAddNewTaskFooter } from "@/components/modals/modal-add-next-task-footer";
import { TaskData } from "@/types/TaskType";
import { useTaskDatabase } from "@/database/useTaskDatabase";
import { ListTask } from "@/components/list-task";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [recentsTasks, setRecentsTasks] = useState<TaskData[] | null>([]);
  const { isOpen } = useModalStore();
  const { listLimitedTasks } = useTaskDatabase();

  const getLimitedTasks = async () => {
    try {
      const res = await listLimitedTasks();
      setRecentsTasks(res?.limitedTasks!);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error);
    }
  }
  useEffect(() => {
    getLimitedTasks();
  }, [recentsTasks]);

  return (
    <View className="flex-1 bg-black-800 items-center px-4">
      <Text className="w-full text-white mt-4 font-semibold text-xl">
        Tarefas Recentes
      </Text>
      <ListTask DATA={recentsTasks!} isLoading={isLoading} />
      <ModalAddNewTask isOpen={isOpen}>
        <FormNewTask />
        <ModalAddNewTaskFooter />
      </ModalAddNewTask>
    </View>
  );
}
