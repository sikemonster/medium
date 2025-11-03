import React, { PropsWithChildren } from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

export function Row(props: PropsWithChildren & ViewStyle & ViewProps) {

  const { gap, style, ...rest } = props

  return <View style={[ss.row, { gap: gap }, style]} {...rest} />
}

const ss = StyleSheet.create({
  row: {
    gap: 10
  }
})

export default Row
