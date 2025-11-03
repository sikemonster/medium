import { View, ViewProps } from "react-native"


export const Separator = ({ style, my = 30, ...props }: ViewProps & {
  my?: number
}) => {
  return (
    <View
      style={[
        {
          marginVertical: my,
          height: 1,
          width: '80%',
          backgroundColor: '#ccc'
        },
        style
      ]}
      {...props}
    >{props.children}</View>
  )
}
