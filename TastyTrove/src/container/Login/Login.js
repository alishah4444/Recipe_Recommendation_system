import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import style from './style';
import TextInputComponent from '../../component/TextInputComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native-paper';
import {useMutation, useQuery} from '@apollo/client';
import {LOGIN_USER, USER_QUERY} from '../../utils/fetcher';
import client from '../../utils/Apollo';
import {useDispatch} from 'react-redux';
import {setUserInfo} from '../../../reducers/userReducer';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [loginUser] = useMutation(LOGIN_USER, {client});
  const navigation = useNavigation();
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorCli, setErrorCLi] = useState(null);

  const handleLogin = async () => {
    try {
      if (userName !== null && password !== null) {
        const {data, error} = await loginUser({
          variables: {email: userName, password: password},
        });

        if (data != null) {
          console.log(data.loginUser);
          dispatch(setUserInfo(data.loginUser));
          navigation.navigate('Home');
        }

        console.log(error);
      } else {
        setErrorCLi('Please enter a username and password');
      }
    } catch (error) {
      console.error('GraphQL error:', error.message);
      setErrorCLi('Login failed. Please check your credentials.');
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
        <Text style={style.heading}>Welcome Back</Text>
        <Text style={style.tagLine}>
          Welcome Back ome Back ome Back ome Back ome Back me Back
        </Text>
      </View>

      <Text style={style.email}>Email</Text>
      <TextInputComponent
        value={userName}
        placeholder={'Email'}
        inputStyle={style.input}
        onChangeHandler={value => {
          console.log(value);
          setUserName(value);
        }}
      />
      <Text style={style.email}>Password</Text>

      <TextInputComponent
        value={password}
        placeholder={'Password'}
        inputStyle={style.input}
        onChangeHandler={value => {
          setPassword(value);
        }}
        secureTextEntry={true}
      />

      <View style={style.footer}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={style.rememberMe}>Remember Me</Text>
        </View>
        <Text
          style={[style.rememberMe, {fontWeight: 'bold', marginHorizontal: 12}]}
          onPress={() => navigation.navigate('ForgotPassword', {})}>
          Forget Password ?
        </Text>
      </View>

      <View style={{margin: 50}}>
        <Button
          style={style.button}
          labelStyle={style.bottonLabel}
          onPress={handleLogin}>
          Login
        </Button>

        <Text style={[style.rememberMe, {marginHorizontal: 7, fontSize: 16}]}>
          You don't have an account yet?{' '}
          <Text
            style={{
              color: '#02c39a',
              fontWeight: 'bold',

              textDecorationLine: 'underline',
            }}
            onPress={() =>
              navigation.navigate('Signup', {naviagtion: navigation})
            }>
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
