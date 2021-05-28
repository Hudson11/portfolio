import Head from 'next/head'
import Image from 'next/image'
import FirstSection from './components/FisrtSection'
import SecondSection from './components/SecondSection'
import Toolbar from './components/Toolbar'

export default function Home() {
  return (
    <div>
      <Toolbar />
      <FirstSection />
      <SecondSection />
    </div>
  )
}
