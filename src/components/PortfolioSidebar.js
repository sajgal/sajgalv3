import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby'

const PortfolioSidebar = ({ activeItemId }) => {
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
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-6" key={post.id}>
            <article className={'blog-list-item tile is-child box notification'} >
              <header>
                <p className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                    activeStyle={{ color: "red" }}
                  >
                    {post.frontmatter.title}
                  </Link>
                </p>
              </header>
            </article>
          </div>
        ))}
    </div>
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
