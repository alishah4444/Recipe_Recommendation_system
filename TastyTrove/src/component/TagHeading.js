import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TagHeading({
  icon = 'arrowright',
  name,
  handlerPress,
  navigation,
}) {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 10,
      }}>
      <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 20}}>
        {name}
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('category')}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: '#ffffff', paddingHorizontal: 2}}>{'All'}</Text>
        <Ionicons name={'chevron-forward'} size={22} color={'#ffffff'} />
      </TouchableOpacity>
    </View>
  );
}
