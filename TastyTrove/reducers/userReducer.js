import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {},
  userAdd: [],
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
  },
});

export const {setUserInfo, getUserInfo} = userSlice.actions;

export default userSlice.reducer;
