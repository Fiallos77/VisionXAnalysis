"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";

const requirements = [
  {
    icon: "🎬",
    title: "Match Duration",
    body: "Full match preferred. Minimum 30–90 minutes of continuous footage for quality analysis.",
    tag: "Required",
  },
  {
    icon: "📐",
    title: "Camera Angle",
    body: "Recording must show the full pitch or at least the full width. Zoomed-in phone recordings are not suitable.",
    tag: "Required",
  },
  {
    icon: "🔢",
    title: "Player Number",
    body: "Indicate the shirt number or a clear description of the player to be analysed before submission.",
    tag: "Required",
  },
  {
    icon: "📁",
    title: "Multiple Matches",
    body: "For PRO and ELITE packages, 2–3 different matches are strongly recommended for a representative profile.",
    tag: "Recommended",
  },
];

const plans = [
  {
    tier: "🟢 Basic",
    name: "Performance Clip",
    tagline: "See everything you did in the match",
    delivery: "48 hours",
    tools: "Nacsport · Python · Power BI · SQL",
    color: "green",
    includes: [
      { text: "<strong>1 match</strong> analysed" },
      { text: "All <strong>player actions</strong> clipped and compiled" },
      { text: "<strong>Highlight video</strong> (3–5 min)" },
      { text: "<strong>Brief text comments</strong> on key actions" },
    ],
    notIncluded: [
      "Technical written analysis",
      "PDF report",
      "Scout document",
      "Player rating",
      "Shareable profile page",
    ],
    extras: null,
    rating: null,
  },
  {
    tier: "⚡ Pro",
    name: "Technical Analysis",
    tagline: "Full breakdown of your game",
    delivery: "3–4 days",
    tools: "Nacsport · Python · Power BI · SQL",
    color: "blue",
    badge: "Most Popular",
    includes: [
      { text: "<strong>1 full match</strong> complete analysis" },
      {
        text: "<strong>Technical analysis</strong> covering:",
        sub: [
          "Positioning & movement",
          "Decision making",
          "Actions with the ball",
          "Defensive actions",
        ],
      },
      { text: "<strong>Highlight video</strong> included" },
      { text: "<strong>PDF report</strong> (1–2 pages)" },
    ],
    notIncluded: [
      "Multi-match analysis",
      "Full scout report",
      "Player rating by category",
      "Shareable profile page",
      "Direct link for clubs & agents",
    ],
    extras: null,
    rating: null,
  },
  {
    tier: "👑 Elite",
    name: "Scout Report",
    tagline: "Professional document to send to clubs",
    delivery: "5–7 days",
    tools: "Nacsport · Python · Power BI · SQL",
    color: "gold",
    includes: [
      { text: "<strong>2–3 matches</strong> analysed" },
      {
        text: "<strong>Full scout report:</strong>",
        sub: [
          "Strengths & weaknesses",
          "Tactical profile",
          "Positional comparison",
          "Improvement recommendations",
        ],
      },
      { text: "<strong>Professional clips</strong> + highlight video" },
    ],
    notIncluded: null,
    extras: [
      "Shareable player profile page on visionx.com",
      "Downloadable PDF scout document",
      "Direct link to send to clubs & agents",
    ],
    rating: [
      { label: "Technical", value: 82 },
      { label: "Positioning", value: 75 },
      { label: "Decisions", value: 70 },
      { label: "Physical", value: 88 },
    ],
  },
];

const colorMap: Record<
  string,
  {
    border: string;
    badge: string;
    tier: string;
    check: string;
    btn: string;
    ratingBar: string;
    extrasBorder: string;
    extrasBg: string;
  }
