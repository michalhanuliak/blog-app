import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

export const NavbarContainer = styled('nav')`
  ${tw`
    fixed
    z-20
    top-0
    justify-start
    items-center
    flex
    shadow-sm
    w-full
    p-5
    text-center
    bg-white
  `};
`;

export const NavbarLink = styled(Link)`
  ${tw`
    transition-all
    hover:text-red-500
  `};
`;
