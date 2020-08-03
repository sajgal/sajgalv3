import React from 'react';
import sample from 'lodash/sample';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  /* display: flex;
  place-items: center;
  border: 1px solid hotpink; */
`;

const ImageWrapper = styled.div`
  width: 200px;
`;

const LandingTemplate = ({body, images, title}) => {
  const { alt = '', childImageSharp } = sample(images)?.image;

  return (
    <Container>
      { !!childImageSharp && <ImageWrapper><Img fluid={childImageSharp.fluid} alt={alt} /></ImageWrapper>}
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Container>
  );
};

export default LandingTemplate;