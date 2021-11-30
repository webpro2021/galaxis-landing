import React from 'react'
import clsx from 'clsx'

import { Box } from '@material-ui/core'

import useStyles from './Footer.style'
import FastTypography from '../UI/FastTypography'

export default function Footer({ gradient }) {
  const classes = useStyles(); 
  
  return(
    <footer className={clsx(classes.root, !gradient && classes.bgColor)}>
      <FastTypography className={classes.copyright} noMargin>{(new Date().getFullYear())}© Galaxis Inc.</FastTypography>
      <Box display="flex" justifyContent="center" style={{marginTop: 15}}>
        <a style={{marginRight: 15}} href="https://www.crunchbase.com/organization/galaxis " target="_blank"><img style={{borderRadius: 4}} width="34" src="/images/cb.png" alt="crunchbase"/></a>
        <a style={{marginRight: 15}} href="https://www.facebook.com/GALAXISSN/" target="_blank"><img width="34" src="/images/facebook.svg" alt="facebook"/></a>
        <a style={{marginRight: 15}} href="https://www.linkedin.com/company/ingalaxis/ " target="_blank"><img width="34" src="/images/linkedin.svg" alt="linkedin"/></a>
        <a style={{marginRight: 15}} href="https://synapsefl.com/summit/" target="_blank"><img width="34" src="/images/synaps.png" alt="linkedin"/></a>
        <a href="https://launch.newchip.com/" target="_blank"><img width="34" src="/images/newchip.png" alt="linkedin"/></a>
      </Box>
    </footer>
  )
}