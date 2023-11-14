import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const NotificationList = props => {
  const {
    listStyle,
    handleList,
    labelStyle,
    labelTag = '',
    ListIcon,
    valueStyle,
    labelValue,
    IconComponent,
  } = props;

  return (
    <TouchableOpacity style={listStyle} onPress={handleList}>
      {IconComponent && <IconComponent />}
      <View style={{flexDirection: 'column', flex: 1}}>
        <Text style={labelStyle}>{labelTag}</Text>
        <Text style={valueStyle}>{labelValue}</Text>
      </View>
      {ListIcon && <ListIcon />}
    </TouchableOpacity>
  );
};
export default NotificationList;
