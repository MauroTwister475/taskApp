import { ReactNode } from "react";
import { Pressable, Text, PressableProps, View } from "react-native";
import clsx from "clsx";

interface CategoryItemProps extends PressableProps {
  category: string;
  isSelected?: boolean;
  icon: ReactNode;
  index: number;
}

export function CategoryItem({ category, isSelected, index, icon: Icon, ...props }: CategoryItemProps) {
  
  return (
    <Pressable
      className={clsx("w-max items-center gap-1", {
        "opacity-100 ": !isSelected,
        "opacity-50": isSelected,
        "flex-grow": index !== 8 && index !== 9,
      })}
      {...props}
    >
      <View className={clsx('w-16 h-14 items-center justify-center px-1 rounded-md bg-gray-600', {
        'border border-violet-600 ': isSelected,
        'borner-none': !isSelected,
      })}
      >
        <>{Icon}</>
      </View>
      <Text className="text-white font-normal">{category}</Text>
    </Pressable>
  );
}
