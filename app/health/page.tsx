import { Metadata } from 'next'
import HealthPageClient from './HealthPageClient'

export const metadata: Metadata = {
  title: 'PROW® Health — HIPAA-Compliant AI for Healthcare Providers',
  description: 'HIPAA-compliant AI workspace for healthcare teams. Clinical intelligence, EHR integration, and point-of-care support built for medical workflows.',
}

export default function HealthPage() {
  return <HealthPageClient />
}
