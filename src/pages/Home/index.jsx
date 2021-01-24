import React from 'react'
import { Parallax } from 'react-spring/renderprops-addons'
import Intro from '../../components/Intro'
import About from '../../components/About'
import Experience from '../../components/Experience'
import { makeStyles } from '@material-ui/core'
import '../../styles/main.css'
import Projects from '../../components/Projects'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.jpg'})`,
  }
}
));

const Home = () => {
  const classes = useStyles();
  return (
    <Parallax pages={6} ref={ref => (ref)} scrolling={true} className={classes.root}>
      <Intro offset={0} speed={1} />
      <About offset={1} speed={0.1} />
      <Experience offset={2.5} speed={0.1} />
      <Projects offset={4.3} speed={0.1} />
    </Parallax>
  );
}

export default Home