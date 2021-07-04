import styled from '@emotion/styled';
import tw from 'twin.macro';

export const CommentContainer = styled.div`
  ${tw`
    w-full
    p-5
  `};
  &:nth-of-type(odd) {
    ${tw`
      bg-gray-100
    `};
  }
`;

export const CommentTitle = styled.h3`
  ${tw`
    mb-1
    text-xl
    font-bold
  `};
`;
export const CommentAuthor = styled.p`
  ${tw`
    text-xs
    text-gray-400
  `};
`;
export const CommentText = styled.p`
  ${tw`
    text-sm
  `};
`;
