import { useIconCategoryStore } from "@/stores/useSelectedIcon";
import {
  Heart,
  BriefcaseBusiness,
  CircleHelp,
  Code,
  CookingPot,
  Figma,
  Gamepad2,
  GraduationCap,
  Handshake,
  HomeIcon,
  Video,
  Flag,
} from "lucide-react-native";

export function changeIconCategory(category: string): any {
  const { onSetIconCategory } = useIconCategoryStore();

  function chooseIconCategory() {
    switch (category) {
      case "Casa":
        onSetIconCategory(HomeIcon);
      case "Escola":
        onSetIconCategory(GraduationCap);
        break;
      case "Jogos":
        onSetIconCategory(Gamepad2);
        break;
      case "Social":
        onSetIconCategory(Handshake);
        break;
      case "Programação":
        onSetIconCategory(Code);
        break;
      case "Design":
        onSetIconCategory(Figma);
        break;
      case "Trabalho":
        onSetIconCategory(BriefcaseBusiness);
        break;
      case "Video":
        onSetIconCategory(Video);
        break;
      case "Saúde":
        onSetIconCategory(Heart);
        break;
      case "Comida":
        onSetIconCategory(CookingPot);
        break;
      default:
        onSetIconCategory(CircleHelp);
    }
  }

  return chooseIconCategory
}