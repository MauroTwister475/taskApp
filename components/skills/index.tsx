import { View } from "react-native";
import { BadgeSkill } from "./badge-skill";
import { SKILLS } from "@/constants/skill";
import { Text } from "react-native";

export function Skills() {
  return (
    <View className="w-full items-center justify-center mt-4 ">
      <Text className="font-semibold w-full text-white text-xl">
        Skills
      </Text>
      <View className="w-full flex-row justify-betwee gap-2.5 py-3 flex-wrap">
        {SKILLS.map((skill) => (
          <BadgeSkill key={skill.id} skill={skill.skill} icon={skill.icon} />
        ))}
      </View>
    </View>
  );
}
