import Head from 'next/head'
import Image from 'next/image'
import CareerSection from '../components/CareerSection'
import ContactSection from '../components/ContactSection'
import FirstSection from '../components/FisrtSection'
import SecondSection from '../components/SecondSection'
import ServiceSection from '../components/ServicesSection'
import Toolbar from '../components/Toolbar'

export default function Home() {
  return (
    <div>
      <Toolbar />
      <FirstSection />
      <SecondSection />
      <CareerSection />
      <ServiceSection />
      <ContactSection />
    </div>
  )
}
