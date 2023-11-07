import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import style from '../Login/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextInputComponent from '../../component/TextInputComponent';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useMutation} from '@apollo/client';
import {CREATE_USER} from '../../utils/fetcher';
import client from '../../utils/Apollo';
import _ from 'lodash';
import {useDispatch} from 'react-redux';
import {setUserInfo} from '../../../reducers/userReducer';

export default function Signup(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [userInfo, setuserInfo] = useState({
    email: '',
    password: '',
    repassword: '',
  });
  const [error, setError] = useState('');
  const [createUser] = useMutation(CREATE_USER, {client});

  const onChangeHandler = (name, value) => {
    if (name === 'repassword') {
      userInfo.password === value
        ? setuserInfo(prev => ({...prev, [name]: value}))
        : setError('Please enter correct credentials');
    } else {
      setuserInfo(prev => ({...prev, [name]: value}));
    }
  };

  const handleSubmittion = async () => {
    console.log(userInfo);

    let inputVar = {email: userInfo.email, password: userInfo.password};
    const {data} = await createUser({variables: {input: inputVar}});
    console.log('User created:', data.createUser);

    if (!_.isEmpty(data?.createUser)) {
      dispatch(setUserInfo(data.createUser));
      navigation.navigate('Home');
    } else {
      console.log('Eror');
    }
  };

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.backIcon}>
        <Ionicons
          name={'chevron-back'}
          size={25}
          style={{
            alignSelf: 'center',
            flex: 1,
            justifyContent: 'flex-start',
          }}
          color={'#686F82'}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>

      <View style={style.header}>
        <Text style={style.heading}>Signup</Text>
        <Text style={style.tagLine}>
          Welcome Back ome Back ome Back ome Back ome Back me Back
        </Text>
      </View>

      <Text style={style.email}>Email</Text>
      <TextInputComponent
        placeholder={'Email'}
        inputStyle={style.input}
        onChangeHandler={value => {
          console.log(value);
          onChangeHandler('email', value);
        }}
      />
      <Text style={style.email}>Password</Text>

      <TextInputComponent
        placeholder={'Password'}
        inputStyle={style.input}
        onChangeHandler={value => {
          onChangeHandler('password', value);
        }}
        secureTextEntry={true}
      />
      <Text style={style.email}>Password</Text>
      <TextInputComponent
        placeholder={'Confirm Password'}
        inputStyle={style.input}
        onChangeHandler={value => {
          onChangeHandler('repassword', value);
        }}
        secureTextEntry={true}
      />

      <View style={{margin: 50}}>
        <Button
          style={style.button}
          labelStyle={style.bottonLabel}
          onPress={handleSubmittion}>
          Signup
        </Button>
      </View>
    </View>
  );
}
