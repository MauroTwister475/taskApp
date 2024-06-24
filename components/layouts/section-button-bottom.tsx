import { View } from "react-native";
import { ButtonBack } from "../buttons/button-back";
import { ButtonNext } from "../buttons/button-next";
import { useStepsStores } from "@/stores/useStepsStore";
import { ButtonGestStarted } from "../buttons/button-get-started";

export function SectionButtonBottom() {
  const { currentStep } = useStepsStores();

  return (
    <View className="w-full flex-row justify-between items-center p-6 mb-8">
      <ButtonBack />
      {currentStep !== 2 ? <ButtonNext /> : <ButtonGestStarted />}
    </View>
  );
}
