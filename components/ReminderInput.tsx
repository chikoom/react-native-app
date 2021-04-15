import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

export interface Props {
  addReminderHandler: (reminderText: string) => void
  clearListHandler: () => void
}

const ReminderInput: React.FC<Props> = ({
  addReminderHandler,
  clearListHandler
}) => {
  const [enteredReminder, setEnteredReminder] = useState<string>('')

  const reminderInputHandler = (enteredText: string) =>
    setEnteredReminder(enteredText)

  return (
    <View style={topInputWrapper}>
      <TextInput
        placeholder='Enter Reminder!'
        onChangeText={reminderInputHandler}
        style={topInput}
        value={enteredReminder}
      />
      <Button
        title='Add'
        onPress={addReminderHandler.bind(this, enteredReminder)}
      />
      <Button title='Clear' onPress={clearListHandler} />
    </View>
  )
}

const { topInput, topInputWrapper } = StyleSheet.create({
  topInput: {
    flex: 0.9,
    padding: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 10
  },
  topInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default ReminderInput
