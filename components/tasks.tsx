import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TaskData } from "@/types/TaskType";
import { InputSearch } from "@/components/input-search";
import { ListTask } from "@/components/list-task";
import { useTaskDatabase } from "@/database/useTaskDatabase";
import { useSearchStore } from "@/stores/useSearch";

export default function ListTasks() {
  const [tasks, setTasks] = useState<TaskData[] | null>([])
  const { listTasks } = useTaskDatabase();
  const { searchText } = useSearchStore();

  const filteredTasks: TaskData[] | null = tasks && tasks.filter(task => task.task.toLowerCase().includes(searchText) || task.task.toUpperCase().includes(searchText));

  useEffect(() => {
    async function getTasks() {
      try {
        const res = await listTasks();
        setTasks(res?.allTasks!);
      } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
      }
    }
    getTasks();
  }, []);

  return (
    <View className="flex-1 items-center justify-center px-4">
      <View className="w-full flex-col gap-4 mt-4 pb2">
        <Text className="text-white font-semibold text-xl">
          Tarefas
        </Text>
        <InputSearch />
      </View>
      <ListTask DATA={filteredTasks!} /> 
    </View>
  );
}
