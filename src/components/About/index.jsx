import React, { Component } from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import './styles/about.css'
import me from '../../assets/me.JPEG'
import { Avatar, Grid } from '@material-ui/core'
import earth from '../../assets/earth.png'
import moon from '../../assets/moon.png'
import js from '../../assets/javascript-logo.svg'

class About extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ParallaxLayer offset={this.props.offset} speed={this.props.speed}>
          <div className="container">
            <h2>Sobre Mim</h2>
            <div className="content">
              <Grid container spacing={3} style={{padding: '50px'}}>
                <Grid item xs={4}>
                  <Avatar alt="me" src={me} className="img-profile" />
                </Grid>
                <Grid item xs={8}>
                  Eu sou o melhor desenvolvedor
                </Grid>
              </Grid>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.3} style={{ pointerEvents: 'none' }}>
          <img src={earth} alt="" className="earth" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.8} speed={0.3} style={{ pointerEvents: 'none' }}>
          <img src={moon} alt="" className="moon" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={0.3} style={{ pointerEvents: 'none' }}>
          <img src={js} alt="" className="js-logo" />
        </ParallaxLayer>
      </div>
    )
  }
}

export default About