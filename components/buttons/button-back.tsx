import { useStepsStores } from "@/stores/useStepsStore";
import { TouchableOpacity, Text } from "react-native";

export function ButtonBack() {
  const { onSetCurrentStep, currentStep } = useStepsStores();

  function goToPreviousStep() {
    if (currentStep > currentStep - 1) {
      onSetCurrentStep(0);
    }

    if (currentStep > 0 && currentStep > currentStep - 1) {
      onSetCurrentStep(currentStep - 1);
    }
  }

  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 4,
      }}
      activeOpacity={0.8}
      onPress={goToPreviousStep}
    >
      <Text className="text-white uppercase">Voltar</Text>
    </TouchableOpacity>
  );
}
