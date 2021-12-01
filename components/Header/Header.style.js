import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    padding: '20px 40px 20px 50px',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    maxHeight: 88,
    zIndex: 10,
    boxShadow: 'none',
    transition: 'all .25s',
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      backgroundColor: '#121016',
      padding: '15px 5px 0 0'
    },
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 100,
      height: 'auto',
      marginLeft: 12
    },
  },
  fixed: {
    background: '#000',
    boxShadow: '0px 5px 10px rgba(28, 28, 28, 0.5)'
  },
  menu: {
    margin: 0,
    display: 'flex',
    padding: 0,
    '& li': {
      listStyleType: 'none',
      marginLeft: 20,
      [theme.breakpoints.down('xs')]: {
        marginLeft: 10
      }
    },
    '& li:first-child': {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
    },
    '& li.hideNav': {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
    },
    '& li.active a': {
      background: '#9214FF',
      borderRadius: 5,
      transition: 'all .3s'
    },
    '& li a': {
      color: '#fff',
      textDecoration: 'none',
      padding: '5px 10px',
      fontSize: 18,
      textTransform: 'none',
      [theme.breakpoints.down('sm')]: {
        fontSize: 16  
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 10
      },
    },
    '& li a span.MuiButton-label': {
      position: 'relative',
    },
    '& li button': {
      padding: 0
    }
  }, 
  divider: {
    background: '#9214FF',
    borderRadius: 5,
    height: 4,
    width: '100%',
    bottom: -7,
    position: 'absolute',
    padding: '0 10px',
  },
}));

export default useStyles;
