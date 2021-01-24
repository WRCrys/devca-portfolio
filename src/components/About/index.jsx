import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import me from '../../assets/me.JPEG';
import { Avatar } from '@material-ui/core';
import earth from '../../assets/earth.png';
import moon from '../../assets/moon.png';
import js from '../../assets/javascript-logo.svg';
import code from '../../assets/code.png';
import hacking from '../../assets/hacking.svg';
import development from '../../assets/development.png';
import xbox from '../../assets/xbox.png';
import basketball from '../../assets/basketball.png';
import astronautHoldingCupCoffe from '../../assets/astronaut-holding-cup-coffe.svg';
import csharp from '../../assets/csharp-logo.svg';
import react from '../../assets/react-logo.svg';
import sqlserver from '../../assets/sql-server.svg';
import git from '../../assets/git.svg';
import vscode from '../../assets/vscode-logo.svg';
import useStyles from './styles';
import TagDesc from '../TagDesc';

const About = ({ offset, speed }) => {

  const classes = useStyles();

  return (
    <div>
      <ParallaxLayer offset={offset} speed={speed}>
        <div className={classes.root}>
          <h2 className={classes.title}>Sobre Mim</h2>
          <div className={classes.content}>
            <div className={classes.contentImageProfile}>
              <Avatar alt="me" src={me} className={classes.imageProfile} />
              <div className={classes.apresetation}>
                <span>
                  Crystyano Almeida
                </span>
                <span>
                  Desenvolvedor FullStack
                </span>
                <div style={{ display: 'inline' }}>
                  <img src={csharp} alt="" style={{ height: 35 }} />
                  <img src={react} alt="" style={{ height: 35 }} />
                  <img src={sqlserver} alt="" style={{ height: 35 }} />
                  <img src={git} alt="" style={{ height: 35 }} />
                </div>
                <img src={astronautHoldingCupCoffe} alt="" className={classes.astronaut} />
              </div>
            </div>
            <div className={classes.contentDescriptionProfile}>
              <div className={classes.contentDescriptionTags}>
                <TagDesc image={code} text="Desenvolvedor Front-End e Back-End." />
                <TagDesc image={hacking} text="Amante de tecnologia e segurança da informação." />
                <TagDesc image={development} text="Aspirante a arquiteto de software." />
                <TagDesc image={xbox} text="Apaixonado por jogos." />
                <TagDesc image={basketball} text="Amante de basquete." />
              </div>
              <div className={classes.descriptionText}>
                <p>
                  Venho desde 2017 desenvolvendo novas soluções. Nesse meio tempo já desenvolvi Apps para
                  Android, sistemas Web, desktop e hoje em várias linguaguens de programação.
                  Hoje solidifico e aprimoro meus conhecimentos em C# usando desde um MVC até uma API Rest,
                  React JS usando o próprio JavaScript e até mesmo TypeScript para desenvolver os SPA das aplicações.
            </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.2} speed={0.3} style={{ pointerEvents: 'none' }}>
        <img src={earth} alt="" className={classes.earth} />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.3} style={{ pointerEvents: 'none' }}>
        <img src={moon} alt="" className={classes.moon} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.3} speed={0.3} style={{ pointerEvents: 'none' }}>
        <img src={js} alt="" className={classes.jsLogo} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.8} speed={0.3} style={{ pointerEvents: 'none' }}>
        <img src={vscode} alt="" className={classes.vscodeLogo} />
      </ParallaxLayer>
    </div>
  );
}

export default About