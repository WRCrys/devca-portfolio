import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        fontFamily: 'Nunito',
        margin: 70,
        [theme.breakpoints.down("md")]: {
            marginTop: 500,
        }

    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
    },
    planet: {
        height: 200,
        marginLeft: '80%',
    },
    vsIDE: {
        height: 70,
        marginLeft: '17%',
    },
    git: {
        height: 70,
        marginLeft: '67%',
    },
    github: {
        height: 90,
        marginLeft: '47%',
    },
}));

export default useStyles;