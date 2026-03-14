"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PlayerCard from "@/components/PlayerCard";
import SectionHeader from "@/components/SectionHeader";
import { players } from "@/lib/data";

const clubs = [
  { name: "FC Barcelona Academy", img: "/images/barca.png" },
  { name: "Brisbane Roar", img: "/images/broar.png" },
  { name: "Barcelona SC Academy", img: "/images/bsc.png" },
  { name: "Espanyol", img: "/images/espanol.png" },
  { name: "Espoli", img: "/images/Espoli.png" },
  { name: "Barcelona SC", img: "/images/LogoEscuela.png" },
  { name: "Tigrillos FC", img: "/images/tigrillo.png" },
  { name: "Club America", img: "/images/america.png" },
];

function ClubBadge({ club }: { club: (typeof clubs)[0] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center gap-3 group"
    >
      <div className="relative w-20 h-20 flex items-center justify-center">
        <Image
          src={club.img}
          alt={club.name}
          width={80}
          height={80}
          className="object-contain w-full h-full drop-shadow-lg group-hover:drop-shadow-[0_0_12px_rgba(0,229,160,0.3)] transition-all duration-300"
        />
      </div>
      <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase group-hover:text-text-secondary transition-colors duration-200 text-center leading-tight">
        {club.name}
      </span>
    </motion.div>
  );
}

export default function HomePage() {
  const featuredPlayers = players.slice(0, 4);

  return (
    <div className="relative">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Vision X Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-pitch-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pitch-black/20 to-pitch-black" />
        </div>
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/20 to-transparent animate-scan opacity-30 pointer-events-none z-10" />

        <div className="container-px max-w-screen-xl mx-auto pt-24 pb-20 w-full relative z-10">
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
                <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase">
                  Live
                </span>
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
              Vision X Analysis is an independent football scouting and video
              analysis project. We break down player profiles, tactical patterns
              and positional behaviours across leagues and levels — with
              precision, context and objectivity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/players" className="btn-primary">
                View Players
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link href="/methodology" className="btn-outline">
                Our Methodology
              </Link>
            </motion.div>
          </div>

          {/* ─── IMPACT STATEMENT ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 card-base border-gradient p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-px bg-accent-green" />
                  <span className="label-tag">Our Impact</span>
                </div>
                <h2 className="display-heading text-2xl md:text-3xl xl:text-4xl text-text-primary leading-tight mb-4">
                  More than{" "}
                  <span className="text-gradient-green">100 players</span>{" "}
                  analysed by Vision X are currently active in professional
                  football leagues.
                </h2>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl">
                  Through rigorous video analysis and data-driven scouting,
                  Vision X has built profiles for over 100 footballers who have
                  gone on to secure contracts, earn promotions and establish
                  themselves across professional competitions in Europe, South
                  America and beyond. Our methodology bridges the gap between
                  raw talent and professional recognition — giving players the
                  evidence-based documentation that clubs and scouts trust.
                </p>
              </div>
              <div className="flex flex-row md:flex-col gap-6 md:gap-4 shrink-0">
                <div className="text-center md:text-right">
                  <div className="font-display font-bold text-4xl md:text-5xl text-accent-green leading-none">
                    100+
                  </div>
                  <div className="font-mono text-[10px] tracking-widest text-text-muted uppercase mt-1">
                    Players in Pro Football
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="font-display font-bold text-4xl md:text-5xl text-accent-blue leading-none">
                    30+
                  </div>
                  <div className="font-mono text-[10px] tracking-widest text-text-muted uppercase mt-1">
                    Leagues Covered
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="font-display font-bold text-4xl md:text-5xl text-text-primary leading-none">
                    5+
                  </div>
                  <div className="font-mono text-[10px] tracking-widest text-text-muted uppercase mt-1">
                    Years of Work
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
            <Link
              href="/players"
              className="btn-outline text-xs py-2 px-4 shrink-0"
            >
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

      {/* ─── CLUBS ─── */}
      <section className="section-spacing container-px max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-px bg-accent-green" />
            <span className="label-tag">Club Network</span>
            <span className="w-6 h-px bg-accent-green" />
          </div>
          <h2 className="display-heading text-3xl md:text-4xl xl:text-5xl text-text-primary mb-4">
            Clubs We've Worked With
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Our player profiles and scouting reports have reached clubs across
            Europe and beyond. These are some of the organisations that have
            engaged with Vision X Analysis.
          </p>
        </motion.div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 md:gap-10">
          {clubs.map((club, i) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <ClubBadge club={club} />
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center font-mono text-[10px] tracking-widest text-text-muted uppercase mt-12"
        >
          * Logos shown are illustrative examples of clubs in our network
        </motion.p>
      </section>

      {/* ─── ABOUT SNIPPET ─── */}
      <section className="section-spacing container-px max-w-screen-xl mx-auto border-t border-pitch-border">
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
              {[
                "Match observation across multiple fixtures",
                "Selective action and pattern capture",
                "Frame-by-frame video breakdown",
                "Contextual tactical interpretation",
              ].map((item, i) => (
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
              <div className="font-mono text-[10px] tracking-widest text-accent-green uppercase mb-4">
                Vision X Principle
              </div>
              <blockquote className="font-display text-2xl md:text-3xl font-bold leading-tight text-text-primary mb-6">
                "Observation before assumption. Context before conclusion."
              </blockquote>
              <p className="text-text-secondary text-sm leading-relaxed">
                Every analysis produced by Vision X is grounded in sustained
                observation. We do not shortcut match intelligence with
                statistics alone. The work starts before the video does.
              </p>
              <div className="mt-6 pt-6 border-t border-pitch-border flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-green" />
                <span className="font-mono text-xs text-text-muted tracking-wider">
                  VISION X ANALYSIS
                </span>
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
              Clubs, coaches and representatives looking for independent
              analysis of a specific player or profile can get in touch with us
              directly.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get in Touch
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
