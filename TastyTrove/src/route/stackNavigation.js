import Home from '../container/Home/Home';
import LoginScreen from '../container/Login/Login';
import Signup from '../container/Signup/Signup';
import BottomNavigation from './BottomNavigation';

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const stacks = [
  {
    Screen: 'Home',
    component: Home,
    Options: {
      headerShown: false,
      cardStyleInterpolator: forFade,
    },
  },
  {
    Screen: 'Setting',
    component: Home,
    Options: {
      headerShown: false,
    },
  },
  {
    Screen: 'Splash',
    component: Home,
    Options: {
      headerShown: false,
      cardStyleInterpolator: forFade,
    },
  },
  {
    Screen: 'BottomNavigation',
    component: BottomNavigation,
    Options: {
      headerShown: false,
      cardStyleInterpolator: ({current, layouts}) => {
        return {
          cardStyle: {
            transform: [
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-layouts.screen.width, 0],
                }),
              },
            ],
          },
        };
      },
    },
  },
  {
    Screen: 'Description',
    component: Home,
    Options: {
      headerShown: false,
      cardStyleInterpolator: forFade,
    },
  },
  {
    Screen: 'Profile',
    component: Home,
    Options: {
      headerShown: false,
      presentation: 'modal',
    },
  },
  {
    Screen: 'Login',
    component: LoginScreen,
    Options: {
      headerShown: false,
      cardStyleInterpolator: forFade,
    },
  },
  {
    Screen: 'search',
    component: Home,
    Options: {
      headerShown: false,
      presentation: 'modal',
    },
  },

  {
    Screen: 'AllCategories',
    component: Home,
    Options: {
      headerShown: false,
      cardStyleInterpolator: forFade,
    },
  },

  {
    Screen: 'ProductSearch',
    component: Home,
    Options: {
      headerShown: false,
      cardStyleInterpolator: forFade,
    },
  },

  {
    Screen: 'Signup',
    component: Signup,
    Options: {
      headerShown: false,
      cardStyleInterpolator: forFade,
    },
  },
];

export default stacks;
