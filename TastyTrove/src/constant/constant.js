const mealType = [
  {
    id: 1,
    mealType: 'vegetarian',
    searchBy: 'Vegetarian',
    url: require('../image/healthy-food.png'),
  },
  {
    id: 2,
    mealType: 'Sea Food',
    searchBy: 'SeaFood',
    url: require('../image/thai-food.png'),
  },
  {
    id: 3,
    mealType: 'side',
    searchBy: 'Side',
    url: require('../image/drink.png'),
  },
  {
    id: 4,
    mealType: 'Break Fast',
    searchBy: 'BreakFast',
    url: require('../image/hot-pot.png'),
  },
  {
    id: 5,
    mealType: 'Dinner',
    searchBy: 'Chicken',
    url: require('../image/pizza.png'),
  },
];

const accountSetting = [
  {
    id: 1,
    Type: 'My Account',
    arrow: true,
  },

  {
    id: 3,
    Type: 'Face ID / Touch ID',
  },
  {
    id: 4,
    Type: 'Two Factor Authentication',
    arrow: true,
  },
  {
    id: 5,
    Type: 'Wish List',
    arrow: true,
  },
  {
    id: 6,
    Type: 'Log out',
    arrow: true,
  },
];
const helpSetting = [
  {
    id: 1,
    Type: 'Help & support',
    arrow: true,
  },
  {
    id: 2,
    Type: 'About App',
  },
];

const categoryApi = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const randomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php';
const recommendMeal =
  'https://www.themealdb.com/api/json/v1/1/randomselection.php';
const filterByCategory =
  'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const filterByMeal = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

const notificationType = [
  {type: 'All', key: 1},
  {type: 'Read', key: 2},
  {type: 'Unread', key: 3},
];

function getEmailInitials(email) {
  const words = email.split('@')[0].split('.');
  const initials = words.map(word => word.charAt(0).toUpperCase());
  return initials.join('');
}

export {
  mealType,
  accountSetting,
  helpSetting,
  categoryApi,
  randomMeal,
  recommendMeal,
  filterByCategory,
  filterByMeal,
  notificationType,
  getEmailInitials,
};
