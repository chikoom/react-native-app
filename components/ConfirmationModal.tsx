import React from 'react'
import { StyleSheet, Modal, Text, View } from 'react-native'
import BaseButton from './BaseButton'

export interface Props {
  yesCallback: (itemKey: string) => void
  setIsOpen: (isOpen: boolean) => void
  itemKey: string
  isOpen: boolean
  title: string
}

const ConfirmationModal: React.FC<Props> = ({
  yesCallback,
  setIsOpen,
  itemKey,
  isOpen,
  title
}) => {
  const yesPressedHandler = () => {
    yesCallback(itemKey)
    setIsOpen(false)
  }
  const noPressedHandler = () => setIsOpen(false)

  return (
    <Modal
      transparent={true}
      visible={isOpen}
      animationType='slide'
      style={modalOuter}
    >
      <View style={modalOuter}>
        <View style={modalInner}>
          <Text style={modalText}>{title}</Text>
          <View style={modalButtons}>
            <BaseButton
              title='YES'
              onPress={yesPressedHandler}
              style={[confirmbutton, yesButton]}
            />
            <BaseButton
              title='NO'
              onPress={noPressedHandler}
              style={[confirmbutton, noButton]}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const {
  modalOuter,
  modalInner,
  modalText,
  modalButtons,
  confirmbutton,
  yesButton,
  noButton
} = StyleSheet.create({
  modalOuter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  modalInner: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  modalText: {
    fontSize: 18
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25
  },
  confirmbutton: {
    width: 75,
    marginHorizontal: 10
  },
  yesButton: {
    backgroundColor: 'green'
  },
  noButton: {
    backgroundColor: 'red'
  }
})

export default ConfirmationModal
