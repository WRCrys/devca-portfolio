import React, { Component } from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import Console from '../Console';
import csharp from '../../assets/csharp-logo.svg';
import react from '../../assets/react-logo.svg';
import docker from '../../assets/docker-logo.svg';
import useStyles from './styles';
import Astronaut from '../Astronaut';
import ImageParallax from '../ImageParallax';
import { Grid } from '@material-ui/core';

const Intro = (offset, speed) => {

  const classes = useStyles();

  return (
    <div>
      <ParallaxLayer offset={offset} speed={speed} >
        <div className={classes.root}>
          <Console />
          <Astronaut />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.75} speed={0.3} style={{ pointerEvents: 'none' }}>
        <img src={csharp} className={classes.csharpLogo} alt="" />
      </ParallaxLayer>

      <ParallaxLayer offset={0.06} speed={0.3} style={{ pointerEvents: 'none' }}>
        <img src={react} className={classes.reactLogo} alt="" />
      </ParallaxLayer>

      <ParallaxLayer offset={0.16} speed={0.3} style={{ pointerEvents: 'none' }}>
        <img src={docker} className={classes.dockerLogo} alt="" />
      </ParallaxLayer>
    </div>
  );
}

export default Intro