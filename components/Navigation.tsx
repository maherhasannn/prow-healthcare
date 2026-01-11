'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [proOpen, setProOpen] = useState(false)
  const [healthOpen, setHealthOpen] = useState(false)
  const proRef = useRef<HTMLDivElement>(null)
  const healthRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (proRef.current && !proRef.current.contains(event.target as Node)) {
        setProOpen(false)
      }
      if (healthRef.current && !healthRef.current.contains(event.target as Node)) {
        setHealthOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-black/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <span className="font-heading text-2xl font-bold tracking-tight">PROW</span>
            </motion.div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="relative" ref={proRef}>
              <button
                onClick={() => {
                  setProOpen(!proOpen)
                  setHealthOpen(false)
                }}
                className="text-sm font-medium text-text hover:text-accent transition-colors flex items-center gap-1"
              >
                PROW® Pro
                <svg
                  className={`w-4 h-4 transition-transform ${proOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {proOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-background border border-text/10 rounded-sm shadow-lg py-2"
                  >
                    <Link
                      href="/pro"
                      className="block px-4 py-2 text-sm text-text hover:bg-background-alt transition-colors"
                      onClick={() => setProOpen(false)}
                    >
                      Overview
                    </Link>
                    <Link
                      href="/pro#features"
                      className="block px-4 py-2 text-sm text-text hover:bg-background-alt transition-colors"
                      onClick={() => setProOpen(false)}
                    >
                      Features
                    </Link>
                    <Link
                      href="/pro#security"
                      className="block px-4 py-2 text-sm text-text hover:bg-background-alt transition-colors"
                      onClick={() => setProOpen(false)}
                    >
                      Security
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative" ref={healthRef}>
              <button
                onClick={() => {
                  setHealthOpen(!healthOpen)
                  setProOpen(false)
                }}
                className="text-sm font-medium text-text hover:text-accent transition-colors flex items-center gap-1"
              >
                PROW® Health
                <svg
                  className={`w-4 h-4 transition-transform ${healthOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {healthOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-background border border-text/10 rounded-sm shadow-lg py-2"
                  >
                    <Link
                      href="/health"
                      className="block px-4 py-2 text-sm text-text hover:bg-background-alt transition-colors"
                      onClick={() => setHealthOpen(false)}
                    >
                      Overview
                    </Link>
                    <Link
                      href="/health#hipaa"
                      className="block px-4 py-2 text-sm text-text hover:bg-background-alt transition-colors"
                      onClick={() => setHealthOpen(false)}
                    >
                      HIPAA Compliance
                    </Link>
                    <Link
                      href="/health#ehr"
                      className="block px-4 py-2 text-sm text-text hover:bg-background-alt transition-colors"
                      onClick={() => setHealthOpen(false)}
                    >
                      EHR Integration
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#features" className="text-sm font-medium text-text hover:text-accent transition-colors">
              Features
            </a>
            <a href="#hipaa-safeguards" className="text-sm font-medium text-text hover:text-accent transition-colors">
              HIPAA Compliance
            </a>
            <a href="#integrations" className="text-sm font-medium text-text hover:text-accent transition-colors">
              Integrations
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-text text-background text-sm font-medium rounded-sm hover:bg-accent transition-colors"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}








