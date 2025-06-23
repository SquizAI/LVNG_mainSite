import Navigation from '@/components/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TechnologySection from '@/components/sections/TechnologySection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TechnologySection />
      <ContactSection />
      <Footer />
    </main>
  )
} 