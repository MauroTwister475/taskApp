import { View, Image, ImageSourcePropType } from "react-native";
import { Title } from "@/components/title";
import Animated from "react-native-reanimated";

export interface StepItemProps {
  image: ImageSourcePropType;
  title: string;
  description?: string;
}

export function StepItem({ image, title, description }: StepItemProps) {
  return (
    <Animated.View className="flex-col items-center h-full pt-3 gap-">
      <Image source={image} className="w-80 h-80" />
      <View className="flex-col items-center justify-center gap-5 px-8">
        <Title size="lg" title={title} />
        <Title size="sm" description={description} />
      </View>
    </Animated.View>
  );
}
