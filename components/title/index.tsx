import { Text } from "react-native";
import clsx from "clsx";

interface TitleProps {
  size: "sm" | "lg" | "md";
  title?: string;
  description?: string;
  onHeader?: boolean;
}

export function Title({ title, onHeader, description, size }: TitleProps) {
  return (
    <Text
      className={clsx("font-normal text-white text-center", {
        "text-base": size === "sm",
        "text-xl font-semibold": size === "md",
        "text-2xl font-bold": size === "lg",
        "ml-20": onHeader,
      })}
    >
      {title}
      {description}
    </Text>
  );
}
