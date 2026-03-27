import { motion } from 'framer-motion';
import HealthScoreRing from './HealthScoreRing';
import { AlertTriangle, Leaf, Sparkles } from 'lucide-react';

const RISK_COLORS = [
  'bg-rose-100 text-rose-700 border border-rose-200',
  'bg-amber-100 text-amber-700 border border-amber-200',
  'bg-orange-100 text-orange-700 border border-orange-200',
];

export default function ResultCard({ data }) {
  const { productName, ingredients = [], healthScore = 0, risks = [], recommendation = '' } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      {/* Header: Product name + score */}
      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-sky-200/50 shadow-sm">
        <HealthScoreRing score={healthScore} />
        <div className="flex-1 text-center sm:text-left">
          <p className="text-xs font-semibold text-sky-500 uppercase tracking-widest mb-1">Analyzed Product</p>
          <h2
            className="text-2xl font-extrabold text-sky-950 mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {productName}
          </h2>
          <p className="text-sm text-sky-700/60">
            {ingredients.length} ingredient{ingredients.length !== 1 ? 's' : ''} detected · {risks.length} risk factor{risks.length !== 1 ? 's' : ''} identified
          </p>
        </div>
      </div>

      {/* Ingredients */}
      <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-sky-200/50 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center">
            <Leaf className="w-4 h-4 text-emerald-600" />
          </div>
          <h3 className="font-bold text-sky-950" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Ingredients</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {ingredients.map((ing, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04 }}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-sky-100/80 text-sky-800 border border-sky-200/60"
            >
              {ing}
            </motion.span>
          ))}
          {ingredients.length === 0 && (
            <p className="text-sm text-sky-700/50">No ingredients detected.</p>
          )}
        </div>
      </div>

      {/* Risks */}
      {risks.length > 0 && (
        <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-rose-200/40 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-xl bg-rose-100 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <h3 className="font-bold text-sky-950" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Risk Factors</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {risks.map((risk, i) => (
              <span
                key={i}
                className={`px-3 py-1.5 rounded-full text-xs font-medium ${RISK_COLORS[i % RISK_COLORS.length]}`}
              >
                ⚠️ {risk}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Recommendation */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200/60 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-xl bg-sky-200 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-sky-600" />
          </div>
          <h3 className="font-bold text-sky-950" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>AI Recommendation</h3>
        </div>
        <p className="text-sm text-sky-900/75 leading-relaxed">{recommendation}</p>
      </div>
    </motion.div>
  );
}
