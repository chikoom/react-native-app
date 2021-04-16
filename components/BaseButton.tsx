import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export interface Props {
  title: string
  onPress: () => void
  style?: object
}

const BaseButton: React.FC<Props> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[baseButtonTouchable, style]} onPress={onPress}>
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const { baseButtonTouchable, buttonText } = StyleSheet.create({
  baseButtonTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  buttonText: {
    color: '#fff'
  }
})

export default BaseButton
