import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function SendIcon(props: SvgProps) {
  return <Svg width={24} height={24} {...props}>
    <Path d="m24 0-6 22-8.129-7.239 7.802-8.234-10.458 7.227L0 12 24 0zM9 16.668V24l3.258-4.431L9 16.668z" />
  </Svg>
}

