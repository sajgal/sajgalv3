import React from 'react';

const URL_IMG_CLOUDINARY = 'https://res.cloudinary.com/dqjl6uv1s/image/upload/t_sajgal-thumb/';

const Images = ({photos}) => {
  const getPhotoUrl = (photo) => {
    // Parse "/img/DSCF5440_pmed7f.jpg" to separate parts
    const parsedPhoto = photo.split('/');

    // If the type is image return image URI
    if(parsedPhoto[1] === 'img') {
      return `${URL_IMG_CLOUDINARY}${parsedPhoto[2]}`;
    }

    // Unknown format
    console.warn(`Unknown image format for: ${photo}`);
    return null;
  }

  if(!photos) {
    return null;
  }

  const getImageTag = (photo) => {
    return <img alt="" src={getPhotoUrl(photo)} />;
  }

  // If there is only one photo it's not string
  if(typeof photos === 'string') {
    return getImageTag(photos);
  }

  return photos.map(getImageTag);
};

export default Images;