import React, { useEffect, useState } from 'react';
import { createSelector, Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { IPost } from '../../../interfaces/IPost';
import * as ROUTES from '../../../constants/routes';
import PostPreviewCard from '../../components/postPreviewCard';
import makeSelectAllPosts from '../../pages/home/selectors';
import { setAllPosts } from '../../pages/home/slice';
import {
  PostGridContainer,
  EmptyPosts,
  PostLink,
} from './postGrid';
import Loader from '../../components/loader';
import ErrorMessage from '../../components/errorMessage';

const actionDispatch = (dispatch: Dispatch) => ({
  setAllPosts:
  (posts: IPost) => dispatch(setAllPosts(posts)),
});

const stateSelector = createSelector(makeSelectAllPosts, (allPosts) => ({
  allPosts,
}));

const PostGrid = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const { allPosts } = useSelector(stateSelector);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { setAllPosts } = actionDispatch(useDispatch());

  const fetchPostData = async () => {
    setLoading(true);
    const postData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postData.json().catch(() => {
      setError(true);
    });
    if (posts) setAllPosts(posts);
    setLoading(false);
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  const isEmptyPosts = !allPosts || allPosts.length === 0;

  const postCards = !isEmptyPosts && allPosts.map((post: IPost) => (
    <PostLink key={post.id} to={`${ROUTES.POST}/${post.id}`}>
      <PostPreviewCard
        title={post.title}
        desc={post.body}
      />
    </PostLink>
  ));

  return (
    <PostGridContainer>
      {isLoading && <Loader />}
      {isError && !isLoading && (
      <ErrorMessage>
        Failed to fetch posts. Try reload website or try again later.
      </ErrorMessage>
      )}
      {isEmptyPosts && !isLoading && <EmptyPosts> No posts were found </EmptyPosts>}
      {!isEmptyPosts && !isLoading && postCards}
    </PostGridContainer>
  );
};

export default PostGrid;
