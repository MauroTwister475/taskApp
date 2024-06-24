import { View } from "react-native";
import { Input } from "@/components/ui/Input";
import { useSearchStore } from "@/stores/useSearch";
import { Search } from "lucide-react-native";

export function InputSearch() {
  return (
    <View className="w-full pl-3 rounded-md h-max flex-row items-center justify-center bg-gray-600">
      <Search size={20} color={"#cecece"} />
      <Field />
    </View>
  );
}

function Field() {
  const { onSetSearchText } = useSearchStore();

  function onSearchTask(text: string) {
    onSetSearchText(text);
  }

  return (
    <Input
      className="flex-1  "
      placeholder="Pesquise tarefas..."
      onChangeText={(text) => onSearchTask(text)}
    />
  );
}
