import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#121017',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '70px 40px 0',
    textAlign: 'center',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      padding: '5px 15px 0'
    },
  },
  container: {
    backgroundImage: 'url(/images/supportBg.png)',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: 45,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 30
    },
  },
  title: {
    padding: '85px 0 100px 60px',
    textAlign: 'left', 
    '& a': {
      color: '#BD70FF',
      textDecoration: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      padding: '30px 20px 20px',
      margin: 0
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 100,
    marginBottom: 80,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 20,
      marginBottom: 22,
    },
  },
  description: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',  
      margin: '0 0 0 8px'
    }, 
    margin: '0 0 0 30px'
  },
  icon: {
    [theme.breakpoints.down('xs')]: {
      width: '30px !important',
      height: 'auto !important',
    },
  }
}));

export default useStyles;
