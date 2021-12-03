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
    marginTop: '30px',
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
    width: '50%',
    justifyContent: "flex-start",
    fontSize: 22,
    padding: '20px 0',
    textAlign: 'start',
    fontWeight: 600,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '10px 30px',
      fontSize: 18,
      flexDirection: 'column',
      justifyContent: "center",
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: ' 10px 20px',
      fontSize: 18,
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center",
    },
  },
  secondInfo: {
    fontSize: 20,
    color: 'white',
    display: "flex",
    margin: 'auto',
    width: '100%',
    justifyContent: "flex-start",
    textAlign: 'start',
    background: "transparent !important"
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
    flex: 8
  },
  diagram: {
    margin: '0 auto 0',
    marginBottom: '20px',
    maxWidth: 768,
    [theme.breakpoints.down('xs')]: {
      maxWidth: typeof window !== 'undefined' ? window?.outerWidth : 330,
    },
  },
  rect: {
    margin: '40px auto 0',
    maxWidth: 768,
    [theme.breakpoints.down('xs')]: {
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
  flexContainer: {
    display: 'flex',
    alignItems: 'stretch',
    width: '100%',
  },
  flexContainerChild1: {
    width: '70%',
    backgroundColor: '#333333',
  },
  flexContainerChild2: {
    width: '30%',
    backgroundColor: '#ff0000',
  },
  presale: {
    display: 'flex',
    width: '50vw',
    minHeight: 400,
    margin: 'auto',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '90vw',
    },
  },
  leftTitle: {
    margin: '60px 0 20px 20%',
    fontSize: '24px',
    [theme.breakpoints.down('md')]: {
      margin: '60px 0',
      textAlign: 'center',
      fontSize: '16px'
    },
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '70%',
    padding: '0 8px',
    backgroundColor: 'rgb(63, 72, 204)',
    
    [theme.breakpoints.down('md')]: {
      width: '100%',
      fontSize: '16px',
    },
  },
  rightContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '30%',
    fontSize: '24px',
    padding: '0 0 0 10px',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },  
    [theme.breakpoints.down('md')]: {
      padding: '10px 0 0 0',
      flexDirection: 'row',
      fontSize: '16px',
      width: '100%',
    },
  },
  smallContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10px',
    
    [theme.breakpoints.down('md')]: {
      flex: 'unset',
      width: '49%',
      height: '100%',
    }, 
  },
  smallContent1: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10px',
    marginBottom: '10px',
    
    [theme.breakpoints.down('md')]: {
      flex: 'unset',
      width: '49%',
      marginBottom: '0px'
    }, 
  },
  valueContent: {
    width: '20%',
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    }, 
  },
  bottomRight: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '40px', 
    background: 'rgba(0,0,0,0.6)',
    padding: '20px 0',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10px', 
    }, 
  },
  roundBorder: {
    borderRadius: '6px'
  },
  leftMainContent: {
    background: 'linear-gradient(203deg, rgba(63,94,251,1) 0%, rgba(123,26,182,0.7833508403361344) 100%)',
  },
  buyButton: {
    borderRadius: '6px',
    background: '#c54e4e',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: "white",
    textDecoration: 'none',
    height: 40,
    boxShadow: '-4px 5px 3px 0px rgb(0 0 0 / 20%)',
  },
  joyButton: {
    borderRadius: '6px',
    background: 'rgba(123,26,182,0.7833508403361344)',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: "white",
    textDecoration: 'none',
    minHeight: 40,
    padding: '0 10px',
    marginTop: 8,
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)',
  },
  investText: {
    fontSize: 18
  },
  slyx: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left'
  }
}));

export default useStyles;
