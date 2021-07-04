import { createSelector } from '@reduxjs/toolkit';
import { IRootAppState } from '../../../interfaces/IRootAppState';

const selectSelectedPost = (state: IRootAppState) => state.selectedPost;
export const makeSelectSelectedPost = createSelector(selectSelectedPost,
  (selectedPost) => selectedPost.postData);

const selectSelectedPostAuthor = (state: IRootAppState) => state.selectedPost;
export const makeSelectSelectedPostAuthor = createSelector(selectSelectedPostAuthor,
  (selectedPost) => selectedPost.author);

const selectSelectedPostComments = (state: IRootAppState) => state.selectedPost;
export const makeSelectSelectedPostComments = createSelector(selectSelectedPostComments,
  (selectedPost) => selectedPost.comments);
