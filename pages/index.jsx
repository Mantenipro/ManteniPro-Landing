import { Montserrat, Source_Sans_3 } from 'next/font/google'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import KeyBenefits from '@/components/KeyBenefits'
import PriceSection from '@/components/PriceSection'
import AboutUs from '@/components/AboutUs'

const montserrat = Montserrat({ subsets: ['latin'] })
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${montserrat.className}`}>
      <Nav />
      <div className='h-dvh'>
        <Hero />
        <KeyBenefits />
        <AboutUs/>
        <PriceSection />
        
      </div>
      
    </main>
  )
}
