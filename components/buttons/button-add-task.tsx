import { useModalStore } from "@/stores/useModalStore";
import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

export function ButtonAddNewTask() {
  const { onSetIsOpen, onSetIsEditing } = useModalStore();

  function handleOpenModal () {
    onSetIsOpen(true)
    onSetIsEditing(false)
  }

  return (
    <TouchableOpacity
      style={{
        top: -64,
        right: 0,
        left: 0,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
      }}
      activeOpacity={0.8}
      onPress={handleOpenModal}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 99,
          backgroundColor: colors.violet[500],
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather name="plus" color={"#fff"} size={24} />
      </View>
    </TouchableOpacity>
  );
}