"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { players, analyses } from "@/lib/data";
import RadarChart from "@/components/RadarChart";

interface Props {
  params: { id: string };
}

export default function PlayerProfilePage({ params }: Props) {
  const player = players.find((p) => p.id === params.id);
  if (!player) return notFound();

  const playerAnalyses = analyses.filter((a) => a.playerId === player.id);

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="container-px max-w-screen-xl mx-auto pt-8 pb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
            <Link
              href="/"
              className="hover:text-accent-green transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/players"
              className="hover:text-accent-green transition-colors"
            >
              Players
            </Link>
            <span>/</span>
            <span className="text-text-secondary">{player.name}</span>
          </div>
        </div>

        {/* ─── Player Header ─── */}
        <section className="container-px max-w-screen-xl mx-auto py-10">
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-pitch-card border border-pitch-border">
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pitch-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-2 h-2 rounded-full bg-accent-green mb-1" />
                  <div className="font-mono text-[9px] tracking-widest text-accent-green uppercase">
                    Active Profile
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="label-tag mb-2">{player.position}</div>
              <h1 className="display-heading text-4xl md:text-6xl text-text-primary mb-4">
                {player.name}
              </h1>

              {/* Stats grid */}
              <div className="grid grid-cols-3 md:grid-cols-5 gap-px bg-pitch-border rounded-xl overflow-hidden border border-pitch-border mb-6">
                {[
                  { label: "Age", value: player.age.toString() },
                  { label: "Height", value: player.height },
                  { label: "Foot", value: player.foot },
                  { label: "Club", value: player.club },
                  { label: "Nationality", value: player.nationality },
                ].map((stat) => (
                  <div key={stat.label} className="bg-pitch-dark px-4 py-3">
                    <div className="font-display font-bold text-text-primary text-sm md:text-base leading-tight mb-0.5">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[9px] text-text-muted tracking-widest uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {player.description}
              </p>

              <Link href="/contact" className="btn-primary">
                Request Full Report
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
        {/* ─── ATTRIBUTES ─── */}
        <section className="container-px max-w-screen-xl mx-auto py-10">
          <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-center card-base border-gradient p-8">
            {/* Radar */}
            <div className="flex flex-col items-center gap-4">
              <div className="label-tag mb-2">Player Attributes</div>
              <RadarChart attributes={player.attributes} size={260} />
            </div>

            {/* Values */}
            <div className="flex flex-col gap-4">
              <div className="label-tag mb-2">Attribute Breakdown</div>
              {[
                { key: "technical", label: "Technical" },
                { key: "positioning", label: "Positioning" },
                { key: "decisions", label: "Decisions" },
                { key: "physical", label: "Physical" },
                { key: "defending", label: "Defending" },
              ].map((attr) => {
                const value =
                  player.attributes[attr.key as keyof typeof player.attributes];
                return (
                  <div key={attr.key} className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-text-secondary w-24 shrink-0">
                      {attr.label}
                    </span>
                    <div className="flex-1 h-1.5 bg-pitch-border rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent-green to-accent-blue transition-all duration-500"
                        style={{ width: `${(value / 10) * 100}%` }}
                      />
                    </div>
                    <span className="font-display font-bold text-accent-green text-base w-8 text-right">
                      {value}
                    </span>
                  </div>
                );
              })}

              {/* Overall */}
              <div className="mt-4 pt-4 border-t border-pitch-border flex items-center justify-between">
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">
                  Overall
                </span>
                <span className="font-display font-bold text-3xl text-gradient-green">
                  {(
                    Object.values(player.attributes).reduce(
                      (a, b) => a + b,
                      0,
                    ) / 5
                  ).toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Main Video ─── */}
        <section className="container-px max-w-screen-xl mx-auto py-10">
          <div className="label-tag mb-4">Analysis Video</div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-pitch-border">
            <iframe
              src={`${player.videoUrl}?rel=0&modestbranding=1`}
              title={`${player.name} Analysis`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            {/* Capa que bloquea clic en logo de YouTube */}
            <div className="absolute bottom-0 right-0 w-32 h-12 z-10" />
          </div>
        </section>

        {/* ─── Clips & Observations ─── */}
        <section className="container-px max-w-screen-xl mx-auto py-10">
          <div className="label-tag mb-6">Analysis Clips</div>
          <div className="space-y-4">
            {player.clips.map((clip, i) => (
              <motion.div
                key={clip.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="card-base p-5 flex gap-5 items-start group hover:border-pitch-muted transition-colors duration-200"
              >
                {/* Timestamp */}
                <div className="shrink-0 font-mono text-sm text-accent-green bg-pitch-muted px-3 py-1.5 rounded border border-pitch-border">
                  {clip.timestamp}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-text-primary mb-1.5">
                    {clip.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {clip.observation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── Strengths & Improvements ─── */}
        <section className="container-px max-w-screen-xl mx-auto py-10">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="card-base p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-accent-green" />
                <span className="label-tag">Strengths</span>
              </div>
              <ul className="space-y-3">
                {player.strengths.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 text-text-secondary text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-accent-green shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Improvements */}
            <div className="card-base p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-accent-blue" />
                <span className="label-tag text-accent-blue">
                  Areas to Develop
                </span>
              </div>
              <ul className="space-y-3">
                {player.improvements.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 text-text-secondary text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-accent-blue shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Related Analyses ─── */}
        {playerAnalyses.length > 0 && (
          <section className="container-px max-w-screen-xl mx-auto py-10">
            <div className="label-tag mb-6">Related Analyses</div>
            <div className="grid md:grid-cols-2 gap-5">
              {playerAnalyses.map((analysis) => (
                <Link
                  key={analysis.id}
                  href={`/analysis/${analysis.id}`}
                  className="card-base flex gap-4 p-4 group hover:border-pitch-muted transition-colors duration-200"
                >
                  <div className="relative shrink-0 w-28 h-16 rounded-lg overflow-hidden bg-pitch-muted">
                    <img
                      src={analysis.thumbnailUrl}
                      alt={analysis.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-pitch-black/60 flex items-center justify-center border border-accent-green/50">
                        <svg
                          className="w-3 h-3 text-accent-green ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-accent-green tracking-widest uppercase mb-1">
                      {analysis.duration}
                    </div>
                    <div className="font-display font-semibold text-text-primary text-sm group-hover:text-accent-green transition-colors duration-200">
                      {analysis.title}
                    </div>
                    <div className="flex gap-1.5 flex-wrap mt-1.5">
                      {analysis.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] px-1.5 py-0.5 bg-pitch-muted text-text-muted rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ─── CTA ─── */}
        <section className="container-px max-w-screen-xl mx-auto py-10">
          <div className="card-base border-gradient p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="label-tag mb-2">Interested in this player?</div>
              <h3 className="font-display font-bold text-2xl text-text-primary">
                Request the Full Analysis Report
              </h3>
              <p className="text-text-secondary text-sm mt-1">
                Get in touch to receive detailed documentation and additional
                footage.
              </p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              Contact Vision X
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
