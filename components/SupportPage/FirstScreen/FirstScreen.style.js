import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: 'url(/images/firstScreenBg.svg)',
    backgroundColor: '#121017',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 0%',
    backgroundAttachment: 'fixed',
    minHeight: '60vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '140px 15px 30px 15px',
    [theme.breakpoints.down('xs')]: {
      minHeight: 'auto',
      padding: '40px 15px 25px',
      backgroundSize: 'contain'
    },
  },
  typography: {
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14
    },
  },
  arrow: {
    marginLeft: 20,
    marginTop: 10,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      height: 12,
      marginTop: 0
    },
  },
  glitchWrapper: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    '&:hover $arrow': {
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  }
}));

export default useStyles;
