import React from 'react';
import { NavbarContainer, NavbarLink } from './navbar';
import * as ROUTES from '../../../constants/routes';

const Navbar = () => (
  <NavbarContainer>
    <NavbarLink to={`${ROUTES.HOME}`}> All posts </NavbarLink>
  </NavbarContainer>
);

export default Navbar;
