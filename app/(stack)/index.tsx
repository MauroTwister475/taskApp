import { View } from 'react-native'
import { ButtonSkip } from '@/components/buttons/button-skip'
import { SectionButtonBottom } from '@/components/layouts/section-button-bottom'
import { Steps } from '@/screens/steps'

export default function Welcome() {
  return (
    <View className='flex-1 h-full bg-black-800 items-center justify-center'>
      <ButtonSkip />
      <Steps />
      <SectionButtonBottom />
    </View>
  )
}