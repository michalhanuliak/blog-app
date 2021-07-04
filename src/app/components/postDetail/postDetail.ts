import styled from '@emotion/styled';
import tw from 'twin.macro';

export const PostDetailContainer = styled.article`
  ${tw`
    items-start
    justify-center
    flex-col
    flex
    m-auto
    mt-20
    w-full
    md:w-1/2
    p-5
    md:p-0
  `};
`;

export const PostImage = styled.div`
  ${tw`
    mb-2
    w-full
  `};
  img {
    width: 100%;
    height: auto;
    max-height: 24rem;
    object-fit: cover;
  }
`;

export const PostTitle = styled.h1`
  ${tw`
    mb-2
     w-full
     max-w-2xl
    text-2xl
    uppercase
    font-black
  `};
`;

export const PostBody = styled.p`
  ${tw`
   w-full
   max-w-2xl
    text-base
    text-gray-500
  `};
`;

export const PostAuthor = styled.p`
  ${tw`
    self-start
    transition-all
    duration-200
    mb-1
    text-xl
    text-red-500
    underline
    hover:text-red-300
  `};
`;
