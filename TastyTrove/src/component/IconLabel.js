import {View, Text} from 'react-native';
import React from 'react';

export default function IconLabel(props) {
  const {IconComponent, LabelComponent} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
      }}>
      {IconComponent && IconComponent}
      {LabelComponent && LabelComponent}
    </View>
  );
}
