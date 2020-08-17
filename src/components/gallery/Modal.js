import React, {useEffect, createRef} from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import invoke from 'lodash/invoke';

const Wrapper = styled.div`
  backdrop-filter: blur(10px);
  display: grid;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  gap: 10px;
  grid-template-areas:
    "prev image next";
  grid-template-columns: auto 60vw auto;
  visibility: ${({isVisible}) => isVisible ? 'visible' : 'hidden'};
  outline: 0;
  background-color: rgba(255, 255, 255, 0.85);
`;

const ImageWrapper = styled(Img)`
  grid-area: image;
  align-self: center;
  height: 90vh;
`;

const PrevWrapper = styled.div`
  grid-area: prev;
`;

const BigButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  font-size: 2em;

  &:hover, &:focus {
    outline: none;
    text-shadow: 0 0 3px violet;
  }

  &:active {
    outline: none;
    text-shadow: 0 0 3px red;
  }
`;

const NextWrapper = styled.div`
  grid-area: next;
`;

const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 5px 15px;
  font-size: 2em;
  background: none;
  border: none;

  &:active, &:focus, &:hover {
    outline: none;
    color: #edf2f4;
    background: #1d3557;
  }
`;

const Modal = ({
  activeImage,
  activeImageIndex,
  isVisible,
  onCloseButtonClick,
  onKeyDown,
  setActiveImage,
}) => {
  const modalRef = createRef();
  const {alt = '', childImageSharp} = activeImage?.image || {};
  const stopPropagationAndSetActive = (event, imageIndex) => {
    event.stopPropagation();
    setActiveImage(imageIndex);
  };

  useEffect(() => {
    if(isVisible && modalRef.current) {
      invoke(modalRef.current, 'focus');
    }
  }, [isVisible, modalRef]);

  return (
    <Wrapper tabIndex="0" ref={modalRef} isVisible={isVisible} onKeyDown={onKeyDown} onClick={onCloseButtonClick}>
      <Close onClick={onCloseButtonClick}>&times;</Close>
      <PrevWrapper>
        <BigButton onClick={(event) => stopPropagationAndSetActive(event, activeImageIndex-1)}>&laquo;</BigButton>
      </PrevWrapper>
      {childImageSharp && <ImageWrapper
        fluid={childImageSharp.fluid}
        alt={alt}
        imgStyle={{width: "60vw", objectFit: "contain"}}
      />}
      <NextWrapper>
        <BigButton onClick={(event) => stopPropagationAndSetActive(event, activeImageIndex+1)}>&raquo;</BigButton>
      </NextWrapper>
    </Wrapper>
  );
};

Modal.propTypes = {
  activeImage: PropTypes.object,
  activeImageIndex: PropTypes.number,
  isVisible: PropTypes.bool,
  onCloseButtonClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  setActiveImage: PropTypes.func,
};

export default Modal;