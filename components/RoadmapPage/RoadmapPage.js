import React from 'react'
import AOS from 'aos';

import FirstScreen from './FirstScreen/FirstScreen'
import SecondScreen from './SecondScreen/SecondScreen'
import ThirdScreen from './ThirdScreen/ThirdScreen'
import FourthScreen from './FourthScreen/FourthScreen'

export default function RoadmapPage() {
  React.useEffect(() => {
    AOS.init({
      duration : 900
    })
  }, [])
  
  return(
    <>
      {/* <FirstScreen /> */}
      {/* <SecondScreen /> */}
      {/* <ThirdScreen /> */}
      <FourthScreen />
    </>
  )
}