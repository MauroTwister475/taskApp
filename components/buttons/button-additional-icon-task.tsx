import { ReactNode } from 'react'
import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native'

interface AdditionalButtonTaskProps extends TouchableOpacityProps {
  children: ReactNode,
  headerModal?: boolean,
}

export function AdditionalButtonTask({ headerModal, children, ...rest }: AdditionalButtonTaskProps) {
  return (
    <TouchableOpacity style={headerModal ? Styles.container : {} } activeOpacity={0.4} {...rest}>
      <>{children}</>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  container: {
    left: -4,
  }
})