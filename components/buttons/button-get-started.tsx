import { useRouter } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { colors } from "@/styles/colors";

export function ButtonGestStarted() {
  const { navigate } = useRouter();

  function goToHomeScreen() {
    navigate("/(tabs)");
  }

  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.violet[500],
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 4,
      }}
      activeOpacity={0.8}
      onPress={goToHomeScreen}
    >
      <Text className="text-white uppercase">Começar</Text>
    </TouchableOpacity>
  );
}
