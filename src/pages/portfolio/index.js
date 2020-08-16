import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import get from 'lodash/get';
import { navigate } from '@reach/router';
import styled from 'styled-components';

import Layout from '../../components/Layout'
import PortfolioSidebar from '../../components/PortfolioSidebar';

const Content = styled.section`
  place-items: center;
  display: grid;
  height: 100%;
  font-size: 2em;
`;

const PortfolioIndexPage = () => {
  const menuItems = useStaticQuery(graphql`
    {
      allMarkdownRemark(limit: 1, sort: {order: ASC, fields: [frontmatter___menu_order]}, filter: {frontmatter: {templateKey: {eq: "portfolio-post"}, menu_order: {gt: 0}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const firstMenuItemSlug = get(menuItems, 'allMarkdownRemark.edges.0.node.fields.slug');

  if(firstMenuItemSlug) {
    navigate(firstMenuItemSlug);
  }

  return (
    <Layout>
      <Content>
        <PortfolioSidebar />
      </Content>
    </Layout>
  )
}

export default PortfolioIndexPage;
