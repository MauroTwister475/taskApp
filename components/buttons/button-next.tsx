import { colors } from "@/styles/colors";
import { TouchableOpacity } from "react-native";
import { useStepsStores } from "@/stores/useStepsStore";
import { Text } from "react-native";

export function ButtonNext() {
  const { onSetCurrentStep, currentStep } = useStepsStores();

  function goToNextStep() {
    if (currentStep < 2 && currentStep < currentStep + 1) {
      onSetCurrentStep(currentStep + 1);
    }
  }

  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.violet[500],
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 4,
      }}
      activeOpacity={0.8}
      onPress={goToNextStep}
    >
      <Text className="text-white uppercase">Seguinte</Text>
    </TouchableOpacity>
  );
}
