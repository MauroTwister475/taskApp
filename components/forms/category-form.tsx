import { CategoryItem } from "@/components/category-item";
import { CATEGORIES } from "@/constants/CATEGORIES";
import { useSelectedCategory, CategoryType } from "@/stores/useSelectedCategoryStore";
import Animated from "react-native-reanimated";

export function CategoryForm() {
  const { currentCategory, onSetCurrentCategory } = useSelectedCategory();

  function getCurrentCategory(category: CategoryType) {
    onSetCurrentCategory(category);
  }

  return (
    <Animated.View className="justify-start flex-row flex-wrap gap-4 items-center py-4">
      {CATEGORIES.map((category, index) => (
        <CategoryItem
          key={index}
          index={index}
          category={category.category}
          icon={category.icon!}
          isSelected={category.category === currentCategory}
          onPress={() => getCurrentCategory(category.category)}
        />
      ))}
    </Animated.View>
  );
}