import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { cn } from '../../lib/utils';
import { Check } from 'lucide-react-native';

// TODO: make controlled (optional)
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof View> {
  label?: string;
  labelClasses?: string;
  checkboxClasses?: string;
}
function Checkbox({
  label,
  labelClasses,
  checkboxClasses,
  className,
  ...props
}: CheckboxProps) {
  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(prev => !prev);
  };

  return (
    <View
      className={cn('flex flex-row items-center gap-2', className)}
      {...props}
    >
      <TouchableOpacity style={{ marginLeft: 8 }} onPress={toggleCheckbox}>
        <View
          className={cn('w-5 h-5 border border-gray-501 rounded bg-background flex justify-center items-center p-1',{
              'bg-violet-500': isChecked,
              'bg-gray-600': !isChecked,
            },
            checkboxClasses
          )}
        >
          {isChecked && <Check color={"#fff"} size={14} />}
        </View>
      </TouchableOpacity>
      {label && (
        <Text className={cn('text-primary', labelClasses)}>{label}</Text>
      )}
    </View>
  );
}

export { Checkbox };
