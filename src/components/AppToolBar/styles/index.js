import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Nunito',
    },
    appBar: {
        background: 'none',
        fontFamily: 'Nunito',
        
    },
    appBarTitle: {
        flexGrow: '1',
        color: '#fff',
    },
    appBarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText: {
        color: '#ff3333',
        marginLeft: 10,
    },
}));

export default useStyles;