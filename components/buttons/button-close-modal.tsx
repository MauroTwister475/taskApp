import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from "react-native";
import { useResetAllData } from "@/utils/ResetAllData";

interface AdditionalButtonTaskProps extends TouchableOpacityProps {
  children: ReactNode;
  headerModal?: boolean;
}

export function ButtonCloseModal({ headerModal, children, ...rest }: AdditionalButtonTaskProps) {
  const resetAllData = useResetAllData();

  function resetAllModalData() {
    resetAllData();
  }

  return (
    <TouchableOpacity
      onPress={resetAllModalData}
      style={headerModal ? Styles.container : {}}
      activeOpacity={0.4}
      {...rest}
    >
      <>{children}</>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: -20,
    top: -9,
  },
});