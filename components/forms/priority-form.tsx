import { PriorityItem } from '../priority-Item'
import { useSelectedPriority } from '@/stores/useSelectedPriority';
import Animated from 'react-native-reanimated'

export function PriorityForm() {
  const { currentPriotity, onSetSelectedPriority } = useSelectedPriority();

  function getCurrentIndex(index: number) {
    onSetSelectedPriority(index);
  }

  return (
    <Animated.View className="w-auto flex-row flex-wrap gap-4 items-center py-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <PriorityItem 
          key={index} 
          index={index} 
          priority={(index+1).toString()}
          isSelected={(index) === currentPriotity}
          onPress={() => getCurrentIndex(index)}
        />
      ))}
    </Animated.View>
  )
}