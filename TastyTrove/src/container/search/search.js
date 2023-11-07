import {
  View,
  Text,
  ScrollView,
  Animated,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import TextInputComponent from '../../component/TextInputComponent';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useCallback} from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import {categoryApi, randomMeal, recommendMeal} from '../../constant/constant';
import ImageWrapper from '../../component/FastImage';
import {useRef} from 'react';

export default function SearchScreen() {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const scrolling = useRef(new Animated.Value(0))?.current;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getInitAllApi();

    return () => {
      controller.abort(signal);
    };
  }, []);

  const getInitAllApi = async () => {
    axios.get(categoryApi).then(response => {
      setCategories(response.data.categories);
    });
  };

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <TouchableOpacity
          style={styles.listStyle}
          onPress={() => onSubmitEditing(item.strCategory)}>
          <ImageWrapper url={item.strCategoryThumb} style={styles.imageStyle} />

          <Text style={styles.textLabel}>{item.strCategory}</Text>
        </TouchableOpacity>
      );
    },
    [categories],
  );

  const onSubmitEditing = useCallback(async value => {
    navigation.navigate('ProductSearch', {searchItem: value});
  }, []);

  const opacity = scrolling.interpolate({
    inputRange: [100, 200, 250],
    outputRange: [0, 0.5, 1],
    extrapolate: 'clamp',
  });

  const translate = scrolling.interpolate({
    inputRange: [100, 200],
    outputRange: [-100, 0],
  });

  const handleScroll = React.useCallback(
    Animated.event([{nativeEvent: {contentOffset: {y: scrolling}}}], {
      useNativeDriver: true,
    }),
    [],
  );

  const renderHeaderComponent = React.useCallback(() => {
    return (
      <>
        <Animated.View style={styles.searchHeader}>
          <TouchableOpacity style={styles.backIcon}>
            <Ionicons
              name={'chevron-back'}
              size={25}
              style={{
                alignSelf: 'center',

                justifyContent: 'flex-start',
              }}
              onPress={() => navigation.goBack()}
              color={'#686F82'}
            />
          </TouchableOpacity>
          <Text style={styles.headerLabel}>Search</Text>
        </Animated.View>

        <TextInputComponent
          placeholderTextColor="#686F82"
          placeholder={'search food recipe'}
          inputStyle={styles.input}
          onSubmitEditing={onSubmitEditing}
        />
      </>
    );
  }, []);

  return (
    <View>
      <Animated.View
        style={{
          opacity: opacity,
          position: 'absolute',
          padding: 15,
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',

          zIndex: 99999,
          backgroundColor: '#2C2F38',
        }}>
        <Ionicons
          name={'chevron-back'}
          size={25}
          style={{
            alignSelf: 'center',
            justifyContent: 'flex-start',
          }}
          onPress={() => navigation.goBack()}
          color={'#686F82'}
        />

        <Text style={[styles.headerLabel]}>Search</Text>
      </Animated.View>

      <Animated.FlatList
        ListHeaderComponent={renderHeaderComponent}
        contentContainerStyle={{margin: 10}}
        data={categories}
        onScroll={handleScroll}
        renderItem={renderItem}
        windowSize={5}
      />
    </View>
  );
}
