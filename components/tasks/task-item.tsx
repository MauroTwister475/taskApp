import { colors } from "@/styles/colors";
import { TaskData } from "@/types/TaskType";
import { Link } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import { View, Text } from "react-native";

interface TaskItemProps {
  data: TaskData;
}

export function TaskItem({ data }: TaskItemProps) {

  return (
    <View className="w-full flex bg-gray-600 flex-col items-start rounded-md px-4 py-2.5">
      <View className="w-full flex-row items-center justify-between">
        <Text className="text-white font-semibold text-lg">{data.task}</Text>
        <View className="items-center w-8 h-8 rounded-md justify-center bg-gray-900/10 px-1.5 py-1">
          <Link href={`/tasks/${data.id}`}>
            <ArrowRight color={colors.white} size={15} />
          </Link>
        </View>
      </View>
      <View className="w-full mt-2">
        <Text
          className="text-gray-200 text-justify text-base pb-1.5"
          numberOfLines={3}
          lineBreakMode="tail"
        >
          {data.description}
        </Text>
      </View>
    </View>
  );
}
