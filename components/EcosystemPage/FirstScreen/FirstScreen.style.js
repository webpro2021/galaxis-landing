import { makeStyles } from '@material-ui/styles';

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
    padding: '200px 0 30px 0',
    [theme.breakpoints.down('xs')]: {
      padding: '40px 0 25px 0',
      minHeight: 'auto',
      backgroundSize: 'contain'
    },
  },
  logo: {
    margin: '0 auto 40px',
    maxWidth: 650,
    [theme.breakpoints.down('md')]: {
      maxWidth: 400,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: 203,
      marginBottom: 15,
      display: 'none'
    },
  },
  mbLogo: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: 203,
      margin: '0 auto 15px',
      display: 'block'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
  },
  typography: {
    textAlign: 'center',
    '& span': {
      background: '#9214FF',
      opacity: 0.9,
      borderRadius: 5,
      padding: '20px 40px',
      top: 10,
      position: 'relative',
      fontSize: 18,
      color: 'white',
      [theme.breakpoints.down('xs')]: {
        padding: '3px 10px 3px',
      },
    }
  },
  arrow: {
    marginLeft: 20,
    marginTop: 10,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      height: 12,
      marginTop: 0
    }
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
  },
  redline: {
    backgroundImage: 'linear-gradient(90deg, rgb(242, 97, 34) 0%, rgb(255, 0, 0) 100%)',
    fontSize: 14,
    textAlign: 'center',
    padding: '5px 20px',
    borderRadius: 30,
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
      padding: '2px 5px',
    },
  },
  redlineWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '15px !important'
    },
  },
  preTitle: {
    color: "white",
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 70,
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
    },
  },
  info: {
    color: 'white',
    display: "flex",
    margin: 'auto',
    width: '80%',
    justifyContent: "flex-start",
    fontSize: 24,
    padding: '20px 40px',
    textAlign: 'start',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: 0,
      fontSize: 18,
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center",
      textAlign: 'center'
    },
  },
  infoTitle: {
    color: '#FEAFC4',
    fontWeight: 'bold',
    flex: 1
  },
  infoTitle2: {
    color: '#9D4AA3',
    [theme.breakpoints.down('sm')]: {
      marginTop: 16,
      maxWidth: typeof window !== 'undefined' ? window?.outerWidth : 330,
    },
  },
  infoText: {
    padding: '0 10px',
  },
  diagram: {
    margin: '40px auto 0',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      maxWidth: typeof window !== 'undefined' ? window?.outerWidth : 330,
    },
  },
  imageStack: {
    position: "relative",
    height: 550,
    [theme.breakpoints.down('sm')]: {
      height: 400,
    },
  },
  imageStackItem: {
    position: 'absolute',
    top: 0,
    maxWidth: 600,
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 300,
    },
  },
  imageStackItemImg: {
    width: 600,
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
  },
  imageStackItem1: {
    top: 50,
    right: '20%',
    [theme.breakpoints.down('sm')]: {
      right: '0%',
    },
  },
  imageStackItem2: {
    top: 100,
    right: '30%',
    [theme.breakpoints.down('sm')]: {
      right: '5%',
    },
  },
  imageStackItem3: {
    top: 150,
    right: '40%',
    [theme.breakpoints.down('sm')]: {
      right: '10%',
    },
  },
  imageStackItem4: {
    top: 200,
    right: '50%',
    [theme.breakpoints.down('sm')]: {
      right: '15%',
    },
  },
}));

export default useStyles;
