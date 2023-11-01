import {
  View,
  Text,
  Animated,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {accountSetting, helpSetting} from '../../constant/constant';
import FollowTag from '../../component/FollowTag';
import {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import ImageWrapper from '../../components/FastImage';

import SettingList from '../../component/SettingList';
import Header from '../../component/Header';
import PhoneNumberLoginScreen from './PhoneVerfication';

export default function Profile() {
  const user = useSelector(state => state.userReducer.user);
  const navigation = useNavigation();
  const scrolly = useRef(new Animated.Value(0)).current;
  const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

  const [isVisible, setIsVisible] = useState(false);

  const translate = scrolly.interpolate({
    inputRange: [0, 100, 150],
    outputRange: [0, -50, -100],
    extrapolate: 'clamp',
  });

  const opacity = scrolly.interpolate({
    inputRange: [100, 150],
    outputRange: [1, 0],
  });

  const handleToggle = async () => {};

  const RenderBottomItem = () => <PhoneNumberLoginScreen />;

  const toggleBottomSheetVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={Style.container}>
      <Header
        leftComponent={
          <TouchableOpacity style={Style.backIcon}>
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
        }
        label={'Profile'}
        labelStyle={Style.label}
      />

      <AnimatedScrollView
        automaticallyAdjustContentInsets={false}
        style={{flex: 1}}
        alwaysBounceVertical={true}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrolly,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}>
        <Animated.View
          style={{
            opacity: opacity,
            transform: [{translateY: translate}],
          }}>
          <FollowTag />
        </Animated.View>
        <View
          style={{
            backgroundColor: '#343743',
            marginVertical: 10,
          }}>
          {accountSetting.map((item, index) => {
            return (
              <SettingList
                key={item.id + '_' + index}
                componentStyle={{
                  backgroundColor: '#2d2f38',
                  margin: 10,
                  padding: 10,
                  flex: 1,
                  justifyContent: 'space-between',
                  borderRadius: 5,
                  flexDirection: 'row',
                }}
                ImagesComponent={
                  <View
                    style={{
                      height: Dimensions.get('window').width * 0.12,
                      width: Dimensions.get('window').width * 0.12,
                      alignSelf: 'flex-start',
                      backgroundColor: '#686F82',
                      overflow: 'hidden',
                      alignSelf: 'center',
                      borderRadius: (Dimensions.get('window').width * 0.12) / 2,
                    }}
                  />
                }
                LabelComponent={
                  <Text
                    style={{
                      alignSelf: 'center',
                      justifyContent: 'flex-start',
                      flex: 1,
                      color: '#686F82',
                      fontWeight: 'bold',
                      marginHorizontal: 15,
                      fontSize: 18,
                    }}>
                    {item.Type}
                  </Text>
                }
                SideComponent={
                  <Ionicons
                    name={'chevron-forward'}
                    size={25}
                    style={{
                      alignSelf: 'center',
                      justifyContent: 'flex-start',
                    }}
                    color={'#686F82'}
                    onPress={() => navigation.goBack()}
                  />
                }
              />
            );
          })}
        </View>

        <Text
          style={{
            alignSelf: 'flex-start',
            justifyContent: 'flex-start',
            flex: 1,
            color: '#686F82',
            fontWeight: 'bold',

            fontSize: 18,
          }}>
          More
        </Text>
        <View
          style={{
            marginVertical: 10,
            backgroundColor: '#343743',
          }}>
          {helpSetting.map((item, index) => {
            return (
              <SettingList
                key={item.id + '_' + index}
                handleClick={toggleBottomSheetVisibility}
                componentStyle={{
                  backgroundColor: '#2d2f38',
                  margin: 10,
                  padding: 10,
                  flex: 1,
                  justifyContent: 'space-between',
                  borderRadius: 5,
                  flexDirection: 'row',
                }}
                ImagesComponent={
                  <View
                    style={{
                      height: Dimensions.get('window').width * 0.12,
                      width: Dimensions.get('window').width * 0.12,
                      alignSelf: 'flex-start',
                      backgroundColor: '#686F82',
                      overflow: 'hidden',
                      alignSelf: 'center',
                      borderRadius: (Dimensions.get('window').width * 0.12) / 2,
                    }}
                  />
                }
                LabelComponent={
                  <Text
                    style={{
                      alignSelf: 'center',
                      justifyContent: 'flex-start',
                      flex: 1,
                      color: '#686F82',
                      fontWeight: 'bold',
                      marginHorizontal: 15,
                      fontSize: 18,
                    }}>
                    {item.Type}
                  </Text>
                }
                SideComponent={
                  <Ionicons
                    name={'chevron-forward'}
                    size={25}
                    style={{
                      alignSelf: 'center',
                      justifyContent: 'flex-start',
                    }}
                    color={'#686F82'}
                    onPress={() => navigation.goBack()}
                  />
                }
              />
            );
          })}
        </View>
      </AnimatedScrollView>
    </View>
  );
}
