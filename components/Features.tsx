'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'HIPAA-Compliant by Design',
    description: 'End-to-end encryption and HIPAA safeguards are built into every interaction. PHI and other sensitive data stay protected and never train models.',
    icon: '🔒',
  },
  {
    title: 'Clinical Intelligence',
    description: 'Enables teams to ask questions, analyze information, and reason with their data using medical protocols, clinical guidelines, and organizational policies. Answers are grounded in evidence-based sources and controlled internal data.',
    icon: '🧠',
  },
  {
    title: 'EHR Integration',
    description: 'Bring your data from Epic, Cerner, and approved internal systems into a secure AI workspace. Think and talk with your data without disrupting existing workflows.',
    icon: '🔌',
  },
  {
    title: 'Point-of-Care Support',
    description: 'Surface relevant information, protocols, and decision support at the moment of need — enabling secure, real-time reasoning in clinical and other high-stakes professional workflows.',
    icon: '⚡',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="py-32 px-6 md:px-12 bg-background-alt">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
            }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 bg-background text-xs font-heading font-semibold tracking-wider uppercase text-text/70 rounded-sm mb-6">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-balance">
              Built for Sensitive & Regulated Work
            </h2>
            <p className="text-xl text-text/70 max-w-2xl mx-auto">
              Every feature is designed so teams can think, talk, and collaborate with their data securely — with HIPAA compliance, data privacy, and controlled AI workflows as the foundation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
                  },
                }}
                whileHover={{ y: -8 }}
                className="bg-background p-8 rounded-sm border border-text/5 hover:border-text/10 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                <p className="text-text/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}









