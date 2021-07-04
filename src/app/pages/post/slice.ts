import { createSlice } from '@reduxjs/toolkit';
import { ISelectedPostState } from '../../../interfaces/ISelectedPostState';

const initialState: ISelectedPostState = {
  postData: {
    id: -1,
    title: '',
    body: '',
  },
  author: {
    id: -1,
    name: '',
  },
  comments: [],
};

export const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState,
  reducers: {
    setSelectedPost: (state, action) => {
      state.postData = action.payload;
    },
    setSelectedPostAuthor: (state, action) => {
      state.author = action.payload;
    },
    setSelectedPostComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const {
  setSelectedPost,
  setSelectedPostAuthor,
  setSelectedPostComments,
} = selectedPostSlice.actions;
export default selectedPostSlice.reducer;
