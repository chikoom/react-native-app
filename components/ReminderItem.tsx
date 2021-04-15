import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export interface Props {
  itemText: string
  itemKey: string
  removeReminderItem: (itemKey: string) => void
}

const ReminderItem: React.FC<Props> = ({
  itemText,
  itemKey,
  removeReminderItem
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={removeReminderItem.bind(this, itemKey)}
    >
      <View style={reminderItem}>
        <Text>{itemText}</Text>
      </View>
    </TouchableOpacity>
  )
}

const { reminderItem } = StyleSheet.create({
  reminderItem: {
    padding: 10,
    backgroundColor: '#aaa',
    borderColor: '#555',
    borderWidth: 1,
    marginVertical: 5
  }
})

export default ReminderItem
