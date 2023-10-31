import {View, Text} from 'react-native';
import React from 'react';

export default function Header(props) {
  const {leftComponent, rightComponent, label, labelStyle} = props;

  return (
    <View
      style={{
        justifyContent: 'space-between',
        paddingHorizontal: 12,

        flexDirection: 'row',
      }}>
      {leftComponent && leftComponent}
      {label != '' && <Text style={labelStyle}>{label}</Text>}
      {rightComponent && rightComponent}
    </View>
  );
}
