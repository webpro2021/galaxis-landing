import React from 'react'
import AOS from 'aos'
import clsx from 'clsx'

import { Box, Container } from '@material-ui/core';

import useStyles from './Contacts.style';
import FastTypography from '../UI/FastTypography'

export default function Contacts({ gradient }) {
  const classes = useStyles(); 
  React.useEffect(() => {
    AOS.init();
  }, [])
  
  return(
    <Box className={clsx(classes.root, !gradient && classes.bgColor)} id="contacts">
      <Container className={classes.container} maxWidth="lg">
          <Box>
            <FastTypography data-aos="fade-right" type="h2" weight="bold" className={classes.title}>Interested?</FastTypography>
              <FastTypography data-aos="fade-up" weight="thin" noMargin className={classes.description}>Galaxis is currently looking for investors. Contact us at <a href="mailto:info@galaxis.co">info@galaxis.co</a> for more information. Join our community on <a href="https://discord.gg/7zwBtBDaJM">discord</a> </FastTypography>
          </Box>
      </Container>
    </Box>
  )
}