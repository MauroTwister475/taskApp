import { View, Text } from "react-native";
import { CheckSquare } from "lucide-react-native";
import { colors } from "@/styles/colors";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  className?: string,
}

export function Logo({ className }: LogoProps) {
  return (
    <View className={twMerge('items-center justify-center flex-row gap-2', className)}>
      <CheckSquare size={30} fontWeight="bold" color={colors.violet[500]} />
      <Text className="text-white font-semibold text-xl">
        Tarefas
      </Text>
    </View>
  );
}
