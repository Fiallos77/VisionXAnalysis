'use client'

import { motion } from 'framer-motion'
import VideoCard from '@/components/VideoCard'
import SectionHeader from '@/components/SectionHeader'
import PageTransition from '@/components/PageTransition'
import { analyses } from '@/lib/data'

export default function AnalysisPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        {/* Header */}
        <section className="container-px max-w-screen-xl mx-auto py-14 border-b border-pitch-border relative">
          <div className="absolute inset-0 pitch-grid opacity-30" />
          <div className="relative">
            <SectionHeader
              tag="Analysis Archive"
              title="All Analysis Work"
              subtitle="Video analysis and player profiles published by Vision X. Browse by player, position or theme."
            />
          </div>
        </section>

        {/* Grid */}
        <section className="container-px max-w-screen-xl mx-auto py-14">
          {/* Filter bar placeholder */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {['All', 'Midfielder', 'Defender', 'Forward', 'Goalkeeper'].map((filter, i) => (
              <button
                key={filter}
                className={`font-mono text-[11px] tracking-widest uppercase px-4 py-2 rounded border transition-colors duration-200 ${
                  i === 0
                    ? 'bg-accent-green text-pitch-black border-accent-green'
                    : 'bg-transparent border-pitch-border text-text-muted hover:border-accent-green hover:text-accent-green'
                }`}
              >
                {filter}
              </button>
            ))}
            <div className="ml-auto font-mono text-[11px] text-text-muted">
              {analyses.length} analyses
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {analyses.map((analysis, i) => (
              <motion.div
                key={analysis.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <VideoCard analysis={analysis} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
