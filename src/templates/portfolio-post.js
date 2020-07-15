import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { PortfolioPostTemplate } from '../components/PortfolioPostTemplate';


const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet titleTemplate="%s | Portfolio">
        <title>{`${post.frontmatter.title}`}</title>
      </Helmet>
      <PortfolioPostTemplate
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        photos={post.frontmatter.photos}
      />
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
      html
      frontmatter {
        date(formatString: "MM.DD.YYYY")
        title
        photos
      }
    }
  }
`
