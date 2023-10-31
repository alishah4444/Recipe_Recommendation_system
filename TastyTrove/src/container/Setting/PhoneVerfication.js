import React, {useState} from 'react';
import {View, TextInput, Linking} from 'react-native';
import TextInputComponent from '../../component/TextInputComponent';
import style from './style';

import {Text, Button} from 'react-native-paper';
const PhoneNumberLoginScreen = () => {
  const [countryCode, setCountryCode] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const sendEmail = async () => {};

  return (
    <View style={{marginVertical: 10}}>
      <Text style={style.labeltext}>Phone number Verification</Text>

      <TextInputComponent
        value={email}
        placeholder={'Email Address'}
        inputStyle={style.textinput}
        onChangeHandler={value => {
          setEmail(value);
        }}
      />

      <Button
        style={style.button}
        labelStyle={style.bottonLabel}
        onPress={sendEmail}>
        Verification
      </Button>
    </View>
  );
};

export default PhoneNumberLoginScreen;
