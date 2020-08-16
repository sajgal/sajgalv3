import React, { useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Modal from './Modal';

const KEY_ESC = 27;

const Imagrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
`;

const ImageWrapper = styled.button`
  border: 0;
  background: none;
  padding: 0;
  width: 100%;
`;

const Gallery = ({images}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const onModalKeyDown = (event) => {
    if(event.keyCode === KEY_ESC) {
      setIsVisible(false);
    }
  }

  const onImageClick = (imageObject) => {
    setActiveImage(imageObject);
    setIsVisible(!isVisible);
  }

  const thumbnails = images.map(({image: {alt = '', childImageSharp}}, index) => {
    return childImageSharp && <ImageWrapper
      key={index}
      onClick={() => onImageClick({alt, childImageSharp})}
    >
        <Img
          fluid={childImageSharp.fluid}
          alt={alt}
        />
      </ImageWrapper>;
  })

  return (
    <React.Fragment>
      <Imagrid>
        {!!thumbnails && thumbnails}
      </Imagrid>
      <Modal isVisible={isVisible} activeImage={activeImage} onKeyDown={onModalKeyDown} />
    </React.Fragment>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      relativePath: PropTypes.string,
      childImageSharp: PropTypes.object,
    })
  ),
}

export default Gallery;