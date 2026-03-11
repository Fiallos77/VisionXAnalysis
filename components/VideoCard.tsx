'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Analysis } from '@/lib/data'

interface VideoCardProps {
  analysis: Analysis
}

export default function VideoCard({ analysis }: VideoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <Link href={`/analysis/${analysis.id}`} className="group block card-base hover:border-pitch-muted transition-colors duration-300">
        {/* Thumbnail */}
        <div className="relative overflow-hidden aspect-video bg-pitch-muted">
          <img
            src={analysis.thumbnailUrl}
            alt={analysis.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-pitch-black/80 via-transparent to-transparent" />
          {/* Play icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 rounded-full bg-pitch-black/60 backdrop-blur-sm border border-accent-green flex items-center justify-center">
              <svg className="w-5 h-5 text-accent-green ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          {/* Duration badge */}
          <div className="absolute bottom-2 right-2 bg-pitch-black/80 font-mono text-[10px] text-text-secondary px-2 py-0.5 rounded tracking-wider">
            {analysis.duration}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-[10px] text-accent-green tracking-widest uppercase">
              {analysis.position}
            </span>
            <span className="text-pitch-border">·</span>
            <span className="font-mono text-[10px] text-text-muted tracking-widest">
              {new Date(analysis.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
          </div>
          <h3 className="font-display font-semibold text-base text-text-primary leading-snug mb-1 group-hover:text-accent-green transition-colors duration-200">
            {analysis.title}
          </h3>
          <p className="text-text-secondary text-xs font-mono">{analysis.playerName}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {analysis.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 bg-pitch-muted border border-pitch-border text-text-muted rounded tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
