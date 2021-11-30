import React from 'react'
import AOS from 'aos';

import FirstScreen from './FirstScreen/FirstScreen'
import ThirdScreen from './ThirdScreen/ThirdScreen'
import FourthScreen from './FourthScreen/FourthScreen'


export default function LandingPage() {
    React.useEffect(() => {
        AOS.init({
            duration: 900
        })

        // idk why but AOS not workin' after loadin' landing page, so not ideal solution:
        const timer = setTimeout(() => AOS.refresh(), 500)

        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (
        <>
            <FirstScreen/>
            <style jsx>{`
              .video-title {
                font-size: 26px;
                color: white;
                background-color: #121017;
                text-align: center;
                margin: 0;
                font-weight: bold;
                padding-bottom: 24px;
              }

              #video {
                height: calc(100vh - 88px);
                background-color: #121017;
              }

              @media (max-width: 600px) {
                #video {
                  height: auto;
                }

                .video-title {
                  font-size: 18px;
                }
              }
            `}</style>
            <p className="video-title">
                Find out how we are transforming the way we monetize advertising and
                <br/>
                content to generate higher sales conversions and make creators more money
            </p>

            <div id="video">
                <iframe src='https://player.vimeo.com/video/443042145' width="100%" height="100%" frameBorder='0'
                        webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
            <ThirdScreen/>
            <FourthScreen/>
        </>
    )
}