import { View, Text } from "react-native";
import { Skills } from "@/components/skills";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

export default function Profile() {

  return (
    <View className="flex-1 items-center px-4 mt-20">
      <Avatar className="w-28 h-28">
        <AvatarImage
          source={{ uri: "https://github.com/MauroTwister475.png" }}
        />
        <AvatarFallback className="bg-violet-500">
          <Text className="font-bold text-xl text-white">M</Text>
        </AvatarFallback>
      </Avatar>
      <View className="w-full items-center justify-center gap-1 flex-col py-3">
        <Text className="text-white font-bold text-xl">
          Mauro Dinis Raimundo
        </Text>
        <Text className="text-white font-semibold">@maurotwister475</Text>
      </View>
      <Skills />
    </View>
  );
}
