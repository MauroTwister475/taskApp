import { TouchableOpacity, View, Modal, Switch } from "react-native";
import { useModalStore } from "@/stores/useModalStore";
import { Eraser } from "lucide-react-native";

export function ButtonEditTask({ id }: { id: number }) {
  const { onSetIsOpen, onSetIsEditing } = useModalStore();

  function handleEditTask() {
    onSetIsEditing(true);
    onSetIsOpen(true);
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
        onPress={handleEditTask}
        activeOpacity={0.4}
      >
        <Eraser color="#fff" size={18} />
      </TouchableOpacity>
    </View>
  );
}