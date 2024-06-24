import { FlatList, Text, View } from "react-native";
import { TaskItem } from "@/components/tasks/task-item";
import { TaskData } from "@/types/TaskType";

export interface ListTasksProps {
  DATA: TaskData[];
  isLoading?: boolean;
}

export function ListTask({ DATA, isLoading }: ListTasksProps) {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <TaskItem data={item} />}
      contentContainerStyle={{
        columnGap: 10,
        rowGap: 15,
        paddingBottom: 100,
        paddingTop: 20,
      }}
      ListEmptyComponent={() => (
        <View className="flex-1 w-full h-full mt-52 items-center justify-center my-auto ">
          <Text className="w-full text-center text-gray-400 text-lg">
            {isLoading ? "Carregando tarefas..." : "Sem Tarefas"}
          </Text>
        </View>
      )}
    />
  );
}
