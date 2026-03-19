'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import SectionHeader from '@/components/SectionHeader'

type Category = 'player' | ''

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '' as Category,
    message: '',
  })

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.category && formData.message) {
      setSubmitted(true)
    }
  }

  const categories: { value: Category; label: string; desc: string }[] = [
    { value: 'player', label: 'Player', desc: 'Request a personal analysis' },
  ]

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        {/* Header */}
        <section className="container-px max-w-screen-xl mx-auto py-14 border-b border-pitch-border relative">
          <div className="absolute inset-0 pitch-grid opacity-30" />
          <div className="relative max-w-xl">
            <SectionHeader
              tag="Get In Touch"
              title="Contact Vision X"
              subtitle="If you're a player looking to take the next step in your career, request your personalized performance analysis, the creation of your professional profile, or consultations on strategic collaboration."
            />
          </div>
        </section>

        <section className="container-px max-w-screen-xl mx-auto py-20">
          <div className="grid md:grid-cols-[1fr_380px] gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card-base border-gradient p-10 text-center"
                >
                  <div className="w-14 h-14 rounded-full border-2 border-accent-green flex items-center justify-center mx-auto mb-5">
                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="label-tag mb-3 flex justify-center">Message Sent</div>
                  <h3 className="font-display font-bold text-2xl text-text-primary mb-3">
                    We'll be in touch shortly.
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Thank you for reaching out to Vision X Analysis. We typically respond within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid sm:grid-cols-2 gap-4"
                  >
                    <div>
                      <label className="label-tag block mb-2">Your Name</label>
                      <input
                        type="text"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="label-tag block mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-field"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <label className="label-tag block mb-3">Category</label>
                    <div className="grid grid-cols-3 gap-3">
                      {categories.map((cat) => (
                        <button
                          key={cat.value}
                          onClick={() => setFormData({ ...formData, category: cat.value })}
                          className={`card-base p-4 text-left transition-all duration-200 ${
                            formData.category === cat.value
                              ? 'border-accent-green bg-accent-green/5'
                              : 'hover:border-pitch-muted'
                          }`}
                        >
                          <div className="font-display font-bold text-sm text-text-primary mb-0.5">
                            {cat.label}
                          </div>
                          <div className="font-mono text-[10px] text-text-muted leading-snug">
                            {cat.desc}
                          </div>
                          {formData.category === cat.value && (
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="label-tag block mb-2">Message</label>
                    <textarea
                      rows={6}
                      placeholder="Describe your request in as much detail as possible. Include the player name, league, and what you need from us."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-field resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <button
                      onClick={handleSubmit}
                      disabled={!formData.name || !formData.email || !formData.category || !formData.message}
                      className="btn-primary w-full justify-center py-4 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </motion.div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-5"
            >
              <div className="card-base p-6">
                <div className="label-tag mb-4">Response Time</div>
                <div className="font-display font-bold text-2xl text-accent-green mb-1">48 Hours</div>
                <p className="text-text-secondary text-sm">We respond to all enquiries within two business days.</p>
              </div>

              <div className="card-base p-6">
                <div className="label-tag mb-4">Analysis Requests</div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  We can produce bespoke player profiles on request. Please include the player name, club, position and league when enquiring.
                </p>
              </div>

              <div className="card-base p-6">
                <div className="label-tag mb-4">What to Include</div>
                <ul className="space-y-2">
                  {[
                    'Player name and club',
                    'Position and system context',
                    'Intended use (scout, coach, agent)',
                    'Timeline if relevant',
                    'Access to footage (optional)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-text-secondary text-xs">
                      <span className="text-accent-green shrink-0 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
