import React from "react"
import { TextInput as RNTextInput, StyleSheet, TextInputProps } from "react-native"


type Props = { value: string, onChange: (t: string) => void } & TextInputProps

export const TextInput = (props: Props) => {
  const { value, onChange, style, ...etc } = props
  return (
    <RNTextInput
      style={[styles.input, style]}
      onChangeText={onChange}
      value={value}
      {...etc}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    padding: 10,
    backgroundColor: 'white'
  },
});
