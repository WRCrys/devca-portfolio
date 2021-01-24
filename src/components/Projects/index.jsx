import { Grid } from '@material-ui/core';
import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import ItemProject from '../ItemProject';
import useStyles from './styles';
import vs2019 from '../../assets/vs19-logo.svg';
import git from '../../assets/git.svg';
import github from '../../assets/github.svg';
import planet from '../../assets/planet.png';

const Projects = ({ offset, speed }) => {

    const classes = useStyles();

    return (
        <div>
            <ParallaxLayer offset={offset} speed={speed}>
                <div className={classes.root}>
                    <div className={classes.title}>
                        <h2 style={{ fontSize: 50 }}>Projetos</h2>
                    </div>
                    <Grid container spacing={3}>
                        <ItemProject
                            title="Arena Lobo"
                            description="Desenvolvido em C# com React, a solução contempla gerenciar vendas e estoque de bar." />
                    </Grid>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={4.5} speed={0.5} style={{ pointerEvents: 'none' }}>
                <img src={vs2019} className={classes.vsIDE} alt="" />
            </ParallaxLayer>

            <ParallaxLayer offset={4.8} speed={0.5} style={{ pointerEvents: 'none' }}>
                <img src={git} className={classes.git} alt="" />
            </ParallaxLayer>

            <ParallaxLayer offset={5} speed={0.5} style={{ pointerEvents: 'none' }}>
                <img src={github} className={classes.github} alt="" />
            </ParallaxLayer>

            <ParallaxLayer offset={4.4} speed={0.5} style={{ pointerEvents: 'none' }}>
                <img src={planet} className={classes.planet} alt="" />
            </ParallaxLayer>
            
        </div>
    );
}

export default Projects;