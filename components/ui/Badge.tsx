import { type VariantProps, cva } from "class-variance-authority";
import { Text, View } from "react-native";

import { cn } from "@/lib/utils";

const badgeVariants = cva("items-center gap-1 text-xs font-semibold", {
  variants: {
    variant: {
      default: "bg-primary w-max",
      secondary: "bg-secondary",
      destructive: "bg-destructive",
      success: "bg-green-500 dark:bg-green-700",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const badgeTextVariants = cva("font-medium text-center text-xs", {
  variants: {
    variant: {
      default: "text-white",
      secondary: "text-secondary-foreground",
      destructive: "text-destructive-foreground",
      success: "text-green-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends React.ComponentPropsWithoutRef<typeof View>,
    VariantProps<typeof badgeVariants> {
  label: string;
  icon?: any;
  color?: string;
  labelClasses?: string;
}
function Badge({
  label,
  icon: Icon,
  color,
  labelClasses,
  className,
  variant,
  ...props
}: BadgeProps) {
  return (
    <View className={cn(badgeVariants({ variant }), className)} {...props}>
      <View
        className="w-12 h-12 items-center justify-center px-1 rounded-md"
        style={{
          backgroundColor: color,
        }}
      >
        <Icon />
      </View>

      <Text className={cn(badgeTextVariants({ variant }), labelClasses)}>
        {label}
      </Text>
    </View>
  );
}

export { Badge, badgeVariants };
