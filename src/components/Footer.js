import React from 'react';
import styled from 'styled-components';
import sample from 'lodash/sample';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  margin: 5px 20px;
  padding-top: 70px;
  text-align: right;
`;

const AlmostTransparent = styled.div`
  color: rgba(29, 53, 87, 0.5);
`;

const TRUTHS = [
  "Discipline equals freedom",
  "Idle hands build nothing that you can call your own",
  "It's better to burn out than it is to rust",
  "He who has a sword and knows how to use it, but keeps it sheathed shall inherit the earth",
  "Fun is finite resource",
  "If you don't make stuff, there is no stuff",
  "Pleasure ≠ Happiness",
];

const Footer = () => {
  return (
    <Wrapper>
      <div>&copy; Matej Sajgal {(new Date()).getFullYear()}</div>
      <AlmostTransparent>{sample(TRUTHS)}</AlmostTransparent>
    </Wrapper>
  );
};

export default Footer;