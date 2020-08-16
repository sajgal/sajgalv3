import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import PortfolioSidebar from '../components/PortfolioSidebar';
import PortfolioGallery from '../components/PortfolioGallery';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 300px 1fr;
  align-items: center;
  height: 100%;
  width: calc(100vw - (100vw - 100%));
`;

const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Helmet titleTemplate="%s | Portfolio">
        <title>{`${post.frontmatter.title}`}</title>
      </Helmet>

      <Wrapper>
        <PortfolioSidebar activeItemId={post.id} />
        <PortfolioGallery post={post} />
      </Wrapper>
    </Layout>
  )
}

PortfolioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PortfolioPost

export const pageQuery = graphql`
  query PortfolioPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        images {
          image {
            relativePath
            childImageSharp {
              fluid(maxWidth: 550, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
