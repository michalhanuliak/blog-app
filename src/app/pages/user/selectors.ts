import { createSelector } from '@reduxjs/toolkit';
import { IRootAppState } from '../../../interfaces/IRootAppState';

const selectSelectedUser = (state: IRootAppState) => state.selectedUser;

export const makeSelectSelectedUser = createSelector(selectSelectedUser,
  (selectedUser) => selectedUser.userInfo);

export const makeSelectSelectedUserPosts = createSelector(selectSelectedUser,
  (selectedUser) => selectedUser.userPosts);
