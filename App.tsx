import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
  return (
    <View style={appWrapper}>
      <View style={topInputWrapper}>
        <TextInput placeholder='Enter Reminder!' style={topInput} />
        <Button title='Add' onPress={() => {}} />
      </View>
      <View></View>
    </View>
  )
}

const { topInput, appWrapper, topInputWrapper } = StyleSheet.create({
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
  },
  appWrapper: { paddingTop: 60, paddingBottom: 30, paddingHorizontal: 20 }
})
