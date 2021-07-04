import React from 'react';
import ellipsis from 'text-ellipsis';

import imagePreviewUrlDefault from '../../../assets/images/pickle.jpg';
import Button from '../button';
import {
  CardContainer,
  CardDesc,
  CardInfo,
  CardPreview,
  CardTitle,
} from './postPreviewCard';

const PostPreviewCard = ({ ...props }) => {
  const { imagePreviewUrl, title, desc } = props;
  return (
    <CardContainer>
      <CardPreview>
        <img src={imagePreviewUrl} alt="Card preview" />
      </CardPreview>
      <CardInfo>
        <CardTitle>
          {title}
        </CardTitle>
        <CardDesc>
          {ellipsis(desc, 80)}
        </CardDesc>
        <Button text="Read more" />
      </CardInfo>
    </CardContainer>
  );
};

PostPreviewCard.defaultProps = {
  imagePreviewUrl: imagePreviewUrlDefault,
};

export default PostPreviewCard;
