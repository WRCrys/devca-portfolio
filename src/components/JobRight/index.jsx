import { Grid } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const JobRight = ({ image, enterprise, started, finish, text }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={5} sm={5} md={5} lg={6} xl={6} className={classes.contentImage} >
                    <img src={image} alt="" className={classes.imageSize} />
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={6} xl={6} className={classes.jobInformation}>
                    <h2 className={classes.titleEnterprise}>{enterprise}</h2>
                    <span className={classes.workTime}>
                        {started}
                        {finish !== null &&
                            <span> - {finish}</span>
                        }
                    </span>
                    <div className={classes.description}>
                        <span  >{text}</span>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default JobRight;