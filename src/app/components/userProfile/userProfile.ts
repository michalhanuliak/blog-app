import styled from '@emotion/styled';
import tw from 'twin.macro';

export const UserProfileContainer = styled.section`
  ${tw`
    items-center
    justify-center
    flex-col
    flex
    w-full
    h-full
    p-8
    bg-gray-100
  `};
`;

export const UserProfilePic = styled.div`
  ${tw`
    w-36
    mb-6
  `};
  img {
    ${tw`
    rounded-full
    w-full
    h-full
    object-cover
  `};
  }
`;

export const UserFullName = styled.div`
  ${tw`
    mb-3
    text-3xl
    font-bold
  `};
`;

export const UserNickName = styled.div`
  ${tw`
    text-2xl
    text-gray-400
  `};
`;
