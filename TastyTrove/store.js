import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import recipeReducer from './reducers/recipeReducer';

import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userReducer', 'recipeReducer'],
  blacklist: [''],
};

const rootReducers = combineReducers({userReducer, recipeReducer});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
