import React, { Component } from 'react'
import { Parallax } from 'react-spring/renderprops-addons'
import '../../styles/main.css'
import Intro from '../../components/Intro'
import About from '../../components/About'

class Home extends Component {
  render() {
    return (
      <Parallax pages={5} ref={ref => (this.parallax = ref)} scrolling={true} className="colorApp">
        
        <Intro offset={0} speed={1} />

        <About offset={1} speed={0.1} />

      </Parallax>
    )
  }
}

export default Home