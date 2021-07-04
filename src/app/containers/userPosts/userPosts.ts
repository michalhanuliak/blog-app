import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

export const UserPostsContainer = styled.aside`
  ${tw`
     grid-cols-1
     md:grid-cols-2
     lg:grid-cols-3
     gap-2
     grid
     m-auto
     w-full
     md:max-w-screen-lg
     p-8
  `};
`;

export const SmallPostLink = styled(Link)`
  img {
    transition: 6s all;
  }
  &:hover {
    img {
      transform: scale(1.2);
    }
    button {
      ${tw`
        bg-transparent
        text-red-500
        border-red-500
      `};
    }
  }
`;

export const UserPostsTitle = styled.h2`
  ${tw`
    text-center
    text-2xl
  `};
`;
