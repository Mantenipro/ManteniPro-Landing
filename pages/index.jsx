import { Montserrat, Source_Sans_3 } from 'next/font/google'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import KeyBenefits from '@/components/KeyBenefits'
import HowWork from '@/components/HowWork'
import PriceSection from '@/components/PriceSection'

const montserrat = Montserrat({ subsets: ['latin'] })
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${montserrat.className}`}>
      <Nav />
      <div className='h-dvh'>
        <Hero />
        <KeyBenefits />
        <HowWork />
        <PriceSection />
      </div>
    </main>
  )
}
