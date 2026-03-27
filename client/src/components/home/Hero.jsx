import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Star, ChevronDown, Search, BarChart3, MessageSquareText } from 'lucide-react';
import { Link } from 'react-router-dom';

const floatingCards = [
  {
    icon: '🔍',
    label: 'Ingredients',
    value: 'Extracting...',
    status: 'AI Vision',
    color: 'from-sky-400/20 to-blue-300/10',
    border: 'border-sky-200/60',
    delay: 0,
  },
  {
    icon: '📊',
    label: 'Health Impact',
    value: 'Score: 84',
    status: 'Personalized',
    color: 'from-emerald-400/20 to-teal-300/10',
    border: 'border-emerald-200/60',
    delay: 0.15,
  },
  {
    icon: '💬',
    label: 'AI Chat',
    value: 'Active',
    status: 'Ask anything',
    color: 'from-violet-400/20 to-purple-300/10',
    border: 'border-violet-200/60',
    delay: 0.3,
  },
];

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #e8f4fd 0%, #cce8f8 40%, #d4f0ff 100%)' }}>
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-sky-300/30 to-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-300/25 to-sky-400/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-200/20 to-indigo-200/15 blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #1a6eb5 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-8">
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-sky-700 bg-white/70 border border-sky-200/80 shadow-sm backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 text-sky-500" />
                Next-Gen Product Analysis
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} className="space-y-4">
              <h1
                className="text-5xl lg:text-6xl font-extrabold leading-tight text-sky-950"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Know What You Consume,{' '}
                <span className="text-gradient">Choose Smarter</span>
              </h1>
              <p className="text-lg text-sky-800/65 leading-relaxed max-w-lg">
                Scan any product to extract ingredients, evaluate health impact, 
                and get personalized AI recommendations instantly.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/analyze"
                className="group inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl shadow-lg shadow-sky-400/30 hover:shadow-sky-400/50 hover:scale-[1.03] transition-all"
              >
                Start Analyzing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sky-700 bg-white/70 border border-sky-200/70 rounded-2xl backdrop-blur-sm hover:bg-white/90 hover:shadow-md transition-all"
              >
                See How It Works
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp} className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-sm text-sky-700/70">
                <Shield className="w-4 h-4 text-sky-500" />
                Privacy Protected
              </div>
              <div className="flex items-center gap-2 text-sm text-sky-700/70">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                98% Analysis Accuracy
              </div>
              <div className="text-sm text-sky-700/70 font-medium">
                10k+ Products Scanned
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Floating Cards */}
          <div className="hidden lg:flex flex-col items-center gap-5">
            {/* Main analysis card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="w-full max-w-sm p-6 rounded-3xl bg-white/75 backdrop-blur-md border border-sky-200/55 shadow-xl shadow-sky-200/50"
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs font-medium text-sky-500 uppercase tracking-wide">AI Analyzer</p>
                  <p className="text-lg font-bold text-sky-950 mt-0.5">Scanning Complete ✅</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-sm">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Vitals bar */}
              <div className="space-y-3">
                {[
                  { label: 'Label Extraction', value: '100%', pct: 100, color: 'bg-emerald-400' },
                  { label: 'Ingredient Check', value: '3 Risks', pct: 60, color: 'bg-amber-400' },
                  { label: 'Health Score', value: '84/100', pct: 84, color: 'bg-sky-500' },
                ].map((v) => (
                  <div key={v.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-sky-800/60 font-medium">{v.label}</span>
                      <span className="text-sky-900 font-semibold">{v.value}</span>
                    </div>
                    <div className="h-1.5 bg-sky-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${v.pct}%` }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                        className={`h-full ${v.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Small floating cards */}
            <div className="w-full max-w-sm grid grid-cols-3 gap-3">
              {floatingCards.map((card) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + card.delay, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className={`p-3 rounded-2xl bg-gradient-to-br ${card.color} border ${card.border} backdrop-blur-sm shadow-sm cursor-default`}
                >
                  <div className="text-xl mb-2">{card.icon}</div>
                  <p className="text-xs text-sky-800/60 font-medium">{card.label}</p>
                  <p className="text-sm font-bold text-sky-900">{card.value}</p>
                  <span className="text-[10px] text-emerald-600 font-semibold">{card.status}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-sky-400/70"
        >
          <span className="text-xs font-medium">Explore</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
}
