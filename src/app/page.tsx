import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Packages } from '@/components/sections/Packages'
import { Professionals } from '@/components/sections/Professionals'
import { Shop } from '@/components/sections/Shop'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Packages />
      <Professionals />
      <Shop />
      <Footer />
    </main>
  )
}
