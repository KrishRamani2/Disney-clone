import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
function Home() {
  return (
    <div>
      <Container>
        <ImgSlider />
        <Viewers />
        <Movies />
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  color: white;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  &:before {
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
