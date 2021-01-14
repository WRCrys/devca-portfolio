import React, { Component } from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

class ImageParallax extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ParallaxLayer offset={this.props.offset} speed={this.props.speed} style={{ pointerEvents: 'none' }}>
        <img src={this.props.image} className={this.props.css} alt="" />
      </ParallaxLayer>
    )
  }
}

export default ImageParallax