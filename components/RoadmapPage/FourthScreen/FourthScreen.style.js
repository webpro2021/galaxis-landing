import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#121017',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0',
    [theme.breakpoints.down('xs')]: {
      padding: '10px 0',
    },
  },
  title: {
    margin: '0 0 40px 0 !important',
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      textAlign: 'center',
      margin: '0 0 17px 0 !important',
    },
  },
  h3: {
    margin: '90px 0 60px 0 !important',
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      textAlign: 'center',
      margin: '30px 0 20px 0 !important',
    },
  },
  subtitle: {
    marginBottom: 90,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 35,
    },
  },
  description: {
    marginLeft: 22,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 10
    },
  },
  itemSubtitle: {
    marginTop: 7,
    '& a': {
      color: '#BD70FF',
      textDecoration: 'none'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
      marginTop: 5
    },
  },
  item: {
    display: 'flex',
    marginBottom: 40,
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      marginBottom: 28,
      '&:last-child': {
        marginBottom: 10
      }
    },
    '&:last-child': {
      marginBottom: 0
    }
  },
  itemImg: {
    maxWidth: 406,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 300,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: 150,
    },
  },
  reasons: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
  },
  listWrapper: {
    width: '50%',
    '&:first-child': {
      marginRight: 40,
    },
    '& div': {
      marginBottom: 25,
      '& p': {        
        [theme.breakpoints.down('xs')]: {
          fontSize: 18
        },
      }
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
  },
  listTitle: {
    marginBottom: 30,
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      marginBottom: 20
    },
  },
  listSubtitle: {
    marginBottom: 30,
    marginLeft: 32,
    fontSize: '2rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '28px',
      marginBottom: 20  
    },
  },
  check: {
    marginTop: 5,
    marginRight: 10,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0
    },
  },
  ecosystem: {
    maxWidth: '100%',
    marginTop: 90,
    display:'flex',
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      marginTop: 30
    },
  },
  diagram: {
    width: '90%',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  imgWrapper: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export default useStyles;
