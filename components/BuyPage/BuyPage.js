import React from 'react'
import AOS from 'aos';

import FirstScreen from './FirstScreen/FirstScreen'

export default function EcosystemPage() {
  React.useEffect(() => {
    AOS.init({
      duration : 900
    })
  }, [])
  
  return(
    <>
      <FirstScreen />
    </>
  )
}