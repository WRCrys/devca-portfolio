import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '40%',
        marginTop: 130,
        [theme.breakpoints.down("md")]: {
            marginTop: 120,
            width: '80%',
        },
        [theme.breakpoints.up("xl")]: {
            marginTop: '12%',
            width: '60%',
        },
    },
    console: {
        backgroundColor: '#262626',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        height: 310,
        maxWidth: 500,
        [theme.breakpoints.down("md")]: {
            maxWidth: '100%',
            height: 180,
        },
        [theme.breakpoints.up("xl")]: {
            maxWidth: 700,
            height: 380,
        },

    },
    bar: {
        minHeight: 26,
        display: 'flex',
        backgroundColor: '#e1e1e1',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    groupButtons: {
        display: 'flex',
    },
    groupTitle: {
        position: 'relative',
        justifyContent: 'center',
        display: 'flex',
    },
    consoleTitle: {
        fontSize: 15,
        position: 'relative',
        top: 6,
        left: -30,
    },
    closeButton: {
        backgroundColor: '#fc605b',
        borderRadius: 10,
        position: 'relative',
        top: 5,
        left: 8,
        maxWidth: 15,
        maxHeight: 15,
        minWidth: 15,
        minHeight: 15,
    },
    minimizeButton: {
        backgroundColor: '#fdc041',
        borderRadius: 10,
        position: 'relative',
        top: 5,
        left: 12,
        maxWidth: 15,
        maxHeight: 15,
        minWidth: 15,
        minHeight: 15,
    },
    maxmizeButton: {
        backgroundColor: '#35ca4a',
        borderRadius: 10,
        position: 'relative',
        top: 5,
        left: 16,
        maxWidth: 15,
        maxHeight: 15,
        minWidth: 15,
        minHeight: 15,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
    },
    titleStyleClass: {
        color: '#BD8FFA',
        fontSize: 40,
        [theme.breakpoints.down("md")]: {
            fontSize: 25,
        }
    },
    titleStyleWhite: {
        color: 'white'
    },
    titleStyleMethod: {
        color: '#45FC75',
    },
}));

export default useStyles;

/*

.folder-title {
  position: relative;
  left: -40px;
  width: 24px;
}

.black-area {
  background-color: black;
  height: 53%;
  width: 126px;
  position: relative;
  top: -50px;
  left: 100px;
}

.command {
  color: white;
  font-family: 'Courier New', Courier, monospace;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 24px;
}

.name {
  max-height: 10px;
}
*/