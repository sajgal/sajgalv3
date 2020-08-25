import React from 'react';
import styled from 'styled-components';

import Gallery from './gallery/Gallery';

const Title = styled.h1`
  margin: 0;
  line-height: 50px;
  padding-left: 10px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const PortfolioGallery = ({post}) => {
  const {frontmatter: {images, title}} = post;

  return (
    <div>
      {!!title && <Title>{title}</Title>}
      <Gallery images={images} />
    </div>
  );
};

export default PortfolioGallery;