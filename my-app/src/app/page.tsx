import Image from 'next/image'
import Hero from '@/app/components/widgets/Hero'
import Practice from './components/widgets/Practice'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      <Practice />
      {/* Core Track Section */}
    </main>
  )
}


