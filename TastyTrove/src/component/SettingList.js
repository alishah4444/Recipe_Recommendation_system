import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function SettingList(props) {
  const {
    LabelComponent,
    componentStyle,
    SideComponent,
    ImagesComponent,
    clickHandler,
  } = props;

  return (
    <TouchableOpacity style={componentStyle} onPress={clickHandler}>
      {ImagesComponent}
      {LabelComponent}
      {SideComponent}
    </TouchableOpacity>
  );
}
