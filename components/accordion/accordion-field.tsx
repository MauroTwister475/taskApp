import { ReactNode } from "react";
import { View, Text } from "react-native";
import { twMerge } from "tailwind-merge";

type AccordionItemFieldProps = {
  title?: string;
  children?: ReactNode;
  className?: string;
};

export function AccordionItemField({
  children,
  className,
  title,
}: AccordionItemFieldProps) {
  return (
    <View className={twMerge("w-full px-4", className)}>
      {title && (
        <Text className="text-white font-semibold text-lg">{title}</Text>
      )}
      {children}
    </View>
  );
}
