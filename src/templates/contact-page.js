import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
// import ContactTemplate from '../components/ContactTemplate';
import LandingTemplate from '../components/LandingTemplate';

const IndexPage = ({ data }) => {
  const { html, frontmatter: {title, image} } = data.markdownRemark;

  return (
    <Layout title="Contact">
      <LandingTemplate body={html} title={title} images={[{image}]} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 550, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
