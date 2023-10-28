import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import style from '../Login/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextInputComponent from '../../component/TextInputComponent';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function Signup(props) {
  //   const {navigation} = useRoute();

  const navigation = useNavigation();

  const [userInfo, setuserInfo] = useState({
    name: '',
    password: '',
    phoneNo: '',
  });

  const onChangeHandler = (name, value) => {};

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
        value={userInfo.name}
        placeholder={'Email'}
        inputStyle={style.input}
        onChangeHandler={value => {
          console.log(value);
          setUserName(value);
        }}
      />
      <Text style={style.email}>Password</Text>

      <TextInputComponent
        value={userInfo.password}
        placeholder={'Password'}
        inputStyle={style.input}
        onChangeHandler={value => {
          setPassword(value);
        }}
        secureTextEntry={true}
      />
      <Text style={style.email}>Password</Text>
      <TextInputComponent
        value={userInfo.phoneNo}
        placeholder={'Password'}
        inputStyle={style.input}
        onChangeHandler={value => {
          setPassword(value);
        }}
        secureTextEntry={true}
      />

      <View style={{margin: 50}}>
        <Button
          style={style.button}
          labelStyle={style.bottonLabel}
          onPress={() => navigation.navigate('BottomTabs', {})}>
          Login
        </Button>
      </View>
    </View>
  );
}
