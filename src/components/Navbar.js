import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Navigation = styled.nav`
  background: coral;
`;

const Navbar = class extends React.Component {
  render() {
    return (
      <Navigation
        role="navigation"
        aria-label="main-navigation"
      >
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
