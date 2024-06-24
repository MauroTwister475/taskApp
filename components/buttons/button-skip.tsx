import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export function ButtonSkip() {
  const router = useRouter();

  return (
    <View className=" w-full items-start mt-14 px-2">
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 4,
      }}
      activeOpacity={0.8}
      onPress={() => router.navigate("/(tabs)")}
    >
      <Text className="text-white uppercase">Pular</Text>
    </TouchableOpacity>
    </View>
  );
}