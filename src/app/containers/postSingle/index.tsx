import React, { useEffect, useState } from 'react';
import { createSelector, Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { ISelectedPostState } from '../../../interfaces/ISelectedPostState';
import PostDetail from '../../components/postDetail';
import { setSelectedPost, setSelectedPostAuthor } from '../../pages/post/slice';
import { makeSelectSelectedPost, makeSelectSelectedPostAuthor } from '../../pages/post/selectors';
import Loader from '../../components/loader';
import ErrorMessage from '../../components/errorMessage';
import PostSingleContainer from './postSingle';

const actionDispatch = (dispatch: Dispatch) => ({
  setSelectedPost:
  (postData: ISelectedPostState) => dispatch(setSelectedPost(postData)),
  setSelectedPostAuthor:
  (author: {id:number, name: string}) => dispatch(setSelectedPostAuthor(author)),
});

// eslint-disable-next-line max-len
const stateSelectorPost = createSelector(makeSelectSelectedPost, (postData) => (postData));
const stateSelectorPostAuthor = createSelector(makeSelectSelectedPostAuthor, (author) => (author));

const PostSingle = () => {
  const { postId }: any = useParams();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const { title, body } = useSelector(stateSelectorPost);
  const author = useSelector(stateSelectorPostAuthor);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { setSelectedPost, setSelectedPostAuthor } = actionDispatch(useDispatch());

  const fetchSingleData = async () => {
    setLoading(true);
    const selectedPostData = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const selectedPost = await selectedPostData.json().catch(() => {
      setError(true);
    });

    const singleAuthor = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedPost.userId}`);
    const singleAuthorInfo = await singleAuthor.json().catch(() => {
      setError(true);
    });
    const authorInfo = {
      id: selectedPost.userId,
      name: singleAuthorInfo.name,
    };

    if (selectedPost) setSelectedPost(selectedPost);
    if (authorInfo) setSelectedPostAuthor(authorInfo);
    setLoading(false);
  };

  useEffect(() => {
    fetchSingleData();
  }, []);

  return (
    <PostSingleContainer>
      {isError && !isLoading && (
      <ErrorMessage>
        Failed to fetch post. Please try reload website or try again later.
      </ErrorMessage>
      )}
      {isLoading
        ? <Loader />
        : <PostDetail title={title} body={body} author={author} /> }
    </PostSingleContainer>
  );
};

export default PostSingle;
