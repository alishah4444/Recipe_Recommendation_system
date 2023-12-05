import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  wishlistRecipes: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setRecipeInfo: (state, action) => {
      state.wishlistRecipes = [...state.wishlistRecipes, action.payload];
    },
    deleteWishListRecipe: (state, action) => {
      const indexToRemove = action.payload;
      state.wishlistRecipes.splice(indexToRemove, 1);
    },
  },
});

export const {setRecipeInfo, deleteWishListRecipe} = wishlistSlice.actions;

export default wishlistSlice.reducer;
