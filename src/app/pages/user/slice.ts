import { createSlice } from '@reduxjs/toolkit';
import { ISelectedUserState } from '../../../interfaces/ISelectedUserState';

const initialState: ISelectedUserState = {
  userInfo: {
    name: '',
    username: '',
    email: '',
    address: {},
    phone: '',
    website: '',
    company: {},
    posts: [],
  },
};

export const selectedUserSlice = createSlice({
  name: 'userDetail',
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const {
  setSelectedUser,
} = selectedUserSlice.actions;
export default selectedUserSlice.reducer;
