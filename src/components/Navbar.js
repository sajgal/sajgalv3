import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../img/m-logo.png';

const Navigation = styled.nav`
  background: coral;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LogoImg = styled.img`
  height: 50px;
`;

const Navbar = class extends React.Component {
  render() {
    return (
      <Navigation
        role="navigation"
        aria-label="main-navigation"
      >
        <LogoImg src={logo} ald="Matej Sajgal" />
        <Link className="navbar-item" to="/landing">
          Home
        </Link>
        <Link className="navbar-item" to="/portfolio">
          Portfolio
        </Link>
      </Navigation>
    )
  }
}

export default Navbar
