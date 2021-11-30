import React from 'react'

import Header from '../components/Header/Header'
import LandingPage from '../components/LandingPage/LandingPage'
import Contacts from '../components/Contacts/Contacts'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <LandingPage />
      <Contacts />
      <Footer />
    </>
  )
}
