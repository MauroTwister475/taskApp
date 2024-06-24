import { ReactNode } from "react";
import SimpleAccordion from "react-native-simple-accordion";
import { colors } from "@/styles/colors";
import { useWindowDimensions } from "react-native";

interface AccordionItemViewProps {
  title: string;
  icon?: ReactNode;
  children: JSX.Element;
}

export function AccordionItemView({
  title,
  icon: Icon,
  children,
}: AccordionItemViewProps) {
  const { width: widthDevide } = useWindowDimensions();	
  
  return (
    <SimpleAccordion
      viewContainerStyle={{
        width: widthDevide,
        backgroundColor: colors.violet[500],
        flexDirection: "row-reverse",
      }}
      bannerStyle={{
        backgroundColor: colors.black[800],
        borderWidth: 0.5,
        borderColor: colors.gray[500],
      }}
      showArrows={false}
      titleStyle={{
        color: "#cecece",
        fontSize: 16,
        fontWeight: "bold",
      }}
      viewInside={children}
      title={title}
    />
  );
}
