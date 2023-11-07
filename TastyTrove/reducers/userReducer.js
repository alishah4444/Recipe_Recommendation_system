import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {},
  userAdd: [],
  boimetric: {
    id: 0, //face id
    isvisible: false,
  },
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
    getUserInfo: (state, action) => {
      return state.user;
    },
    deleteUserInfo: (state, action) => {
      state.user = {};
    },
  },
});

export const {setUserInfo, getUserInfo, deleteUserInfo} = userSlice.actions;

export default userSlice.reducer;
