import {View, Text} from 'react-native';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import ImageWrapper from './FastImage';

export default function ListItem(props) {
  const {
    listStyle,
    handleList,
    imageStyle,
    labelStyle,
    labelTag = '',
    ListIcon,
    valueStyle,
    labelValue,
  } = props;

  return (
    <TouchableWithoutFeedback style={listStyle} onPress={handleList}>
      <ImageWrapper style={imageStyle} />
      <Text style={labelStyle}>{labelTag}</Text>
      <Text style={valueStyle}>{labelValue}</Text>
      {ListIcon && <ListIcon />}
    </TouchableWithoutFeedback>
  );
}
