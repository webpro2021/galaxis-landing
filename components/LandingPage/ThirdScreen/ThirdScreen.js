import React from 'react'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Box } from '@material-ui/core';

import useStyles from './ThirdScreen.style';
import FastTypography from '../../UI/FastTypography'

export default function ThirdScreen() {
  const classes = useStyles(); 
  
  return(
    <Box className={classes.root} id="about">
      <FastTypography type="h3" noMargin data-aos="fade-up" weight="bold" className={classes.h3}>Galaxis is the world’s first content-sharing platform<br/> designed for e-commerce from the ground up.</FastTypography>
      <FastTypography type="h4" weight="thin" noMargin data-aos="fade-up" className={classes.typography}>We’re making influencer marketing easier and more<br className={classes.xsHidden}/> profitable for &nbsp;
        <AnchorLink offset='100' href='#video' data-aos="fade-up">
          companies ​and​ creators​
        </AnchorLink>
      </FastTypography>
      <FastTypography type="h3" noMargin data-aos="fade-up" className={classes.redText}>
          <div>
              <div>Fair to creators</div>
              <span className={classes.redTextListItem}>- Expedited contracts</span>
              <span className={classes.redTextListItem}>- In house freelancer</span>
              <span className={classes.redTextListItem}>- Edit and upload faster</span>
              <span className={classes.redTextListItem}>- Copyrights monetization</span>
          </div>
          <div>
              <div>Accessible to brands</div>
              <span className={classes.redTextListItem}>- Strike deals in seconds</span>
              <span className={classes.redTextListItem}>- New brand impressions</span>
              <span className={classes.redTextListItem}>- Live ROI</span>
              <span className={classes.redTextListItem}>- Customer service tools</span>
          </div>
          <div>
              <div>Free to audiences</div>
              <span className={classes.redTextListItem}>- Stalkless data management</span>
              <span className={classes.redTextListItem}>- Best privacy and security</span>
              <span className={classes.redTextListItem}>- Devolved moderation</span>
              <span className={classes.redTextListItem}>- Free speech</span>
          </div>
      </FastTypography>
      <FastTypography type="h4" weight="thin" noMargin data-aos="fade-up" className={classes.typography}>On Galaxis, creators share videos, text, images, and audio in a <AnchorLink offset='100' href='#video' data-aos="fade-up">familiar-feeling content feed</AnchorLink>​.<br/>Audience members follow their favorite creators’ channels, watch content for free, and support <br/>them by making purchases or donations. &nbsp;</FastTypography>
      <FastTypography type="h4" weight="thin" noMargin data-aos="fade-up" className={classes.typography} style={{marginBottom: 20}}>On the surface, Galaxis looks and feels like today’s most used content-sharing platforms, but <br/> with <b>one key difference​</b>​: </FastTypography>
      <FastTypography type="h3" noMargin data-aos="fade-up" weight="bold" className={classes.boldText}>the monetization and advertising process has been completely transformed​​</FastTypography>
    </Box>
  )
}