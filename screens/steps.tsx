import { ReactNode } from 'react';
import { View, Text } from 'react-native'
import { STEPS } from '@/constants/dataSteps'
import { useStepsStores } from '@/stores/useStepsStore'
import { StepItem } from '@/components/steps/step-item';

type ScreenTypes = {
  [key: number]: ReactNode
}

export function Steps() {
  const { currentStep } = useStepsStores();
  
  const SCREENS: ScreenTypes = {
    0: <StepItem image={STEPS[currentStep].image} title={STEPS[currentStep].title} description={STEPS[currentStep].description} />,
    1: <StepItem image={STEPS[currentStep].image} title={STEPS[currentStep].title} description={STEPS[currentStep].description} />,
    2: <StepItem image={STEPS[currentStep].image} title={STEPS[currentStep].title} description={STEPS[currentStep].description} />,
  }
  
  return (
    <View className='flex-1 items-center justify-center'>
      {SCREENS[currentStep]}
    </View>
  )
}