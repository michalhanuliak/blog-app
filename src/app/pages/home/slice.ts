import { createSlice } from '@reduxjs/toolkit';
import { IPostsState } from '../../../interfaces/IPostsState';

const initialState: IPostsState = {
  allPosts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setAllPosts: (state, action) => {
      state.allPosts = action.payload;
    },
  },
});

export const {
  setAllPosts,
} = postsSlice.actions;
export default postsSlice.reducer;
