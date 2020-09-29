import React, { Component } from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import Console from '../Console'
import csharp from '../../assets/csharp-logo.svg'
import react from '../../assets/react-logo.svg'
import docker from '../../assets/docker-logo.svg'
import Astronaut from '../Astronaut'

class Intro extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ParallaxLayer offset={this.props.offset} speed={this.props.speed} >
          <div>
            <Console />
            <Astronaut />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.65} speed={0.3} style={{ pointerEvents: 'none' }}>
          <img src={csharp} className="csharp-logo" alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.12} speed={0.3} style={{ pointerEvents: 'none' }}>
          <img src={react} className="react-logo" alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.16} speed={0.3} style={{ pointerEvents: 'none' }}>
          <img src={docker} className="docker-logo" alt="" />
        </ParallaxLayer>
      </div>
    )
  }
}

export default Intro