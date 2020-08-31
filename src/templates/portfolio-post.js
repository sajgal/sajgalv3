import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import PortfolioSidebar from '../components/PortfolioSidebar';
import PortfolioGallery from '../components/PortfolioGallery';

const Wrapper = styled.section`
  display: grid;
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 200px 1fr;
    padding-right: 10px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 300px 1fr;
    padding: 0;
  }
`;

const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout title={post.frontmatter.title}>
      <Wrapper>
        <PortfolioSidebar />
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
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
