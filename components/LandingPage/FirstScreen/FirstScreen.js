import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import {Box} from '@material-ui/core';

import useStyles from './FirstScreen.style';
import FastTypography from '../../UI/FastTypography'
import FastIcon from '../../UI/FastIcon'

export default function FirstScreen() {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.root}>
                <Box display="flex" flexDirection="column">
                    <span data-aos="fade-up" className={classes.preTitle}>Decentralized social media - Blockchain - NFT - Expedited contracts - Integrated Ecommerce</span>
                    <FastTypography data-aos="fade-up" noMargin className={classes.redlineWrapper}><span
                        className={classes.redline}>COMING SOON</span></FastTypography>
                    <img data-aos="fade-up" className={classes.logo} src="logo.svg"/>
                    <img className={classes.mbLogo} height="50" src="images/logo.png"/>
                    <FastTypography noMargin className={classes.redlineWrapper}>
                        <span className={classes.redline} style={{marginBottom: 20}}>INVESTOR DEMO AVAILABLE</span>
                    </FastTypography>
                    {/* <FastTypography data-aos="fade-up" type="h4" noMargin style={{marginBottom: 25}} className={classes.typography}><span>Fair</span> to creators. <span>Accessible</span> to brands. <span>Free</span> to audiences.</FastTypography> */}

                    <div data-aos="fade-up" style={{marginBottom: 25}}
                                    className={classes.typography}>
                        <Box display="flex" flexDirection="column">
                            <div className={classes.info}>
                                <div className={classes.infoTitle}>MVP:</div>
                                <div className={classes.infoText}>
                                    A link-Tree-like platform, but with an expedited contracts management function to strike advertising/sponsorship deals with influencers in seconds
                                </div>
                            </div>
                            <div className={classes.info}>
                                <div className={`${classes.infoTitle} ${classes.infoTitle2}`}>FVP:</div>
                                <div className={classes.infoText}>
                                    The first Decentralized social media eco-system with autonomous
                                    infrastructure.
                                    Stalkless data management system that can produce higher sales
                                    conversions with expedited contracts on a platform with integrated
                                    ecommerce.
                                </div>
                            </div>
                        </Box>
                        <br/>
                        <span>BETTER FOR EVERYONE​</span>
                    </div>
                    {/* <FastTypography data-aos="fade-up" type="h4" noMargin className={classes.typography}><b>Unique</b> to everyone.</FastTypography> */}

                    <img data-aos="fade-up" className={classes.diagram} src="images/graph_web.png"/>
                </Box>

                <Box data-aos="fade-up" style={{width: '100%'}}>
                    <div className={classes.imageStack}>
                        <div data-aos="fade-up" className={`${classes.imageStackItem} ${classes.imageStackItem1}`}>
                            <img className={classes.imageStackItemImg} src="images/overlay4.png" alt="" />
                        </div>
                        <div data-aos="fade-up" className={`${classes.imageStackItem} ${classes.imageStackItem2}`}>
                            <img className={classes.imageStackItemImg} src="images/overlay1.png" alt="" />
                        </div>
                        <div data-aos="fade-up" className={`${classes.imageStackItem} ${classes.imageStackItem3}`}>
                            <img className={classes.imageStackItemImg} src="images/overlay2.png" alt="" />
                        </div>
                        <div data-aos="fade-up" className={`${classes.imageStackItem} ${classes.imageStackItem4}`}>
                            <img className={classes.imageStackItemImg} src="images/overlay3.png" alt="" />
                        </div>
                    </div>
                </Box>

                <AnchorLink offset='90' href='#video' className={classes.glitchWrapper} data-aos="fade-up">
                    <div className="wrapper">
                        <p className="glitch">
                            <span>L</span>
                            <span>e</span>
                            <span>a</span>
                            <span>r</span>
                            <span>n</span>
                            &nbsp;
                            <span>M</span>
                            <span>o</span>
                            <span>r</span>
                            <span>e</span>
                        </p>
                        <p className="glitch_fixed">
                            <span>L</span>
                            <span>e</span>
                            <span>a</span>
                            <span>r</span>
                            <span>n</span>
                            &nbsp;
                            <span>M</span>
                            <span>o</span>
                            <span>r</span>
                            <span>e</span>
                        </p>
                        <p className="glitch_opacity">
                            <span>L</span>
                            <span>e</span>
                            <span>a</span>
                            <span>r</span>
                            <span>n</span>
                            &nbsp;
                            <span>M</span>
                            <span>o</span>
                            <span>r</span>
                            <span>e</span>
                        </p>
                    </div>
                    <img className={classes.arrow} src="images/arrow-down.svg"/>
                </AnchorLink>
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
                left: 40px;
              }

              .span, .glitch span:nth-child(4) {
                left: 60px;
              }

              .span, .glitch span:nth-child(5) {
                left: 75px;
              }

              .span, .glitch span:nth-child(6) {
                left: 100px;
              }

              .span, .glitch span:nth-child(7) {
                left: 125px;
              }

              .span, .glitch span:nth-child(8) {
                left: 150px;
              }

              .span, .glitch span:nth-child(9) {
                left: 165px;
              }

              @media (max-width: 1200px) {
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
                  left: 60px;
                }

                .span, .glitch span:nth-child(6) {
                  left: 80px;
                }

                .span, .glitch span:nth-child(7) {
                  left: 95px;
                }

                .span, .glitch span:nth-child(8) {
                  left: 110px;
                }

                .span, .glitch span:nth-child(9) {
                  left: 125px;
                }
              }

              @media (max-width: 600px) {
                .glitch, .glitch_fixed, .glitch_opacity {
                  font-size: 12px;
                }

                .glitch_opacity {
                  top: -17px;
                  left: 0;
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
              }

            `}</style>
        </>
    )
}