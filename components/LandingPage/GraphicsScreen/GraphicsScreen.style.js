import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: 'url(/images/thirdScreenBg.svg)',
    backgroundColor: '#121017',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60% 15%',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0 24px 90px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '50px 0'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '20px 0',
    },
  },
  typography: {
    marginBottom: 40,
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      marginBottom: 50
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20
    },
    '& a': {
      color: '#BD70FF'
    },
  },
  h3: {
    fontSize: 30,
    margin: '0 0 40px 0',
    '&:last-child': {
      marginBottom: 0
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: 50
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20,
      fontWeight: 'bold'
    },
  },
  redText: {
    display: 'flex',
    fontSize: 30,
    margin: '0 0 40px 0',
    '&:last-child': {
      marginBottom: 0,
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: 50
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20,
      fontWeight: 'bold'
    },
    '& span': {
      background: 'linear-gradient(270deg, #FB101C 0%, #F15D2E 102.4%)',
      borderRadius: 30,
      marginRight: 30,
      padding: '5px 15px'
    },
    '& span:last-child': {
      marginRight: 0
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginBottom: 0,
      '& span': {
        marginRight: 0,
        marginBottom: 15
      }
    },
  },
  boldText: {
    fontSize: 32,
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  xsHidden: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  item: {
    border: '1px solid #7EADC4',
    borderRadius: 5, 
    background: 'rgba(255, 255, 255, 0.05)', 
    padding: 15,
    marginBottom: 45,
    maxWidth: 240,
    [theme.breakpoints.down('md')]: {
      marginBottom: 10,
      padding: 10,
      '& h6': {
        fontSize: 16
      }
    },
  }
}));

export default useStyles;
