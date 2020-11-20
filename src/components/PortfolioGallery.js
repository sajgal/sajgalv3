import React from 'react';
import styled from 'styled-components';

import Gallery from './gallery/Gallery';

const CLOUDINARY_CDN = 'https://res.cloudinary.com/';

const Title = styled.h1`
  margin: 0;
  line-height: 50px;
  padding-left: 10px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const PortfolioGallery = ({post}) => {
  const {frontmatter: {photos, title, cloudinary_folder}} = post;

  const photoUrls = photos.map(({photo}) => {
    const fileName = photo.replace(/\/img/g, '');
    return {
      thumb: `${CLOUDINARY_CDN}${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/t_sajgal-thumb/${cloudinary_folder}/${fileName}`,
      full: `${CLOUDINARY_CDN}${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/t_sajgal-full/${cloudinary_folder}/${fileName}`,
    };
  });

  return (
    <div>
      {!!title && <Title>{title}</Title>}
      <Gallery images={photoUrls} />
    </div>
  );
};

export default PortfolioGallery;