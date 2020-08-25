import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';

const Wrapper = styled.nav`
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-left: 10px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-flow: column;
    align-items: flex-end;
    padding-right: 20px;
    padding-right: 20px;
  }
`;

const PortfolioLink = styled(Link)`
  background: #f5f5f5;
  text-decoration: none;
  padding: 5px 10px;

  &.active {
    border-right: 4px solid #884C87;
  }
`;

const PortfolioSidebar = () => {
  const menuItems = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___menu_order]}, filter: {frontmatter: {templateKey: {eq: "portfolio-post"}, menu_order: {gt: 0}}}) {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const posts = menuItems.allMarkdownRemark.edges;

  return (
    <Wrapper>
      {posts && posts.map(({ node: post }) => (
        <PortfolioLink
          key={post.id}
          to={post.fields.slug}
          activeClassName="active"
        >
          {post.frontmatter.title}
        </PortfolioLink>
      ))}
    </Wrapper>
  )
};

PortfolioSidebar.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default PortfolioSidebar;
