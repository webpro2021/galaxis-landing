import React from 'react'
import AOS from 'aos';

import FirstScreen from './FirstScreen/FirstScreen'
import SecondScreen from './SecondScreen/SecondScreen'
import ThirdScreen from './ThirdScreen/ThirdScreen'

export default function SupportPage() {
  React.useEffect(() => {
    AOS.init({
      duration : 900
    })
  }, [])
  
  return(
    <>
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
    </>
  )
}