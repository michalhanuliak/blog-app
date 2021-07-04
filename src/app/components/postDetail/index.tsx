import React from 'react';
import { Link } from 'react-router-dom';
import { IPostDetail } from '../../../interfaces/IPostDetail';
import imagePreviewUrlDefault from '../../../assets/images/pickle.jpg';
import * as ROUTES from '../../../constants/routes';

import {
  PostDetailContainer,
  PostImage,
  PostTitle,
  PostBody,
  PostAuthor,
} from './postDetail';

const PostDetail = (props: IPostDetail) => {
  const {
    imageUrl,
    title,
    body,
    author,
  } = props;

  return (
    <PostDetailContainer>
      <PostImage>
        <img src={imageUrl} alt="Post" />
      </PostImage>
      <Link to={`${ROUTES.USER}/${author.id}`}>
        <PostAuthor>
          {author.name}
        </PostAuthor>
      </Link>
      <PostTitle>
        {title}
      </PostTitle>
      <PostBody>
        {body}
      </PostBody>
    </PostDetailContainer>
  );
};

PostDetail.defaultProps = {
  imageUrl: imagePreviewUrlDefault,
};

export default PostDetail;
