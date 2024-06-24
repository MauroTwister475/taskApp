import { forwardRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelClasses, inputClasses, ...props }, ref) => (
    <View className={cn('flex flex-col gap-1.5 bg-gray-600 rounded-md ', className)}>
      {label && <Text className={cn('text-base', labelClasses)}>{label}</Text>}
      <TextInput
        placeholderTextColor="#cecece"
        style={{ color: "#fff"}}
        className={cn(
          inputClasses,
          'py-1 h-14 px-4 rounded-lg'
        )}
        {...props}
      />
    </View>
  )
);

export { Input };
