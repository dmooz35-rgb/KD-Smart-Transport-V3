'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CyberpunkButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export function CyberpunkButton({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
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
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
    </motion.button>
  )
}

interface NeonTextProps {
  children: React.ReactNode
  color?: 'cyan' | 'pink' | 'purple' | 'green'
  className?: string
}

export function NeonText({ children, color = 'cyan', className = '' }: NeonTextProps) {
  const colorStyles = {
    cyan: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]',
    pink: 'text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]',
    purple: 'text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]',
    green: 'text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]',
  }

  return (
    <span className={`${colorStyles[color]} ${className}`}>
      {children}
    </span>
  )
}

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}

interface CyberpunkInputProps {
  label?: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export function CyberpunkInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
}: CyberpunkInputProps) {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-cyan-400 text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-slate-900/50 border-2 border-cyan-500/30 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all duration-300"
      />
    </div>
  )
}
