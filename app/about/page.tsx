'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'
import SectionHeader from '@/components/SectionHeader'

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        {/* Header */}
        <section className="container-px max-w-screen-xl mx-auto py-14 border-b border-pitch-border relative overflow-hidden">
          <div className="absolute inset-0 pitch-grid opacity-30" />
          <div className="absolute right-0 top-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
          <div className="relative max-w-3xl">
            <SectionHeader
              tag="About Vision X"
              title="An Analysis Project Built on Football Observation"
            />
            <p className="text-text-secondary leading-relaxed text-base mt-4 max-w-2xl">
              Vision X Analysis is an independent football scouting and video analysis project. We do not represent clubs, agencies or players. Our work is driven entirely by an interest in understanding football — how players move, decide, adapt and contribute within structured systems.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="container-px max-w-screen-xl mx-auto py-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <div className="label-tag mb-3">What We Do</div>
                <p className="text-text-secondary leading-relaxed">
                  We observe professional and semi-professional players across multiple performances, then produce video analysis profiles that break down technical qualities, positional behaviour, tactical contribution and areas for development. Our profiles are built from sustained observation — not statistical summaries or brief highlights.
                </p>
              </div>
              <div>
                <div className="label-tag mb-3">Why We Do It</div>
                <p className="text-text-secondary leading-relaxed">
                  Football analysis is growing rapidly, but much of what exists prioritises production over substance. Vision X was created to offer a different approach — rigorous, contextual, and direct. We are interested in players who do not always appear in the right environments, and in making their qualities visible and documented.
                </p>
              </div>
              <div>
                <div className="label-tag mb-3">Who Is It For</div>
                <p className="text-text-secondary leading-relaxed">
                  Our analysis is relevant to coaches, scouts, directors and analysts who value evidence-based player assessment. We also publish openly because we believe well-documented work has value beyond any single transaction.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-5"
            >
              {/* Values cards */}
              {[
                { icon: '◈', title: 'Independent', body: 'No affiliations, sponsorships or commercial relationships that influence the content of our analysis.' },
                { icon: '◉', title: 'Observation-First', body: 'We always begin with hours of full-match observation before selecting clips or writing conclusions.' },
                { icon: '◫', title: 'Context-Driven', body: 'Every player action is evaluated within the match state, the system in use and the opponent\'s structure.' },
                { icon: '◳', title: 'Precise Language', body: 'We write to describe accurately, not to impress. Our conclusions are supported by the footage we reference.' },
              ].map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="card-base p-5 flex gap-4 items-start"
                >
                  <span className="text-accent-green text-xl shrink-0 mt-0.5">{val.icon}</span>
                  <div>
                    <div className="font-display font-bold text-text-primary mb-1">{val.title}</div>
                    <p className="text-text-secondary text-sm leading-relaxed">{val.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Scope */}
        <section className="bg-pitch-dark border-y border-pitch-border">
          <div className="container-px max-w-screen-xl mx-auto py-20">
            <div className="grid md:grid-cols-3 gap-px bg-pitch-border rounded-xl overflow-hidden border border-pitch-border">
              {[
                { label: 'Coverage', value: 'Regional to international level', tag: 'Scope' },
                { label: 'Format', value: 'Video breakdown + written report', tag: 'Deliverable' },
                { label: 'Languages', value: 'English — more planned', tag: 'Output' },
              ].map((item) => (
                <div key={item.label} className="bg-pitch-dark p-8">
                  <div className="label-tag mb-3">{item.tag}</div>
                  <div className="font-display font-bold text-xl text-text-primary">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container-px max-w-screen-xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto"
          >
            <h2 className="display-heading text-3xl md:text-4xl mb-5">
              Want to Work with Vision X?
            </h2>
            <p className="text-text-secondary mb-8 text-sm leading-relaxed">
              We are open to analysis requests from clubs, coaches and scouts. If you are looking for an independent assessment of a player, get in touch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <Link href="/methodology" className="btn-outline">Read Methodology</Link>
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  )
}
