import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const getSavedValue = async (key: string, initialValue: any) => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')

    if (jsonValue != null) {
      console.log(jsonValue)
      return JSON.parse(jsonValue)
    }
  } catch (e) {
    console.error(e)
    return ''
  }
  if (initialValue instanceof Function) return initialValue()
}

const useAsyncStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(
    async () => await getSavedValue(key, initialValue)
  )

  useEffect(() => {
    const storeData = async (key: string, value: any) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
      } catch (e) {
        console.error(e)
      }
    }
    storeData(key, value)
  }, [value])

  return [value, setValue]
}

export default useAsyncStorage
