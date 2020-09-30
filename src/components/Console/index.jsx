import React, { Component } from 'react'
import './styles/console.css'
import folder from '../../assets/folder-logo.svg'
import { Grid, Paper, Typography } from '@material-ui/core'

class Console extends Component {
  render() {
    return (
      <Grid item xs={6} className="cns">
        <Grid item xs={10} className="main">
          <Grid item xs={12} className="title">
            <Grid item xs={2} className="groupButtons">
              <Paper spacing={1} className="close-button"></Paper>
              <Paper spacing={1} className="minimize-button"></Paper>
              <Paper spacing={1} className="maxmize-button"></Paper>
            </Grid>
            <Grid item xs={10} className="groupTitle">
              <img src={folder} className="folder-title" alt="" />
              <Typography variant="h6" className="console-title">DevCrystyanoAlmeida@user</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid item xs={6} className="black-area" >
              <div className="command">
                <h1>{"_> Crystyano Almeida"}</h1>
              </div>
          </Grid> */}
      </Grid>
    )
  }
}

export default Console