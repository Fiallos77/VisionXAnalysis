'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import VideoCard from '@/components/VideoCard'
import PlayerCard from '@/components/PlayerCard'
import SectionHeader from '@/components/SectionHeader'
import { analyses, players } from '@/lib/data'

const stats = [
  { value: '60+', label: 'Analyses Published' },
  { value: '30+', label: 'Players Profiled' },
  { value: '12', label: 'Countries Covered' },
  { value: '4K', label: 'Hours of Footage' },
]

export default function HomePage() {
  const featuredAnalyses = analyses.slice(0, 3)
  const featuredPlayers = players.slice(0, 4)

  return (
    <div className="relative">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pitch-grid">
        {/* Background glow */}
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        {/* Scan line effect */}
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/20 to-transparent animate-scan opacity-30 pointer-events-none" />

        <div className="container-px max-w-screen-xl mx-auto pt-24 pb-20 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-accent-green" />
              <span className="label-tag">Football Scouting & Analysis</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse-slow" />
                <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase">Live</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="display-heading text-5xl md:text-7xl xl:text-8xl leading-none mb-6"
            >
              <span className="block text-text-primary">Seeing the Game</span>
              <span className="block text-gradient-green">Differently.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mb-10"
            >
              Vision X Analysis is an independent football scouting and video analysis project.
              We break down player profiles, tactical patterns and positional behaviours across
              leagues and levels — with precision, context and objectivity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/analysis" className="btn-primary">
                View Analysis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/methodology" className="btn-outline">
                Our Methodology
              </Link>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-pitch-border mt-20 rounded-xl overflow-hidden border border-pitch-border"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-pitch-dark px-6 py-5">
                <div className="font-display font-bold text-3xl text-accent-green mb-1">{stat.value}</div>
                <div className="font-mono text-[11px] tracking-wider text-text-muted uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── RECENT ANALYSIS ─── */}
      <section className="section-spacing container-px max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            tag="Recent Work"
            title="Latest Analysis"
            subtitle="A selection of our most recent player and tactical analysis publications."
          />
          <Link href="/analysis" className="btn-outline text-xs py-2 px-4 shrink-0">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredAnalyses.map((analysis, i) => (
            <motion.div
              key={analysis.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <VideoCard analysis={analysis} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── FEATURED PLAYERS ─── */}
      <section className="section-spacing bg-pitch-dark border-y border-pitch-border">
        <div className="container-px max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeader
              tag="Players"
              title="Profiled Players"
              subtitle="Athletes we have observed, analysed and documented across multiple performances."
            />
            <Link href="/players" className="btn-outline text-xs py-2 px-4 shrink-0">
              All Players →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredPlayers.map((player, i) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <PlayerCard player={player} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ─── */}
      <section className="section-spacing container-px max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              tag="What We Do"
              title="Analysis Built on Observation"
              subtitle="We watch football with intent. Every profile begins with hours of live and recorded observation before a frame is cut."
            />
            <div className="mt-8 space-y-4">
              {['Match observation across multiple fixtures', 'Selective action and pattern capture', 'Frame-by-frame video breakdown', 'Contextual tactical interpretation'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green shrink-0" />
                  <span className="text-text-secondary text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/methodology" className="btn-primary">
                Read Our Methodology
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="card-base border-gradient p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 rounded-full blur-3xl" />
              <div className="font-mono text-[10px] tracking-widest text-accent-green uppercase mb-4">Vision X Principle</div>
              <blockquote className="font-display text-2xl md:text-3xl font-bold leading-tight text-text-primary mb-6">
                "Observation before assumption. Context before conclusion."
              </blockquote>
              <p className="text-text-secondary text-sm leading-relaxed">
                Every analysis produced by Vision X is grounded in sustained observation. We do not shortcut match intelligence with statistics alone. The work starts before the video does.
              </p>
              <div className="mt-6 pt-6 border-t border-pitch-border flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-green" />
                <span className="font-mono text-xs text-text-muted tracking-wider">VISION X ANALYSIS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-spacing bg-pitch-dark border-t border-pitch-border relative overflow-hidden">
        <div className="absolute inset-0 pitch-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent-green/5 blur-3xl rounded-full" />
        <div className="container-px max-w-screen-xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="label-tag mb-4 flex justify-center items-center gap-3">
              <span className="w-6 h-px bg-accent-green" />
              Request Analysis
              <span className="w-6 h-px bg-accent-green" />
            </div>
            <h2 className="display-heading text-4xl md:text-5xl mb-5">
              Interested in a Player Analysis?
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Clubs, coaches and representatives looking for independent analysis of a specific player or profile can get in touch with us directly.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
