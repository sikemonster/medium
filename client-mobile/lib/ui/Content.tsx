import React, { PropsWithChildren } from "react";
import { StyleSheet, View, ViewProps } from "react-native";


export const Content: React.FC<PropsWithChildren & ViewProps> = (props) => {
  return (
    <View style={[ss.main, props.style]}>{props.children}</View>
  )
}

const ss = StyleSheet.create({
  main: {
    paddingInline: 20
  }
})