> = {
  green: {
    border: "border-accent-green/20 hover:border-accent-green/50",
    badge: "",
    tier: "text-accent-green",
    check: "bg-accent-green/10 text-accent-green",
    btn: "border border-accent-green/40 text-accent-green hover:bg-accent-green/10 hover:border-accent-green",
    ratingBar: "",
    extrasBorder: "",
    extrasBg: "",
  },
  blue: {
    border: "border-accent-blue/50",
    badge: "bg-accent-blue text-pitch-black",
    tier: "text-accent-blue",
    check: "bg-accent-blue/10 text-accent-blue",
    btn: "bg-accent-blue text-pitch-black hover:bg-accent-blue-dim",
    ratingBar: "",
    extrasBorder: "",
    extrasBg: "",
  },
  gold: {
    border: "border-yellow-500/30 hover:border-yellow-500/60",
    badge: "",
    tier: "text-yellow-400",
    check: "bg-yellow-500/10 text-yellow-400",
    btn: "bg-yellow-400 text-pitch-black hover:bg-yellow-500",
    ratingBar: "from-yellow-400 to-accent-green",
    extrasBorder: "border-yellow-500/20",
    extrasBg: "bg-yellow-500/5",
  },
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        {/* ─── HEADER ─── */}
        <section className="container-px max-w-screen-xl mx-auto py-14 border-b border-pitch-border relative overflow-hidden">
          <div className="absolute inset-0 pitch-grid opacity-30" />
          <div className="absolute right-0 top-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-2xl">
            <SectionHeader
              tag="What We Offer"
              title="Analysis Services"
              subtitle="Professional video analysis packages designed for players at every level. From performance clips to full scouting reports ready to send to clubs."
            />
          </div>
        </section>

        {/* ─── REQUIREMENTS ─── */}
        <section className="container-px max-w-screen-xl mx-auto py-16 border-b border-pitch-border">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-accent-green" />
              <span className="label-tag">Before We Start</span>
            </div>
            <h2 className="display-heading text-3xl md:text-4xl text-text-primary mb-2">
              Video Requirements
            </h2>
            <p className="text-text-secondary text-sm">
              To produce the best possible analysis, we need the following from
              you before we begin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {requirements.map((req, i) => (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="card-base p-6 relative overflow-hidden hover:border-accent-green/30 transition-colors duration-200"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-green to-transparent opacity-40" />
                <div className="text-2xl mb-3">{req.icon}</div>
                <div className="font-display font-bold text-base text-text-primary mb-2">
                  {req.title}
                </div>
                <p className="text-text-secondary text-xs leading-relaxed mb-3">
                  {req.body}
                </p>
                <span
                  className={`font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 rounded border ${
                    req.tag === "Required"
                      ? "text-accent-green border-accent-green/30 bg-accent-green/5"
                      : "text-accent-blue border-accent-blue/30 bg-accent-blue/5"
                  }`}
                >
                  {req.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
        {/* ─── SAMPLE REPORT ─── */}
        <section className="container-px max-w-screen-xl mx-auto py-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-accent-green/30 bg-gradient-to-r from-accent-green/10 via-pitch-card to-accent-blue/5 p-8 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="absolute inset-0 pitch-grid opacity-20 pointer-events-none" />
            <div className="relative w-14 h-14 rounded-xl bg-accent-green/10 border border-accent-green/30 flex items-center justify-center shrink-0">
              <svg
                className="w-7 h-7 text-accent-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="relative flex-1 text-center md:text-left">
              <div className="label-tag mb-1">Sample Report</div>
              <div className="font-display font-bold text-xl md:text-2xl text-text-primary mb-1">
                See How We Work Before You Commit
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Download a real sample scouting report and see exactly how we
                document a player — structure, depth and format.
              </p>
            </div>

            <a
              href="/docs/vision-report1.pdf"
              download
              className="relative shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-accent-green text-pitch-black font-display font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-accent-green-dim transition-colors duration-200"
            >
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Sample
            </a>
          </motion.div>
        </section>

        {/* ─── PLANS ─── */}
        <section className="bg-pitch-dark border-b border-pitch-border py-20">
          <div className="container-px max-w-screen-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-6 h-px bg-accent-green" />
                <span className="label-tag">Choose Your Package</span>
                <span className="w-6 h-px bg-accent-green" />
              </div>
              <h2 className="display-heading text-3xl md:text-5xl text-text-primary mb-3">
                Analysis Packages
              </h2>
              <p className="text-text-secondary text-sm max-w-md mx-auto">
                Three levels of analysis. From basic performance clips to a full
                professional scouting document.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
              {plans.map((plan, i) => {
                const c = colorMap[plan.color];
                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={`card-base ${c.border} flex flex-col relative transition-all duration-300 hover:-translate-y-1`}
                  >
                    {/* Badge */}
                    {plan.badge && (
                      <div
                        className={`absolute top-4 right-4 font-mono text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${c.badge}`}
                      >
                        {plan.badge}
                      </div>
                    )}

                    {/* Header */}
                    <div
                      className={`p-6 border-b border-pitch-border bg-gradient-to-br ${
                        plan.color === "green"
                          ? "from-accent-green/5"
                          : plan.color === "blue"
                            ? "from-accent-blue/8"
                            : "from-yellow-500/5"
                      } to-transparent`}
                    >
                      <div
                        className={`font-mono text-[10px] tracking-widest uppercase mb-2 ${c.tier}`}
                      >
                        {plan.tier}
                      </div>
                      <div className="font-display font-bold text-2xl text-text-primary leading-tight mb-1">
                        {plan.name}
                      </div>
                      <p className="text-text-secondary text-xs mb-4">
                        {plan.tagline}
                      </p>
                      <div className="font-mono text-[11px] text-text-muted">
                        ⏱ Delivery: {plan.delivery}
                      </div>
                      <div className="font-mono text-[11px] text-accent-blue/70 mt-1">
                        🛠 {plan.tools}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="label-tag mb-3">Includes</div>

                      {/* Includes */}
                      <div className="flex flex-col gap-2.5 mb-4">
                        {plan.includes.map((item, j) => (
                          <div key={j} className="flex gap-2.5 items-start">
                            <div
                              className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${c.check}`}
                            >
                              <svg
                                width="8"
                                height="8"
                                viewBox="0 0 12 12"
                                fill="none"
                              >
                                <path
                                  d="M2 6l3 3 5-5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </div>
                            <div>
                              <span
                                className="text-text-secondary text-xs leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: item.text }}
                              />
                              {"sub" in item && item.sub && (
                                <div className="mt-1.5 flex flex-col gap-1 pl-1">
                                  {item.sub.map((s) => (
                                    <div
                                      key={s}
                                      className="flex gap-1.5 text-text-muted text-[11px]"
                                    >
                                      <span className="text-text-muted">→</span>
                                      {s}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Rating (Elite only) */}
                      {plan.rating && (
                        <div className="bg-pitch-muted border border-pitch-border rounded-lg p-4 mb-4">
                          <div
                            className={`font-mono text-[10px] tracking-widest uppercase mb-3 ${c.tier}`}
                          >
                            Player Rating Included
                          </div>
                          <div className="flex flex-col gap-2">
                            {plan.rating.map((r) => (
                              <div
                                key={r.label}
                                className="flex items-center gap-2"
                              >
                                <span className="text-text-muted text-[11px] w-20 shrink-0">
                                  {r.label}
                                </span>
                                <div className="flex-1 h-1 bg-pitch-border rounded-full overflow-hidden">
                                  <div
                                    className={`h-full rounded-full bg-gradient-to-r ${c.ratingBar}`}
                                    style={{ width: `${r.value}%` }}
                                  />
                                </div>
                                <span
                                  className={`font-mono text-[10px] w-6 text-right ${c.tier}`}
                                >
                                  {(r.value / 10).toFixed(1)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Elite Extras */}
                      {plan.extras && (
                        <div
                          className={`rounded-lg p-4 mb-4 border ${c.extrasBorder} ${c.extrasBg}`}
                        >
                          <div
                            className={`font-mono text-[10px] tracking-widest uppercase mb-2 ${c.tier}`}
                          >
                            ✦ Elite Exclusives
                          </div>
                          <div className="flex flex-col gap-2">
                            {plan.extras.map((e) => (
                              <div
                                key={e}
                                className="flex gap-2 text-text-secondary text-xs"
                              >
                                <span className={c.tier}>★</span>
                                {e}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Not included */}
                      {plan.notIncluded && (
                        <div className="flex flex-col gap-1.5 mb-4">
                          {plan.notIncluded.map((item) => (
                            <div
                              key={item}
                              className="flex gap-2 items-center text-text-muted text-xs"
                            >
                              <span className="text-red-500 text-sm leading-none">
                                ✕
                              </span>
                              {item}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CTA */}
                      <Link
                        href="/contact"
                        className={`mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-lg font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 ${c.btn}`}
                      >
                        Get Started →
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── BOTTOM NOTE ─── */}
        <section className="container-px max-w-screen-xl mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-base p-7 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="text-3xl">💬</div>
            <div className="flex-1">
              <div className="font-display font-bold text-xl text-text-primary mb-1">
                Not sure which package is right for you?
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Send us a message and we'll help you choose based on your goals
                — whether you're preparing for trials, looking to attract
                interest from clubs, or simply want to understand your game
                better.
              </p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              Contact Us →
            </Link>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
