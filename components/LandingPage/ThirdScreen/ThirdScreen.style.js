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
    padding: '90px 24px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '50px 24px'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '20px 15px',
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
    [theme.breakpoints.down('sm')]: {
      fontWeight: 'bold',
      fontSize: 21,
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
    '& div div': {
      background: 'linear-gradient(270deg, #FB101C 0%, #F15D2E 102.4%)',
      borderRadius: 30,
      marginRight: 30,
      padding: '5px 15px',
    },
    '& div div:last-child': {
      marginRight: 0,
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginBottom: 0,
      '& div div': {
        marginRight: 0,
        marginBottom: 15,
        fontSize: 21,
      }
    },
  },
  redTextListItem: {
    fontSize: 20,
    textAlign: 'left',
    display: 'flex',
    margin: 8,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  boldText: {
    textTransform: 'uppercase',
    fontSize: 30,
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: 21,
    },
  },
  xsHidden: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  }
}));

export default useStyles;
