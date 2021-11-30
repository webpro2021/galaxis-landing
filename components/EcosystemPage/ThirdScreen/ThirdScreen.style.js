import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: 'url(/images/thirdScreenBg.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60% 15%',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: -75,
    padding: '0 65px',
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      padding: '0 15px',
      marginTop: -45,
    },
  },
  title: {
    zIndex: 1,
    paddingBottom: 130,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 30,
      marginBottom: 0
    },
  },
  item: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(/images/support.png)',
    width: '100%',
    borderRadius: 10,
    marginBottom: 60,
    paddingBottom: 40,
    paddingRight: 50,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 10,
      paddingBottom: 10,
      marginBottom: 20
    },
    '&:last-child': {
      marginBottom: 0
    }
  },
  position: {
    fontSize: 14,
    '& a': {
      color: '#fff'
    }
  },
  description: {
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    background: '#FFF9F9',
    margin: '40px 30px 0 40px',
    width: 7,
    height: 150,
    [theme.breakpoints.down('xs')]: {
      width: 2,
      height: 55,
      margin: '15px 15px'
    },
  }
}));

export default useStyles;
