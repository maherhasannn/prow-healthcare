'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function HealthPageClient() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HealthHero />
      <HealthHIPAA />
      <HealthFeatures />
      <HealthEHR />
      <HealthClinical />
      <Footer />
    </main>
  )
}

function HealthHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-32 pb-20 bg-gradient-to-b from-background-alt to-background">
      <div className="max-w-[var(--container-max-width)] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-heading font-semibold tracking-wider uppercase rounded-sm border border-accent/20">
              🏥 PROW® Health
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 text-balance leading-[1.1] tracking-tight"
          >
            HIPAA-Compliant AI<br />
            <span className="text-accent">for Healthcare Teams</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-text/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Clinical intelligence, EHR integration, and point-of-care support built for medical workflows. 
            Secure, compliant, and designed for healthcare providers.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-white font-medium rounded-sm hover:bg-accent-hover transition-colors shadow-lg"
            >
              Join Waitlist
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-accent/30 text-accent font-medium rounded-sm hover:border-accent transition-colors"
            >
              Schedule Demo
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20"
          >
            <HealthAnimation />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function HealthAnimation() {
  const nodes = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: 20 + (i % 3) * 30,
    y: 25 + Math.floor(i / 3) * 30,
    delay: i * 0.2,
  }))

  return (
    <div className="relative h-[300px] max-w-2xl mx-auto">
      <svg className="w-full h-full" viewBox="0 0 100 70" preserveAspectRatio="xMidYMid meet">
        {nodes.map((node, i) => (
          <g key={node.id}>
            {i < nodes.length - 1 && i % 3 !== 2 && (
              <motion.line
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${nodes[i + 1].x}%`}
                y2={`${nodes[i + 1].y}%`}
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-accent/30"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1, delay: node.delay, repeat: Infinity, repeatDelay: 2 }}
              />
            )}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="2"
              fill="currentColor"
              className="text-accent"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.3, 1],
                opacity: [0, 1, 1],
              }}
              transition={{
                duration: 0.6,
                delay: node.delay,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="4"
              fill="currentColor"
              className="text-accent/20"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                delay: node.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </g>
        ))}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.circle
            cx="50%"
            cy="50%"
            r="8"
            fill="currentColor"
            className="text-accent/10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.g>
      </svg>
    </div>
  )
}

function HealthHIPAA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="hipaa" className="py-32 px-6 md:px-12 bg-background-alt">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-background text-xs font-heading font-semibold tracking-wider uppercase text-text/70 rounded-sm mb-6">
              🛡️ HIPAA Compliance
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
              Three Safeguard Categories
            </h2>
            <p className="text-lg text-text/70 mb-8 leading-relaxed">
              All three safeguard categories are addressed for full HIPAA compliance. 
              Prow Health ensures comprehensive coverage across administrative, physical, and technical safeguards.
            </p>
            <ul className="space-y-4">
              {[
                'Administrative: BAA, data-handling policies, incident response',
                'Physical: HIPAA-eligible cloud infrastructure, U.S.-based hosting',
                'Technical: Encryption (AES-256), MFA, RBAC, full audit logging',
                'No training on PHI — hard guarantee',
                'PHI guardrails with detection, masking, and restriction',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-text/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] bg-gradient-to-br from-accent/5 to-accent/10 rounded-sm overflow-hidden border border-accent/20"
          >
            <ShieldAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ShieldAnimation() {
  const particles = Array.from({ length: 6 }, (_, i) => i)

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {[0, 1, 2].map((layer, i) => (
        <motion.div
          key={layer}
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{
            duration: 10 + i * 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div
            className="text-accent/20"
            style={{ fontSize: `${50 + layer * 20}px` }}
          >
            🛡️
          </div>
        </motion.div>
      ))}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="text-7xl text-accent relative z-10"
      >
        🛡️
      </motion.div>
      {particles.map((particle, i) => {
        const angle = (i / particles.length) * 360
        const radius = 35

        return (
          <motion.div
            key={particle}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              rotate: angle + 360,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.15,
            }}
          >
            <motion.div
              className="w-2 h-2 bg-accent rounded-full"
              style={{
                transform: `translate(${radius}px, -50%)`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.1,
              }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}

function HealthFeatures() {
  const features = [
    {
      title: 'HIPAA-Compliant by Design',
      description: 'End-to-end encryption and HIPAA safeguards built into every interaction. PHI stays protected and never trains models.',
      icon: '🏥',
    },
    {
      title: 'Clinical Intelligence',
      description: 'Understands medical protocols, clinical guidelines, and organizational policies. Answers grounded in evidence-based medicine.',
      icon: '🧠',
    },
    {
      title: 'Point-of-Care Support',
      description: 'Surface relevant patient information, treatment protocols, and clinical decision support when providers need it most.',
      icon: '⚡',
    },
    {
      title: 'PHI Guardrails',
      description: 'Detect PHI, mask or restrict outputs, disable risky prompts. Optional pre-processing layer for redaction or de-identification.',
      icon: '🛡️',
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-32 px-6 md:px-12 bg-background">
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
              visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
            }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 bg-background-alt text-xs font-heading font-semibold tracking-wider uppercase text-text/70 rounded-sm mb-6">
              Features
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-balance">
              Built for Healthcare
            </h2>
            <p className="text-xl text-text/70 max-w-2xl mx-auto">
              Every feature designed with HIPAA compliance, clinical accuracy, and provider workflows in mind.
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
                    transition: { duration: 0.6 },
                  },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-background-alt p-8 rounded-sm border border-accent/10 hover:border-accent/30 transition-all"
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

function HealthEHR() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="ehr" className="py-32 px-6 md:px-12 bg-background-alt">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] bg-gradient-to-br from-accent/5 to-accent/10 rounded-sm overflow-hidden border border-accent/20 order-2 lg:order-1"
          >
            <EHRAnimation />
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 bg-background text-xs font-heading font-semibold tracking-wider uppercase text-text/70 rounded-sm mb-6">
              🔌 EHR Integration
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
              Seamless Clinical System Integration
            </h2>
            <p className="text-lg text-text/70 mb-8 leading-relaxed">
              Bring your data from Epic, Cerner, and approved internal systems into a secure AI workspace. 
              Think and talk with your clinical data without disrupting existing workflows.
            </p>
            <ul className="space-y-4">
              {[
                'Epic integration',
                'Cerner integration',
                'Allscripts support',
                'API access for custom integrations',
                'No workflow disruption',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-text/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function EHRAnimation() {
  const servers = [
    { x: 25, y: 25, delay: 0 },
    { x: 75, y: 25, delay: 0.2 },
    { x: 50, y: 50, delay: 0.4 },
    { x: 25, y: 75, delay: 0.6 },
    { x: 75, y: 75, delay: 0.8 },
  ]

  const connections = [
    [0, 1], [0, 2], [1, 2], [2, 3], [2, 4], [3, 4],
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {connections.map(([start, end], i) => {
          const startServer = servers[start]
          const endServer = servers[end]
          return (
            <motion.line
              key={`line-${start}-${end}`}
              x1={startServer.x}
              y1={startServer.y}
              x2={endServer.x}
              y2={endServer.y}
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-accent/20"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1, 0],
                opacity: [0, 0.3, 0.3, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            />
          )
        })}

        {servers.map((server, i) => (
          <g key={i}>
            <motion.circle
              cx={server.x}
              cy={server.y}
              r="4"
              fill="currentColor"
              className="text-accent/10"
              animate={{
                r: [4, 8, 4],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                delay: server.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: [0, 1, 1],
              }}
              transition={{
                duration: 0.6,
                delay: server.delay,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <circle
                cx={server.x}
                cy={server.y}
                r="3"
                fill="currentColor"
                className="text-accent"
              />
            </motion.g>
          </g>
        ))}
      </svg>
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-4xl text-accent/30">🏥</div>
      </motion.div>
    </div>
  )
}

function HealthClinical() {
  const capabilities = [
    {
      title: '📋 Evidence-Based Responses',
      description: 'Answers grounded in medical protocols, clinical guidelines, and your organization\'s policies. All sources are cited and verifiable.',
    },
    {
      title: '💊 Treatment Protocol Support',
      description: 'Access to latest treatment guidelines, drug interactions, and clinical decision support tools at the point of care.',
    },
    {
      title: '📊 Patient Data Analysis',
      description: 'Analyze patient information, lab results, and medical history while maintaining complete PHI protection and HIPAA compliance.',
    },
    {
      title: '📝 Clinical Documentation',
      description: 'Assist with clinical notes, documentation, and care coordination while ensuring accuracy and compliance with medical standards.',
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-32 px-6 md:px-12 bg-background">
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
              visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
            }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 bg-background-alt text-xs font-heading font-semibold tracking-wider uppercase text-text/70 rounded-sm mb-6">
              Clinical Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-balance">
              Clinical Intelligence at Your Fingertips
            </h2>
            <p className="text-xl text-text/70 max-w-2xl mx-auto">
              Prow Health enables healthcare teams to ask questions, analyze information, and reason with clinical data 
              using medical protocols, guidelines, and organizational policies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6 },
                  },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-background-alt p-8 rounded-sm border border-accent/10 hover:border-accent/30 transition-all"
              >
                <h3 className="text-2xl font-heading font-semibold mb-4">{capability.title}</h3>
                <p className="text-text/70 leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

