"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BodyZone } from "@/lib/data";

interface Props {
  zones: BodyZone[];
  playerName: string;
  silhouetteUrl: string;
}
const PANEL_CONFIG: Record<string, { side: "left" | "right"; top: string }> = {
  head: { side: "right", top: "12%" },
  torso: { side: "left", top: "12%" },
  "right-arm": { side: "left", top: "38%" },
  "left-arm": { side: "right", top: "38%" },
  "right-leg": { side: "left", top: "72%" },
  "left-leg": { side: "right", top: "72%" },
};
export default function BodyScoutMap({
  zones,
  playerName,
  silhouetteUrl,
}: Props) {
  const [activeZone, setActiveZone] = useState<BodyZone | null>(null);

  const getBarColor = (value: number) => {
    if (value >= 80) return "bg-accent-green";
    if (value >= 65) return "bg-yellow-400";
    return "bg-red-500";
  };

  const getPanelSide = (leftPercent: string) => {
    const val = parseFloat(leftPercent);
    return val >= 50 ? "right" : "left";
  };

  return (
    <section className="container-px max-w-screen-xl mx-auto py-10">
      <div className="label-tag mb-6">Dynamic Scouting Report</div>

      <div className="card-base border-gradient p-6 md:p-10">
        {/* Grid: panel izq | jugador | panel der */}
        <div className="flex items-start justify-center gap-0">
          {/* Columna izquierda — popup left */}
          <div className="relative w-[260px] shrink-0 hidden md:block">
            <AnimatePresence>
              {activeZone && PANEL_CONFIG[activeZone.id]?.side === "left" && (
                <motion.div
                  key={activeZone.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    top:
                      PANEL_CONFIG[activeZone.id]?.top ??
                      activeZone.position.top,
                    transform: "translateY(-50%)",
                  }}
                  className="absolute right-0 w-[240px] bg-pitch-card border border-pitch-border rounded-xl p-5 shadow-xl"
                >
                  <h4 className="font-display font-bold text-accent-green text-sm mb-1 pr-5">
                    {activeZone.title}
                  </h4>
                  <p className="font-mono text-[10px] text-text-secondary mb-4 leading-relaxed">
                    {activeZone.description}
                  </p>
                  <div className="space-y-3">
                    {activeZone.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-mono text-[10px] text-text-secondary">
                            {stat.label}
                          </span>
                          <span className="font-display font-bold text-text-primary text-sm">
                            {stat.value}
                          </span>
                        </div>
                        <div className="h-1.5 bg-pitch-border rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${stat.value}%` }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className={`h-full rounded-full ${getBarColor(stat.value)}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Columna central — jugador */}
          <div className="relative select-none mx-auto w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[560px]">
            <img
              src={silhouetteUrl}
              alt={playerName}
              className="w-full h-full object-contain"
              draggable={false}
            />

            {zones.map((zone) => {
              const isActive = activeZone?.id === zone.id;
              return (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(isActive ? null : zone)}
                  style={{ top: zone.position.top, left: zone.position.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-20"
                >
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-60" />
                    <span
                      className={`relative inline-flex rounded-full h-4 w-4 border-2 transition-colors duration-200 ${
                        isActive
                          ? "bg-accent-green border-accent-green"
                          : "bg-pitch-dark border-accent-green"
                      }`}
                    />
                  </span>
                  <span
                    className={`font-mono text-[9px] tracking-widest px-2 py-0.5 rounded whitespace-nowrap transition-colors duration-200 ${
                      isActive
                        ? "bg-accent-green text-pitch-black"
                        : "bg-pitch-muted text-accent-green border border-accent-green/40"
                    }`}
                  >
                    {zone.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Columna derecha — popup right */}
          <div className="relative w-[260px] shrink-0 hidden md:block">
            <AnimatePresence>
              {activeZone && PANEL_CONFIG[activeZone.id]?.side === "right" && (
                <motion.div
                  key={activeZone.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    top:
                      PANEL_CONFIG[activeZone.id]?.top ??
                      activeZone.position.top,
                    transform: "translateY(-50%)",
                  }}
                  className="absolute left-0 w-[240px] bg-pitch-card border border-pitch-border rounded-xl p-5 shadow-xl"
                >
                  <h4 className="font-display font-bold text-accent-green text-sm mb-1 pr-5">
                    {activeZone.title}
                  </h4>
                  <p className="font-mono text-[10px] text-text-secondary mb-4 leading-relaxed">
                    {activeZone.description}
                  </p>
                  <div className="space-y-3">
                    {activeZone.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-mono text-[10px] text-text-secondary">
                            {stat.label}
                          </span>
                          <span className="font-display font-bold text-text-primary text-sm">
                            {stat.value}
                          </span>
                        </div>
                        <div className="h-1.5 bg-pitch-border rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${stat.value}%` }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className={`h-full rounded-full ${getBarColor(stat.value)}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: popup debajo en mobile */}
        <div className="md:hidden mt-4">
          <AnimatePresence>
            {activeZone && (
              <motion.div
                key={activeZone.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-pitch-card border border-pitch-border rounded-xl p-5 shadow-xl"
              >
                <h4 className="font-display font-bold text-accent-green text-sm mb-1">
                  {activeZone.title}
                </h4>
                <p className="font-mono text-[10px] text-text-secondary mb-4 leading-relaxed">
                  {activeZone.description}
                </p>
                <div className="space-y-3">
                  {activeZone.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-mono text-[10px] text-text-secondary">
                          {stat.label}
                        </span>
                        <span className="font-display font-bold text-text-primary text-sm">
                          {stat.value}
                        </span>
                      </div>
                      <div className="h-1.5 bg-pitch-border rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.value}%` }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className={`h-full rounded-full ${getBarColor(stat.value)}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
