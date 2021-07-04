import { createSelector } from '@reduxjs/toolkit';
import { IRootAppState } from '../../../interfaces/IRootAppState';

const selectSelectedPost = (state: IRootAppState) => state.selectedPost;
export const makeSelectSelectedPost = createSelector(selectSelectedPost,
  (selectedPost) => selectedPost.postData);

export const makeSelectSelectedPostAuthor = createSelector(selectSelectedPost,
  (selectedPost) => selectedPost.author);

export const makeSelectSelectedPostComments = createSelector(selectSelectedPost,
  (selectedPost) => selectedPost.comments);
