import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const timeOut = setTimeout(() => {
      navigation.replace('BottomNavigation');
    }, 2000);

    return () => {
      abortController.abort(signal);
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={styles.textStyle}>Tasty Trove</Text>
      <ActivityIndicator size={'large'} />
    </View>
  );
}
