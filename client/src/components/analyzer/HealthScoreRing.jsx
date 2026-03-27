import { motion } from 'framer-motion';

const COLOR_MAP = {
  high:   { ring: '#22c55e', track: '#dcfce7', label: 'Excellent', text: 'text-emerald-600' },
  mid:    { ring: '#f59e0b', track: '#fef3c7', label: 'Moderate',  text: 'text-amber-500'  },
  low:    { ring: '#ef4444', track: '#fee2e2', label: 'Poor',      text: 'text-rose-500'   },
};

function getLevel(score) {
  if (score >= 70) return COLOR_MAP.high;
  if (score >= 40) return COLOR_MAP.mid;
  return COLOR_MAP.low;
}

export default function HealthScoreRing({ score = 0 }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(Math.max(score, 0), 100);
  const offset = circ - (pct / 100) * circ;
  const level = getLevel(pct);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
          {/* Track */}
          <circle cx="64" cy="64" r={r} fill="none" stroke={level.track} strokeWidth="12" />
          {/* Progress */}
          <motion.circle
            cx="64"
            cy="64"
            r={r}
            fill="none"
            stroke={level.ring}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        {/* Score label in center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className={`text-3xl font-extrabold ${level.text}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {pct}
          </motion.span>
          <span className="text-xs text-sky-700/50 font-medium">/100</span>
        </div>
      </div>
      <span className={`text-sm font-semibold ${level.text}`}>{level.label} Health Score</span>
    </div>
  );
}
