import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';

const Content = styled.section`
  place-items: center;
  display: grid;
  height: 100%;
  font-size: 2em;
`;

const Imagrid = styled.section`
  display: grid;
  gap: 10px;
  grid-auto-rows: 150px;
  width: 100%;

  @media (min-width: 320px) {
    /* grid-template-columns: repeat(3, minmax(90px, 1fr));
    grid-auto-rows: 130px; */
  }

  @media (min-width: 425px) {
    /* grid-template-columns: repeat(3, minmax(120px, 1fr));
    grid-auto-rows: 190px; */
  }

  @media (min-width: 650px) {
    grid-auto-rows: 200px;
    width: 640px;
  }

  @media (min-width: 768px) {
    /* grid-template-columns: repeat(3, minmax(150px, 1fr));
    grid-auto-rows: 250px; */
  }
`;

const ImageWrapper = styled(Link)`
  border: 0;
  background: none;
  cursor: pointer;
  padding: 0;
  /* height: 200px; */
  font-family: 'Roboto Slab',serif;
  display: grid;
  border: 10px solid #f5f5f5;
  text-decoration: none;
  text-shadow: none;
  font-size: 1.1rem;
  color: #f5f5f5;

  * { /* all children stacked on top of each other */
    grid-area: 1 / 1 / -1 / -1;
  }

  &:hover, &:focus, &:active {
    color: #1d3557;

    * {
      background-color: #f5f5f5;
    }
  }
`;

const ThumbnailTitle = styled.h2`
  z-index: 1;
  align-self: end;
  justify-self: end;
  margin-right: 10px;
  background-color: #1d3557;
  padding: 0 6px;
`;

const PortfolioIndexPage = () => {
  const {allMarkdownRemark: {edges: portfolioPosts}} = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___menu_order]}, filter: {frontmatter: {templateKey: {eq: "portfolio-post"}, menu_order: {gt: 0}}}) {
        edges {
          node {
            fields {
              slug
            }
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
      }
    }
  `);


  const thumbnails = !!portfolioPosts && portfolioPosts.map(({node: {fields: {slug}, frontmatter: {title, images}}}, index) => {
    const {image: {alt = '', childImageSharp}} = images[0];

    return childImageSharp && <ImageWrapper
      key={index}
      to={slug}
    >
        <ThumbnailTitle>{title}.</ThumbnailTitle>
        <Img
          fluid={childImageSharp.fluid}
          alt={alt}
          style={{height: '100%'}}
        />
      </ImageWrapper>;
  });

  return (
    <Layout title="Portfolio">
      <Content>
        <Imagrid>
          {!!thumbnails && thumbnails}
        </Imagrid>
      </Content>
    </Layout>
  )
}

export default PortfolioIndexPage;
