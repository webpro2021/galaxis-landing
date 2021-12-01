import React from 'react'
import clsx from 'clsx'

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  text: {
    color: '#fff',
    fontWeight: prop => prop.weight,
    fontSize: 24,
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  common: {
    color: '#fff',
    fontWeight: 500,
    margin: prop => (prop.noMargin ? 0 : '20px 0'),
    lineHeight: 1.3,
  },
  h1: {
    fontSize: '6rem',
    fontWeight: prop => prop.weight,
    [theme.breakpoints.down('md')]: {
      fontSize: 48,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
    },
  },
  h2: {
    fontSize: '4rem',
    fontWeight: prop => prop.weight,
    [theme.breakpoints.down('md')]: {
      fontSize: 36,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    },
  },
  h3: {
    fontSize: '3rem',
    fontWeight: prop => prop.weight,
    [theme.breakpoints.down('md')]: {
      fontSize: 36,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
  h4: {
    fontSize: '2.250rem',
    fontWeight: prop => prop.weight,
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: prop => prop.weight,
  },
  h6: {
    fontSize: '1.125rem',
    fontWeight: prop => prop.weight,
  },
}));

const getWeight = (weight) => {
  switch (weight) {
    case 'regular':
      return 400;
    case 'bold':
      return 700;
    case 'thin':
      return 300;
    default:
      return 400;
  }
};

const FastTypography = ({ type, children, className, weight, noMargin, whiteColor, ...rest }) => {
  const classes = useStyles({ weight: getWeight(weight), noMargin, whiteColor });

  switch (type) {
    case 'text':
      return <p {...rest} className={clsx(className, classes.text, classes.common)}>{children}</p>;
    case 'h1':
      return <h1 {...rest} className={clsx(className, classes.h1, classes.common)}>{children}</h1>;
    case 'h2':
      return <h2 {...rest} className={clsx(className, classes.h2, classes.common)}>{children}</h2>;
    case 'h3':
      return <h3 {...rest} className={clsx(className, classes.h3, classes.common)}>{children}</h3>;
    case 'h4':
      return <h4 {...rest} className={clsx(className, classes.h4, classes.common)}>{children}</h4>;
    case 'h5':
      return <h5 {...rest} className={clsx(className, classes.h5, classes.common)}>{children}</h5>;
    case 'h6':
      return <h6 {...rest} className={clsx(className, classes.h6, classes.common)}>{children}</h6>;
    default:
      return <p {...rest} className={clsx(className, classes.text, classes.common)}>{children}</p>;
  }
};

export default FastTypography;
