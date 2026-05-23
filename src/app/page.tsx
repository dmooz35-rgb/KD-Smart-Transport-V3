'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CyberpunkButton, NeonText, GlassCard } from '@/components/ui/CyberpunkUI'
import { Interactive3D, HolographicEffect } from '@/components/3d/Interactive3D'
import Link from 'next/link'
import Map, { Marker } from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css'

export default function Home() {
  const features = [
    {
      icon: '🚗',
      title: 'Smart Booking',
      description: 'Real-time ride booking with AI-powered matching',
    },
    {
      icon: '💬',
      title: 'WhatsApp Integration',
      description: 'Instant notifications and updates via WhatsApp',
    },
    {
      icon: '💰',
      title: 'Secure Payments',
      description: 'Multiple payment methods with fraud protection',
    },
    {
      icon: '📊',
      title: 'Admin Dashboard',
      description: 'Comprehensive analytics and management tools',
    },
    {
      icon: '🌐',
      title: 'Live Tracking',
      description: 'Real-time GPS tracking and route optimization',
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Fully responsive design for all devices',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

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
            Next-Generation Cyberpunk Ride-Sharing Platform with 3D Interactive Experience
          </p>

          {/* 3D Cube */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <HolographicEffect>
              <div className="h-80">
                <Interactive3D type="cube" />
              </div>
            </HolographicEffect>
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
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <GlassCard className="h-full hover:shadow-lg hover:shadow-purple-500/50">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Active Users', value: '50K+' },
              { label: 'Rides Completed', value: '100K+' },
              { label: 'Cities Covered', value: '15+' },
              { label: 'Revenue Generated', value: '₨50Cr+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-8"
          >
            <NeonText color="cyan">Service Area</NeonText>
          </motion.h2>
          <div className="w-full h-[500px] rounded-lg overflow-hidden border border-cyan-500/30">
            <Map
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
              initialViewState={{
                longitude: 46.6753,
                latitude: 24.7136,
                zoom: 10
              }}
              mapStyle="mapbox://styles/mapbox/dark-v11"
            >
              <Marker longitude={46.6753} latitude={24.7136} color="red" />
            </Map>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-cyan-500/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2026 KD Smart Transport. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <NeonText color="cyan" className="text-xs">
              Powered by Next.js, Tailwind CSS, Framer Motion & Three.js
            </NeonText>
          </p>
        </div>
      </footer>
    </div>
  )
}
