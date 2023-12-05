import React, {memo} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../component/Header';
import {useNavigation} from '@react-navigation/native';
import {style} from '../addRecipe/style';
import ImageWrapper from '../../component/ImageWrapper';
import {deleteWishListRecipe} from '../../../reducers/recipeReducer';

const Wishlist = memo(() => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const wishlistRecipes = useSelector(
    state => state.recipeReducer.wishlistRecipes,
  );

  const removeItem = index => {
    dispatch(deleteWishListRecipe(index));
  };
  console.log(wishlistRecipes);
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          borderRadius: 8,
          margin: 10,
          padding: 10,
          flex: 1,
          flexDirection: 'row',
          padding: 3,
          backgroundColor: '#343743',
          alignItems: 'center',
        }}>
        <ImageWrapper
          url={item.image}
          style={{
            backgroundColor: '#02c39a',
            height: 70,
            width: 70,
            marginHorizontal: 5,
            overflow: 'hidden',
            marginVertical: 12,
            borderRadius: 5,
          }}
        />
        <View>
          <Text
            style={{
              color: '#686F82',
              paddingHorizontal: 10,

              fontSize: 15,
              marginTop: 5,
            }}
            numberOfLines={2}>
            {item.label}
          </Text>
          <Text
            style={{
              color: '#02c39a',
              paddingHorizontal: 10,

              fontSize: 15,
              marginTop: 5,
            }}
            numberOfLines={2}>
            {item.source}
          </Text>
        </View>
        <TouchableOpacity
          style={{position: 'absolute', right: 10, bottom: 5}}
          onPress={() => removeItem(index)}>
          <Ionicons name={'trash'} size={24} color={'#B0B6C8'} />
        </TouchableOpacity>
      </View>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <>
        <Header
          leftComponent={
            <Ionicons
              name={'chevron-back'}
              size={28}
              color={'#B0B6C8'}
              onPress={() => navigation.goBack()}
            />
          }
        />
        <View style={style.container}>
          <Text style={style.mainHeading}>Favourite List</Text>
        </View>
      </>
    );
  };
  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      data={wishlistRecipes}
      renderItem={renderItem}
    />
  );
});

export default Wishlist;
