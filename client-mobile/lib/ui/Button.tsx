import React from "react"
import { StyleSheet, Text, TouchableOpacity, View, ViewProps } from "react-native"


export const Button: React.FC<ViewProps & {
  onPress: () => void
}> = (props) => {
  const { children } = props
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.button]}>
        {React.Children.map(children, (child) => {
          if (typeof child === "string") {
            return (
              <Text style={[styles.text]}>{child}</Text>
            )
          }
          return child as React.ReactNode
        })}
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
    borderRadius: 4, // pill shape
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#0394fc',
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
  },
});
