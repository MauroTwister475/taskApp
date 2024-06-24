import { View, Text } from "react-native";
import { usePathname } from "expo-router";
import { AvatarFallback, Avatar, AvatarImage } from "@/components/ui/Avatar";
import { Logo } from "../logo";

export function Header() {
  const pathName = usePathname();

  if (pathName === "/profile" || pathName === "/about" || pathName.includes("/tasks/")) {
    return;
  }

  return (
    <View className="w-full flex-row px-4 pt-14 pb-6 justify-between items-center bg-black-800">
      <Logo />
      <Avatar className="rounded-full w-12 h-12 border-gray-800">
        <AvatarImage
          source={{ uri: "https://github.com/MauroTwister475.png" }}
        />
        <AvatarFallback className="bg-violet-500 items-center justify-center w-full h-full">
          <Text className="font-bold text-white ">M</Text>
        </AvatarFallback>
      </Avatar>
    </View>
  );
}
