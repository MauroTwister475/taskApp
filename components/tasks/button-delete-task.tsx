import { useTaskDatabase } from "@/database/useTaskDatabase";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Trash2 } from "lucide-react-native";
import { View } from "react-native";
import { useToast } from "@/components/ui/Toast";

type ButtonDeleteTaskProps = {
  id: number,
}

export function ButtonDeleteTask({ id, ...rest }: ButtonDeleteTaskProps) {
  const { deleteTask } = useTaskDatabase();
  const router = useRouter()
  const { toast } = useToast()

  async function handleDeletetask() {
    await deleteTask(id);
    router.navigate("/(tabs)");
    toast("Tarefa apagada com sucesso!", "info", 3000);
  }

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
        onPress={handleDeletetask}
        {...rest}
      >
        <Trash2 color="#AB3939" size={18} />
      </TouchableOpacity>
    </View>
  );
}
