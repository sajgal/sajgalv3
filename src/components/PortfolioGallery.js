import React from 'react';

import Gallery from './gallery/Gallery';

const PortfolioGallery = ({post}) => {
  const {frontmatter: {images, title}} = post;

  return (
    <div>
      {!!title && <h1>{title}</h1>}
      <Gallery images={images} />
    </div>
  );
};

export default PortfolioGallery;