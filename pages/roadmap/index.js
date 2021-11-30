import React from 'react'

import Header from '../../components/Header/Header'
import RoadmapPage from '../../components/RoadmapPage/RoadmapPage'
import Contacts from '../../components/Contacts/Contacts'
import Footer from '../../components/Footer/Footer'

export default function Roadmap() {
  return (
    <div style={{backgroundImage: 'linear-gradient(180deg, rgba(16, 16, 16, 0.259042) 24.13%, rgba(76, 15, 248, 0.129521) 100%)', backgroundColor: '#121017'}}>
      <Header />
      <RoadmapPage />
      <Contacts gradient/>
      <Footer gradient/>
    </div>
  )
}
