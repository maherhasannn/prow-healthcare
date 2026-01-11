import { Metadata } from 'next'
import ProPageClient from './ProPageClient'

export const metadata: Metadata = {
  title: 'PROW® Pro — Secure AI Workspace for High-Trust Professional Work',
  description: 'Private AI workspace for publicists, journalists, and professional teams handling sensitive information. Secure, compliant, and built for organizations that cannot risk data exposure.',
}

export default function ProPage() {
  return <ProPageClient />
}
