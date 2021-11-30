import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '90px 0',
    [theme.breakpoints.down('xs')]: {
      padding: '30px 0 50px'
    },
  },
  copyright: {
    textAlign: 'center',
    color: '#97909C'
  },
  bgColor: {
    backgroundColor: '#121017',
  }
}));

export default useStyles;
