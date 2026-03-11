'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import { analyses, players } from '@/lib/data'

interface Props {
  params: { id: string }
}

export default function AnalysisDetailPage({ params }: Props) {
  const analysis = analyses.find((a) => a.id === params.id)
  if (!analysis) return notFound()

  const player = players.find((p) => p.id === analysis.playerId)

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="container-px max-w-screen-xl mx-auto pt-8 pb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
            <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
            <span>/</span>
            <Link href="/analysis" className="hover:text-accent-green transition-colors">Analysis</Link>
            <span>/</span>
            <span className="text-text-secondary">{analysis.title}</span>
          </div>
        </div>

        <div className="container-px max-w-screen-xl mx-auto">
          <div className="max-w-4xl">
            {/* Meta */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="label-tag">{analysis.position}</span>
                <span className="font-mono text-[10px] text-text-muted">
                  {new Date(analysis.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <span className="font-mono text-[10px] text-text-muted">· {analysis.duration}</span>
              </div>
              <h1 className="display-heading text-4xl md:text-5xl xl:text-6xl mb-3">
                {analysis.title}
              </h1>
              <p className="text-text-secondary text-base mb-6">{analysis.playerName}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {analysis.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[11px] px-3 py-1 bg-pitch-muted border border-pitch-border text-text-muted rounded tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Video placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative aspect-video bg-pitch-card border border-pitch-border rounded-xl overflow-hidden mb-10"
            >
              <img src={analysis.thumbnailUrl} alt={analysis.title} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-accent-green flex items-center justify-center bg-pitch-black/60 backdrop-blur-sm">
                  <svg className="w-7 h-7 text-accent-green ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-mono text-xs text-text-muted tracking-widest">Full analysis video</span>
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="prose-custom mb-10"
            >
              <div className="label-tag mb-3">Overview</div>
              <p className="text-text-secondary leading-relaxed">{analysis.summary}</p>
            </motion.div>

            {/* Player link */}
            {player && (
              <div className="card-base border-gradient p-5 flex items-center gap-4">
                <img src={player.imageUrl} alt={player.name} className="w-14 h-14 rounded-lg object-cover object-top grayscale" />
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[10px] text-accent-green tracking-widest uppercase mb-0.5">{player.position}</div>
                  <div className="font-display font-bold text-text-primary">{player.name}</div>
                  <div className="font-mono text-xs text-text-muted">{player.club}</div>
                </div>
                <Link href={`/players/${player.id}`} className="btn-outline text-xs py-2 px-4 shrink-0">
                  Full Profile →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
