import {FlatList, TouchableOpacity, Dimensions, Text} from 'react-native';

import React, {memo} from 'react';
import {mealType} from '../constant/constant.js';
import LocalImageWrapper from './localImage';
import {useCallback} from 'react';

const CategoryMenu = ({navigation}) => {
  const Item = memo(({item, index}) => {
    const handleClick = useCallback(
      () => navigation.navigate('ProductSearch', {searchItem: item.searchBy}),
      [],
    );
    return (
      <TouchableOpacity
        onPress={handleClick}
        style={{
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          backgroundColor: '#343743',
          borderRadius: 10,
          margin: 10,
          height: 50,
          paddingHorizontal: 10,
        }}>
        <LocalImageWrapper
          url={item.url}
          style={{
            backgroundColor: '#343743',
            height: Dimensions.get('screen').width * 0.12,
            width: Dimensions.get('screen').width * 0.12,
            overflow: 'hidden',
            marginVertical: 12,
            borderRadius: Dimensions.get('screen').width / 2,
          }}
        />
        <Text style={{color: '#686F82', paddingLeft: 5}}>{item.mealType}</Text>
      </TouchableOpacity>
    );
  });

  const renderItem = useCallback(({item, index}) => {
    console.log('renderItem');
    return <Item item={item} index={index} />;
  });

  return (
    <FlatList
      keyExtractor={(item, index) => (item.mealType + index).toString()}
      data={mealType}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default memo(CategoryMenu);
