import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import ImageWrapper from '../../component/ImageWrapper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const MainRender = memo(({item, goToDescription, width}) => {
  return (
    <TouchableOpacity
      // onPress={() => goToDescription(item)}
      style={{
        width: width * 0.45,
        borderRadius: 8,
        margin: 10,
        padding: 3,
        backgroundColor: '#343743',
        alignItems: 'center',
      }}>
      <ImageWrapper
        url={item.recipe?.image}
        style={{
          backgroundColor: '#02c39a',
          height: 130,
          width: 130,
          overflow: 'hidden',
          marginVertical: 12,
          borderRadius: 130 / 2,
        }}
      />

      <Text
        style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}
        numberOfLines={1}>
        {item.recipe?.label}
      </Text>

      <Text
        style={{
          color: '#02c39a',
          fontStyle: 'italic',

          marginTop: 5,
          fontWeight: '900',
          paddingBottom: 5,
        }}>
        {`${item.recipe?.source}`}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          margin: 5,
          marginBottom: 10,
          justifyContent: 'space-evenly',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name={'staro'} size={15} color={'#686F82'} />
          <Text style={{color: '#686F82', fontWeight: 'bold'}}>
            {' 20 min'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
          }}>
          <Entypo name={'stopwatch'} size={15} color={'#686F82'} />
          <Text style={{color: '#686F82', fontWeight: 'bold'}}>
            {`${Number(item.recipe?.calories).toFixed(2)} Cal`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default MainRender;
