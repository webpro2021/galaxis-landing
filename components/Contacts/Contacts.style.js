import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '90px 0 0',
    [theme.breakpoints.down('xs')]: {
      padding: '30px 0 0',
    },
  },
  bgColor: {
    backgroundColor: '#121017',
  },
  title: {
    margin: '0 0 20px 0',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      marginBottom: 10
    },
  },
  description: {
    '& a': {
      color: '#BD70FF',
      textDecoration: 'none'
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
}));

export default useStyles;
