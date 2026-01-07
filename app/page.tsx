import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HIPAASafeguards from '@/components/HIPAASafeguards'
import PrivacyDataProtection from '@/components/PrivacyDataProtection'
import ChatIntegration from '@/components/ChatIntegration'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HIPAASafeguards />
      <PrivacyDataProtection />
      <ChatIntegration />
      <Footer />
    </main>
  )
}








