import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { View } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { colors } from "@/styles/colors";
import { useRouter } from "expo-router";

export function ButtonBackTask({ ...rest }: TouchableOpacityProps) {
  const router = useRouter();

  return (
    <View className="items-center w-10 h-10 rounded-md justify-center bg-gray-950/10 px-1.5 py-1">
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          borderRadius: 4,
          columnGap: 6,
        }}
        activeOpacity={0.4}
        onPress={() => router.back()}
        {...rest}
      >
        <ChevronLeft color={colors.white} size={18} />
      </TouchableOpacity>
    </View>
  );
}
