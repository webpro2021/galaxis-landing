import React from 'react'
import AOS from 'aos';

import SecondScreen from './SecondScreen/SecondScreen'

export default function SupportPage() {
  React.useEffect(() => {
    AOS.init({
      duration : 900
    })
  }, [])
  
  return(
    <>
      <SecondScreen />
    </>
  )
}