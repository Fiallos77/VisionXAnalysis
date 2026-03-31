"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Match Observation",
    description:
      "Every analysis begins off-camera. We observe players live or across full match recordings before selecting actions for breakdown. Patterns, positioning habits, movement tendencies and off-ball behaviour are noted before a clip is marked. We typically observe a minimum of three to five performances before beginning any profile.",
    details: [
      "Multiple full-match viewings",
      "Off-ball movement mapping",
      "Positional behaviour documentation",
      "Tactical context assessment",
    ],
  },
  {
    number: "02",
    title: "Action Selection",
    description:
      "From the full catalogue of observed actions, we select those that best represent the player's qualities — positively and negatively. Selection is deliberate and representative: we do not cherry-pick highlights. Actions that reveal character under pressure, decision-making under duress and positional intelligence are prioritised.",
    details: [
      "Representative, not selective",
      "Positive and negative examples",
      "Context-driven clip choice",
      "Statistical pattern validation",
    ],
  },
  {
    number: "03",
    title: "Video Breakdown",
    description:
      "Selected clips are annotated frame by frame. We mark movement vectors, defensive lines, pressing triggers, passing angles and spatial cues to make the tactical logic visible. The goal is not aesthetics — it is clarity. Every mark on the screen has an explanatory purpose.",
    details: [
      "Frame-by-frame annotation",
      "Tactical marker overlays",
      "Spatial and movement vectors",
      "Before/after comparison cuts",
    ],
  },
  {
    number: "04",
    title: "Tactical Interpretation",
    description:
      "The final layer is written and verbal interpretation. We contextualise clips within the team's structure, the opponent's shape and the match state. A player's action is never isolated from context. Our conclusions are expressed with deliberate precision — we avoid generalisations and inflate neither weaknesses nor qualities beyond what the evidence shows.",
    details: [
      "Contextualised observations",
      "System and opponent framing",
      "Written match state notes",
      "Structured profile conclusions",
    ],
  },
];

export default function MethodologyPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        {/* Header */}
        <section className="container-px max-w-screen-xl mx-auto py-14 border-b border-pitch-border relative">
          <div className="absolute inset-0 pitch-grid opacity-30" />
          <div className="relative max-w-2xl">
            <SectionHeader
              tag="How We Work"
              title="Our Methodology"
              subtitle="The process behind every Vision X analysis. From initial observation to final publication."
            />
          </div>
        </section>

        {/* Process Steps */}
        <section className="container-px max-w-screen-xl mx-auto py-20">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="grid md:grid-cols-[120px_1fr] gap-8 py-14 border-b border-pitch-border last:border-0"
              >
                {/* Step number */}
                <div className="flex flex-row md:flex-col items-start gap-4 md:gap-0">
                  <div className="font-display font-bold text-6xl leading-none text-gradient-green opacity-60">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-[1fr_220px] gap-8">
                  <div>
                    <h3 className="display-heading text-2xl md:text-3xl text-text-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                  <div className="bg-pitch-card border border-pitch-border rounded-xl p-5 self-start">
                    <div className="label-tag mb-3">Includes</div>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-text-secondary text-xs"
                        >
                          <span className="text-accent-green mt-1 shrink-0">
                            →
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section className="bg-pitch-dark border-y border-pitch-border">
          <div className="container-px max-w-screen-xl mx-auto py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <div className="label-tag mb-4 flex justify-center items-center gap-3">
                <span className="w-6 h-px bg-accent-green" />
                Core Principles
                <span className="w-6 h-px bg-accent-green" />
              </div>
              <h2 className="display-heading text-3xl md:text-4xl">
                What Drives Our Work
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Objectivity",
                  body: "We do not advocate for any club, agency or player. Our analysis reflects only what the footage and context support. No commercial relationship influences our assessment.",
                },
                {
                  title: "Context",
                  body: "Every clip exists within a match, a system and a moment. We refuse to evaluate actions in isolation — football decisions are made under specific constraints.",
                },
                {
                  title: "Precision",
                  body: "We prefer saying less with more accuracy over saying more with less. Observations are specific, referenced to timestamped clips and backed by pattern evidence.",
                },
              ].map((principle, i) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="card-base border-gradient p-6"
                >
                  <div className="w-8 h-8 border border-accent-green rounded-sm rotate-45 mb-5 ml-1" />
                  <h3 className="font-display font-bold text-xl text-text-primary mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {principle.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* ─── FAQ ─── */}
        <section className="container-px max-w-screen-xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-6 h-px bg-accent-green" />
              <span className="label-tag">Common Questions</span>
              <span className="w-6 h-px bg-accent-green" />
            </div>
            <h2 className="display-heading text-3xl md:text-4xl text-text-primary">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What if I don't appear in data platforms like Wyscout or InStat?",
                a: "No problem. We extract professional metrics directly from your match footage so you have a competitive profile ready to present to any club — regardless of whether you appear in commercial databases.",
              },
              {
                q: "How many matches do I need to provide?",
                a: "For the ID package, one match is enough. For ANALYST and SCOUT packages, we recommend 2–3 matches from different contexts to build a representative profile.",
              },
              {
                q: "What format will I receive the analysis in?",
                a: "Depending on your package: edited video clips, a highlight reel, and a written PDF report. The SCOUT package includes a full scouting document formatted for club submission.",
              },
              {
                q: "Can the report be sent directly to clubs or agents?",
                a: "Yes. The SCOUT package includes a shareable player profile page and a downloadable PDF specifically formatted for professional presentation to clubs, directors and agents.",
              },
              {
                q: "Do you work with female players?",
                a: "Yes. Our methodology applies equally across men's and women's football. Position profiles and tactical standards are adapted accordingly.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="card-base p-6 hover:border-pitch-muted transition-colors duration-200"
              >
                <div className="flex gap-4 items-start">
                  <span className="text-accent-green font-display font-bold text-lg shrink-0">
                    Q
                  </span>
                  <div>
                    <div className="font-display font-bold text-base text-text-primary mb-2">
                      {item.q}
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
