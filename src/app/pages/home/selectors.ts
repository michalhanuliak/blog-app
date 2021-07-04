import { createSelector } from '@reduxjs/toolkit';
import { IRootAppState } from '../../../interfaces/IRootAppState';

const selectPosts = (state: IRootAppState) => state.posts;

const makeSelectAllPosts = createSelector(selectPosts,
  (posts) => posts.allPosts);

export default makeSelectAllPosts;
