import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TasksLayout() {
  return (
    <Tabs sceneContainerStyle={{ backgroundColor: "#121212"}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: () => <Feather name="home" size={0} />,
        }}
      />
      <Tabs.Screen
        name="[slug]"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: () => <Feather name="home" size={0} />,
        }}
      />
    </Tabs>
  );
}
