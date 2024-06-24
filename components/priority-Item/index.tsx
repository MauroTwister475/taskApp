import { Pressable, Text, PressableProps } from "react-native";
import { Flag } from "lucide-react-native";
import clsx from "clsx";

interface PriorityItemProps extends PressableProps {
  priority: string;
  isSelected?: boolean;
  index: number;
}

export function PriorityItem({
  priority,
  isSelected,
  index,
  ...props
}: PriorityItemProps) {
  return (
    <Pressable
      className={clsx("w-16 h-auto px-3 py-2 rounded-md items-center gap-1", {
        "bg-gray-600": !isSelected,
        "bg-violet-500": isSelected,
        "flex-grow": index !== 8 && index !== 9,
      })}
      {...props}
    >
      <Flag color={"#fff"} size={18} />
      <Text className="text-white font-normal">{priority}</Text>
    </Pressable>
  );
}
