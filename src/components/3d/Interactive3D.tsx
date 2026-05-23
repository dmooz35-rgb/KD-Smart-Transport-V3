'use client'

import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

interface AnimatedBoxProps {
  color?: string
}

function AnimatedBox({ color = '#00ffff' }: AnimatedBoxProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color={color}
        wireframe
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

function AnimatedSphere({ color = '#ff00ff' }: AnimatedBoxProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.1)
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color={color}
        wireframe
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

function AnimatedTorus({ color = '#00ff00' }: AnimatedBoxProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.z += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1.5, 0.5, 16, 100]} />
      <meshStandardMaterial
        color={color}
        wireframe
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

interface Interactive3DProps {
  type?: 'cube' | 'sphere' | 'torus'
  color?: string
}

export function Interactive3D({ type = 'cube', color }: Interactive3DProps) {
  const renderShape = () => {
    switch (type) {
      case 'sphere':
        return <AnimatedSphere color={color || '#ff00ff'} />
      case 'torus':
        return <AnimatedTorus color={color || '#00ff00'} />
      case 'cube':
      default:
        return <AnimatedBox color={color || '#00ffff'} />
    }
  }

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#ff00ff" intensity={0.5} />
        {renderShape()}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Suspense>
    </Canvas>
  )
}

interface HolographicEffectProps {
  children: React.ReactNode
  className?: string
}

export function HolographicEffect({ children, className = '' }: HolographicEffectProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg blur-xl" />
      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden">
        {children}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.03)_2px,rgba(0,255,255,0.03)_4px)] pointer-events-none" />
      </div>
    </div>
  )
}
