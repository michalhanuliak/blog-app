import React, { useEffect, useState } from 'react';
import { createSelector, Dispatch } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { makeSelectSelectedUserPosts } from '../../pages/user/selectors';
import Loader from '../../components/loader';
import ErrorMessage from '../../components/errorMessage';

import PostPreviewCard from '../../components/postPreviewCard';
import * as ROUTES from '../../../constants/routes';
import { IPost } from '../../../interfaces/IPost';
import { setSelectedUserPosts } from '../../pages/user/slice';
import { UserPostsContainer, SmallPostLink, UserPostsTitle } from './userPosts';

const actionDispatch = (dispatch: Dispatch) => ({
  setSelectedUserPosts:
  (posts: IPost) => dispatch(setSelectedUserPosts(posts)),
});

const stateSelector = createSelector(makeSelectSelectedUserPosts, (userPosts) => ({userPosts}));

const UserPosts = () => {
  const { userId }: any = useParams();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const { userPosts } = useSelector(stateSelector);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { setSelectedUserPosts } = actionDispatch(useDispatch());

  const fetchUserPosts = async () => {
    setLoading(true);
    const userData = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userPostsJSON = await userData.json().catch(() => {
      setError(true);
    });
    if (userPostsJSON) setSelectedUserPosts(userPostsJSON);
    setLoading(false);
  };

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const isEmptyPosts = !userPosts || userPosts.length === 0;

  const postCards = !isEmptyPosts && userPosts.map((post: IPost) => (
    <SmallPostLink key={post.id} to={`${ROUTES.POST}/${post.id}`}>
      <PostPreviewCard
        title={post.title}
        desc={post.body}
      />
    </SmallPostLink>
  ));
  return (
    <>
      <UserPostsTitle>
        User posts
      </UserPostsTitle>
      <UserPostsContainer>
        {isError && !isLoading && (
        <ErrorMessage>
          Failed to fetch user posts. Please try reload website or try again later.
        </ErrorMessage>
        )}
        {isEmptyPosts && !isLoading && <p> User has no posts </p>}
        {isLoading ? <Loader /> : postCards }
      </UserPostsContainer>
    </>
  );
};

export default UserPosts;
