import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import style from './style';
import MainRender from './MainRender';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setUserInfo} from '../../../reducers/userReducer';
import {ServiceCall} from '../../utils/ajaxCall';
import {isEmpty} from 'lodash';
import ImageWrapper from '../../component/ImageWrapper';
import {useNavigation} from '@react-navigation/native';
import CategoryMenu from '../../component/CategoryMenu';
import TagHeading from '../../component/TagHeading';
import {getEmailInitials} from '../../constant/constant';
import {Snackbar} from 'react-native-paper';
import TextInputComponent from '../../component/TextInputComponent';

const {width} = Dimensions.get('screen');

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisibile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const user = useSelector(state => state.userReducer.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    onChangeHandler();

    console.log(user.email);
    return () => {};
  }, []);

  useEffect(() => {
    if (user != null) {
      if (user.username == undefined || user.phoneNumber == undefined) {
        setVisibile(true);
      }
    }

    return () => {};
  }, [user]);

  const goToDescription = React.useCallback(item => {
    navigation.navigate('Description', {item: item});
  }, []);
  const goToSearch = React.useCallback(() => navigation.navigate('search'), []);
  const renderItem = ({item, index}) => (
    <MainRender item={item} width={width} goToDescription={goToDescription} />
  );

  const onChangeHandler = useCallback(() => {
    try {
      setLoading(true);
      ServiceCall(
        'get',
        `https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=food&random=true`,
      ).then(response => {
        setLoading(false);
        setData(response.data.hits);
      });
    } catch (e) {
      setLoading(false);
    }
  }, []);

  const handleEndReached = () => {
    setLoading(true);
    ServiceCall(
      'get',
      `https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=food&from=${
        (currentPage - 1) * 10
      }&to=${currentPage * 10}`,
    ).then(response => {
      setData(prev => [...prev, ...response.data.hits]);
      setCurrentPage(prev => prev + 1);
      setLoading(false);
    });
  };

  const ListEmptyComponent = () => (
    <View style={style.emptyContainer}>
      <ActivityIndicator size={'large'} color={'#ffff'} />
    </View>
  );

  const ListHeaderComponent = () => (
    <View>
      <View style={style.header}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{color: '#686F82'}}>
            {!isEmpty(user) ? user.username : 'Login or sign up'}
          </Text>
          <Text
            style={{
              color: '#02c39a',
              fontWeight: 'bold',
              fontSize: 22,
              fontFamily: 'Pacifico-Regular',
            }}>
            Tasty Trove
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            !isEmpty(user)
              ? navigation.navigate('Setting', {})
              : navigation.navigate('Login', {})
          }
          style={{
            backgroundColor: '#02c39a',
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50 / 2,
          }}>
          {!isEmpty(user) ? (
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 'bold',
                alignSelf: 'center',
                fontSize: 22,
                fontFamily: 'Pacifico-Regular',
              }}>
              {getEmailInitials(user.email)}
            </Text>
          ) : null}
        </TouchableOpacity>
      </View>
      <TextInputComponent
        placeholderTextColor="#686F82"
        placeholder={'search food recipe'}
        inputStyle={style.input}
        onPressIn={goToSearch}
        showSoftInputOnFocus={false}
      />

      <TagHeading name={'Category'} />
      <CategoryMenu navigation={navigation} />
    </View>
  );

  return (
    <View>
      {data.length > 0 && (
        <Snackbar
          visible={visible}
          onDismiss={() => {}}
          style={{zIndex: 2, backgroundColor: '#02c39a', fontWeight: 'bold'}}
          action={{
            label: 'Go',
            onPress: () => {
              navigation.navigate('Setting');
            },
          }}>
          Please complete profile
        </Snackbar>
      )}
      <FlatList
        data={data}
        style={{marginBottom: 10, paddingBottom: 10}}
        numColumns={2}
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={renderItem}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
}
