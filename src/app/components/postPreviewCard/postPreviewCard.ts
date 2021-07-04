import styled from '@emotion/styled';
import tw from 'twin.macro';

export const CardContainer = styled.div`
  ${tw`
    md:items-center
    md:justify-start
    mb-3
    rounded-lg
    w-full
    h-full
    bg-gray-50
  `};
`;

export const CardPreview = styled.div`
  ${tw`
    overflow-hidden
    mb-3
    md:mb-0
    w-full
    md:h-1/2
  `};
  img {
    ${tw`
      object-cover
      w-full
      h-full
      md:w-auto
  `};
  }
`;

export const CardInfo = styled.div`
  ${tw`
    flex-col
    flex
    w-full
    h-full
    md:h-1/2
    p-5
  `};
  button {
    ${tw`
      m-0
      mt-5
      md:mt-auto
      md:w-max
    `};
  }
`;
export const CardTitle = styled.h2`
  ${tw`
    mb-2
    text-2xl
    font-bold
    text-gray-800
  `};
`;

export const CardDesc = styled.p`
  ${tw`
    md:mb-4
    text-base
    font-medium
    text-gray-500
  `};
`;
