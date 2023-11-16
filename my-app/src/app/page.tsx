import Image from 'next/image'
import Hero from '@/app/components/widgets/Hero'
import Practice from './components/widgets/Practice'
import CoreTracks from './components/widgets/CoreTracks'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Core Track Section */}
      <CoreTracks />
      
      {/* <Practice /> */}
    </main>
  )
}


