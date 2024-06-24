import { useState } from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Header } from "@/components/header";
import { Loading } from "@/components/loading";
import { ButtonAddNewTask } from "@/components/buttons/button-add-task";
import { ListOrdered } from "lucide-react-native";

export default function TabsLayout() {
  const [loading, setisLoading] = useState(true);

  setTimeout(() => setisLoading(false), 3000);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Tabs
        sceneContainerStyle={{
          backgroundColor: colors.black[800],
        }}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.violet[500],
          tabBarInactiveTintColor: colors.white,
          tabBarItemStyle: {
            paddingBottom: 10,
          },
          tabBarStyle: {
            paddingTop: 30,
            paddingHorizontal: 8,
            borderTopWidth: 0,
            backgroundColor: colors.gray[600],
            position: "absolute",
            elevation: 0,
            height: 80,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                size={20}
                color={focused ? colors.violet[500] : colors.white}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            title: "Tarefas",
            tabBarIcon: ({ focused }) => (
              <ListOrdered
                size={20}
                color={focused ? colors.violet[500] : colors.white}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="empty"
          options={{
            title: "",
            tabBarIcon: ({ focused }) => (
              <Feather
                name="flag"
                style={{ paddingHorizontal: 30 }}
                size={0}
                color={focused ? colors.violet[500] : colors.white}
              />
            ),
            tabBarButton: (props) => <ButtonAddNewTask {...props} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Perfil",
            tabBarIcon: ({ focused }) => (
              <Feather
                name="user"
                size={20}
                color={focused ? colors.violet[500] : colors.white}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "Sobre",
            tabBarIcon: ({ focused }) => (
              <Feather
                name="info"
                size={20}
                color={focused ? colors.violet[500] : colors.white}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
