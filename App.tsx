import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'

import ReminderItem from './components/ReminderItem'
import ReminderInput from './components/ReminderInput'
import ConfirmationModal from './components/ConfirmationModal'
import useAsyncStorage from './customHooks/useAsyncStorage'

export interface ReminderItem {
  key: string
  value: string
}

export default function App() {
  const [reminderList, setReminderList] = useState<ReminderItem[]>([])
  const [reminderListA, setReminderListA] = useAsyncStorage('reminderList', [])

  const [selectedItemKey, setSelectedItemKey] = useState('')
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [isDeleteAllOpen, setIsDeleteAllOpen] = useState(false)

  const addReminderHandler = (reminderText: string) => {
    if (!reminderText) return
    setReminderList(reminderList => [
      ...reminderList,
      { key: Math.random().toString(), value: reminderText }
    ])
  }

  const deleteAllReminderHandler = () => {
    setReminderList([])
  }

  const deleteOneReminderHandler = (itemKey: string) => {
    setReminderList(reminderList =>
      reminderList.filter(reminderItem => reminderItem.key !== itemKey)
    )
  }

  return (
    <View style={appWrapper}>
      <Text style={mainTitle}>Idan's Tasks List</Text>
      <ReminderInput
        addReminderHandler={addReminderHandler}
        clearListHandler={() => setIsDeleteAllOpen(true)}
      />
      <FlatList
        data={reminderList}
        renderItem={({ item }) => (
          <ReminderItem
            setSelectedItemKey={setSelectedItemKey}
            setIsOpen={setIsDeleteOpen}
            itemText={item.value}
            itemKey={item.key}
          />
        )}
      />
      <ConfirmationModal
        title='Delete Reminder?'
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        yesCallback={deleteOneReminderHandler}
        itemKey={selectedItemKey}
      />
      <ConfirmationModal
        title='Delete All Reminders?'
        isOpen={isDeleteAllOpen}
        setIsOpen={setIsDeleteAllOpen}
        yesCallback={deleteAllReminderHandler}
        itemKey={selectedItemKey}
      />
    </View>
  )
}

const { appWrapper, mainTitle } = StyleSheet.create({
  appWrapper: { paddingTop: 60, paddingBottom: 30, paddingHorizontal: 20 },
  mainTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 25,
    borderBottomWidth: 3,
    borderBottomColor: '#000',
    paddingBottom: 5
  }
})
