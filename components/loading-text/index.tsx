import { Text } from "react-native";

export function LoadingText({ title }: { title: string }) {
  return (
    <Text className="text-gray-400 text-lg mt-24">
      {title}
    </Text>
  );
}
