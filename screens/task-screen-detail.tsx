import { View, Text } from "react-native";
import { useEffect } from "react";
import { ButtonDeleteTask } from "@/components/tasks/button-delete-task";
import { TaskItemInfoDetail } from "@/components/tasks/task-item-info";
import { ButtonBackTask } from "@/components/tasks/button-back-task";
import { ButtonEditTask } from "@/components/tasks/button-edit-task";
import { TaskData } from "@/types/TaskType";
import { changeIconCategory } from "./change-icon-category";
import { Calendar, Flag, Tag } from "lucide-react-native";
import { useIconCategoryStore } from "@/stores/useSelectedIcon";

interface TaskItemProps {
  data: TaskData;
}

export function TaskItemDetail({ data }: TaskItemProps) {
  const { icon: Icon } = useIconCategoryStore();
  const iconCategory = changeIconCategory(data.category);

  useEffect(() => {
    iconCategory();
  }, [data.category]);

  return (
    <View className="flex-1 pt-10  bg-gray-600 flex-col items-start rounded-md px-4 py-2.5">
      <View className="w-full py-3 flex-row justify-between items-center">
        <ButtonBackTask />
        <View className="flex-row gap-2 items-center justify-center">
          <ButtonEditTask id={data.id} />
          <ButtonDeleteTask id={data.id} />
        </View>
      </View>
      <View className="w-full py-4 flex-col items-center gap-2 justify-between my-4 rounded-md px-4 bg-violet-500">
        <View className="w-full flex-col  justify-center gap-2">
          <Text className="text-white font-bold text-lg">{data.task}</Text>
          <Text className="w-full text-justify indent-8 text-white text-sm mt-1">
            {data.description}
          </Text>
        </View>
      </View>
      <TaskItemInfoDetail
        icon={Tag}
        title={"Categoria"}
        titleBadge={
          <View className="flex-row items-center justify-center gap-2">
            <Icon size={16} color="#fff" />
            <Text className="text-white text-sm">{data.category}</Text>
          </View>
        }
      />
      <TaskItemInfoDetail
        icon={Flag}
        title={"Prioridade"}
        titleBadge={data.priority}
      />
      <TaskItemInfoDetail
        icon={Calendar}
        title={"Data de criação"}
        titleBadge={
          new Date().toLocaleString("pt-br", {
            dateStyle: "long",
          })
        }
      />
    </View>
  );
}
