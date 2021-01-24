import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import JobRight from '../JobRight';
import useStyles from './styles';
import catHugEarth from '../../assets/cat-hug-earth.svg';
import astronautMoon from '../../assets/astronaut-moon.svg';
import alien from '../../assets/alien.svg';
import spaceshipPlane from '../../assets/spaceship-plane.svg';
import rocketHappy from '../../assets/rocket-happy.svg';
import apple from '../../assets/apple-logo.svg';
import android from '../../assets/android-logo.svg';
import JobLeft from '../JobLeft';

const Experience = ({ offset, speed }) => {

    const classes = useStyles();

    return (
        <div>
            <ParallaxLayer offset={offset} speed={speed}>
                <div className={classes.root}>
                    <div className={classes.title}>
                        <h2 style={{ fontSize: 50 }}>Experiência</h2>
                    </div>
                    <div>
                        <JobRight
                            image={catHugEarth}
                            enterprise={"Pague Menos"}
                            started={"14/Dez/2020"}
                            finish={null}
                            text={"Desenvolvimento de software usando C# com React e manutanção em VB VBNet e C#."} />

                        <JobLeft
                            image={astronautMoon}
                            enterprise={"Wipro - IVIA"}
                            started={"24/Jun/2019"}
                            finish={"11/Dez/2020"}
                            text={"Manutenção de softawares usando VB, VBNet, C# e React. Correção de bug e pequenas melhorias."} />

                        <JobRight
                            image={alien}
                            enterprise={"Prolins"}
                            started={"01/Mar/2019"}
                            finish={null}
                            text={"Desenvolvimento de apps mobile híbridos usando Ionic."} />

                        <JobLeft
                            image={spaceshipPlane}
                            enterprise={"AGBTEC"}
                            started={"24/Jun/2019"}
                            finish={"11/Dez/2020"}
                            text={"Desenvolvimento de apps Android usando Java."} />
                    </div>
                </div>

            </ParallaxLayer>

            <ParallaxLayer offset={2.9} speed={1.4} style={{ pointerEvents: 'none' }}>
                <img src={rocketHappy} className={classes.rocketHappy} alt="" />
            </ParallaxLayer>

            <ParallaxLayer offset={3.6} speed={0.3} style={{ pointerEvents: 'none' }}>
                <img src={apple} className={classes.appleLogo} alt="" />
            </ParallaxLayer>

            <ParallaxLayer offset={4} speed={0.3} style={{ pointerEvents: 'none' }}>
                <img src={android} className={classes.androidLogo} alt="" />
            </ParallaxLayer>

        </div>
    );
}

export default Experience;