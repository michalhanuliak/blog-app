import React, { useEffect, useState } from 'react';
import { createSelector, Dispatch } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Comment from '../../components/comment';
import { makeSelectSelectedPostComments } from '../../pages/post/selectors';
import { setSelectedPostComments } from '../../pages/post/slice';
import Loader from '../../components/loader';
import {
  CommentsListContainer, CommentsTitle, EmptyComments,
} from './commentsList';
import ErrorMessage from '../../components/errorMessage';

const actionDispatch = (dispatch: Dispatch) => ({
  setSelectedPostComments:
  (comments: string) => dispatch(setSelectedPostComments(comments)),
});

const stateSelector = createSelector(makeSelectSelectedPostComments, (comments) => ({comments}));

const CommentsList = () => {
  const { postId }: any = useParams();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const { comments } = useSelector(stateSelector);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { setSelectedPostComments } = actionDispatch(useDispatch());

  const fetchSelectedPostComments = async () => {
    setLoading(true);
    const commentsData = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const selectedPostComments = await commentsData.json().catch(() => {
      setError(true);
    });
    if (selectedPostComments) setSelectedPostComments(selectedPostComments);
    setLoading(false);
  };

  useEffect(() => {
    fetchSelectedPostComments();
  }, []);

  const isEmptyComments = !comments || comments.length === 0;

  const commentsRender = !isEmptyComments && comments.map((comment: any) => (
    <Comment
      key={comment.id}
      author={comment.email}
      title={comment.name}
      text={comment.body}
    />
  ));

  return (
    <CommentsListContainer>
      {isError && !isLoading && (
      <ErrorMessage>
        Failed to fetch comments. Try reload website or try again later.
      </ErrorMessage>
      )}
      {isLoading ? <Loader /> : <CommentsTitle>{`Comments: ${comments.length}`}</CommentsTitle>}
      {isEmptyComments && !isLoading && <EmptyComments> No comments were found </EmptyComments>}
      {!isEmptyComments && !isLoading && commentsRender}
    </CommentsListContainer>
  );
};

export default CommentsList;
