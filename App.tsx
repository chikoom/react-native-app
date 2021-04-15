import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import ReminderItem from './components/ReminderItem'
import ReminderInput from './components/ReminderInput'

export interface ReminderItem {
  key: string
  value: string
}

export default function App() {
  const [reminderList, setReminderList] = useState<ReminderItem[]>([])

  const addReminderHandler = (reminderText: string) => {
    if (!reminderText) return
    setReminderList(reminderList => [
      ...reminderList,
      { key: Math.random().toString(), value: reminderText }
    ])
  }

  const clearListHandler = () => {
    setReminderList([])
  }

  const removeReminderItem = (itemKey: string) => {
    setReminderList(reminderList =>
      reminderList.filter(reminderItem => reminderItem.key !== itemKey)
    )
  }

  return (
    <View style={appWrapper}>
      <ReminderInput
        addReminderHandler={addReminderHandler}
        clearListHandler={clearListHandler}
      />
      <FlatList
        data={reminderList}
        renderItem={({ item }) => (
          <ReminderItem
            removeReminderItem={removeReminderItem}
            itemText={item.value}
            itemKey={item.key}
          />
        )}
      />
    </View>
  )
}

const { appWrapper } = StyleSheet.create({
  appWrapper: { paddingTop: 60, paddingBottom: 30, paddingHorizontal: 20 }
})
