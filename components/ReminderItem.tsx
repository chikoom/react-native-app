import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export interface Props {
  itemText: string
  itemKey: string
  setSelectedItemKey: (itemKey: string) => void
  setIsOpen: (isOpen: boolean) => void
}

const ReminderItem: React.FC<Props> = ({
  itemText,
  itemKey,
  setSelectedItemKey,
  setIsOpen
}) => {
  const itemPressedHandler = () => {
    setIsOpen(true)
    setSelectedItemKey(itemKey)
  }
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={itemPressedHandler}>
      <View style={reminderItem}>
        <Text>{itemText}</Text>
      </View>
    </TouchableOpacity>
  )
}

const { reminderItem } = StyleSheet.create({
  reminderItem: {
    padding: 10,
    borderColor: '#555',
    borderBottomWidth: 1,
    marginVertical: 5
  }
})

export default ReminderItem
