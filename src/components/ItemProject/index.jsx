import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import AstronautCoding from '../../assets/astronaut_listening_music_with_laptop.jpg'
import useStyles from './styles';

const ItemProject = ({title, description}) => {

    const classes = useStyles();

    return (
        <Grid item sm={12} md={12} lg={3} xl={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt=""
                    height="260"
                    image={AstronautCoding}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.customFont}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.customFont}>
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </Grid>
    );
}

export default ItemProject;