'use client'

import { motion } from 'framer-motion'
import PlayerCard from '@/components/PlayerCard'
import SectionHeader from '@/components/SectionHeader'
import PageTransition from '@/components/PageTransition'
import { players } from '@/lib/data'

export default function PlayersPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        {/* Header */}
        <section className="container-px max-w-screen-xl mx-auto py-14 border-b border-pitch-border relative">
          <div className="absolute inset-0 pitch-grid opacity-30" />
          <div className="relative">
            <SectionHeader
              tag="Player Database"
              title="Profiled Players"
              subtitle="Athletes observed and documented by Vision X Analysis. Each profile is built on direct match observation across multiple performances."
            />
          </div>
        </section>

        <section className="container-px max-w-screen-xl mx-auto py-14">
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {['All Positions', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward'].map((filter, i) => (
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
              {players.length} players
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {players.map((player, i) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <PlayerCard player={player} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
