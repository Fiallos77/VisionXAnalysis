// lib/data.ts — Placeholder data for Vision X Analysis

export interface Player {
  id: string;
  name: string;
  position: string;
  age: number;
  club: string;
  foot: "Right" | "Left" | "Both";
  height: string;
  nationality: string;
  imageUrl: string;
  description: string;
  strengths: string[];
  improvements: string[];
  videoUrl: string;
  clips: AnalysisClip[];
  attributes: {
    technical: number;
    positioning: number;
    decisions: number;
    physical: number;
    defending: number;
  };
}

export interface AnalysisClip {
  id: string;
  timestamp: string;
  title: string;
  observation: string;
}

export interface Analysis {
  id: string;
  playerId: string;
  playerName: string;
  position: string;
  title: string;
  thumbnailUrl: string;
  date: string;
  duration: string;
  tags: string[];
  summary: string;
}

export const players: Player[] = [
  {
    id: "marcus-elroy",
    name: "Marcus Elroy",
    position: "Central Midfielder",
    age: 22,
    club: "FC Altheim",
    foot: "Right",
    height: "1.82m",
    nationality: "German",
    attributes: {
      technical: 7.8,
      positioning: 8.0,
      decisions: 7.5,
      physical: 7.0,
      defending: 6.8,
    },
    imageUrl:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=400&h=400&fit=crop",
    description:
      "Marcus Elroy is a technically gifted central midfielder with exceptional spatial awareness and the ability to control tempo in tight spaces. His progressive passing and press-resistance make him a key asset in build-up phases. Scouts from multiple second-division clubs have monitored him throughout the 2023/24 season.",
    strengths: [
      "High press-resistance under pressure",
      "Progressive carrying in transition",
      "Positioning between lines",
      "First touch and ball retention",
      "Reading of defensive shape",
    ],
    improvements: [
      "Decision-making speed in final third",
      "Aerial duel engagement",
      "Defensive tracking runs",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    clips: [
      {
        id: "c1",
        timestamp: "02:14",
        title: "Third-man combination, bypassing press",
        observation:
          "Elroy receives between the lines and plays a sharp lay-off before spinning into space, drawing two markers and releasing the right winger in behind. Exemplary spatial exploitation.",
      },
      {
        id: "c2",
        timestamp: "17:42",
        title: "Progressive carry under pressure",
        observation:
          "Picks up the ball 5m inside his own half, accelerates past a closing midfielder and advances 30m before playing a switch. The carry breaks two lines without a pass.",
      },
      {
        id: "c3",
        timestamp: "31:08",
        title: "Defensive positioning — weak side cover",
        observation:
          "After losing the ball, Elroy does not immediately press the carrier. This creates a 3v2 for the opposition briefly before cover arrives. An area for improvement in transition.",
      },
      {
        id: "c4",
        timestamp: "58:55",
        title: "Line-breaking pass into striker",
        observation:
          "Plays a weighted through pass through the opponent's midfield block from deep, threading it between two defenders into the striker's path. Exceptional weight and timing.",
      },
    ],
  },
  {
    id: "rafael-santos",
    name: "Rafael Santos",
    position: "Left Back",
    age: 19,
    club: "SC Ribeiro",
    foot: "Left",
    height: "1.76m",
    nationality: "Portuguese",
    attributes: {
      technical: 7.8,
      positioning: 8.0,
      decisions: 7.5,
      physical: 7.0,
      defending: 6.8,
    },
    imageUrl:
      "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=400&h=400&fit=crop",
    description:
      "Rafael Santos is an attack-minded left back with remarkable crossing ability and inverted movement patterns. Operating in a back-four, he regularly supports the winger to create overloads on the left flank. Still developing his defensive positioning, but his offensive output at 19 is notable.",
    strengths: [
      "Delivery from left flank",
      "Overlap and underlap timing",
      "Dribbling in wide areas",
      "Combination play in tight spaces",
      "Set-piece delivery",
    ],
    improvements: [
      "Defensive shape when inverted",
      "One-on-one defending",
      "Recovery sprint positioning",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    clips: [
      {
        id: "c1",
        timestamp: "08:30",
        title: "Overlap into crossing position",
        observation:
          "Well-timed run behind the winger, receives and delivers a low cross to the back post. The run is disguised by a check infield before spinning outside.",
      },
      {
        id: "c2",
        timestamp: "23:15",
        title: "Underlap combination, central entry",
        observation:
          "Santos makes an inside run as the winger drifts wide, receives the cutback, and plays a first-time pass into the box. Unusual for a fullback at this level.",
      },
    ],
  },
  {
    id: "mateo-diez",
    name: "Mateo Diez",
    position: "Centre Forward",
    age: 22,
    club: "Deportivo Torino",
    foot: "Left",
    height: "1.74m",
    nationality: "Peruvian",
    imageUrl: "/images/portada1.jpeg",
    attributes: {
      technical: 7.2,
      positioning: 7.8,
      decisions: 7.5,
      physical: 8.5,
      defending: 6.0,
    },
    description:
      "Mateo Diez is a physically imposing centre forward with intelligent movement and a refined hold-up game. His ability to link play and bring teammates into the game sets him apart at regional level. Possesses a quality left foot and good aerial presence.",
    strengths: [
      "Hold-up play and linkage",
      "Aerial dominance",
      "Movement off the shoulder",
      "Left-foot finishing",
      "Pressure on defenders in build-up",
    ],
    improvements: [
      "Left-foot finishing consistency",
      "Pressing trigger recognition",
      "Off-ball sprint runs",
    ],
    videoUrl: "https://www.youtube.com/embed/N_9u3u2nLEc",
    clips: [
      {
        id: "c1",
        timestamp: "11:00",
        title: "Hold-up play and lay-off",
        observation:
          "Receives with his back to goal, shields off the centre back and plays a clean lay-off to the arriving midfielder. Efficient and composed under physical pressure.",
      },
    ],
  },
  {
    id: "franco-insua",
    name: "Franco Insua",
    position: "Fullback",
    age: 21,
    club: "San Lorenzo",
    foot: "Left",
    height: "1.85m",
    nationality: "Espanol",
    imageUrl: "/images/club.jpeg",
    attributes: {
      technical: 7,
      positioning: 7,
      decisions: 7.5,
      physical: 8.5,
      defending: 6.0,
    },
    description:
      "Franco Insua is a direct and explosive winger with high dribbling success rates in 1v1 situations. Operating primarily on the right with his strong left foot, he is a constant threat in transition and excels at beating fullbacks to deliver from wide positions.",
    strengths: [
      "1v1 dribbling success rate",
      "Transition exploitation",
      "Wide delivery and cutbacks",
      "Work rate without the ball",
      "Direct and decisive decision-making",
    ],
    improvements: [
      "Final-third end product consistency",
      "Link-up play in tight spaces",
      "Pressing contributions",
    ],
    videoUrl: "https://www.youtube.com/embed/agG7LvxzrAw",
    clips: [
      {
        id: "c1",
        timestamp: "06:22",
        title: "Transition run, beating fullback",
        observation:
          "Receives in space after a turnover, accelerates past the fullback with a sharp cut inside and plays a low cutback. The speed of transition is exceptional.",
      },
    ],
  },
  {
    id: "jan-kopecky",
    name: "Jan Kopecký",
    position: "Defensive Midfielder",
    age: 26,
    club: "FC Mladá",
    foot: "Right",
    height: "1.85m",
    nationality: "Czech",
    imageUrl:
      "https://images.unsplash.com/photo-1504577949977-9d4e1fe9adf9?w=400&h=400&fit=crop",
    attributes: {
      technical: 8.5,
      positioning: 7.0,
      decisions: 7.8,
      physical: 8.8,
      defending: 5.5,
    },
    description:
      "Jan Kopecký is a disciplined and well-structured defensive midfielder who offers excellent protection for his back four. His anticipation and positioning in the press allow him to win back possession efficiently. Competent in possession with short-range distribution.",
    strengths: [
      "Defensive positioning and cover",
      "Interception timing",
      "Pressing efficiency",
      "Short distribution and recycling",
      "Aerial presence in midfield battles",
    ],
    improvements: [
      "Progressive passing range",
      "Ball progression under pressure",
      "Driving carries from deep",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    clips: [
      {
        id: "c1",
        timestamp: "14:50",
        title: "Interception in press trigger",
        observation:
          "Recognises the press trigger from the forward's body shape and steps forward to intercept the pass. Clean recovery and immediate distribution to restart attack.",
      },
    ],
  },
  {
    id: "sofia-mäkinen",
    name: "Sofia Mäkinen",
    position: "Attacking Midfielder",
    age: 20,
    club: "HJK Helsinki W",
    foot: "Right",
    height: "1.68m",
    nationality: "Finnish",
    imageUrl:
      "https://images.unsplash.com/photo-1528460033278-a6ba57020470?w=400&h=400&fit=crop",
    attributes: {
      technical: 6.8,
      positioning: 8.5,
      decisions: 8.0,
      physical: 7.5,
      defending: 8.8,
    },
    description:
      "Sofia Mäkinen is a creative and technically refined attacking midfielder who thrives in the half-spaces. Her ability to combine quickly and find pockets of space behind the opposition midfield makes her a consistent threat in the final third. Strong defensive contribution for an attacking player.",
    strengths: [
      "Half-space movement and positioning",
      "First-time passing combinations",
      "Press-resistance in tight areas",
      "Through-ball quality",
      "Defensive pressing work rate",
    ],
    improvements: [
      "Direct goal threat",
      "Physicality in duels",
      "Left-foot variety",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    clips: [
      {
        id: "c1",
        timestamp: "19:30",
        title: "Half-space combination, third-man run",
        observation:
          "Receives between the lines, plays a quick one-two with the forward and arrives in the box on the far side of the defence. The movement off the ball is intelligent and deliberate.",
      },
    ],
  },
];

export const analyses: Analysis[] = [
  {
    id: "elroy-pressing",
    playerId: "marcus-elroy",
    playerName: "Marcus Elroy",
    position: "Central Midfielder",
    title: "Press-Resistance & Progressive Carrying",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1508098682722-e99c643e7f0c?w=800&h=450&fit=crop",
    date: "2024-03-10",
    duration: "12 min",
    tags: ["Build-up", "Carrying", "Pressing"],
    summary:
      "A detailed breakdown of how Elroy handles pressure in the middle third and drives progress through the lines.",
  },
  {
    id: "santos-overlap",
    playerId: "rafael-santos",
    playerName: "Rafael Santos",
    position: "Left Back",
    title: "Attacking Fullback Movement Patterns",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1551280857-2b9bbe52acf4?w=800&h=450&fit=crop",
    date: "2024-02-28",
    duration: "9 min",
    tags: ["Overlaps", "Crossing", "Width"],
    summary:
      "Santos's overlap and underlap runs are analysed across four matches to map his contribution to the left flank.",
  },
  {
    id: "varga-holdUp",
    playerId: "Mateo-Diez",
    playerName: "Mateo Diez",
    position: "Centre Forward",
    title: "Linking Play as a Reference Point",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=450&fit=crop",
    date: "2024-02-14",
    duration: "10 min",
    tags: ["Hold-up", "Link play", "Aerial"],
    summary:
      "How Diez operates as a pivot for his team's attacking phases when facing direct opposition.",
  },
  {
    id: "diallo-transition",
    playerId: "franco-inzua",
    playerName: "Franco Inzua",
    position: "Right Winger",
    title: "Transition Exploitation & 1v1 Profile",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=450&fit=crop",
    date: "2024-01-30",
    duration: "8 min",
    tags: ["Transitions", "Dribbling", "1v1"],
    summary:
      "Inzua's effectiveness in counter-attacking moments is charted with a focus on speed of decision and execution.",
  },
  {
    id: "kopecky-defensive",
    playerId: "jan-kopecky",
    playerName: "Jan Kopecký",
    position: "Defensive Midfielder",
    title: "Defensive Compactness & Press Triggers",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1517931524326-bdd55a541177?w=800&h=450&fit=crop",
    date: "2024-01-15",
    duration: "11 min",
    tags: ["Pressing", "Interceptions", "Shape"],
    summary:
      "Analysis of Kopecký's defensive work rate, positioning, and role in the team's out-of-possession structure.",
  },
  {
    id: "makinen-halfspace",
    playerId: "sofia-mäkinen",
    playerName: "Sofia Mäkinen",
    position: "Attacking Midfielder",
    title: "Half-Space Intelligence & Combination Play",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=450&fit=crop",
    date: "2023-12-20",
    duration: "13 min",
    tags: ["Half-space", "Combinations", "Creativity"],
    summary:
      "A study of Mäkinen's positioning in the half-spaces and how she creates opportunity through movement and timing.",
  },
];
