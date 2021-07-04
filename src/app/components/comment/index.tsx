import React from 'react';
import {
  CommentAuthor,
  CommentContainer,
  CommentText,
  CommentTitle,
} from './comment';

const Comment = ({ ...props }) => (
  <CommentContainer>
    <CommentAuthor>
      {props.author}
    </CommentAuthor>
    <CommentTitle>
      {props.title}
    </CommentTitle>
    <CommentText>
      {props.text}
    </CommentText>
  </CommentContainer>
);

export default Comment;
