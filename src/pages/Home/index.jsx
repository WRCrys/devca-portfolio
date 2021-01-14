import React from 'react'
import { Parallax } from 'react-spring/renderprops-addons'
import Intro from '../../components/Intro'
import About from '../../components/About'
import { makeStyles } from '@material-ui/core'
import '../../styles/main.css'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.jpg'})`,
  }
}
));

const Home = () => {
  const classes = useStyles();
  return (
    <Parallax pages={5} ref={ref => (ref)} scrolling={true} className={classes.root}>
      <Intro offset={0} speed={1} />
    </Parallax>
  );
}

export default Home