import Home from '../container/Home/Home';
import LoginScreen from '../container/Login/Login';
import Signup from '../container/Signup/Signup';
import BottomNavigation from './BottomNavigation';
import Setting from '../container/Setting/Setting';
import Description from '../container/description/description';
import SearchScreen from '../container/search/search';
import ProductSearch from '../container/productSearch/productSearch';
import Categories from '../container/category/category';

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
    component: Setting,
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
    component: Description,
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
    component: SearchScreen,
    Options: {
      headerShown: false,
      presentation: 'modal',
    },
  },

  {
    Screen: 'category',
    component: Categories,
    Options: {
      headerShown: false,
      cardStyleInterpolator: forFade,
    },
  },

  {
    Screen: 'ProductSearch',
    component: ProductSearch,
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
