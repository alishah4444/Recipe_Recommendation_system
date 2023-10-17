import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  Keyboard,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../container/Home/Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import AddRecipe from '../containers/addRecipe/addRecipe';
// import Notification from '../containers/Notification/Notification';
const Tab = createBottomTabNavigator();
const {width, height} = Dimensions.get('screen');

function MyTabBar({state, descriptors, navigation}) {
  const scaleUp = useRef(new Animated.Value(0)).current;
  const [isVisible, setIsVisible] = useState(true);
  const animateIcon = index => {
    Animated.spring(scaleUp, {
      toValue: index,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsVisible(false);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsVisible(true);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return isVisible ? (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const {name, title} = options;
        const onPress = () => {
          if (!isFocused) {
            animateIcon(index); // Trigger the animation
            navigation.navigate(route.name);
          }
        };

        const scale = scaleUp.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [1, 1.3, 1],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={route.key}
            style={{
              alignItems: 'center',
              borderRadius: 50,
              transform: [{scale}],
            }}>
            <MaterialIcons
              name={name}
              onPress={onPress}
              size={34}
              color={isFocused ? '#02c39a' : '#fff'}
            />
            <View
              style={{
                padding: 3,
                backgroundColor: isFocused ? '#02c39a' : 'transparent',
                borderRadius: 50,
              }}
            />
          </Animated.View>
        );
      })}
    </View>
  ) : null;
}

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        keyboardHidesTabBar: true,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#FFF',
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        key={0}
        name="Home"
        component={Home}
        options={{
          name: 'lunch-dining',
        }}
      />

      <Tab.Screen
        key={1}
        name="addRecipe"
        component={Home}
        options={{
          name: 'add',
        }}
      />

      <Tab.Screen
        key={2}
        name="menu"
        component={Home}
        options={{
          name: 'notifications',
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBarContainer: {
    width: '98%',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#252830',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    position: 'absolute',
    bottom: 6,
    alignSelf: 'center',
  },
  transitionStyle: {
    width: width - (2 * 16) / 3,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
