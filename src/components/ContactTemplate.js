import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  grid-template-areas:
    "image title"
    "image content";
`;

const Title = styled.h1`
  grid-area: title;
`;

const ImageWrapper = styled.div`
  grid-area: image;
  height: 400px;
  display: grid;
  grid-area: image;

  @media (min-width: 650px) {
    border: 10px solid #f5f5f5;
    height: 100%;
  }
`;

const Content = styled.div`
  grid-area: content;
`;

const ContactTemplate = ({content, title, image}) => {
  const { alt = '', childImageSharp } = image;

  return (
    <Wrapper>
      <Title>{title}</Title>
      {!!childImageSharp && <ImageWrapper><Img fluid={childImageSharp.fluid} alt={alt} /></ImageWrapper>}
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </Wrapper>
  );
};

export default ContactTemplate;