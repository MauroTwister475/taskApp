import { useEffect, useState } from "react";
import { Input } from "@/components/ui/Input";
import { useTaskStore } from "@/stores/useTaskInfoStore";
import Animated from "react-native-reanimated";
import { useCurrentTaskStore } from "@/stores/useCurrentTask";
import { useModalStore } from "@/stores/useModalStore";

export function FormInputs() {
  const { onSetTask } = useTaskStore();
  const { currentTask } = useCurrentTaskStore();
  const { isEditing } = useModalStore();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => onSetTask({ name, description }), [name, description]);

  return (
    <Animated.View style={{ rowGap: 15, paddingVertical: 10 }}>
      <Input
        onChangeText={(text) => setName(text)}
        placeholder={isEditing ? currentTask.task : "Nome"}
      />
      <Input
        onChangeText={(text) => setDescription(text)}
        placeholder={isEditing ? currentTask.description : "Descrição"}
      />
    </Animated.View>
  );
}
