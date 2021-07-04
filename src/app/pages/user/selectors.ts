import { createSelector } from '@reduxjs/toolkit';
import { IRootAppState } from '../../../interfaces/IRootAppState';

const selectSelectedUser = (state: IRootAppState) => state.selectedUser;

const makeSelectSelectedUser = createSelector(selectSelectedUser,
  (selectedUser) => selectedUser.userInfo);

export default makeSelectSelectedUser;
