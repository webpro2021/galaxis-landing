import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: 'url(/images/firstScreenBg.svg)',
    backgroundColor: '#121017',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 0%',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '160px 15px 30px 15px',
    [theme.breakpoints.down('xs')]: {
      minHeight: 'auto',
      padding: '40px 15px 25px',
      backgroundSize: 'contain'
    },
  },
  container: {
    width: '100%',
    maxWidth: 1200,
    padding: '10px 40px',
    backgroundColor: '#1D0D2B',
    borderRadius: 20,
    minHeight: '70vh',
    marginBottom: 100,
    [theme.breakpoints.down('xs')]: {
    },
  },
  videoContainer : {
    backgroundImage: 'url(/images/copyright.png)',
    backgroundSize: 'cover',
    width: '100%',
    maxWidth: 1200,
    backgroundColor: '#1D0D2B',
    marginBottom: 100,
    borderRadius: 20,
  },
  videoPlay: {
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, .8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh',
    cursor: 'pointer',
    borderRadius: 20,
    '&:hover': {
      background: 'rgba(0, 0, 0, .6)',
    }
  },
  title: {
    maxWidth: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  form: {
    '& .MuiInputBase-root': {
      border: '1px solid #303030',
      borderRadius: '10px',
      padding: '5px 10px',
      width: '100%',
      '&:before, &:after': {
        display: 'none',
      },
      '& input, & select': {
        color: 'white',
      }
    }
  },
  secondRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginTop: 5,
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  content: {
    width: '100%',
    backgroundColor: '#202020',
    padding: '10px 15px',
    borderRadius: 10,
    border: 'none',
    minHeight: 200,
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 80,
    '& button': {
      width: 220,
      height: 40,
      backgroundColor: '#9214ff',
      '&:hover': {
        backgroundColor: '#8214ff',
      }
    }
  },
  error: {
    marginTop: 40,
    marginBottom: 50,
  }
}));

export default useStyles;
