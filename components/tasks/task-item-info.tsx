import { ReactNode, ElementType } from "react";
import { View, Text } from "react-native";
import clsx from "clsx";

interface TaskItemDetailProps {
  icon: ElementType;
  title: string;
  titleBadge: any;
  noBadge?: boolean;
}

export function TaskItemInfoDetail({
  icon: Icon,
  noBadge,
  title,
  titleBadge,
}: TaskItemDetailProps) {
  return (
    <View className="w-full flex-row items-center justify-between mt-4">
      <View className="flex-row gap-2 items-center justify-center">
        <Icon color="#fff" size={16} />
        <Text className="text-white">{title}</Text>
      </View>
      <View
        className={clsx(
          "bg-gray-501 px-4 py-1 w-max items-center justify-normal rounded-md",
          {
            "bg-transparent px-0 items-end justify-end ": noBadge,
          }
        )}
      >
        <Text className="text-white text-sm">{titleBadge}</Text>
      </View>
    </View>
  );
}
