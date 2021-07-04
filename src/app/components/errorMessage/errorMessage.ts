import styled from '@emotion/styled';
import tw from 'twin.macro';

const ErrorMessageContainer = styled.p`
  ${tw`
    z-10
    fixed
    bottom-5
    right-5
    shadow-md
    p-2
    bg-red-500
    text-white
  `};
`;

export default ErrorMessageContainer;
