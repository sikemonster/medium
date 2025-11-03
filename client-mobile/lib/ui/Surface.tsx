import { View } from '@/lib/ui/Themed';
import { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';

export const Surface = (props: ViewProps & {
  flex?: number;
  bg?: string;
  px?: number;
  py?: number;
}) => {
  const { flex = undefined, px, py, bg = 'white', style } = props;
  return (
    <View style={[{
      flex,
      backgroundColor: bg,
      paddingInline: px,
      paddingBlock: py,
    }, style]}>
      {props.children}
    </View>
  );
};

