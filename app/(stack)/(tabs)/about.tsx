import { View } from "react-native";
import { AccordionItemView } from "@/components/accordion";
import { AdditionalButtonTask } from "@/components/buttons/button-additional-icon-task";
import { AccordionItemField } from "@/components/accordion/accordion-field";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Logo } from "@/components/logo";

export default function About() {
  return (
    <View className="w-full flex-1 items-center mt-20">
      <Logo className="w-full mt-6 mb-10 " />
      <AccordionItemView
        title="Versão Actual"
        children={<AccordionItemField title="1.0.0 beta 10bh3" />}
      />
      <AccordionItemView
        title="Desenvolvedor"
        children={<AccordionItemField title="Mauro Dinis Raimundo" />}
      />
      <AccordionItemView
        title="Apoios"
        children={<AccordionItemField title="SmadCode Inc + ImaCode + ABFLine" />}
      />
      <AccordionItemView
        title="Contactos"
        children={
          <AccordionItemField className="w-full h-20 px-4 flex-row gap-8 items-center justify-center">
            <AdditionalButtonTask>
              <Link href="https://www.instagram.com/mauro_twister/">
                <Feather name="instagram" size={30} color={"#fff"} />
              </Link>
            </AdditionalButtonTask>
            <AdditionalButtonTask>
              <Link href="https://github.com/MauroTwister475">
                <Feather name="github" size={30} color={"#fff"} />
              </Link>
            </AdditionalButtonTask>
            <AdditionalButtonTask>
              <Link href="https://www.linkedin.com/in/mauro-raimundo-dinis-00475526a/">
                <Feather name="linkedin" size={30} color={"#fff"} />
              </Link>
            </AdditionalButtonTask>
          </AccordionItemField>
        }
      />
    </View>
  );
}