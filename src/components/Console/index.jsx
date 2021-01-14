import React, { Component } from 'react'
import useStyles from './styles';
import folder from '../../assets/folder-logo.svg'
import { Grid, Paper, Typography } from '@material-ui/core'

const Console = () => {

  const classes = useStyles();

  return(
    <Grid item className={classes.root}>
        <Grid className={classes.console}>
          <Grid item xs={12} className={classes.title}>
            <Grid item xs={2} className={classes.groupButtons}>
              <Paper spacing={1} className={classes.closeButton}></Paper>
              <Paper spacing={1} className={classes.minimizeButton}></Paper>
              <Paper spacing={1} className={classes.maxmizeButton}></Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" style={{color: 'white'}}>{'>_Crystyano Almeida'}</Typography>
          </Grid>
        </Grid>
      </Grid>
  );
}

export default Console