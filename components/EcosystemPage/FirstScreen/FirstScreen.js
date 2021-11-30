import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Box } from '@material-ui/core';

import useStyles from './FirstScreen.style';
import FastTypography from '../../UI/FastTypography'
import FastIcon from '../../UI/FastIcon'

export default function FirstScreen() {
  const classes = useStyles(); 
  return(
    <>
    <Box className={classes.root}>
      {/* <FastTypography data-aos="fade-up" type="h1" weight="bold" style={{textAlign: 'center'}}>Ecosystem</FastTypography> */}
      {/* <FastTypography data-aos="fade-up" type="h7" noMargin style={{marginBottom: 25}} className={classes.preTitle}>The purpose of this ecosystem is to have a decentralized platform where we can do all social, commerce, advertising, and content consumption activity while having a secure system that works for everyone. Galaxis purpose is to digitize every company and offer and endless amount of online work through the help of content, advertising and ecommerce. This will create a revolving cycle which we refer to as the ecosystem.</FastTypography> */}
      <Box display="flex" flexDirection="column">
        <div data-aos="fade-up" style={{marginBottom: 25}}
                        className={classes.typography}>
            <Box display="flex" flexDirection="column">
                <div className={classes.info}>
                    <div className={classes.infoText}>
                      The purpose of this ecosystem is to have a decentralized platform where we can do all social, 
                      commerce, advertising, and content consumption activity while having a secure system that 
                      works for everyone. Galaxis purpose is to digitize every company and offer and endless amount 
                      of online work through the help of content, advertising and ecommerce. This will create a revolving 
                      cycle which we refer to as the ecosystem.
                    </div>
                </div>
            </Box>
            <br/>
        </div>
        <img data-aos="fade-up" className={classes.diagram} src="images/ecosystem.png"/>
      </Box> 
    </Box>
  <style jsx>{`
  
  .glitch {
    font-size: 36px;
    text-align: center;
    position: relative;
    animation: shake 1s infinite;
    animation-direction: alternate;
    margin: 0;
    top: 50px;
  }

  .glitch span {
    position: absolute;
  }
  
  .glitch_fixed {
    font-size: 36px;
    text-align: center;
    position: relative;
    color: #EEEEEE;
    animation: color 1s infinite;
    animation-direction: alternate;
    margin: 0;
  }
  
  .glitch_opacity {
    font-size: 36px;
    text-align: center;
    position: relative;
    color: #EEEEEE;
    top: -50px;
    left: -2px;
    animation: show 1s infinite;
    animation-direction: alternate;
    margin: 0;
  }
  
  .glitch_opacity span {
    color: #9214FF;
  }

  @keyframes glitch {
    0% {
      transform: translateY(-10%);
      transform: translateX(-5%);
    }
    50% {
      transform: translateY(-10%);
      transform: translateX(-10%);
      color: #237723;
    }
    100% {
      transform: translateY(10%);
      transform: translateX(5%);
      color: #FA0103;
      clip: rect(40px, 0px, 40px, 0px);
    }
  }
  
  @keyframes show {
    50% {
      opacity: 0;
      text-shadow: 2px 2px #AAE90E;
    }
  }
  
  @keyframes color {
    50% {
      color: #b1b1b1;
    }
  }
  
  @keyframes shake {
    0% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(0px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(2px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(2px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
  
  .glitch span {
    color: #0301FA;
    animation: glitch 1s linear infinite;
    animation-direction: alternate;
    position: absolute;
    transform: translateY(0px);
  }
  
  .span, .glitch span:first-child {
    left: 0;
  }
  
  .span, .glitch span:nth-child(2) {
    left: 20px;
  }
  
  .span, .glitch span:nth-child(3) {
    left: 20px;
  }
  
  .span, .glitch span:nth-child(4) {
    left: 40px;
  }
  
  .span, .glitch span:nth-child(5) {
    left: 60px;
  }
  
  .span, .glitch span:nth-child(6) {
    left: 90px;
  }

  .span, .glitch span:nth-child(7) {
    left: 115px;
  }

  .span, .glitch span:nth-child(8) {
    left: 140px;
  }

  .span, .glitch span:nth-child(9) {
    left: 150px;
  }

  .span, .glitch span:nth-child(10) {
    left: 170px;
  }

  .span, .glitch span:nth-child(11) {
    left: 185px;
  }

  .span, .glitch span:nth-child(12) {
    left: 205px;
  }

  .span, .glitch span:nth-child(13) {
    left: 225px;
  }

  .span, .glitch span:nth-child(14) {
    left: 240px;
  }

  .span, .glitch span:nth-child(15) {
    left: 255px;
  }

  .span, .glitch span:nth-child(16) {
    left: 275px;
  }

  .span, .glitch span:nth-child(17) {
    left: 295px;
  }

  @media(max-width: 1200px) {
    .glitch, .glitch_fixed, .glitch_opacity {
      font-size: 28px;
    }
    .glitch_opacity {
      top: -40px;
    }
    .glitch {
      top: 40px;
    }
    .span, .glitch span:first-child {
      left: 0;
    }
    
    .span, .glitch span:nth-child(2) {
      left: 15px;
    }
    
    .span, .glitch span:nth-child(3) {
      left: 30px;
    }
    
    .span, .glitch span:nth-child(4) {
      left: 45px;
    }
    
    .span, .glitch span:nth-child(5) {
      left: 50px;
    }
    
    .span, .glitch span:nth-child(6) {
      left: 70px;
    }
  
    .span, .glitch span:nth-child(7) {
      left: 85px;
    }
  
    .span, .glitch span:nth-child(8) {
      left: 110px;
    }
  
    .span, .glitch span:nth-child(9) {
      left: 115px;
    }

    .span, .glitch span:nth-child(10) {
      left: 130px;
    }
  
    .span, .glitch span:nth-child(11) {
      left: 140px;
    }
  
    .span, .glitch span:nth-child(12) {
      left: 155px;
    }
  
    .span, .glitch span:nth-child(13) {
      left: 170px;
    }
  
    .span, .glitch span:nth-child(14) {
      left: 190px;
    }
  
    .span, .glitch span:nth-child(15) {
      left: 200px;
    }
  
    .span, .glitch span:nth-child(16) {
      left: 215px;
    }
  
    .span, .glitch span:nth-child(17) {
      left: 230px;
    }
  }

  @media(max-width: 600px) {
    .glitch, .glitch_fixed, .glitch_opacity {
      font-size: 12px;
    }
    .glitch_opacity {
      top: -17px;
    }
    .glitch {
      top: 17px;
    }
    .span, .glitch span:first-child {
      left: 0;
    }
    
    .span, .glitch span:nth-child(2) {
      left: 10px;
    }
    
    .span, .glitch span:nth-child(3) {
      left: 15px;
    }
    
    .span, .glitch span:nth-child(4) {
      left: 20px;
    }
    
    .span, .glitch span:nth-child(5) {
      left: 25px;
    }
    
    .span, .glitch span:nth-child(6) {
      left: 35px;
    }
  
    .span, .glitch span:nth-child(7) {
      left: 45px;
    }
  
    .span, .glitch span:nth-child(8) {
      left: 50px;
    }
  
    .span, .glitch span:nth-child(9) {
      left: 55px;
    }

    .span, .glitch span:nth-child(10) {
      left: 60px;
    }
  
    .span, .glitch span:nth-child(11) {
      left: 65px;
    }
  
    .span, .glitch span:nth-child(12) {
      left: 70px;
    }
  
    .span, .glitch span:nth-child(13) {
      left: 75px;
    }
  
    .span, .glitch span:nth-child(14) {
      left: 80px;
    }
  
    .span, .glitch span:nth-child(15) {
      left: 85px;
    }
  
    .span, .glitch span:nth-child(16) {
      left: 90px;
    }
  
    .span, .glitch span:nth-child(17) {
      left: 95px;
    }
  }
  
  `}</style>
    </>
  )
}