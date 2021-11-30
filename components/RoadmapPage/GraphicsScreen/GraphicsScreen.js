import React from 'react'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Box } from '@material-ui/core';

import useStyles from './GraphicsScreen.style';
import FastTypography from '../../UI/FastTypography'

export default function Screen() {
  const classes = useStyles(); 
  
  return(
    <Box className={classes.root} id="about" >
      <FastTypography type="h3" noMargin data-aos="fade-up" weight="bold" className={classes.boldText}>On today’s outdated <br/> platforms.. </FastTypography>
      <Box display="flex">
        <Box display="flex" flexDirection="column" data-aos="fade-up" mr={2}>
          <Box className={classes.item}>
            <FastTypography type="h6" whiteColor noMargin>Tons of steps to make too<br/> little money</FastTypography>
          </Box>
          <Box className={classes.item}>
            <FastTypography type="h6" whiteColor noMargin>Long list of excuses for<br /> surprise demonetizations</FastTypography>
          </Box>
          <Box className={classes.item}>
            <FastTypography type="h6" whiteColor noMargin>Just one income stream</FastTypography>
          </Box>
        </Box>
        <img width="640" data-aos="fade-up" src="images/ytcircles.svg"/>
        <Box display="flex" flexDirection="column" mt={8} data-aos="fade-up">
          <Box className={classes.item}>
            <FastTypography type="h6" whiteColor noMargin>Doesn't monetize creators<br/> or influencers</FastTypography>
          </Box>
          <Box className={classes.item}>
            <FastTypography type="h6" whiteColor noMargin>Devalues creative work</FastTypography>
          </Box>
          <Box className={classes.item}>
            <FastTypography type="h6" whiteColor noMargin>Ignores copyright<br/> infringement</FastTypography>
          </Box>
        </Box>
      </Box>
      <FastTypography type="h3" noMargin data-aos="fade-up" weight="bold" className={classes.boldText} style={{marginTop: 50}}>A brand new business model<br/> means...</FastTypography>
      <Box display="flex" alignItems="center">
        <Box display="flex" flexDirection="column" data-aos="fade-up">
          <Box className={classes.item} style={{marginBottom: 120}}>
            <FastTypography type="h6" whiteColor noMargin>Endless income opportunities, including advertising, donations, merchandising & commissions.</FastTypography>
          </Box>
          <Box className={classes.item}>
            <FastTypography type="h6" whiteColor noMargin>Anyone can be monetized at any level of influence.</FastTypography>
          </Box>
        </Box>
        <img width="370" data-aos="fade-up" src="images/gxcircle.svg"/>
        <Box display="flex" flexDirection="column" mt={4} data-aos="fade-up" >
          <Box className={classes.item} style={{marginBottom: 120}}>
            <FastTypography type="h6" whiteColor noMargin>Enhanced creative freedom, no surprise demonetizations.</FastTypography>
          </Box>
          <Box className={classes.item}>
            <FastTypography type="h6" whiteColor noMargin>Sponsors & creators communicate & negotiate directly.</FastTypography>
          </Box>  
        </Box>
      </Box>
      <FastTypography data-aos="fade-up" noMargin style={{marginTop: 30}}>
      <div style={{color: '#BC75FC', fontSize: 30, textDecoration: 'none' }}>Ecosystem Features</div>
      </FastTypography>
    </Box>
  )
}