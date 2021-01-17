import React from 'react';
import useStyles from './styles';

const TagDesc = ({image, text}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={image} alt="" className={classes.emoji} />
            <span>{text}</span>
        </div>
    );
}

export default TagDesc;