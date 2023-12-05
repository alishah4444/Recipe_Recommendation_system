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
    BadageData,
  } = props;

  return (
    <View style={[listStyle, {flexDirection: 'column'}]} onPress={handleList}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        {IconComponent && <IconComponent />}
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={labelStyle}>{labelTag}</Text>
          <Text style={valueStyle}>{labelValue}</Text>
        </View>
      </View>
      {BadageData && <BadageData />}
    </View>
  );
};
export default NotificationList;
