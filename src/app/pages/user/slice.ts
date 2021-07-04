import { createSlice } from '@reduxjs/toolkit';
import { ISelectedUserState } from '../../../interfaces/ISelectedUserState';

const initialState: ISelectedUserState = {
  userInfo: {
    id: -1,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  },
  userPosts: [],
};

export const selectedUserSlice = createSlice({
  name: 'userDetail',
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.userInfo = action.payload;
    },
    setSelectedUserPosts: (state, action) => {
      state.userPosts = action.payload;
    },
  },
});

export const {
  setSelectedUser,
  setSelectedUserPosts,
} = selectedUserSlice.actions;
export default selectedUserSlice.reducer;
