import { View, Text, Image } from "react-native";

interface BadgeProps {
  icon: any;
  skill: string;
}

export function BadgeSkill({ skill, icon, ...rest }: BadgeProps) {
  return (
    <View
      className="w-max px-2.5 flex-grow py-1.5 rounded-full bg-gray-501 flex-row items-center gap-1.5"
      {...rest}
    >
      <Image source={icon} className="w-5 h-5" />
      <Text className="text-white">{skill}</Text>
    </View>
  );
}
