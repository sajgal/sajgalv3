import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 4px 10px;
`;

const StyledLink = styled(Link)`
  background: #f5f5f5;
  text-decoration: none;
  padding: 5px 10px;
`;

const Navbar = class extends React.Component {
  render() {
    return (
      <Navigation
        role="navigation"
        aria-label="main-navigation"
      >
        <StyledLink className="navbar-item" to="/landing">
          Home
        </StyledLink>
        <StyledLink className="navbar-item" to="/portfolio">
          Curiculum Vitae
        </StyledLink>
        <StyledLink className="navbar-item" to="/portfolio">
          Photos
        </StyledLink>
        <StyledLink className="navbar-item" to="/portfolio">
          Pet Projects
        </StyledLink>
      </Navigation>
    )
  }
}

export default Navbar
