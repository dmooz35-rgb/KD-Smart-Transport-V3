'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CyberpunkButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

function CyberpunkButton({
  children,
  variant = 'primary',
  size = 'md',
}: CyberpunkButtonProps) {
  const baseStyles = 'relative font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden'
  
  const variantStyles = {
    primary: 'bg-cyan-500 text-black hover:bg-cyan-400 border-2 border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]',
    secondary: 'bg-transparent text-purple-400 border-2 border-purple-500 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

function NeonText({ children, color = 'cyan' }: { children: React.ReactNode; color?: string }) {
  const colorStyles: Record<string, string> = {
    cyan: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]',
    pink: 'text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]',
  }

  return <span className={colorStyles[color] || colorStyles.cyan}>{children}</span>
}

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const features = [
    { icon: '🚗', title: 'Smart Booking', description: 'Real-time ride booking with AI-powered matching' },
    { icon: '💬', title: 'WhatsApp Integration', description: 'Instant notifications and updates via WhatsApp' },
    { icon: '💰', title: 'Secure Payments', description: 'Multiple payment methods with fraud protection' },
    { icon: '📊', title: 'Admin Dashboard', description: 'Comprehensive analytics and management tools' },
    { icon: '🌐', title: 'Live Tracking', description: 'Real-time GPS tracking and route optimization' },
    { icon: '📱', title: 'Mobile First', description: 'Fully responsive design for all devices' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <NeonText color="cyan">KD Smart</NeonText> Transport
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Next-Generation Cyberpunk Ride-Sharing Platform
          </p>

          {/* 3D Placeholder */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 border-4 border-cyan-400 rounded-lg animate-spin" style={{ animationDuration: '3s' }} />
                <p className="text-cyan-400">3D Interactive Experience</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/booking">
              <CyberpunkButton variant="primary" size="lg">
                Book a Ride
              </CyberpunkButton>
            </Link>
            <Link href="/admin">
              <CyberpunkButton variant="secondary" size="lg">
                Admin Dashboard
              </CyberpunkButton>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <NeonText color="pink">Features</NeonText>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <GlassCard key={index} className="h-full hover:shadow-lg hover:shadow-purple-500/50">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </GlassCard>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Active Users', value: '50K+' },
              { label: 'Rides Completed', value: '100K+' },
              { label: 'Cities Covered', value: '15+' },
              { label: 'Revenue Generated', value: '50Cr+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-cyan-500/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>2026 KD Smart Transport. All rights reserved.</p>
          <p className="mt-2 text-sm text-cyan-400">
            Powered by Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  )
}
