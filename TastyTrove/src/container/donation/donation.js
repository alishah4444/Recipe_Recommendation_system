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

export default function Donation() {
  const navigation = useNavigation();
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
        <Text style={style.heading}>Donation</Text>
        <Text style={style.tagLine}>
          Hi from the TastyTrove Team. Thank you for installing Our App!
          TastyTrove has full time employees that depend on your contributions
          and support.
        </Text>
      </View>

      <Text style={style.email}>Donation Amount</Text>
      <TextInputComponent
        placeholder={'donation'}
        inputStyle={style.input}
        onChangeHandler={value => {
          console.log(value);
          onChangeHandler('donation', value);
        }}
      />
      <View style={{margin: 50}}>
        <Button
          style={style.button}
          labelStyle={style.bottonLabel}
          onPress={() => {}}>
          Complete Donation
        </Button>
      </View>
    </View>
  );
}
