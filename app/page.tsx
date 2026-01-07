import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HIPAASafeguards from '@/components/HIPAASafeguards'
import KnowledgePool from '@/components/KnowledgePool'
import ChatIntegration from '@/components/ChatIntegration'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HIPAASafeguards />
      <KnowledgePool />
      <ChatIntegration />
      <Footer />
    </main>
  )
}








