import HeroSection from '@/components/home/HeroSection'
import EventosSection from '@/components/home/EventosSection'
import ServiciosSection from '@/components/home/ServiciosSection'
import StatsSection from '@/components/home/StatsSection'
import ResultadosSection from '@/components/home/ResultadosSection'

// P\u00E1gina principal que ensambla todas las secciones del home
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EventosSection />
      <ServiciosSection />
      <StatsSection />
      <ResultadosSection />
    </>
  )
}
