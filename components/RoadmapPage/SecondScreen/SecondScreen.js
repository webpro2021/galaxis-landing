import React from 'react'

import { Box } from '@material-ui/core';

import useStyles from './SecondScreen.style';
import FastTypography from '../../UI/FastTypography'
import FastIcon from '../../UI/FastIcon'

export default function ThirdScreen() {
  const classes = useStyles(); 
  
 
  
  return(
    <Box className={classes.root} id="contact-us">
      <Box className={classes.container}>
        <FastTypography data-aos="fade-up" className={classes.title} type="h4">Send us an email at <a href="mailto:info@galaxis.co">info@galaxis.co</a> with:</FastTypography>
        <Box className={classes.item} data-aos="fade-up">
          <img src="images/linkIcon.svg" className={classes.icon}/>
          <FastTypography type="h4" className={classes.description} noMargin>a link to the channel or social media account you create your best content on.</FastTypography>
        </Box>
        <Box className={classes.item} data-aos="fade-up">
          <FastIcon iconName="message" width="96px" height="79px" className={classes.icon}/>
          <FastTypography type="h4" className={classes.description} noMargin>a short quote telling us why you love Galaxis!</FastTypography>
        </Box>
      </Box>
    </Box>
  )
}