interface RadarChartProps {
  attributes: {
    technical: number;
    positioning: number;
    decisions: number;
    physical: number;
    defending: number;
  };
  color?: string;
  size?: number;
}

const labels = [
  { key: "technical", label: "TEC" },
  { key: "positioning", label: "POS" },
  { key: "decisions", label: "DEC" },
  { key: "physical", label: "PHY" },
  { key: "defending", label: "DEF" },
];

export default function RadarChart({
  attributes,
  color = "#00E5A0",
  size = 120,
}: RadarChartProps) {
  const cx = size / 2;
  const cy = size / 2;
  const maxRadius = size * 0.36;
  const levels = 4;

  const angleStep = (2 * Math.PI) / labels.length;
  const startAngle = -Math.PI / 2;

  const getPoint = (index: number, radius: number) => {
    const angle = startAngle + index * angleStep;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  };

  // Grid polygons
  const gridPolygons = Array.from({ length: levels }, (_, i) => {
    const r = (maxRadius * (i + 1)) / levels;
    const points = labels
      .map((_, idx) => {
        const p = getPoint(idx, r);
        return `${p.x},${p.y}`;
      })
      .join(" ");
    return points;
  });

  // Data polygon
  const dataPoints = labels
    .map((item, idx) => {
      const value = attributes[item.key as keyof typeof attributes];
      const r = (value / 10) * maxRadius;
      const p = getPoint(idx, r);
      return `${p.x},${p.y}`;
    })
    .join(" ");

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Grid */}
      {gridPolygons.map((points, i) => (
        <polygon
          key={i}
          points={points}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.5"
        />
      ))}

      {/* Axis lines */}
      {labels.map((_, idx) => {
        const p = getPoint(idx, maxRadius);
        return (
          <line
            key={idx}
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.5"
          />
        );
      })}

      {/* Data area */}
      <polygon
        points={dataPoints}
        fill={color}
        fillOpacity="0.15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Data points */}
      {labels.map((item, idx) => {
        const value = attributes[item.key as keyof typeof attributes];
        const r = (value / 10) * maxRadius;
        const p = getPoint(idx, r);
        return <circle key={idx} cx={p.x} cy={p.y} r="2" fill={color} />;
      })}

      {/* Labels */}
      {labels.map((item, idx) => {
        const p = getPoint(idx, maxRadius + 10);
        return (
          <text
            key={idx}
            x={p.x}
            y={p.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="rgba(138,155,176,0.8)"
            fontSize="14"
            fontFamily="'Space Mono', monospace"
          >
            {item.label}
          </text>
        );
      })}
    </svg>
  );
}
