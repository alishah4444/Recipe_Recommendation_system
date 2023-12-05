import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo, useRef, useEffect, useState} from 'react';
import ImageWrapper from '../../component/ImageWrapper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {setRecipeInfo} from '../../../reducers/recipeReducer';
import * as Animatable from 'react-native-animatable';

const MainRender = memo(({item, goToDescription, width}) => {
  const dispatch = useDispatch();
  const wishlistRecipes = useSelector(
    state => state.recipeReducer.wishlistRecipes,
  );

  const [isInWishlist, setIsInWishlist] = useState(
    wishlistRecipes.some(recipe => recipe.id === item.recipe?.id),
  );

  const heartRef = useRef(null);

  useEffect(() => {
    console.log(wishlistRecipes);
    setIsInWishlist(
      wishlistRecipes.some(recipe => recipe.id === item.recipe?.id),
    );
  }, [wishlistRecipes, item.recipe?.id]);

  const addToWishlist = () => {
    dispatch(setRecipeInfo(item.recipe));
    heartRef.current.bounce(); // Bounce animation
  };

  return (
    <View
      style={{
        width: width * 0.45,
        borderRadius: 8,
        margin: 10,
        padding: 3,
        backgroundColor: '#343743',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          goToDescription(item);
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
      </TouchableOpacity>

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
          alignItems: 'center',
          marginHorizontal: 10,
          marginBottom: 10,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
          }}>
          <AntDesign name={'staro'} size={15} color={'#686F82'} />
          <Text style={{color: '#686F82', fontWeight: 'bold'}}>
            {' 20 min'}
          </Text>
        </View>
        <TouchableOpacity onPress={addToWishlist}>
          <Animatable.View ref={heartRef}>
            <Ionicons
              name={'heart'}
              size={28}
              color={isInWishlist ? '#02c39a' : '#B0B6C8'}
            />
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default MainRender;
