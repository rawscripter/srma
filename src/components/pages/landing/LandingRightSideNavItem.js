import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
} from 'react-bootstrap';
import ProfileDropdown from 'components/navbar/top/ProfileDropdown';
import { AuthProvider } from 'services/auth/auth.context';

const LandingRightSideNavItem = () => {
  const { isLoggedIn } = useContext(AuthProvider);
  return (
    <Nav navbar className="ms-auto">
      {isLoggedIn && <ProfileDropdown />}
      {!isLoggedIn && (
        <>
          <Nav.Link as={Link} to="/auth/login">
            Login
          </Nav.Link>
          <Nav.Item>
            <Nav.Link as={Link} to="/auth/register">
              Registrierung
            </Nav.Link>
          </Nav.Item>
        </>
      )}

    </Nav>
  );
};

export default LandingRightSideNavItem;
