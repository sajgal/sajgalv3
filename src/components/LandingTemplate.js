import React from 'react';
import sample from 'lodash/sample';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 50px;

  @media (min-width: 650px) {
    place-items: center;
    display: grid;
    margin: 0;
    width: 100%;
    height: 100%;
  }
`;

const ContentGrid = styled.div`
  column-gap: 20px;
  row-gap: 10px;
  display: grid;
  grid-template-areas:
    "image"
    "title"
    "description";
  max-width: 100%;
  width: 100%;
  grid-template-columns: 1fr;

  @media (min-width: 650px) {
    grid-template-areas:
      "image title"
      "image description";
    grid-template-columns: 400px auto;
    margin: auto 0;
    max-width: 960px;
    justify-content: center;
  }

  @media (min-width: 800px) {
    grid-template-columns: 550px auto;
  }
`;

const ImageWrapper = styled.div`
  grid-area: image;
  height: 400px;
  display: grid;

  @media (min-width: 650px) {
    border: 10px solid #f5f5f5;
    height: 100%;
  }
`;

const Title = styled.h1`
  font-family: 'Roboto Slab', serif;
  grid-area: title;
  align-self: end;
  margin: 0;
  padding: 10px;
  font-size: 3em;

  @media (min-width: 650px) {
    padding: 0;
  }
`;

const Decription = styled.div`
  grid-area: description;
  align-self: start;
  background: #f5f5f5;
  padding: 2px 5px;
  margin: 0 10px;

  p {
    margin: 0;
    padding: 0;
  }

  @media (min-width: 650px) {
    margin: 0;
  }
`;

const LandingTemplate = ({ body, images, title }) => {
  const { alt = '', childImageSharp } = sample(images)?.image;

  return (
    <Container>
      <ContentGrid>
        {!!childImageSharp && <ImageWrapper><Img fluid={childImageSharp.fluid} alt={alt} /></ImageWrapper>}
        <Title>{title}</Title>
        <Decription dangerouslySetInnerHTML={{ __html: body }} />
      </ContentGrid>
    </Container>
  );
};

export default LandingTemplate;