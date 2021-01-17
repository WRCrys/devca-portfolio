import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import useStyles from './styles';

const AppToolBar = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} color="transparent" elevation={0}>
                <Toolbar className={classes.appBarWrapper}>
                    <h1 className={classes.appBarTitle}>
                        Crystyano
                        <span className={classes.colorText}>
                            Almeida
                        </span>
                    </h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppToolBar;