import styled from '@emotion/styled';
import tw from 'twin.macro';

export const InfoCardContainer = styled.div`
  ${tw`
    flex-grow
    mt-2
    w-full
    md:w-1/2
    p-5
    bg-gray-100
  `};
  gap:1rem;
`;

export const InfoCardItemContainer = styled.ul`
  ${tw`
    flex-col
    flex
    w-full
  `};
  & ul {
    ${tw`
      mt-2
      ml-5
      w-full
    `};
  }
`;

export const InfoCardTitle = styled.h2`
  ${tw`
    mb-5
    w-full
    text-xl
    font-bold
    text-red-500
  `};
`;

export const InfoCardItem = styled.li`
  ${tw`
    mb-2
    w-full
  `};
`;

export const InfoCardSmallText = styled.p`
  ${tw`
    w-full
    text-sm
    text-gray-500
  `};
`;

export const InfoCardText = styled.p`
  ${tw`
    w-full
    text-lg
  `};
`;
