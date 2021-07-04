import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import SCREENS from '../../../constants/responsive';

export const PostGridContainer = styled.section`
  ${tw`
    items-center
    justify-center
    sm:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-4
    grid
    m-auto
    mt-12
    w-full
    max-w-7xl
    md:p-10
  `};
`;

export const PostLink = styled(Link)`
  ${tw`
    h-full
    transition-all
    duration-200
  `};
  &:hover {
    ${tw`shadow-xl`};
    transform: scale(1.02);
    button {
      ${tw`
        bg-transparent
        text-red-500
        border-red-500
      `};
    }
  }
  @media (min-width: ${SCREENS.lg}) {
    &:first-of-type {
      grid-column-start: 1;
      grid-column-end: 4;
    }
    &:first-of-type {
      div{
        ${tw`
          justify-center
          flex
          h-full
        `};
      }
      img {
        ${tw`w-full`};
      }
      button {
        ${tw`m-0`};
      }
    }
  }
`;

export const EmptyPosts = styled.h2`
  ${tw`
    col-start-1
    col-end-4
    text-2xl
    text-center
    text-gray-600
  `};
`;
