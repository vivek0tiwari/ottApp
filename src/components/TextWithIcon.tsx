import * as React from 'react';
import {SvgProps} from 'react-native-svg';
import {StyleSheet, View, Text, StyleProp, TextStyle} from 'react-native';
import {getIcon} from '../Logo/utils';
export interface TextWithIconProps {
  iconName: string;
  text: string;
  iconProps?: SvgProps;
  textStyleProps?: StyleProp<TextStyle>;
}
const styles = StyleSheet.create({
  container: {
    color:'#fff',
    justifyContent:'center',
    alignItems:'center'
    
  },
});
export const TextWithIcon = (props: TextWithIconProps) => {
  const {iconName, text, iconProps, textStyleProps} = props;
  const Icon = getIcon(iconName);
  
  return (
    <View style={styles.container}>
      <Icon {...iconProps}/>
      <Text style={textStyleProps}>{text}</Text>
    </View>
  );
};
