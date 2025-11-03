import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export const Col: React.FC<PropsWithChildren & { gap?: number }> = (props) => {
  return <View style={[ss.col, {
    gap: props.gap
  }]}>
    {props.children}
  </View>
}

const ss = StyleSheet.create({
  col: {
    gap: 5
  }
})
