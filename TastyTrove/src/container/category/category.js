import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useState} from 'react';
import {useCallback} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import {categoryApi} from '../../constant/constant';
import ImageWrapper from '../../component/FastImage';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const width = Dimensions.get('screen').width;

export default function Categories() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const timeOut = setTimeout(() => {
      getAllCategories();
    }, 800);
    return () => {
      clearTimeout(timeOut);
      abortController.abort(signal);
    };
  }, []);

  const getAllCategories = () => {
    axios.get(categoryApi).then(response => {
      setCategory(response.data.categories);
      setLoading(false);
    });
  };

  const renderItem = useCallback(({item, index}) => {
    return (
      <TouchableOpacity
        // onPress={() => navigation.navigate('ProductSearch', {searchItem: item})}
        style={{
          paddingVertical: 10,
          width: width * 0.29,
          borderRadius: 8,
          margin: 8,
          backgroundColor: '#343743',
          alignItems: 'center',
        }}>
        <ImageWrapper
          url={item.strCategoryThumb}
          style={{
            backgroundColor: '#252830',
            height: width * 0.23,
            width: width * 0.23,
            overflow: 'hidden',
            marginVertical: 5,
            borderRadius: (width * 0.23) / 2,
          }}
        />

        <Text style={{color: '#fff', fontSize: 14}} numberOfLines={1}>
          {item.strCategory}
        </Text>
      </TouchableOpacity>
    );
  }, []);

  const renderHeader = () => {
    return (
      <>
        <View style={styles.searchHeader}>
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
        </View>
      </>
    );
  };

  return (
    <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          numColumns={3}
          data={category}
          ListHeaderComponent={renderHeader}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}
