import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  WishListRecipe: [],
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setRecipeInfo: (state, action) => {
      state.WishListRecipe = action.payload;
    },
  },
});

export const {setRecipeInfo} = recipeSlice.actions;

export default recipeSlice.reducer;
