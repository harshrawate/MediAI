import { motion } from 'framer-motion';
import { Scan, ClipboardList, BarChart3, AlertTriangle, Sparkles, MessageSquareText } from 'lucide-react';

const features = [
  {
    icon: Scan,
    title: 'AI Vision Scanning',
    description: 'Upload a clear photo of any product label. Our AI instantly identifies the product and its brand.',
    color: 'from-sky-400/20 to-blue-300/10',
    iconBg: 'from-sky-500 to-blue-600',
    border: 'border-sky-200/50',
    delay: 0,
  },
  {
    icon: ClipboardList,
    title: 'Ingredient Extraction',
    description: 'No more squinting at small text. We extract every ingredient, even the ones hidden in fine print.',
    color: 'from-emerald-400/20 to-teal-300/10',
    iconBg: 'from-emerald-500 to-teal-600',
    border: 'border-emerald-200/50',
    delay: 0.1,
  },
  {
    icon: BarChart3,
    title: 'Health Scoring',
    description: 'Get an objective 0-100 health score calculated from nutritional density and ingredient quality.',
    color: 'from-violet-400/20 to-purple-300/10',
    iconBg: 'from-violet-500 to-purple-600',
    border: 'border-violet-200/50',
    delay: 0.2,
  },
  {
    icon: AlertTriangle,
    title: 'Risk Detection',
    description: 'Instantly flag harmful additives, hidden sugars, or allergens that don\'t align with your health goals.',
    color: 'from-rose-400/20 to-pink-300/10',
    iconBg: 'from-rose-500 to-pink-600',
    border: 'border-rose-200/50',
    delay: 0.3,
  },
  {
    icon: Sparkles,
    title: 'AI Recommendations',
    description: 'Receive personalized suggestions for healthier alternatives based on what you just scanned.',
    color: 'from-amber-400/20 to-orange-300/10',
    iconBg: 'from-amber-500 to-orange-500',
    border: 'border-amber-200/50',
    delay: 0.4,
  },
  {
    icon: MessageSquareText,
    title: 'Interactive Chat',
    description: 'Have follow-up questions? Chat with our AI assistant to learn more about any ingredient or metric.',
    color: 'from-indigo-400/20 to-blue-300/10',
    iconBg: 'from-indigo-500 to-blue-600',
    border: 'border-indigo-200/50',
    delay: 0.5,
  },
];

const cardVariant = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section id="features" className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #e8f4fd 0%, #cce8f8 40%, #d4f0ff 100%)' }}>
      {/* bg blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-200/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold text-sky-600 bg-sky-100/80 rounded-full border border-sky-200/70">
            Powerful AI Analysis
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-sky-950 mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Smarter Insights,{' '}
            <span className="text-gradient">Better Health</span>
          </h2>
          <p className="text-sky-800/60 text-lg leading-relaxed">
            Our AI-powered engine breaks down complex labels into simple, 
            actionable health data in seconds.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                variants={cardVariant}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: feat.delay }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`relative group p-7 rounded-3xl bg-white/70 backdrop-blur-sm border ${feat.border} shadow-sm hover:shadow-lg hover:shadow-sky-200/40 transition-all duration-300 cursor-default`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feat.iconBg} flex items-center justify-center shadow-md mb-5`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="text-lg font-bold text-sky-950 mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {feat.title}
                </h3>
                <p className="text-sm text-sky-800/60 leading-relaxed">{feat.description}</p>

                {/* Subtle hover glint */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 70%)' }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
