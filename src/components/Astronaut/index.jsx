import React, { Component } from "react";
import rocket from '../../assets/astronaut.png'
import './styles/rocket.css'

class Astronaut extends Component {
  render() {
    return(
      <div className="rocket">
        <img src={rocket} className="rocket-img" alt="" />
      </div>
    )
  }
}

export default Astronaut