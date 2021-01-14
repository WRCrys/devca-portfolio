import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column'
        }

    },
    csharpLogo: {
        width: '7%',
        marginLeft: '58%',
        [theme.breakpoints.down("md")]: {
            width: '16%',
        }
    },
    reactLogo: {
        width: '5%',
        marginLeft: '8%',
        [theme.breakpoints.down("md")]: {
            width: '12%',
        }
    },
    dockerLogo: {
        width: '6%',
        marginLeft: '89%',
        [theme.breakpoints.down("md")]: {
            width: '14%',
            marginLeft: '79%',
        }
    }
}));

export default useStyles;