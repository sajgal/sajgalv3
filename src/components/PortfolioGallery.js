import React from 'react';
import styled from 'styled-components';

import Gallery from './gallery/Gallery';

const Title = styled.h1`
  text-align: center;
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