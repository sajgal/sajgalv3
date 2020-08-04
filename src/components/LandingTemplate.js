import React from 'react';
import sample from 'lodash/sample';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  column-gap: 20px;
  row-gap: 10px;
  display: grid;
  grid-template-areas:
    "image title"
    "image description";
  grid-template-columns: 450px auto;
  margin: 50px auto 0;
  max-width: 960px;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  grid-area: image;
`;

const Title = styled.h1`
  grid-area: title;
  align-self: end;
  margin: 0;
  padding: 0;
`;

const Decription = styled.div`
  grid-area: description;
  align-self: start;

  p {
    margin: 0;
    padding: 0;
  }
`;

const LandingTemplate = ({body, images, title}) => {
  const { alt = '', childImageSharp } = sample(images)?.image;

  return (
    <Container>
      { !!childImageSharp && <ImageWrapper><Img fluid={childImageSharp.fluid} alt={alt} /></ImageWrapper>}
      <Title>{title}</Title>
      <Decription dangerouslySetInnerHTML={{ __html: body }} />
    </Container>
  );
};

export default LandingTemplate;