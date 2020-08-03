import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import LandingTemplate from '../components/LandingTemplate'

const LandingPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout>
      <LandingTemplate
        title={frontmatter.title}
        body={html}
        images={frontmatter.images}
      />
    </Layout>
  )
}

LandingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string,
    }),
  }),
}

export default LandingPage

export const pageQuery = graphql`
  query LandingPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {
      html
      frontmatter {
        title
        images {
        image {
          relativePath
          childImageSharp {
            fluid(maxWidth: 920, quality: 100) { #, duotone: { highlight: "#f00e2e", shadow: "#192550" }
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      }
    }
  }
`
