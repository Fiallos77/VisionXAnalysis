'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeader({ tag, title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={center ? 'text-center' : ''}
    >
      {tag && (
        <div className={`flex items-center gap-3 mb-3 ${center ? 'justify-center' : ''}`}>
          <span className="w-6 h-px bg-accent-green" />
          <span className="label-tag">{tag}</span>
        </div>
      )}
      <h2 className="display-heading text-3xl md:text-4xl xl:text-5xl text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
