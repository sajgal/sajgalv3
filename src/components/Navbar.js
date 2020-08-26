import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Navigation = styled.nav`
  display: grid;
  gap: 15px;
  margin: 4px 10px;
  grid-auto-flow: column;
  justify-content: left;
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
        <StyledLink className="navbar-item" to="/">
          Home
        </StyledLink>
        <StyledLink className="navbar-item" to="/portfolio">
          Photos
        </StyledLink>
        {/* <StyledLink className="navbar-item" to="/projects">
          Pet Projects
        </StyledLink> */}
        <StyledLink className="navbar-item" to="/contact">
          Contact
        </StyledLink>
      </Navigation>
    )
  }
}

export default Navbar
