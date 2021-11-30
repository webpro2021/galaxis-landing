import React from 'react'

import { Box, Divider } from '@material-ui/core';

import useStyles from './ThirdScreen.style';
import FastTypography from '../../UI/FastTypography'

const items = [
  {
    description: `I cannot believe the world isn't stocked about Galaxis yet! Can't wait for launch!`,
    by: 'Dani Bereznay',
    position: 'https://www.youtube.com/user/DaniGames111',
    link: 'https://www.youtube.com/user/DaniGames111'
  },
  {
    description: `Galaxis allows better influencing campaigns and higher ROI for advertisers`,
    by: 'Gustavo R Aparicio',
    position: 'Managing Director at Spanglish movies',
    link: 'https://spanglishmovies.com/en/home/'
  },
]

export default function ThirdScreen() {
  const classes = useStyles(); 

  return(
    <Box className={classes.root} id="reviews">
        <FastTypography data-aos="fade-right" type="h2" weight="bold" className={classes.title}>And get featured here:</FastTypography>

        {
          items.map((item, index) => (
            <Box className={classes.item} data-aos="fade-up" key={index}>
              <Box className={classes.description}>
                <Divider orientation="vertical" height={150} className={classes.divider}/>
                <FastTypography data-aos="fade-up" type="h4" noMargin>
                  {item.description}
                </FastTypography>
              </Box>
              <Box display="flex" alignItems="flex-end" flexDirection="column">
                <FastTypography data-aos="fade-up" type="h4" weight="bold" noMargin>
                  {item.by}
                </FastTypography>
                <FastTypography data-aos="fade-up" noMargin className={classes.position}>
                  {item.link ? <a target="_blank" href={item.link}>{item.position}</a> : item.position}
                </FastTypography>
              </Box>
            </Box>
          ))
        }
        
    </Box>
  )
}