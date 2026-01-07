'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function KnowledgePool() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-32 px-6 md:px-12 bg-background-alt">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="relative h-[500px] bg-background rounded-sm overflow-hidden order-2 lg:order-1"
          >
            <KnowledgeNetwork />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 bg-background text-xs font-heading font-semibold tracking-wider uppercase text-text/70 rounded-sm mb-6">
              Intelligence
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
              Your Knowledge, Amplified
            </h2>
            <p className="text-lg text-text/70 mb-8 leading-relaxed">
              Prow builds a living map of your organization's knowledge. Documents, policies, 
              conversations—all converging into a unified intelligence that grows smarter with every interaction.
            </p>
            <ul className="space-y-4">
              {[
                'Automatic knowledge extraction from your documents',
                'Context-aware responses using your company data',
                'Continuous learning from team interactions',
                'Privacy-preserving knowledge graph',
              ].map((item, i) => (
                <motion.li
                  key={item}
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

function KnowledgeNetwork() {
  const nodes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: 20 + (i % 5) * 20,
    y: 20 + Math.floor(i / 5) * 25,
    delay: i * 0.1,
  }))

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {nodes.map((node, i) => (
          <g key={node.id}>
            {/* Connections */}
            {i < nodes.length - 1 && (
              <motion.line
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${nodes[i + 1].x}%`}
                y2={`${nodes[i + 1].y}%`}
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-accent/20"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1, delay: node.delay }}
              />
            )}
            {/* Nodes */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="2"
              fill="currentColor"
              className="text-accent"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: node.delay }}
            />
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="4"
              fill="currentColor"
              className="text-accent/20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 2, delay: node.delay, repeat: Infinity }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}








