"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Player } from "@/lib/data";

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
      <Link
        href={`/players/${player.id}`}
        className="group block card-base hover:border-pitch-muted transition-colors duration-300"
      >
        {/* Image */}
        <div className="relative overflow-hidden bg-pitch-muted h-52">
          <img
            src={player.imageUrl}
            alt={player.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pitch-card via-transparent to-transparent" />
          {/* Foot badge */}
          <div className="absolute top-3 right-3 bg-pitch-black/70 backdrop-blur-sm border border-pitch-border rounded px-2 py-0.5">
            <span className="font-mono text-[9px] text-text-secondary tracking-widest uppercase">
              {player.foot}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="font-mono text-[10px] text-accent-green tracking-widest uppercase mb-1">
            {player.position}
          </div>
          <h3 className="font-display font-bold text-lg text-text-primary leading-tight group-hover:text-accent-green transition-colors duration-200 mb-0.5">
            {player.name}
          </h3>
          <div className="flex items-center gap-2 text-text-muted">
            <span className="font-mono text-[11px]">{player.club}</span>
            <span>·</span>
            <span className="font-mono text-[11px]">{player.nationality}</span>
          </div>
          <div className="mt-3 pt-3 border-t border-pitch-border flex justify-between">
            <div className="text-center">
              <div className="font-display font-bold text-accent-green text-base">
                {player.age}
              </div>
              <div className="font-mono text-[9px] text-text-muted tracking-wider uppercase">
                Age
              </div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-text-primary text-base">
                {player.height}
              </div>
              <div className="font-mono text-[9px] text-text-muted tracking-wider uppercase">
                Height
              </div>
            </div>
            <div className="text-center">
              <div className="font-mono text-[9px] text-accent-blue font-bold text-sm">
                {player.foot}
              </div>
              <div className="font-mono text-[9px] text-text-muted tracking-wider uppercase">
                Foot
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
