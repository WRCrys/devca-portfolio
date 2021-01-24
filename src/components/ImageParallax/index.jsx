import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

const ImageParallax = ({offset, speed, image, css}) => {
  return(
    <ParallaxLayer offset={offset} speed={speed} style={{ pointerEvents: 'none' }}>
        <img src={image} className={css} alt="" />
      </ParallaxLayer>
  );
}

export default ImageParallax