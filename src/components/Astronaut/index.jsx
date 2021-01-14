import { CardMedia, Grid } from "@material-ui/core";
import React, { Component } from "react";
import rocket from '../../assets/astronaut.png'
import './styles/rocket.css'
import csharp from '../../assets/csharp-logo.svg'
import ImageParallax from "../ImageParallax";

class Astronaut extends Component {
  render() {
    return( 
      <Grid className="astronaut">
        
        {/* <img src={rocket} className="rocket-img" alt="" /> */}

        <CardMedia component="img" image={rocket} />
      </Grid>
    )
  }
}

export default Astronaut