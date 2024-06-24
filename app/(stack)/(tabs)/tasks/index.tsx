import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { InputSearch } from "@/components/input-search";
import { ListTask } from "@/components/list-task";
import { useTaskDatabase } from "@/database/useTaskDatabase";
import { useSearchStore } from "@/stores/useSearch";
import { useTaskStoreGlobal } from "@/stores/useTaskStore";
import { TaskData } from "@/types/TaskType";

export default function ListTasks() {
  const [isLoading, setIsLoading] = useState(true);

  const { onSetTask, tasks } = useTaskStoreGlobal();
  const { listTasks } = useTaskDatabase();
  const { searchText } = useSearchStore();

  const filteredTasks: TaskData[] = tasks.filter(
    (task) =>
      task.task.toLowerCase().includes(searchText) ||
      task.task.toUpperCase().includes(searchText)
  );

  useEffect(() => {
    async function getAllTasks() {
      try {
        const res = await listTasks();
        onSetTask(res?.allTasks!);
        setIsLoading(false);
        return res?.allTasks;
      } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
      }
    }

    getAllTasks();
  }, [isLoading]);

  return (
    <View className="flex-1 items-center justify-center px-4">
      <View className="w-full flex-col gap-4 mt-4">
        <Text className="text-white font-semibold text-xl">Tarefas</Text>
        <InputSearch />
      </View>
      <ListTask DATA={filteredTasks!} isLoading={isLoading} />
    </View>
  );
}
