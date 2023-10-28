import {TextInput} from 'react-native';
import React from 'react';

export default function TextInputComponent(props) {
  const {
    inputStyle,
    value,
    onChangeHandler,
    placeholderColor = '#686F82',
    placeholder,
    keyboardType = 'default',
  } = props;

  return (
    <TextInput
      style={inputStyle}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChangeHandler}
      placeholderTextColor={placeholderColor}
      {...props}
    />
  );
}
