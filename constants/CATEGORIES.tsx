import { ReactNode } from "react";
import { colors } from "@/styles/colors";
import { CategoryType } from "@/stores/useSelectedCategoryStore";
import { Heart, BriefcaseBusiness, Code, CookingPot, Figma, Gamepad2, GraduationCap, Handshake, Home, Music, Video } from "lucide-react-native";


type CategoriesTypeArray = {
  category: CategoryType,
  icon: ReactNode,
}

export const CATEGORIES: CategoriesTypeArray[] = [
  {
    category: "Casa",
    icon: <Home size={20} color={colors.white} />
  },
  {
    category: "Design",
    icon: <Figma size={20} color={colors.white} />
  },
  {
    category: "Video",
    icon: <Video size={20} color={colors.white} />
  },
  {
    category: "Escola",
    icon: <GraduationCap size={20} color={colors.white} />
  },
  {
    category: "Trabalho",
    icon: <BriefcaseBusiness size={20} color={colors.white} />
  },
  {
    category: "Saúde",
    icon: <Heart size={20} color={colors.white} />
  },
  {
    category: "Jogos",
    icon: <Gamepad2 size={20} color={colors.white} />
  },
  {
    category: "Social",
    icon: <Handshake size={20} color={colors.white} />
  },
  {
    category: "Comida",
    icon: <CookingPot size={20} color={colors.white} />
  },
  {
    category: "Programação",
    icon: <Code size={20} color={colors.white} />
  },
]
