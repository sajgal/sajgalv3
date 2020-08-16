import React, {useEffect, createRef} from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  backdrop-filter: blur(10px);
  display: grid;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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

const Prev = styled.div`
  grid-area: prev;
`;

const Next = styled.div`
  grid-area: next;
`;

const Modal = ({isVisible, onKeyDown, activeImage}) => {
  const modalRef = createRef();

  useEffect(() => {
    if(isVisible && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isVisible, modalRef]);

  return (
    <Wrapper tabIndex="0" ref={modalRef} isVisible={isVisible} onKeyDown={onKeyDown}>
      {/* <div>Close</div> */}
      <Prev>Prev</Prev>
      {activeImage?.childImageSharp && <ImageWrapper
        fluid={activeImage.childImageSharp.fluid}
        alt={activeImage.alt}
        imgStyle={{width: "60vw", objectFit: "contain"}}
      />}
      <Next>Next</Next>
    </Wrapper>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool,
};

export default Modal;