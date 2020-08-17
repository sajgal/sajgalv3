import React, { useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Modal from './Modal';

const KEY_ESC = 27;
const KEY_LEFT_ARROW = 37;
const KEY_RIGHT_ARROW = 39;

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
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const onModalKeyDown = (event) => {
    if(event.keyCode === KEY_ESC) {
      setIsVisible(false);
    }

    if(event.keyCode === KEY_LEFT_ARROW) {
      setActiveImageFromRange(activeImageIndex-1);
    }

    if(event.keyCode === KEY_RIGHT_ARROW) {
      setActiveImageFromRange(activeImageIndex+1);
    }
  }

  const onImageClick = (imageIndex) => {
    setActiveImageIndex(imageIndex);
    setIsVisible(!isVisible);
  }

  const thumbnails = images.map(({image: {alt = '', childImageSharp}}, index) => {
    return childImageSharp && <ImageWrapper
      key={index}
      onClick={() => onImageClick(index)}
    >
        <Img
          fluid={childImageSharp.fluid}
          alt={alt}
        />
      </ImageWrapper>;
  })

  const setActiveImageFromRange = (index) => {
    const max = images.length;
    const imageIndex = (index%max + max)%max;

    setActiveImageIndex(imageIndex);
  }

  return (
    <React.Fragment>
      <Imagrid>
        {!!thumbnails && thumbnails}
      </Imagrid>
      <Modal
        isVisible={isVisible}
        activeImage={images[activeImageIndex]}
        onKeyDown={onModalKeyDown}
        onCloseButtonClick={() => setIsVisible(false)}
        setActiveImage={setActiveImageFromRange}
        activeImageIndex={activeImageIndex}
      />
    </React.Fragment>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      childImageSharp: PropTypes.object,
      relativePath: PropTypes.string,
    })
  ),
}

export default Gallery;