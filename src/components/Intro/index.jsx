import React, { Component } from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import Console from '../Console'
import csharp from '../../assets/csharp-logo.svg'
import react from '../../assets/react-logo.svg'
import docker from '../../assets/docker-logo.svg'
import Astronaut from '../Astronaut'
import introCSS from './styles/intro.css'
import ImageParallax from '../ImageParallax'
import { Grid } from '@material-ui/core'

class Intro extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ParallaxLayer offset={this.props.offset} speed={this.props.speed} >
              
              <Console />

              <Astronaut />

              <ImageParallax offset={0.65} speed={0.3} image={csharp} css="csharp-logo" />

              <ParallaxLayer offset={0.12} speed={0.3} style={{ pointerEvents: 'none' }}>
                <img src={react} className="react-logo" alt="" />
              </ParallaxLayer>

              <ParallaxLayer offset={0.16} speed={0.3} style={{ pointerEvents: 'none' }}>
                <img src={docker} className="docker-logo" alt="" />
              </ParallaxLayer>
            </ParallaxLayer>
          </Grid>
        </Grid>


        {/* <ParallaxLayer offset={0.65} speed={0.3} style={{ pointerEvents: 'none' }}>
          <img src={csharp} className="csharp-logo" alt="" />
        </ParallaxLayer> */}


      </div>
    )
  }
}

export default Intro