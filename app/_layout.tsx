import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { ToastProvider } from "@/components/ui/Toast";
import { SQLiteProvider } from "expo-sqlite";
import { Loading } from "@/components/loading";
import { initializeDatabase } from "@/database/db";
import "../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SQLiteProvider databaseName="task.db" onInit={initializeDatabase}>
      <GestureHandlerRootView>
        <ToastProvider position="top">
          <Slot />
          <StatusBar style="light" />
        </ToastProvider>
      </GestureHandlerRootView>
    </SQLiteProvider>
  );
}
